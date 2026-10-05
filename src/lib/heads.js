// Where a composite hangs: its head, the word that says what it is. 手机
// (shǒu-jī, a phone) is a kind of jī (machine), not of shǒu (hand); 教的人
// (jiāo-de rén, a teacher) is a rén; 吃饭 (chī-fàn) is an act of chī. The
// Word Map's families and the rebalancing report (scripts/report-heads.js)
// count each composite under its head, so a word's family is what it heads.
//
// The rule reads the entry's main form (its first) with its part of speech
// (Composite.pos):
//   noun (and anything else)  the last word -- or, when the form ends in
//                             another entry's compound (... -de dōng-xi),
//                             that compound (东西), which heads it instead
//   verb                      the main verb: the first verb that isn't a
//                             helper (yòng, gěi, zài ...) with a verb after it
//   adjective                 the first adjective, else the last word
// Glue words (de, le, ge, bù, hěn ...) are never heads. An entry's own
// `head` (a word id, or another entry's hanzi) overrides the rule.
//
// Pure: the app (Word Map) and the scripts use it.

import { wordRefIds } from './word-refs.js';
import { refChains, chainHanzi } from './senses.js';

export const GLUE = new Set(['de', 'le', 'ma', 'men', 'ge4', 'bu4', 'hen3', 'mei2']);
const HELPERS = new Set(['yong4', 'gei3', 'zai4', 'cong2', 'dui4', 'ba3', 'bi3', 'he2']);

const posOf = (words, id) => (words[id]?.pos?.eng ?? '').toLowerCase();

// -> the main form's hyphen chains, as id lists.
const chainsOf = (form) => refChains(form).map((chain) => chain.map((r) => r.id));

// -> { heads: Map(zh -> head), compounds: Map(chain key -> zh) } where a head
// is { kind: 'word', id } or { kind: 'compound', zh }.
export function compositeHeads(dictionary, entries) {
  const words = dictionary.words;
  // entries whose main form is one hyphen chain of 2+ words that writes the
  // entry's own hanzi (dōng-xi is 东西): they can head others
  const compounds = new Map();
  for (const e of entries) {
    if (!e.hsd || (e.pos && e.pos !== 'noun' && e.pos !== 'pronoun')) continue;
    const chains = chainsOf(e.hsd.split(' / ')[0]);
    if (chains.length === 1 && chains[0].length > 1 && chainHanzi(chains[0], words) === e.zh) compounds.set(chains[0].join(' '), e.zh);
  }
  const byZh = new Set(entries.map((e) => e.zh));
  const heads = new Map();
  for (const e of entries) {
    const h = headOf(e, words, compounds, byZh);
    if (h) heads.set(e.zh, h);
  }
  return { heads, compounds };
}

function headOf(e, words, compounds, byZh) {
  if (e.head) return words[e.head] ? { kind: 'word', id: e.head } : byZh.has(e.head) ? { kind: 'compound', zh: e.head } : null;
  if (!e.hsd) return null;
  const main = e.hsd.split(' / ')[0];
  const ids = wordRefIds(main).filter((id) => words[id]);
  const content = ids.filter((id) => !GLUE.has(id));
  if (!content.length) return ids.length ? { kind: 'word', id: ids[0] } : null;
  const word = (id) => ({ kind: 'word', id });
  if (e.pos === 'verb') {
    const verbs = content.filter((id) => /verb/.test(posOf(words, id)));
    const main = verbs.find((id, i) => !HELPERS.has(id) || i === verbs.length - 1);
    return word(main ?? content[0]);
  }
  if (e.pos === 'adjective') return word(content.find((id) => /adjective/.test(posOf(words, id))) ?? content[content.length - 1]);
  const chains = chainsOf(main);
  const last = chains[chains.length - 1] ?? [];
  const zh = compounds.get(last.join(' '));
  if (zh && zh !== e.zh) return { kind: 'compound', zh };
  const tail = last.filter((id) => words[id] && !GLUE.has(id));
  return word(tail[tail.length - 1] ?? content[content.length - 1]);
}

// -> a head as a node key: "w:<id>" or "c:<zh>".
export const headKey = (h) => (h.kind === 'word' ? `w:${h.id}` : `c:${h.zh}`);

// -> Map(word id -> the entries under it, directly or through a compound it
// heads): what the word gets "under the hood". direct: only its own.
export function headCounts(dictionary, entries) {
  const { heads } = compositeHeads(dictionary, entries);
  const direct = new Map();
  const under = new Map();
  for (const e of entries) {
    const h = heads.get(e.zh);
    if (!h) continue;
    const key = headKey(h);
    direct.set(key, [...(direct.get(key) ?? []), e]);
    const top = topWord(h, heads);
    if (top) under.set(top, [...(under.get(top) ?? []), e]);
  }
  return { heads, direct, under };
}

// -> the word at the top of a head: a compound's own head, climbed until a word.
export function topWord(h, heads) {
  const seen = new Set();
  while (h && h.kind === 'compound' && !seen.has(h.zh)) {
    seen.add(h.zh);
    h = heads.get(h.zh);
  }
  return h?.kind === 'word' ? h.id : null;
}

// -> the hanzi a head is written with: a compound's own, or a word's main
// hanzi and its senses' (so 右 counts for yòu in yòu-biān).
export function headHanzi(h, words) {
  if (!h) return '';
  if (h.kind === 'compound') return h.zh;
  const w = words[h.id];
  return [w?.hanzi ?? '', ...Object.values(w?.senses ?? {}).map((s) => s.hanzi)].join('');
}
