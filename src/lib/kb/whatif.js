// "What if we drop these words?" (KB_PLAN.md K10). The reasoning is in
// kb/rules/whatif.lp; this file asks it and turns the answer into a report
// with the reason for every line, so the author can check any of it and
// decide. It never changes data.
//
//   removal(ctx, ids)  -> the report (a plain object, all text resolved to pinyin); `patterns` are the
//                         grammar patterns whose rules, template or examples name the words; `paraphrases` the words
//                         with a paraphrase form that names them, `atoms` the words that rested on a dropped atom
//                         or are said in more steps (rests-on.js, K24)
//   renderRemoval(r)   -> the report as text, for the CLI and the Claude tools
//
// ctx = { facts, source, rules }: buildFacts(source), the source, and the rule
// text to run (base + whatif). The program holds only the facts those rules read (programFor in facts.js), so it
// stays under clingo-wasm's 1 MB however many composites there are.

import { solve, tables, sym } from './clingo.js';
import { programFor } from './facts.js';
import { replaceWordRefs, refTerm, wordRefIds } from '../word-refs.js';
import { patternsCarrying, renderPatternUses } from './grammar-uses.js';
import { restsOnLoss, restsOnModel } from './rests-on.js';
import { LEAF_MIN } from '../tag-net.js';

const KINDS = ['lesson_example', 'lesson_answer', 'lesson_inline', 'composite_example', 'story', 'phrase_book', 'extra_inline'];
const KIND_NAMES = {
  lesson_example: 'lesson examples',
  lesson_answer: 'lesson answers',
  lesson_inline: 'sentences in lesson text',
  composite_example: 'composite examples',
  story: 'story lines',
  phrase_book: 'phrase-book lines',
  extra_inline: 'sentences in the other texts',
};

// -> the pinyin of a form or sentence: {{word:id}} -> its term.
export const pinyinOf = (words) => (text) => replaceWordRefs(text, (id, kind) => refTerm(words[id]?.term ?? id, kind));

export async function removal(ctx, ids) {
  const { source, facts } = ctx;
  const words = source.words;
  for (const id of ids) if (!Object.hasOwn(words, id)) throw new Error(`no word "${id}"`);
  // the sentences and mentions of just these words, and only the facts the rules read: all of them would not fit in clingo-wasm
  const program = [ctx.rules, programFor(ctx.rules, facts.program), programFor(ctx.rules, facts.textProgram(ids)), ...ids.map((id) => `drop(${sym(id)}).`)].join('\n');
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

  // the grammar: the patterns whose rules, template or examples name it
  const patterns = patternsCarrying(source.patterns ?? [], words, ids);

  // the paraphrases: forms that name a dropped word, and the words that rested on a dropped atom (K24)
  const loss = restsOnLoss(ctx.restsOn?.() ?? restsOnModel(source), restsOnModel(source, { dropped: ids }), ids);
  const paraphrases = loss.naming.map((x) => ({ word: x.id, term: term(x.id), forms: x.forms, left: x.left, clumsy: x.kind === 'clumsy' }));
  const loseAtom = loss.lose.map((x) => ({ word: x.id, term: term(x.id), lost: x.lost.map(term), now: x.now ? x.now.map(term) : null }));
  const longer = loss.longer.map((x) => ({ word: x.id, term: term(x.id), from: x.from, to: x.to }));

  // the topic pages that lose entries (TAGS_PLAN.md E3): how many each holds now and after, flagged when one is left empty or short
  const pages = [];
  if (source.tags?.topics?.length) {
    const title = new Map(source.tags.topics.map((t) => [t.id, t.title.eng]));
    const held = new Map();
    for (const e of [...Object.values(words), ...(source.composites ?? [])]) for (const t of e.topics ?? []) held.set(t, (held.get(t) ?? 0) + 1);
    const losing = new Map();
    for (const id of ids) for (const t of words[id].topics ?? []) losing.set(t, [...(losing.get(t) ?? []), id]);
    for (const [page, gone] of losing) {
      const before = held.get(page) ?? 0;
      const after = before - gone.length;
      pages.push({ page, title: title.get(page) ?? page, before, after, words: gone.map(term), empty: after === 0, short: after > 0 && after < LEAF_MIN });
    }
    pages.sort((a, b) => a.after - b.after || a.page.localeCompare(b.page));
  }

  return {
    words: ids.map((id) => ({ id, term: term(id), hanzi: words[id].hanzi, pos: words[id].pos?.eng, necessity: words[id].necessity?.index })),
    composites: { redo: sorted(redo), loses: sorted(loses), headLost: sorted(headLost) },
    book: { sentences, counts: bookCounts, cards, mentions },
    coverage: { lost, touched },
    patterns,
    definitions,
    paraphrases,
    atoms: { loseAtom, longer },
    senses,
    relations,
    pages,
    counts: {
      redo: redo.length,
      loses: loses.length,
      headLost: headLost.length,
      sentences: sentences.length,
      cards: cards.length,
      mentions: mentions.reduce((a, m) => a + m.n, 0),
      lost: lost.length,
      touched: touched.length,
      patterns: patterns.length,
      definitions: definitions.length,
      paraphrases: paraphrases.length,
      loseAtom: loseAtom.length,
      longer: longer.length,
      senses: senses.length,
      relations: relations.length,
      pagesEmpty: pages.filter((p) => p.empty).length,
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

  if (r.mandarin) {
    section(`Mandarin lost: frequency words (top 6000) that could no longer be written, cost ${r.mandarin.cost}`, r.mandarin.words, (x) => `${x.zh} ${x.py} #${x.rank}${x.spelled ? ' (spelled compound)' : ''}`);
  }

  section('Grammar patterns that name it', r.patterns ?? [], (x) => renderPatternUses([x])[0]);
  section('Other words whose text names it', r.definitions, (d) => `${d.term} (${d.word}) names ${d.names.join(', ')}`);
  section('Paraphrases that name it: rewrite those forms', r.paraphrases ?? [], (p) => `${p.term} (${p.word}${p.clumsy ? ', clumsy' : ''}): form${p.forms.length === 1 ? '' : 's'} ${p.forms.join(', ')}${p.left ? ` (${p.left} other form${p.left === 1 ? '' : 's'} stay)` : ' (no other form)'}`);
  section('Words that rested on it as an atom', r.atoms?.loseAtom ?? [], (x) => `${x.term} (${x.word}) rested on ${x.lost.join(', ')}; ${x.now ? `now rests on ${x.now.join(', ')}` : 'no way left to say it'}`);
  section('Words said in more steps (a stand-in paraphrase fills in)', r.atoms?.longer ?? [], (x) => `${x.term} (${x.word}): ${x.from} step${x.from === 1 ? '' : 's'} → ${x.to}`);
  section('Catch-all senses left with no compound', r.senses, (s) => `${s.term} ${s.hanzi} (${s.sense})`);
  section('Opposites and synonyms that break', r.relations, (x) => `${x.kind} ${x.what}: ${x.text}`);
  section('Topic pages that lose entries (the entry count before -> after)', r.pages ?? [], (p) => `${p.title} (${p.page}): ${p.before} -> ${p.after}${p.empty ? ' EMPTY: merge the page or give it a word' : p.short ? ' (under the page minimum)' : ''} -- loses ${p.words.join(', ')}`);
  return out.join('\n');
}
