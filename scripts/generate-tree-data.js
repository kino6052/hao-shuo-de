#!/usr/bin/env node
// Writes src/data/tree-data.json, what the translator page needs besides the grammar, the words and the composites to
// build a meaning tree again and read it back (BROWSER_TRANSLATOR_PLAN.md B5, src/translator/tree-check.js): how the
// book writes each word (tree.js spellingHabits, from every book sentence) and the rules' English sides
// (scripts/rule-english.js drafts). The daemon builds with the same two, so the page's build comes out the same.
//
//   node scripts/generate-tree-data.js     (also a step of `npm run generate`)
//
// A pair of words the book wrote only once is left out: the build follows a pair's habit only from two times on.

import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { openKb } from './kb.js';
import { bookSentences } from './book-sentences.js';
import { ruleDrafts } from './rule-english.js';
import { spellingHabits } from '../src/lib/grammar/tree.js';
import { writeChanged } from './write-changed.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
export const OUT_PATH = resolve(ROOT, 'src/data/tree-data.json');

export async function generate({ kb } = {}) {
  kb ??= await openKb({ memo: true });
  const habits = spellingHabits(bookSentences(kb).keys());
  const english = ruleDrafts(kb.parse.parser.rules).english;
  const pairs = [...habits.pairs].filter(([, h]) => h.n >= 2).sort(([a], [b]) => (a < b ? -1 : 1));
  const words = [...habits.words].sort(([a], [b]) => (a < b ? -1 : 1));
  const says = [...english].sort(([a], [b]) => (a < b ? -1 : 1));
  // one line per entry: small to ship, and a change shows as the entries it touches
  const block = (rows) => `[\n${rows.map((r) => JSON.stringify(r)).join(',\n')}\n]`;
  writeChanged(OUT_PATH, `{\n"pairs":${block(pairs)},\n"words":${block(words)},\n"english":${block(says)}\n}\n`);
  console.log(`generate-tree-data: ${words.length} words and ${pairs.length} pairs as the book writes them, ${says.length} rules in English`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) await generate();
