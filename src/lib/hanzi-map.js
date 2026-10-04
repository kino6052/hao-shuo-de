// Every dictionary word's hanzi (its main sense), from the word files
// (src/data/words/<id>.ts). Pure, so both the app (src/lib/word-hanzi.js)
// and the build scripts can use it.

import { WORDS } from "../data/words/index.ts";

// -> Map of word id -> hanzi.
export function wordHanzi() {
  return new Map(Object.entries(WORDS).map(([id, w]) => [id, w.hanzi]));
}
