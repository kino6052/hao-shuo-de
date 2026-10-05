// The compound rule (BOOK_PLAN.md D58, check-book §7): a Chinese word made
// of Hao-shuo-de words is said with that compound first -- 爱好 is ài-hào,
// 白天 is bái-tiān -- and any description follows after " / ". A sense's
// hanzi counts only inside the compounds it lists (时 is shí only in
// shí-jiān ...), see src/lib/senses.js.
//
// `words` is { [id]: { term, hanzi, senses? } }.

import { chainSenses } from './senses.js';

// -> zh -> the word ids that write it, or null when it can't be written that way.
export function compoundSplitter(words) {
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
