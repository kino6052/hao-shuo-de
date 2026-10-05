// The compound rule (BOOK_PLAN.md D58, check-book §7): a Chinese word made
// of Hao-shuo-de words is said with that compound first -- 爱好 is ài-hào,
// 白天 is bái-tiān -- and any description follows after " / ". A sense's
// hanzi counts only inside the compounds it lists (时 is shí only in
// shí-jiān ...), see src/lib/senses.js.
//
// `words` is { [id]: { term, hanzi, senses? } }.

import { chainSenses } from './senses.js';

// Tone marks (combining, after NFD) -> tone.
const MARKS = { '̄': 1, '́': 2, '̌': 3, '̀': 4 };
// 一 and 不 change tone before other syllables (yí-ge, bú-yào).
const SANDHI = new Set(['yi1', 'bu4']);

// -> [{ c, tone }]: a pinyin string's letters, each carrying its tone mark (0 = none).
function letters(s) {
  const out = [];
  for (const ch of String(s).normalize('NFD').toLowerCase()) {
    if (MARKS[ch]) {
      if (out.length) out[out.length - 1].tone = MARKS[ch];
    } else if (/[a-z]/.test(ch)) out.push({ c: ch, tone: 0 });
  }
  return out;
}

// -> whether the words, said one after another, are the entry's pinyin:
// the same letters and the same tones, except where Mandarin says a syllable
// light (东西 dōngxi) and the 一/不 sandhi. 长 read zhǎng (grow) isn't the
// word cháng; 以为 yǐwéi isn't yǐ + wèi.
function soundsLike(ids, words, py) {
  const have = letters(py);
  let at = 0;
  for (const id of ids) {
    const want = letters(words[id].term);
    const span = have.slice(at, at + want.length);
    if (span.map((x) => x.c).join('') !== want.map((x) => x.c).join('')) return false;
    at += want.length;
    const said = span.map((x) => x.tone).filter(Boolean);
    if (!said.length || SANDHI.has(id)) continue;
    if (said.join() !== want.map((x) => x.tone).filter(Boolean).join()) return false;
  }
  return at === have.length;
}

// -> (zh, py?) -> the word ids that write it, or null when it can't be
// written that way. With the entry's pinyin, the words must also sound like it.
export function compoundSplitter(words) {
  const split = hanziSplitter(words);
  return (zh, py) => {
    const ids = split(zh);
    if (!ids || py === undefined) return ids;
    // a listed alternative counts too (谁 shéi/shuí)
    return String(py).split('/').some((p) => soundsLike(ids, words, p)) ? ids : null;
  };
}

function hanziSplitter(words) {
  const byHanzi = new Map();
  for (const [id, w] of Object.entries(words)) if (!byHanzi.has(w.hanzi)) byHanzi.set(w.hanzi, { id });
  for (const [id, w] of Object.entries(words))
    for (const [sense, s] of Object.entries(w.senses ?? {})) if (!byHanzi.has(s.hanzi)) byHanzi.set(s.hanzi, { id, sense });
  const longest = Math.max(...[...byHanzi.keys()].map((h) => h.length));
  return (zh) => {
    const parts = [];
    for (let i = 0; i < zh.length; ) {
      let n = Math.min(longest, zh.length - i);
      while (n > 0 && !byHanzi.has(zh.slice(i, i + n))) n--;
      if (!n) return null;
      parts.push(byHanzi.get(zh.slice(i, i + n)));
      i += n;
    }
    const ids = parts.map((p) => p.id);
    const senses = chainSenses(ids, words);
    return parts.every((p, k) => !p.sense || senses[k] === p.sense) ? ids : null;
  };
}

// Words said with the light tone after another word in a compound (zhè-ge,
// nǎ-ge), and words said light when doubled (none yet).
const LIGHT_AFTER = new Set(['ge4']);
const LIGHT_DOUBLED = new Set();

// -> the compound's form: {{word:a}}-{{word:b}}, light where Mandarin is.
export const compoundForm = (ids) =>
  ids
    .map((id, i) => {
      const light = i > 0 && (LIGHT_AFTER.has(id) || (LIGHT_DOUBLED.has(id) && ids[i - 1] === id));
      return `{{${light ? 'light' : 'word'}:${id}}}`;
    })
    .join('-');
