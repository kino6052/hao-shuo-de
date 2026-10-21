// Plain pinyin -> word refs, for writing sentences by hand (the composite
// examples, the author's own forms in the review, kb_parse):
//   "Wǒ xiǎng chī-fàn." -> "{{Word:wo3}} {{word:xiang3}} {{word:chi1}}-{{word:fan4}}."
// A syllable with tone marks is the word with that term (one toned term is one
// word, check-sounds); one without is a light syllable ({{light:..}}), the
// word with that sound; miànr is miàn + an erhua r. Names and sounds in
// quotes, X and Y, and refs written out ({{light:de2}} in jué-{{light:de2}},
// where de would be 的) stay as they are. A light syllable that repeats the word
// before it is that word again (xiè-xie, kàn-kan). Words of more than one syllable are
// written as one: zhīdào, shēntǐ. Pure, for the app and the scripts.
//
// A few words are written toneless to begin with (de, men, zi -- particles
// whose own term carries no tone mark), which collides with another word's
// toneless light form (dé, mén, zì). Glued to the word before it (jì-de,
// míng-zi), the chain a composite actually spells (jì-dé = 记得, míng-zì = 名字)
// wins over the bare particle, the same way the parser prefers a composite's
// own chain over reading its words apart (TRANSLATOR_PLAN.md A1).

import { toneless, replaceWordRefs, refTerm } from './word-refs.js';
import { buildLexicon } from './grammar/lexicon.js';

// A light syllable more than one word could be: the one it usually is.
export const LIGHT = { fang: 'fang1', xi: 'xi1', ge: 'ge4', qi: 'qi4', fa: 'fa1', shi: 'shi4' };

// composite -> its own pinyin, toneless-folded, mapped to the dictionary's
// way of saying it (its first form) -- so an unknown Mandarin word ("wàng")
// can be named with the form that already says it (TRANSLATOR_PLAN.md A2).
function suggestionsByPy(composites) {
  const byPy = new Map();
  for (const c of composites) {
    const key = String(c.py ?? '').normalize('NFC').toLowerCase();
    if (!key) continue;
    const forms = Array.isArray(c.hsd) ? c.hsd : c.hsd ? c.hsd.split(' / ') : [];
    if (!forms.length) continue;
    if (!byPy.has(key)) byPy.set(key, []);
    byPy.get(key).push({ zh: c.zh, form: forms[0] });
  }
  return byPy;
}

// Shared by both functions below. `onProblem`, given, is called instead of
// throwing, with the unresolved token left as plain text so the rest of the
// sentence still converts.
function convert(text, words, { light = {}, composites = [], onProblem } = {}) {
  const byTerm = new Map();
  const byToneless = new Map();
  for (const [id, w] of Object.entries(words)) {
    const term = w.term.normalize('NFC');
    byTerm.set(term, id);
    const t = toneless(term);
    byToneless.set(t, [...(byToneless.get(t) ?? []), id]);
  }
  const { chains } = buildLexicon({ words, composites });
  const bySuggestion = onProblem ? suggestionsByPy(composites) : null;
  let prev = null; // the word the last token was
  let prevEnd = 0; // where it ended, to tell a hyphen (glued) from a space
  return String(text)
    .normalize('NFC')
    .replace(/\{\{[^}]*\}\}|"[^"]*"|\p{L}+/gu, (tok, offset, full) => {
      const glued = prev !== null && full.slice(prevEnd, offset) === '-';
      prevEnd = offset + tok.length;
      if (tok.startsWith('{{') || tok.startsWith('"') || tok === 'X' || tok === 'Y') {
        prev = null;
        return tok;
      }
      const cap = tok[0] !== tok[0].toLowerCase();
      const low = tok.toLowerCase();
      const ref = (id, isLight) => `{{${isLight ? (cap ? 'Light' : 'light') : cap ? 'Word' : 'word'}:${id}}}`;
      const fail = (message) => {
        if (!onProblem) throw new Error(message);
        // the suggested form as pinyin to read, and as refs to write
        const s = bySuggestion.get(low)?.[0];
        const suggestion = s ? { zh: s.zh, refs: s.form, form: replaceWordRefs(s.form, (id, kind) => refTerm(words[id]?.term ?? id, kind)) } : null;
        onProblem({ token: tok, message, suggestion });
        prev = null;
        return tok;
      };
      // A glued word spelled without a tone of its own (de, zi, men) can be
      // read as another word's toneless light form instead, when only that
      // other reading continues a chain a composite actually spells.
      if (glued && byTerm.has(low)) {
        const bare = byTerm.get(low);
        const chained = (byToneless.get(low) ?? []).find((id) => id !== bare && chains.has(`${prev} ${id}`));
        if (chained) return ref((prev = chained), true);
      }
      if (byTerm.has(low)) return ref((prev = byTerm.get(low)), false);
      if (low.endsWith('r') && byTerm.has(low.slice(0, -1))) return `${ref((prev = byTerm.get(low.slice(0, -1))), false)}r`;
      if (toneless(low) === low) {
        const ids = byToneless.get(low) ?? [];
        const again = prev && toneless(words[prev].term.normalize('NFC')) === low ? prev : null;
        const pick = again ?? light[low] ?? LIGHT[low] ?? (ids.length === 1 ? ids[0] : null);
        if (pick) return ref((prev = pick), true);
        return fail(`"${tok}" in "${text}": a light syllable of ${ids.length ? ids.join(' or ') : 'no word'}`);
      }
      return fail(`"${tok}" in "${text}" isn't a word`);
    });
}

export function pinyinToRefs(text, words, opts = {}) {
  return convert(text, words, opts);
}

// Like pinyinToRefs, but never throws: every unknown token is left as plain
// text and listed in `problems`, each with the dictionary's own form for it
// when a composite's pinyin names it exactly (kb_parse, TRANSLATOR_PLAN.md A2).
//   pinyinProblems("Wǒ wàng le.", words, { composites })
//     -> { refs: '{{Word:wo3}} wàng {{word:le}}.', problems: [{ token: 'wàng', message, suggestion: { zh, form, refs } }] }
//     (form is the pinyin to read, refs the same form as word refs)
export function pinyinProblems(text, words, opts = {}) {
  const problems = [];
  const refs = convert(text, words, { ...opts, onProblem: (p) => problems.push(p) });
  return { refs, problems };
}
