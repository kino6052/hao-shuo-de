// The rules for a word's `paraphrase` and `atom` (KB_PLAN.md K3, K8, phase 2),
// in one place so check-data, the KB and the review page agree.
//
// A paraphrase says the word without the word: forms in dictionary words,
// written like a composite's forms. A word that can't be said that way is an
// atom, with the reason. A word has exactly one of the two.
//
//   paraphraseProblems(id, word, words) -> ["…", …]   what is wrong, [] when fine
//   paraphraseStatus(word)              -> 'paraphrase' | 'clumsy' | 'atom' | 'none' | 'both'
//   paraphraseCounts(words)             -> { paraphrase, clumsy, atom, none, both, total }
//   isAtomMark(word)                    -> true for an atom mark or a clumsy paraphrase (K8)
//
// Pure, no node APIs: the review page imports it too.

import { wordRefRe } from './word-refs.js';

export const VERDICTS = ['fine', 'clumsy'];

// Flip to true once every word has been reviewed: check-data then fails for a
// word with neither a paraphrase nor an atom mark, instead of counting them.
export const PARAPHRASES_REQUIRED = false;

// -> 'paraphrase' (a fine one), 'clumsy', 'atom', 'none' (neither yet), or 'both' (an error).
export function paraphraseStatus(w) {
  if (w.paraphrase && w.atom) return 'both';
  if (w.atom) return 'atom';
  if (w.paraphrase) return w.paraphrase.verdict === 'clumsy' ? 'clumsy' : 'paraphrase';
  return 'none';
}

// a word the others can't honestly describe: marked, or its paraphrase is clumsy (K8)
export const isAtomMark = (w) => ['atom', 'clumsy'].includes(paraphraseStatus(w));

export function paraphraseCounts(words) {
  const out = { paraphrase: 0, clumsy: 0, atom: 0, none: 0, both: 0, total: 0 };
  for (const w of Object.values(words)) {
    out[paraphraseStatus(w)]++;
    out.total++;
  }
  return out;
}

// -> the problems with one form (a string with {{word:id}} references).
export function formProblems(form, ownId, words) {
  const problems = [];
  if (typeof form !== 'string' || !form.trim()) return ['an empty form'];
  const refs = [...form.matchAll(wordRefRe())];
  if (!refs.length) problems.push('uses no word');
  for (const [, , id, sense] of refs) {
    const w = words[id];
    if (!w) problems.push(`names ${id}, which is not a word`);
    else if (id === ownId) problems.push('uses the word itself (or one of its senses): say it without it');
    else if (sense && !w.senses?.[sense]?.alone) problems.push(`names the sense ${id}#${sense}, which cannot stand alone`);
  }
  if (/"/.test(form)) problems.push('has a quoted sound: use dictionary words only (X and Y are allowed)');
  const plain = form.replace(wordRefRe(), ' ').replace(/"[^"]*"/g, ' ').match(/\p{L}+/gu) ?? [];
  const stray = plain.filter((p) => p !== 'X' && p !== 'Y');
  if (stray.length) problems.push(`has plain pinyin outside word refs: ${[...new Set(stray)].join(', ')}`);
  return problems;
}

// -> what is wrong with a word's paraphrase or atom mark (nothing for a word with neither yet).
export function paraphraseProblems(id, w, words) {
  const problems = [];
  const status = paraphraseStatus(w);
  if (status === 'both') problems.push('has both a paraphrase and an atom mark: a word has exactly one');
  if (w.atom) {
    for (const l of ['eng', 'rus']) {
      if (typeof w.atom[l] !== 'string' || !w.atom[l].trim()) problems.push(`atom: no ${l} reason`);
    }
    const unknown = Object.keys(w.atom).filter((k) => !['eng', 'rus'].includes(k));
    if (unknown.length) problems.push(`atom: unknown field ${unknown.join(', ')}`);
  }
  const p = w.paraphrase;
  if (p) {
    if (!VERDICTS.includes(p.verdict)) problems.push(`paraphrase: verdict must be "fine" or "clumsy", not ${JSON.stringify(p.verdict)}`);
    if (!Array.isArray(p.forms) || !p.forms.length) problems.push('paraphrase: no forms');
    else {
      if (new Set(p.forms).size !== p.forms.length) problems.push('paraphrase: the same form twice');
      p.forms.forEach((f, i) => {
        for (const m of formProblems(f, id, words)) problems.push(`paraphrase form ${i + 1}: ${m}`);
      });
    }
    if (p.note !== undefined && (typeof p.note !== 'string' || !p.note.trim())) problems.push('paraphrase: the note is empty');
    const unknown = Object.keys(p).filter((k) => !['forms', 'verdict', 'note'].includes(k));
    if (unknown.length) problems.push(`paraphrase: unknown field ${unknown.join(', ')}`);
  }
  return problems;
}
