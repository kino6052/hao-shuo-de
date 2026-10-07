// Plain pinyin -> word refs, for writing sentences by hand (the composite
// examples, the author's own forms in the review):
//   "Wǒ xiǎng chī-fàn." -> "{{Word:wo3}} {{word:xiang3}} {{word:chi1}}-{{word:fan4}}."
// A syllable with tone marks is the word with that term (one toned term is one
// word, check-sounds); one without is a light syllable ({{light:..}}), the
// word with that sound; miànr is miàn + an erhua r. Names and sounds in
// quotes, X and Y, and refs written out ({{light:de2}} in jué-{{light:de2}},
// where de would be 的) stay as they are. Words of more than one syllable are
// written as one: zhīdào, shēntǐ. Pure, for the app and the scripts.

import { toneless } from './word-refs.js';

// A light syllable more than one word could be: the one it usually is.
export const LIGHT = { fang: 'fang1', xi: 'xi1', ge: 'ge4', qi: 'qi4', fa: 'fa1', shi: 'shi4' };

export function pinyinToRefs(text, words, { light = {} } = {}) {
  const byTerm = new Map();
  const byToneless = new Map();
  for (const [id, w] of Object.entries(words)) {
    const term = w.term.normalize('NFC');
    byTerm.set(term, id);
    const t = toneless(term);
    byToneless.set(t, [...(byToneless.get(t) ?? []), id]);
  }
  return String(text)
    .normalize('NFC')
    .replace(/\{\{[^}]*\}\}|"[^"]*"|\p{L}+/gu, (tok) => {
      if (tok.startsWith('{{') || tok.startsWith('"') || tok === 'X' || tok === 'Y') return tok;
      const cap = tok[0] !== tok[0].toLowerCase();
      const low = tok.toLowerCase();
      const ref = (id, isLight) => `{{${isLight ? (cap ? 'Light' : 'light') : cap ? 'Word' : 'word'}:${id}}}`;
      if (byTerm.has(low)) return ref(byTerm.get(low), false);
      if (low.endsWith('r') && byTerm.has(low.slice(0, -1))) return `${ref(byTerm.get(low.slice(0, -1)), false)}r`;
      if (toneless(low) === low) {
        const ids = byToneless.get(low) ?? [];
        const pick = light[low] ?? LIGHT[low] ?? (ids.length === 1 ? ids[0] : null);
        if (pick) return ref(pick, true);
        throw new Error(`"${tok}" in "${text}": a light syllable of ${ids.length ? ids.join(' or ') : 'no word'}`);
      }
      throw new Error(`"${tok}" in "${text}" isn't a word`);
    });
}
