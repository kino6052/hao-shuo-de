#!/usr/bin/env node
// Writes what the Python WordNet scripts read (KB_PLAN.md phase 6, K4): the composites and the words, cut down to the
// hanzi, the English gloss and the part of speech. Python never imports the app's data; it reads this one file.
//
// Output: kb/cache/english-in.json (gitignored, rebuilt on every run)
//   { composites: [{ zh, en, pos }], words: [{ id, hanzi, pos, en }] }

import { mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { loadSource } from './kb-source.js';

const OUT = resolve(fileURLToPath(new URL('.', import.meta.url)), '../kb/cache/english-in.json');

export function englishInput(source) {
  return {
    composites: source.composites.map((c) => ({ zh: c.zh, en: c.en, pos: c.pos })),
    words: Object.entries(source.words).map(([id, w]) => ({ id, hanzi: w.hanzi, pos: w.pos?.eng ?? '', en: w.definition?.eng ?? '' })),
  };
}

async function main() {
  const input = englishInput(await loadSource());
  mkdirSync(resolve(OUT, '..'), { recursive: true });
  writeFileSync(OUT, JSON.stringify(input));
  console.log(`english-export: ${input.composites.length} composites and ${input.words.length} words -> kb/cache/english-in.json`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) await main();
