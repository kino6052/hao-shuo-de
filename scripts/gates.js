// The book gates (BOOK_PLAN.md §6): [script, default arguments]. One list for `npm run check`
// (check-all.js) and for `--check` on a refactor (refactor-check.js).
export const GATES = [
  ['check-data', []],
  ['check-types', []],
  ['check-book', []],
  ['check-sounds', []],
  ['check-coverage', []],
  ['check-summaries', ['--over']],
  ['check-jargon', ['--summary']],
  ['check-early-words', ['--summary']],
  ['check-word-use', ['--summary']],
  ['check-grammar-blocks', ['--summary']],
  ['check-grammar', []],
  ['check-classes', []],
  ['check-forms', []],
  ['check-practice', ['--summary']],
  ['check-example-runs', ['--summary']],
  ['check-story-images', []],
  ['check-intro-sentences', []],
  ['check-word-builder', []],
  ['check-passive', []],
];
