// Pure, environment-agnostic helpers over dictionary.json's shape -- no
// Node/fs APIs here, so this module is safe to import from both browser
// code (src/lib/i18n.js) and Node build scripts (scripts/word-refs.js).
// Keeping the counting logic in one place matters because the dictionary
// schema is a recursive tree (a category node holds either `wordIds` or
// more nested category nodes in `children`); duplicating this walk in two
// places would let them silently drift out of sync.

export function categoryWordCount(node) {
  if (node.wordIds) return node.wordIds.length;
  return node.children.reduce((sum, child) => sum + categoryWordCount(child), 0);
}

export function countDictionaryWords(dictionary) {
  return Object.keys(dictionary.words).length;
}

// id -> current pinyin term, for resolving {{word:ID}}/{{Word:ID}} refs in
// content (see src/lib/word-refs.js). Kept here so both the Node build
// scripts and the browser bundle build it the same way from the same data.
export function buildWordIndex(dictionary) {
  const index = new Map();
  for (const [id, word] of Object.entries(dictionary.words)) {
    index.set(id, word.term);
  }
  return index;
}
