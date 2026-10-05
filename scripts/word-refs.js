// Node-only loaders for the {{...}} reference data, for the Vite plugins
// that resolve references at build time (vite-plugin-chapter.js,
// vite-plugin-markdown.js). The substitution logic itself is isomorphic --
// see src/lib/word-refs.js -- and is re-exported here.

import { countDictionaryWords, buildWordIndex } from '../src/lib/dictionary-stats.js';
import dictionaryData from '../src/data/dictionary.ts';

export { resolveWordRefs } from '../src/lib/word-refs.js';

export function loadWordIndex(dictionary = dictionaryData) {
  return buildWordIndex(dictionary);
}

export function loadDictionaryWordCount(dictionary = dictionaryData) {
  return countDictionaryWords(dictionary);
}
