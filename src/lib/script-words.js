// How a Hao-shuo-de text is written in each script (src/lib/settings.js: pinyin, hanzi, or hanzi with pinyin above),
// worked out from its word refs (src/lib/word-refs.js). Pure, with the words passed in, for the app (src/lib/script.js)
// and the tests.
//
//   segments(refs, words)          -> [{ text } | { word }], a word being a chain of refs joined by "-":
//                                     { parts: [{ id, sense, py, zh }], py, keys }
//   fromCodes(codes, words)        -> the word of an <hsd-w w=CODES> element
//   withAuthored(segs, hanzi)      -> the segments with the characters the author wrote (tā: 她 rather than 他)
//   hanziText(text)                -> the text between words in hanzi: no spaces or hyphens, Chinese punctuation
//   rubyPairs(word)                -> [[hanzi, pinyin]] for hanzi with pinyin above, one pair per character
//                                     when the syllables line up
//   short(meaning)                 -> its first sense, short, for the hover box

import { wordRefRe, refTerm } from './word-refs.js';
import { chainSenses, senseHanzi, senseKey } from './senses.js';
import { syllables } from './pinyin-syllables.js';

export const HAN = /\p{Script=Han}/u;

// chain: [{ id, kind, sense }] (id null for an erhua r) -> the word
function wordOf(chain, words) {
  const ids = chain.filter((r) => r.id).map((r) => r.id);
  const senses = chainSenses(ids, words);
  let k = 0;
  const parts = chain.map((r) => {
    if (!r.id) return { id: null, py: 'r', zh: '儿' };
    const sense = r.sense ?? senses[k];
    k++;
    const w = words[r.id];
    return { id: r.id, sense, py: w ? refTerm(w.term, r.kind) : r.id, zh: w ? senseHanzi(words, r.id, sense) : '' };
  });
  const py = parts.map((p, i) => (i > 0 && p.id ? `-${p.py}` : p.py)).join('');
  return { parts, py, keys: parts.filter((p) => p.id).map((p) => senseKey(p.id, p.sense)) };
}

export function segments(refs, words) {
  const text = String(refs ?? '');
  const out = [];
  let chain = null;
  let at = 0;
  const close = (gap) => {
    // an erhua r right after a word belongs to it (miànr: 面儿)
    if (chain && /^r(?!\p{L})/u.test(gap)) {
      chain.push({ id: null });
      gap = gap.slice(1);
    }
    if (chain) out.push({ word: wordOf(chain, words) });
    chain = null;
    if (gap) out.push({ text: gap });
  };
  for (const m of text.matchAll(wordRefRe())) {
    const gap = text.slice(at, m.index);
    const ref = { id: m[2], kind: m[1], sense: m[3] };
    if (chain && gap === '-') chain.push(ref);
    else {
      close(gap);
      chain = [ref];
    }
    at = m.index + m[0].length;
  }
  close(text.slice(at));
  return out;
}

// codes: "dong1.~xi1", "zai4#again.jian4", "mian4.r" (src/lib/word-refs.js chainCodes)
export function fromCodes(codes, words) {
  const chain = String(codes)
    .split('.')
    .filter(Boolean)
    .map((c) => {
      if (c === 'r') return { id: null };
      const light = c.startsWith('~');
      const [id, sense] = (light ? c.slice(1) : c).split('#');
      return { id, sense, kind: light ? 'light' : 'word' };
    });
  return wordOf(chain, words);
}

export function withAuthored(segs, hanzi) {
  if (!hanzi) return segs;
  const chars = [...String(hanzi)].filter((c) => HAN.test(c));
  const lengths = segs.flatMap((s) => (s.word ? s.word.parts.map((p) => [...p.zh].length) : []));
  if (lengths.reduce((a, b) => a + b, 0) !== chars.length) return segs;
  let i = 0;
  return segs.map((s) => {
    if (!s.word) return s;
    const parts = s.word.parts.map((p) => {
      const n = [...p.zh].length;
      const zh = chars.slice(i, i + n).join('');
      i += n;
      return { ...p, zh };
    });
    return { word: { ...s.word, parts } };
  });
}

const FULL = { '.': '。', ',': '，', '?': '？', '!': '！', ':': '：', ';': '；' };
export const hanziText = (text) =>
  String(text)
    .replace(/\.\.\.|…/g, '……')
    .replace(/[.,?!:;]/g, (c) => FULL[c])
    .replace(/[\s-]+/g, '');

// -> a word's hanzi, its pinyin where a part has none
export const wordHanzi = (word) => word.parts.map((p) => p.zh || p.py).join('');

// -> a meaning cut to its first sense, the way a pop-up dictionary gives it (the hover box): "to love, have compassion
// for" -> "to love", "dad: bàba-māma are ..." -> "dad"; a meaning that is all brackets, "(particle: le and a
// together)", loses only the brackets
export function short(text) {
  const s = String(text ?? '').trim();
  const first = s.replace(/\([^)]*\)/g, '').split(/[;,:；，、：]|\.\s/)[0].trim() || s.replace(/[()]/g, '').trim();
  return first.length > 36 ? `${first.slice(0, 35).trimEnd()}…` : first;
}

export function rubyPairs(word) {
  return word.parts.flatMap((p) => {
    if (!p.zh) return [[p.py, '']];
    const syl = [...p.zh].length > 1 ? syllables(p.py, p.zh) : null;
    return syl ? [...p.zh].map((ch, i) => [ch, syl[i]]) : [[p.zh, p.py.toLowerCase()]];
  });
}
