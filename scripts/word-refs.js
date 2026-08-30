// Node-only loaders for the {{...}} reference data (dictionary.json lives on
// disk, so this part can't be shared with the browser bundle). The actual
// substitution logic is isomorphic -- see src/lib/word-refs.js -- and is
// just re-exported here so existing importers (vite-plugin-chapter.js) don't
// need to change.

import { readFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { countDictionaryWords, buildWordIndex } from '../src/lib/dictionary-stats.js';

export { resolveWordRefs } from '../src/lib/word-refs.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = resolve(__dirname, '..');
const DEFAULT_DATA_PATH = resolve(ROOT, 'src/data/dictionary.json');

function loadDictionary(dataPath = DEFAULT_DATA_PATH) {
  return JSON.parse(readFileSync(dataPath, 'utf-8'));
}

export function loadWordIndex(dataPath = DEFAULT_DATA_PATH) {
  return buildWordIndex(loadDictionary(dataPath));
}

export function loadDictionaryWordCount(dataPath = DEFAULT_DATA_PATH) {
  return countDictionaryWords(loadDictionary(dataPath));
}
