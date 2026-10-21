// Looking a word up: find it by any name, and gather everything the KB knows
// about it (KB_PLAN.md phase 1, "a word card: facts and relations"). Pure
// lookups over the source and the facts; every part of the card says where
// it comes from, and `facts` lists the raw fact lines so the author can see
// the reason behind each line.

import { toneless, wordRefIds } from '../word-refs.js';
import { formSlots, factsAbout, wordsOfText, posClasses } from './facts.js';
import { pinyinOf } from './whatif.js';
import { parseAtom } from './clingo.js';
import { renderRestsOn, restsOnWord } from './rests-on.js';
import { tagNet } from '../tag-net.js';

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
  // the tag nets (K31): every way up from a tag, top first, as titles
  const nets = { topics: tagNet(source.tags?.topics ?? []), kinds: tagNet(source.tags?.kinds ?? []) };
  const titles = { topics: new Map((source.tags?.topics ?? []).map((t) => [t.id, t.title?.eng ?? t.id])), kinds: new Map((source.tags?.kinds ?? []).map((t) => [t.id, t.title?.eng ?? t.id])) };
  const tagPaths = (net) => (ids) => (ids ?? []).filter((t) => nets[net].has(t)).map((t) => nets[net].paths(t).map((p) => [...p].reverse().map((x) => titles[net].get(x))));
  const topicPaths = tagPaths('topics');
  const kindPaths = tagPaths('kinds');
  const items = [];
  for (const g of source.coverage ?? []) for (const it of g.items) items.push({ id: `${g.key}:${it.key}`, group: g.key, ...it });
  return { byZh, compositesByWord, headsOf, sentencesByWord, namedBy, categoryPath, topicPaths, kindPaths, items };
}

// -> the composite a name means (its hanzi, or its pinyin with or without tones), or null; several at once is an error
export function findComposite(source, query) {
  const q = norm(query);
  const hits = source.composites.filter((c) => c.zh === String(query).trim() || norm(c.py) === q || toneless(norm(c.py)) === toneless(q));
  if (hits.length > 1) throw new Error(`"${query}" could be: ${hits.map((c) => `${c.zh} ${c.py}`).join(', ')}`);
  return hits[0] ?? null;
}

// The card of a composite: the Mandarin word, how Hao-shuo-de says it, and where it sits on the tag nets.
export function compositeCard({ source, facts, index }, c) {
  const words = source.words;
  const pin = pinyinOf(words);
  const forms = (c.hsd ? String(c.hsd).split(' / ') : []).map(pin);
  const head = facts.heads.get(c.zh);
  return {
    composite: true,
    zh: c.zh,
    py: c.py,
    en: c.en,
    ru: c.ru,
    pos: c.pos,
    rank: c.rank,
    fit: c.fit,
    literal: c.literal ?? null,
    forms,
    tts: c.tts ?? null,
    uses: [...new Set((c.hsd ? wordRefIds(c.hsd) : []).filter((id) => words[id]))].map((id) => ({ id, term: words[id].term, hanzi: words[id].hanzi })),
    head: head ? (head.kind === 'word' ? { word: head.id, term: words[head.id]?.term } : { composite: head.zh }) : null,
    tags: { topics: index.topicPaths(c.topics).flat(), kinds: index.kindPaths(c.isA).flat() },
    examples: (c.examples ?? []).length,
    proposed: Boolean(c.proposed),
  };
}

export function wordCard({ source, facts, index, meaning, restsOn }, id, { limit = 15 } = {}) {
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

  const rests = restsOn ? restsOnWord(restsOn(), id) : null;

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

  // the links the author states between this word and others (maps/connections.ts)
  const connections = (source.maps?.connections ?? [])
    .filter((c) => c.words.includes(id))
    .map((c) => ({ with: c.words.filter((x) => x !== id).map(ref), why: c.why, proposed: Boolean(c.proposed) }));

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
    // the classes it lists besides its part of speech (K6)
    extraClasses: Object.entries(w.classes ?? {})
      .filter(([, c]) => c !== 'main')
      .map(([cls, c]) => ({ cls, why: pin(c.why?.eng ?? ''), example: c.example ?? '', proposed: Boolean(c.proposed) })),
    definition: { eng: pin(w.definition?.eng ?? ''), rus: pin(w.definition?.rus ?? '') },
    necessity: { index: w.necessity?.index, eng: pin(w.necessity?.eng ?? '') },
    // how the word is said with other words, or why it cannot be (kb atoms has the sort it comes to)
    paraphrase: w.paraphrase ? { verdict: w.paraphrase.verdict, forms: w.paraphrase.forms.map(pin), note: w.paraphrase.note ?? null } : null,
    atom: w.atom ? { eng: w.atom.eng, rus: w.atom.rus } : null,
    // a word that has a paraphrase could in principle go; nothing is removed by saying so (fine: it can be said; clumsy: only if the clumsy way is accepted)
    removable: w.paraphrase ? (w.paraphrase.verdict === 'clumsy' ? 'clumsy' : 'fine') : null,
    category: index.categoryPath.get(id) ?? [],
    // where it sits on the two tag nets: a list of ways up, each from the top tag down to the tag it has
    tags: { topics: index.topicPaths(w.topics).flat(), kinds: index.kindPaths(w.isA).flat() },
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
    connections,
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
    // the atoms its paraphrase and its description come down to (K24, rests-on.js); `lines` is the same as text
    rests: rests && { ...rests, lines: renderRestsOn(rests, term) },
    // what its description reaches of the primes (K19, meaning.js)
    meaning: meaning ? (({ depth, direct, names }) => ({ depth, direct, names: names.length }))(meaning().lines[id]) : null,
    facts: factsAbout(facts.lines, id).slice(0, 80),
  };
}

// -- as text ---------------------------------------------------------------------------------

export function renderCard(c) {
  if (c.composite) return renderCompositeCard(c);
  const out = [];
  out.push(`${c.term} ${c.hanzi}  (${c.id}; ${c.pos}; necessity ${c.necessity.index})`);
  out.push(`  ${c.definition.eng}`);
  out.push(`  Why the core needs it: ${c.necessity.eng}`);
  for (const x of c.extraClasses) out.push(`  Also ${x.cls.replace(/_/g, ' ')}${x.proposed ? ' (proposed, waiting for the author)' : ''}: ${x.why}  e.g. ${x.example}`);
  if (c.atom) out.push(`  Atom: ${c.atom.eng}`);
  if (c.paraphrase) out.push(`  Paraphrase (${c.paraphrase.verdict}): ${c.paraphrase.forms.join(' / ')}${c.paraphrase.note ? ` — ${c.paraphrase.note}` : ''}`);
  if (c.removable) out.push(c.removable === 'fine' ? '  Potentially removable: its paraphrase is fine.' : '  Potentially removable: only if its clumsy paraphrase is accepted.');
  for (const l of c.rests?.lines ?? []) out.push(`  ${l}`);
  if (c.category.length && !c.tags?.topics.length) out.push(`  Category: ${c.category.join(' › ')}`);
  for (const [label, paths] of [['Topic', c.tags?.topics], ['Is a', c.tags?.kinds]]) for (const p of paths ?? []) out.push(`  ${label}: ${p.join(' › ')}`);
  for (const s of c.senses) out.push(`  Sense ${s.key}: ${s.hanzi} ${s.eng}${s.alone ? ' (also on its own)' : ''} — in ${s.compounds.join(', ')}`);
  out.push(`  Taught: ${c.taught.length ? c.taught.map((t) => `${t.sense ? `${t.sense}: ` : ''}${t.lesson}/${t.module}`).join('; ') : 'no card'}`);
  const rel = (name, r) => (r.words.length || r.phrases.length) && out.push(`  ${name}: ${[...r.words.map((x) => `${x.term} ${x.hanzi}`), ...r.phrases].join(', ')}`);
  rel('Opposite', c.antonyms);
  rel('Same as', c.synonyms);
  for (const x of c.connections) out.push(`  Connected${x.proposed ? ' (proposed, waiting for the author)' : ''} to ${x.with.map((y) => `${y.term} ${y.hanzi}`).join(', ')}: ${x.why}`);
  if (c.meaning) {
    const m = c.meaning;
    const step = `${m.depth} step${m.depth === 1 ? '' : 's'}`;
    const text = m.depth === undefined ? `no way down to a prime (${m.names ? `it names ${m.names} word${m.names === 1 ? '' : 's'}, none leading to one` : 'it names no other word'})` : m.depth === 0 ? 'it says a prime itself' : `the nearest prime is ${step} away${m.direct.length ? `; it names ${m.direct.join(', ')}` : ''}`;
    out.push(`  Made of primes: ${text}`);
  }
  for (const it of c.coverage) out.push(`  Carries ${it.id} "${it.eng}"${it.others.length ? ` (with ${it.others.join(', ')})` : ''}; forms: ${it.forms.join(' | ')}`);
  out.push(`  Composites: used in ${c.composites.usedBy}, heads ${c.composites.headOf}${c.composites.own.length ? `; its own entry: ${c.composites.own.map((x) => `${x.zh} ${x.en}`).join(', ')}` : ''}`);
  for (const x of c.composites.first) out.push(`    #${x.rank} ${x.zh} "${x.en}": ${x.forms.join(' / ')}`);
  const kinds = Object.entries(c.sentences.byKind).map(([k, n]) => `${k} ${n}`).join(', ');
  out.push(`  Sentences: ${c.sentences.total}${kinds ? ` (${kinds})` : ''}`);
  for (const s of c.sentences.sample) out.push(`    ${s.pinyin}${s.en ? `  (${s.en})` : ''}`);
  if (c.namedBy.length) out.push(`  Named in the text of: ${c.namedBy.map((x) => x.term).join(', ')}`);
  return out.join('\n');
}

function renderCompositeCard(c) {
  const out = [];
  out.push(`${c.zh} ${c.py}  (composite #${c.rank}; ${c.pos ?? 'no part of speech'}; fit ${c.fit}${c.proposed ? '; proposed' : ''})`);
  out.push(`  ${c.en}${c.ru ? ` / ${c.ru}` : ''}`);
  if (c.forms.length) c.forms.forEach((f, i) => out.push(`  Hao-shuo-de${c.forms.length > 1 ? ` ${i + 1}` : ''}: ${f}`));
  else out.push('  Hao-shuo-de: no description (the language says it another way or leaves it out)');
  if (c.literal) out.push(`  Literally: ${c.literal}`);
  if (c.head) out.push(`  Head: ${c.head.word ? `${c.head.term} (${c.head.word})` : c.head.composite}`);
  if (c.uses.length) out.push(`  Uses: ${c.uses.map((u) => `${u.term} ${u.hanzi}`).join(', ')}`);
  for (const [label, paths] of [['Topic', c.tags.topics], ['Is a', c.tags.kinds]]) for (const p of paths) out.push(`  ${label}: ${p.join(' › ')}`);
  if (c.examples) out.push(`  Example sentences: ${c.examples}`);
  return out.join('\n');
}
