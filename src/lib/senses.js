// Catch-all words (src/lib/word.ts, `senses`): one toned sound, one word, but
// other hanzi inside listed compounds -- shí is 十 (ten) on its own and 时
// (time) in shí-jiān. Which sense a use has is read from the text: a ref in a
// hyphen chain that contains one of a sense's compounds has that sense;
// a ref that names its sense ({{word:xin1#new}}, for a sense marked
// `alone`) has that one; anything else is the main sense. Pure, for the
// app and the scripts.
//
// `words` is { [id]: { hanzi, senses? } } (the dictionary's words, or WORDS).

import { wordRefRe } from './word-refs.js';

const cache = new WeakMap();

// -> [{ id, key, hanzi, parts }] for every listed compound, longest first.
function compoundList(words) {
  if (cache.has(words)) return cache.get(words);
  const list = [];
  for (const [id, w] of Object.entries(words)) {
    for (const [key, s] of Object.entries(w.senses ?? {})) {
      for (const c of s.compounds) list.push({ id, key, hanzi: s.hanzi, parts: c.split(' ') });
    }
  }
  list.sort((a, b) => b.parts.length - a.parts.length);
  cache.set(words, list);
  return list;
}

// -> the hyphen chains of refs in text: [[{ id, kind, sense?, index }]], in order.
// Refs joined by "-" (and nothing else) are one chain.
export function refChains(text) {
  const chains = [];
  let last = null;
  for (const m of String(text).matchAll(wordRefRe())) {
    const ref = { id: m[2], kind: m[1], sense: m[3], index: m.index, end: m.index + m[0].length };
    if (last && text.slice(last.end, ref.index) === '-') chains[chains.length - 1].push(ref);
    else chains.push([ref]);
    last = ref;
  }
  return chains;
}

// -> the sense key of each position of a chain of ids (undefined = main sense).
export function chainSenses(ids, words) {
  const out = ids.map(() => undefined);
  for (const c of compoundList(words)) {
    for (let start = 0; start + c.parts.length <= ids.length; start++) {
      if (!c.parts.every((p, k) => ids[start + k] === p)) continue;
      // every place the word stands in it: both of cháng-cháng are 常
      c.parts.forEach((p, k) => {
        if (p === c.id && out[start + k] === undefined) out[start + k] = c.key;
      });
    }
  }
  return out;
}

// -> [{ id, sense, named }] for every ref in text, in order (named: the ref
// names its sense itself).
export function refSenses(text, words) {
  const out = [];
  for (const chain of refChains(text)) {
    const senses = chainSenses(chain.map((r) => r.id), words);
    chain.forEach((r, i) => out.push({ id: r.id, sense: r.sense ?? senses[i], named: Boolean(r.sense) }));
  }
  return out;
}

// -> the hanzi of a word in a sense (the main hanzi when sense is undefined).
export const senseHanzi = (words, id, sense) => (sense ? words[id]?.senses?.[sense]?.hanzi : words[id]?.hanzi) ?? '';

// -> the hanzi of a chain of ids: 时间 for shi2-jian1, not 十间.
export function chainHanzi(ids, words) {
  const senses = chainSenses(ids, words);
  return ids.map((id, i) => senseHanzi(words, id, senses[i])).join('');
}

// -> "id" or "id#sense": the key a card and a use are matched by.
export const senseKey = (id, sense) => (sense ? `${id}#${sense}` : id);
