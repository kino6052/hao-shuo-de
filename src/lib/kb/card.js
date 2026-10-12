// Looking a word up: find it by any name, and gather everything the KB knows
// about it (KB_PLAN.md phase 1, "a word card: facts and relations"). Pure
// lookups over the source and the facts; every part of the card says where
// it comes from, and `facts` lists the raw fact lines so the author can see
// the reason behind each line.

import { toneless, wordRefIds } from '../word-refs.js';
import { formSlots, factsAbout, wordsOfText, posClasses } from './facts.js';
import { pinyinOf } from './whatif.js';
import { parseAtom } from './clingo.js';

const norm = (s) => String(s).normalize('NFC').toLowerCase().trim();

// -> the ids of the words a name could mean: an id (hao3), a term with or
// without tone marks (hǎo, hao), or a hanzi (a sense's hanzi counts).
export function findWords(words, query) {
  const q = norm(query);
  if (Object.hasOwn(words, q)) return [q];
  const hits = new Set();
  for (const [id, w] of Object.entries(words)) {
    if (norm(w.term) === q) hits.add(id);
    if (w.hanzi === query.trim()) hits.add(id);
    for (const s of Object.values(w.senses ?? {})) if (s.hanzi === query.trim()) hits.add(id);
  }
  if (hits.size) return [...hits];
  for (const [id, w] of Object.entries(words)) if (toneless(norm(w.term)) === toneless(q)) hits.add(id);
  return [...hits];
}

// -> the one id a name means; throws with the candidates when it is none or several.
export function resolveWord(words, query) {
  const ids = findWords(words, query);
  if (ids.length === 1) return ids[0];
  if (!ids.length) throw new Error(`no word "${query}" (try its id like hao3, its pinyin, or its hanzi)`);
  throw new Error(`"${query}" could be: ${ids.map((id) => `${words[id].term} ${words[id].hanzi} (${id})`).join(', ')}`);
}

// -> indexes the cards share, built once per source.
export function buildIndex(source, facts) {
  const words = source.words;
  const byZh = new Map(source.composites.map((c) => [c.zh, c]));
  const compositesByWord = new Map();
  const note = (id, c, n) => {
    if (!compositesByWord.has(id)) compositesByWord.set(id, new Map());
    const m = compositesByWord.get(id);
    m.set(c.zh, [...(m.get(c.zh) ?? []), n]);
  };
  for (const c of source.composites) {
    (c.hsd ? c.hsd.split(' / ') : []).forEach((form, i) => {
      for (const s of formSlots(form, words)) if (s.kind === 'word') note(s.id, c, i + 1);
    });
  }
  const sentencesByWord = new Map();
  for (const s of facts.sentences) {
    for (const id of new Set(wordsOfText(s.pinyin))) {
      if (!sentencesByWord.has(id)) sentencesByWord.set(id, []);
      sentencesByWord.get(id).push(s);
    }
  }
  const namedBy = new Map();
  for (const [v, w] of Object.entries(words)) {
    const text = [w.definition?.eng, w.necessity?.eng, ...Object.values(w.senses ?? {}).map((s) => `${s.eng} ${s.why?.eng}`)].join(' ');
    for (const id of new Set(wordRefIds(text))) if (id !== v) namedBy.set(id, [...(namedBy.get(id) ?? []), v]);
  }
  const headsOf = new Map();
  for (const c of source.composites) {
    const h = facts.heads.get(c.zh);
    if (h?.kind === 'word') headsOf.set(h.id, [...(headsOf.get(h.id) ?? []), c]);
  }
  const categoryPath = new Map();
  const walk = (c, path) => {
    const here = [...path, c.title?.eng ?? c.key];
    for (const id of c.wordIds ?? []) categoryPath.set(id, here);
    (c.children ?? []).forEach((ch) => walk(ch, here));
  };
  (source.categories ?? []).forEach((c) => walk(c, []));
  const items = [];
  for (const g of source.coverage ?? []) for (const it of g.items) items.push({ id: `${g.key}:${it.key}`, group: g.key, ...it });
  return { byZh, compositesByWord, headsOf, sentencesByWord, namedBy, categoryPath, items };
}

export function wordCard({ source, facts, index }, id, { limit = 15 } = {}) {
  const words = source.words;
  const w = words[id];
  const pin = pinyinOf(words);
  const term = (x) => words[x]?.term ?? x;
  const ref = (x) => ({ id: x, term: term(x), hanzi: words[x]?.hanzi });

  // composites that use it, or hang under it
  const uses = index.compositesByWord.get(id) ?? new Map();
  const usedBy = [...uses].map(([zh, forms]) => ({ ...index.byZh.get(zh), usedInForms: forms })).sort((a, b) => a.rank - b.rank);
  const headOf = [...(index.headsOf.get(id) ?? [])].sort((a, b) => a.rank - b.rank);
  const compositeRow = (c) => ({ zh: c.zh, rank: c.rank, py: c.py, en: c.en, fit: c.fit, forms: c.hsd ? c.hsd.split(' / ').map(pin) : [], usedInForms: c.usedInForms });
  // the Chinese words that are this word on its own (a composite entry whose hanzi is the word's)
  const own = source.composites.filter((c) => c.zh === w.hanzi || Object.values(w.senses ?? {}).some((s) => s.hanzi === c.zh));

  const sentences = index.sentencesByWord.get(id) ?? [];
  const byKind = {};
  for (const s of sentences) byKind[s.kind] = (byKind[s.kind] ?? 0) + 1;

  const rel = (kind) => {
    const r = source.maps?.[`${kind}s`] ?? { pairs: [], phrases: {} };
    return {
      words: r.pairs.filter((p) => p.includes(id)).map(([a, b]) => ref(a === id ? b : a)),
      phrases: (r.phrases[id] ?? []).map(pin),
    };
  };

  // where the word is taught: its card, and a card per catch-all sense
  const taught = facts.lines
    .filter((l) => l.startsWith(`card(${id},`) || l.startsWith(`card_sense(${id},`))
    .map((l) => parseAtom(l.slice(0, -1)))
    .map((a) => (a.pred === 'card' ? { lesson: a.args[1], module: a.args[2] } : { sense: a.args[1], lesson: a.args[2], module: a.args[3] }));

  return {
    id,
    term: w.term,
    hanzi: w.hanzi,
    pos: w.pos?.eng,
    classes: posClasses(w.pos?.eng),
    definition: { eng: pin(w.definition?.eng ?? ''), rus: pin(w.definition?.rus ?? '') },
    necessity: { index: w.necessity?.index, eng: pin(w.necessity?.eng ?? '') },
    // how the word is said with other words, or why it cannot be (kb atoms has the sort it comes to)
    paraphrase: w.paraphrase ? { verdict: w.paraphrase.verdict, forms: w.paraphrase.forms.map(pin), note: w.paraphrase.note ?? null } : null,
    atom: w.atom ? { eng: w.atom.eng, rus: w.atom.rus } : null,
    category: index.categoryPath.get(id) ?? [],
    senses: Object.entries(w.senses ?? {}).map(([key, s]) => ({
      key,
      hanzi: s.hanzi,
      eng: s.eng,
      alone: Boolean(s.alone),
      compounds: s.compounds.map((c) => c.split(' ').map(term).join('-')),
      why: pin(s.why?.eng ?? ''),
    })),
    taught,
    antonyms: rel('antonym'),
    synonyms: rel('synonym'),
    coverage: index.items
      .filter((it) => it.words.includes(id))
      .map((it) => ({ id: it.id, eng: it.eng, taught: it.taught ?? it.lesson, others: it.words.filter((x) => x !== id).map(term), forms: it.forms.map(pin) })),
    composites: {
      usedBy: usedBy.length,
      headOf: headOf.length,
      own: own.map(compositeRow),
      first: usedBy.slice(0, limit).map(compositeRow),
      hangingUnder: headOf.slice(0, limit).map(compositeRow),
    },
    sentences: { total: sentences.length, byKind, sample: sentences.slice(0, 6).map((s) => ({ kind: s.kind, where: s.module ? `${s.lesson}/${s.module}` : (s.lesson ?? s.composite), pinyin: pin(s.pinyin), en: s.en })) },
    namedBy: (index.namedBy.get(id) ?? []).map(ref),
    facts: factsAbout(facts.lines, id).slice(0, 80),
  };
}

// -- as text ---------------------------------------------------------------------------------

export function renderCard(c) {
  const out = [];
  out.push(`${c.term} ${c.hanzi}  (${c.id}; ${c.pos}; necessity ${c.necessity.index})`);
  out.push(`  ${c.definition.eng}`);
  out.push(`  Why the core needs it: ${c.necessity.eng}`);
  if (c.atom) out.push(`  Atom: ${c.atom.eng}`);
  if (c.paraphrase) out.push(`  Paraphrase (${c.paraphrase.verdict}): ${c.paraphrase.forms.join(' / ')}${c.paraphrase.note ? ` — ${c.paraphrase.note}` : ''}`);
  if (c.category.length) out.push(`  Category: ${c.category.join(' › ')}`);
  for (const s of c.senses) out.push(`  Sense ${s.key}: ${s.hanzi} ${s.eng}${s.alone ? ' (also on its own)' : ''} — in ${s.compounds.join(', ')}`);
  out.push(`  Taught: ${c.taught.length ? c.taught.map((t) => `${t.sense ? `${t.sense}: ` : ''}${t.lesson}/${t.module}`).join('; ') : 'no card'}`);
  const rel = (name, r) => (r.words.length || r.phrases.length) && out.push(`  ${name}: ${[...r.words.map((x) => `${x.term} ${x.hanzi}`), ...r.phrases].join(', ')}`);
  rel('Opposite', c.antonyms);
  rel('Same as', c.synonyms);
  for (const it of c.coverage) out.push(`  Carries ${it.id} "${it.eng}"${it.others.length ? ` (with ${it.others.join(', ')})` : ''}; forms: ${it.forms.join(' | ')}`);
  out.push(`  Composites: used in ${c.composites.usedBy}, heads ${c.composites.headOf}${c.composites.own.length ? `; its own entry: ${c.composites.own.map((x) => `${x.zh} ${x.en}`).join(', ')}` : ''}`);
  for (const x of c.composites.first) out.push(`    #${x.rank} ${x.zh} "${x.en}": ${x.forms.join(' / ')}`);
  const kinds = Object.entries(c.sentences.byKind).map(([k, n]) => `${k} ${n}`).join(', ');
  out.push(`  Sentences: ${c.sentences.total}${kinds ? ` (${kinds})` : ''}`);
  for (const s of c.sentences.sample) out.push(`    ${s.pinyin}${s.en ? `  (${s.en})` : ''}`);
  if (c.namedBy.length) out.push(`  Named in the text of: ${c.namedBy.map((x) => x.term).join(', ')}`);
  return out.join('\n');
}
