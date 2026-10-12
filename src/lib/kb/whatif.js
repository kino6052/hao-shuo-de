// "What if we drop these words?" (KB_PLAN.md K10). The reasoning is in
// kb/rules/whatif.lp; this file asks it and turns the answer into a report
// with the reason for every line, so the author can check any of it and
// decide. It never changes data.
//
//   removal(ctx, ids)  -> the report (a plain object, all text resolved to pinyin)
//   renderRemoval(r)   -> the report as text, for the CLI and the Claude tools
//
// ctx = { facts, source, rules }: buildFacts(source), the source, and the rule
// text to run (base + whatif).

import { solve, tables, sym } from './clingo.js';
import { replaceWordRefs, refTerm, wordRefIds } from '../word-refs.js';

const KINDS = ['lesson_example', 'lesson_answer', 'composite_example', 'story', 'phrase_book'];
const KIND_NAMES = { lesson_example: 'lesson examples', lesson_answer: 'lesson answers', composite_example: 'composite examples', story: 'story lines', phrase_book: 'phrase-book lines' };

// -> the pinyin of a form or sentence: {{word:id}} -> its term.
export const pinyinOf = (words) => (text) => replaceWordRefs(text, (id, kind) => refTerm(words[id]?.term ?? id, kind));

export async function removal(ctx, ids) {
  const { source, facts } = ctx;
  const words = source.words;
  for (const id of ids) if (!Object.hasOwn(words, id)) throw new Error(`no word "${id}"`);
  // the sentences and mentions of just these words: all of them would not fit in clingo
  const program = [ctx.rules, facts.program, facts.textProgram(ids), ...ids.map((id) => `drop(${sym(id)}).`)].join('\n');
  const result = await solve(program, { models: 1 });
  if (result.status !== 'SATISFIABLE') throw new Error(`the what-if has no answer (${result.status})`);
  const t = tables(result.models[0]);
  const rowsOf = (pred) => t[pred] ?? [];
  const pin = pinyinOf(words);
  const dropped = new Set(ids);
  const term = (id) => words[id]?.term ?? id;

  const byZh = new Map(source.composites.map((c) => [c.zh, c]));
  const formsOf = (c) => (c.hsd ? c.hsd.split(' / ') : []);
  const composite = (c) => ({ zh: c.zh, rank: c.rank, py: c.py, en: c.en, fit: c.fit });
  const sorted = (list) => list.sort((a, b) => a.rank - b.rank);

  // composites
  const redo = rowsOf('c_redo').map(([zh]) => {
    const c = byZh.get(zh);
    return {
      ...composite(c),
      forms: formsOf(c).map((f, i) => ({ n: i + 1, text: pin(f), hit: wordRefIds(f).filter((w) => dropped.has(w)).map(term) })),
    };
  });
  const losesBy = new Map();
  for (const [zh, n] of rowsOf('c_loses')) losesBy.set(zh, [...(losesBy.get(zh) ?? []), n]);
  const loses = [...losesBy].map(([zh, ns]) => {
    const c = byZh.get(zh);
    const forms = formsOf(c).map((f, i) => ({ n: i + 1, text: pin(f), lost: ns.includes(i + 1), hit: wordRefIds(f).filter((w) => dropped.has(w)).map(term) }));
    return { ...composite(c), forms };
  });
  const headLost = rowsOf('head_lost').map(([zh]) => composite(byZh.get(zh)));

  // the book
  const sentenceById = new Map(facts.sentences.map((s) => [s.id, s]));
  const hits = rowsOf('s_hit').map(([id]) => sentenceById.get(id)).filter(Boolean);
  const sentences = hits.map((s) => ({ id: s.id, kind: s.kind, lesson: s.lesson, module: s.module, composite: s.composite, pinyin: pin(s.pinyin), hanzi: s.hanzi, en: s.en }));
  const bookCounts = Object.fromEntries(KINDS.map((k) => [k, sentences.filter((s) => s.kind === k).length]));
  const cards = [
    ...rowsOf('card_gone').map(([word, lesson, module]) => ({ word, lesson, module })),
    ...rowsOf('card_sense_gone').map(([word, sense, lesson, module]) => ({ word, sense, lesson, module })),
  ];
  const mentions = rowsOf('m_hit').map(([word, lesson, module, kind, n]) => ({ word, lesson, module, kind, n }));

  // coverage
  const items = new Map();
  for (const g of source.coverage ?? []) for (const it of g.items) items.set(`${g.key}:${it.key}`, { id: `${g.key}:${it.key}`, group: g.key, eng: it.eng });
  const lost = rowsOf('item_lost').map(([id]) => items.get(id) ?? { id });
  const gone = rowsOf('item_carrier_gone');
  const touched = rowsOf('item_touched').map(([id]) => ({ ...(items.get(id) ?? { id }), carriers: gone.filter(([i]) => i === id).map(([, w]) => term(w)) }));

  // the rest of the dictionary
  const defs = new Map();
  for (const [v, w] of rowsOf('def_hit')) defs.set(v, [...(defs.get(v) ?? []), term(w)]);
  const definitions = [...defs].map(([word, names]) => ({ word, term: term(word), names }));
  const senses = rowsOf('sense_dead').map(([word, sense]) => ({ word, term: term(word), sense, hanzi: words[word].senses?.[sense]?.hanzi }));
  const relations = [
    ...rowsOf('rel_pair_hit').map(([kind, a, b]) => ({ kind, what: 'pair', a, b, text: `${term(a)} — ${term(b)}` })),
    ...rowsOf('rel_phrase_hit').map(([kind, word, n]) => ({ kind, what: 'phrase', word, n, text: `${term(word)}: ${(source.maps?.[`${kind}s`]?.phrases?.[word]?.[n - 1] ?? '')}` })),
  ].map((r) => ({ ...r, text: pin(r.text) }));

  return {
    words: ids.map((id) => ({ id, term: term(id), hanzi: words[id].hanzi, pos: words[id].pos?.eng, necessity: words[id].necessity?.index })),
    composites: { redo: sorted(redo), loses: sorted(loses), headLost: sorted(headLost) },
    book: { sentences, counts: bookCounts, cards, mentions },
    coverage: { lost, touched },
    definitions,
    senses,
    relations,
    counts: {
      redo: redo.length,
      loses: loses.length,
      headLost: headLost.length,
      sentences: sentences.length,
      cards: cards.length,
      mentions: mentions.reduce((a, m) => a + m.n, 0),
      lost: lost.length,
      touched: touched.length,
      definitions: definitions.length,
      senses: senses.length,
      relations: relations.length,
    },
    status: result.status,
  };
}

// -- as text ---------------------------------------------------------------------------------

const where = (s) => (s.module ? `${s.lesson}/${s.module}` : s.lesson);

export function renderRemoval(r, { limit = 12 } = {}) {
  const out = [];
  const head = r.words.map((w) => `${w.term} ${w.hanzi} (${w.id}, ${w.pos}, necessity ${w.necessity})`).join('; ');
  out.push(`Remove: ${head}`);
  const more = (n, shown) => (n > shown ? `  … and ${n - shown} more` : null);
  const section = (title, rows, line) => {
    out.push('', `${title} (${rows.length})`);
    if (!rows.length) out.push('  none');
    for (const x of rows.slice(0, limit)) out.push(`  ${line(x)}`);
    const m = more(rows.length, limit);
    if (m) out.push(m);
  };
  const c = (x) => `${x.zh} ${x.py} #${x.rank} "${x.en}"`;
  const formLine = (f) => `form ${f.n} ${f.text}${f.hit?.length ? ` (uses ${f.hit.join(', ')})` : ''}`;

  section('Composites left with no form: redo', r.composites.redo, (x) => `${c(x)} — ${x.forms.map(formLine).join('; ')}`);
  section('Composites that lose a form but keep another', r.composites.loses, (x) => `${c(x)} — loses ${x.forms.filter((f) => f.lost).map((f) => f.n).join(', ')} of ${x.forms.length}`);
  section('Composites that lose their head word', r.composites.headLost, c);

  const total = r.book.sentences.length;
  out.push('', `Book to rewrite: ${total} sentence(s)`);
  out.push(`  ${KINDS.map((k) => `${KIND_NAMES[k]} ${r.book.counts[k]}`).join(', ')}`);
  for (const s of r.book.sentences.filter((s) => s.kind !== 'composite_example').slice(0, limit)) out.push(`  ${where(s)}: ${s.pinyin}${s.en ? `  (${s.en})` : ''}`);
  const rest = r.book.sentences.filter((s) => s.kind !== 'composite_example').length - limit;
  if (rest > 0) out.push(`  … and ${rest} more`);
  out.push(`  Word cards: ${r.book.cards.length ? r.book.cards.map((k) => `${k.word}${k.sense ? `#${k.sense}` : ''} in ${where(k)}`).join('; ') : 'none'}`);
  const byKind = new Map();
  for (const m of r.book.mentions) byKind.set(m.kind, (byKind.get(m.kind) ?? 0) + m.n);
  out.push(`  Other mentions (prose, info, exercises, FAQ): ${byKind.size ? [...byKind].map(([k, n]) => `${k} ${n}`).join(', ') : 'none'}`);

  out.push('', `Coverage: ${r.coverage.lost.length} item(s) lost, ${r.coverage.touched.length} touched`);
  for (const i of r.coverage.lost) out.push(`  LOST ${i.id} ${i.eng ?? ''}: no way left to say it`);
  for (const i of r.coverage.touched) out.push(`  touched ${i.id} ${i.eng ?? ''}: loses ${i.carriers.join(', ')}, can still be said`);

  section('Other words whose text names it', r.definitions, (d) => `${d.term} (${d.word}) names ${d.names.join(', ')}`);
  section('Catch-all senses left with no compound', r.senses, (s) => `${s.term} ${s.hanzi} (${s.sense})`);
  section('Opposites and synonyms that break', r.relations, (x) => `${x.kind} ${x.what}: ${x.text}`);
  return out.join('\n');
}
