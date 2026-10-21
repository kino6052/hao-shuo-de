// What the categorical dictionary may list (TAGS_PLAN.md D1): every entry is a Hao-shuo-de word. A core word is one. A composite
// is one when it has a description made only of core words (its `hsd` forms), so the page shows that description, not the
// Mandarin word it stands for. A composite the language says another way or leaves out (fit "skip", "gap"), or with no form, or
// with a form that names an unknown word or holds loose text, is not listed.
//
//   compositeProblems(composite, termOf)  -> the reasons it is not a Hao-shuo-de word ([] when it is one)
//   pageForms(composite, termOf)          -> its forms as pinyin, one string each (refs resolved)
//   isListed(composite, termOf)           -> true when the page may list it
//
// termOf(id) -> the word's pinyin term, or undefined for an unknown id.
//
// Loose text in a form is only what the book already writes that way: the measure word ge, the neutral-tone r, the letters
// A B C and X Y Z that stand for a thing, the word "verb", "quoted" sounds and names, and a doubled syllable (kàn-kan, xiè-xie).

import { wordRefIds, replaceWordRefs, refTerm, toneless } from './word-refs.js';

const NOT_WORDS = new Set(['skip', 'gap']);
// a composite's forms: a list in the data files, one " / "-joined string in the assembled composites
const formsOf = (c) => (typeof c.hsd === 'string' ? c.hsd.split(' / ') : [].concat(c.hsd ?? [])).filter(Boolean);
const LOOSE = new Set(['ge', 'r', 'verb', 'a', 'b', 'c', 'x', 'y', 'z']);

// -> the loose pieces of a form: what is left after refs, quoted text and placeholders are taken out
function looseText(form, doubled) {
  const rest = form.replace(/\{\{[^}]*\}\}/g, ' ').replace(/"[^"]*"/g, ' ');
  return (rest.match(/[A-Za-zÀ-ɏ]+/g) ?? []).filter((t) => !LOOSE.has(t.toLowerCase()) && !doubled.has(toneless(t.toLowerCase())));
}

export function compositeProblems(c, termOf) {
  if (NOT_WORDS.has(c.fit)) return [`fit "${c.fit}": the language says it another way or leaves it out`];
  const forms = formsOf(c);
  if (!forms.length) return ['has no description'];
  const problems = [];
  const doubled = new Set();
  for (const f of forms) for (const id of wordRefIds(f)) if (termOf(id) !== undefined) doubled.add(toneless(termOf(id)));
  for (const f of forms) {
    for (const id of wordRefIds(f)) if (termOf(id) === undefined) problems.push(`names unknown word ${id}`);
    const loose = looseText(f, doubled);
    if (loose.length) problems.push(`has loose text "${loose.join(' ')}" in "${f}"`);
  }
  return [...new Set(problems)];
}

export const isListed = (c, termOf) => compositeProblems(c, termOf).length === 0;

export function pageForms(c, termOf) {
  return formsOf(c).map((f) => replaceWordRefs(f, (id, kind) => refTerm(termOf(id) ?? id, kind)));
}

// -> what each topic page lists besides its core words, and what was left out and why.
//    pages: Map(topic id -> [{ zh, forms, en, ru }]); hidden: [{ zh, fit, reasons }]
//    A composite that is a core word's own hanzi is the core word (shown once, as the core word) and is in neither list.
export function categoricalPages(composites, coreHanzi, termOf) {
  const pages = new Map();
  const hidden = [];
  for (const c of composites) {
    if (coreHanzi.has(c.zh)) continue;
    const reasons = compositeProblems(c, termOf);
    if (reasons.length) {
      hidden.push({ zh: c.zh, fit: c.fit, reasons });
      continue;
    }
    const entry = { zh: c.zh, forms: pageForms(c, termOf), en: c.en, ru: c.ru };
    for (const t of c.topics ?? []) pages.set(t, [...(pages.get(t) ?? []), entry]);
  }
  return { pages, hidden };
}
