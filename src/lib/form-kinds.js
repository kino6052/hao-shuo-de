// Built or spelled (KB_PLAN.md K9): each form of a composite either builds the
// meaning from its parts (fēi-jī = fly + machine) or spells Mandarin's own word
// with our words, to be learned whole (dōng-xi: east + west is not "thing").
// Spelled forms count as uses of their words but never as definitions, and they
// are the language's hidden vocabulary.
//
//   formKinds(entry)       -> ['built' | 'spelled' | 'unknown', …] one per form
//   undecidedForms(entry)  -> the indexes of the forms still 'unknown'
//   isMandarinCompound(entry, i)
//
// The rule fills the obvious ones: a form that is not Mandarin's own compound
// is built (it is a description), and so is the compound of an entry marked
// `transparent` (wǒ-men: I + plural). That leaves the compounds that need a
// yes/no from the author, who writes them as `kinds: ["spelled", "built"]` on
// the entry. An explicit `kinds` always wins.
//
// Pure, no node APIs. Takes an entry with `hsd`/`tts` as lists (the data files)
// or as " / "-joined strings (the assembled dictionary).

import { wordRefIds } from './word-refs.js';

export const FORM_KINDS = ['built', 'spelled'];

const list = (v) => (Array.isArray(v) ? v : v ? String(v).split(' / ') : []);

// -> true when form i is the Mandarin word's own compound: written with the
// entry's own hanzi, from two or more dictionary words.
export function isMandarinCompound(entry, i) {
  const forms = list(entry.hsd);
  const tts = list(entry.tts);
  return tts[i] === entry.zh && wordRefIds(forms[i] ?? '').length > 1;
}

export function formKinds(entry) {
  const explicit = list(entry.kinds);
  return list(entry.hsd).map((_, i) => {
    if (FORM_KINDS.includes(explicit[i])) return explicit[i];
    if (!isMandarinCompound(entry, i)) return 'built';
    return entry.transparent ? 'built' : 'unknown';
  });
}

export const undecidedForms = (entry) => formKinds(entry).flatMap((k, i) => (k === 'unknown' ? [i] : []));

// -> what is wrong with an entry's explicit `kinds` (nothing when it has none).
export function kindsProblems(entry) {
  if (entry.kinds === undefined) return [];
  const forms = list(entry.hsd);
  const out = [];
  if (!Array.isArray(entry.kinds)) return ['kinds must be a list, one per form'];
  if (entry.kinds.length !== forms.length) out.push(`kinds has ${entry.kinds.length} item(s) but the entry has ${forms.length} form(s)`);
  entry.kinds.forEach((k, i) => {
    if (!FORM_KINDS.includes(k)) out.push(`kinds[${i}] must be "built" or "spelled", not ${JSON.stringify(k)}`);
  });
  return out;
}
