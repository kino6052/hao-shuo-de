#!/usr/bin/env node
// Passive gate: Hao-shuo-de says the passive the spoken way, with ràng
// (X ràng Y + verb: wǒ-de bāo ràng tā ná-zǒu le), never with 被 / bèi (the
// author's rule, review batch 10). It fails when
//
//   - the character 被 or the word bèi / bei4 appears in the lessons, the
//     sentence builder, the phrase book, the word and composite data (the
//     composite 被 itself is the one place that names it); or
//   - the composite 被 doesn't say its passive with {{word:rang4}}.
//
// Chinese glosses in the appendices (`zh:` lines of the stories) are the
// original text and aren't scanned.
//
//   npm run check-passive

import { readFileSync, readdirSync, statSync } from 'fs';
import { resolve, join, relative } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const SCAN = [
  'src/content/lessons',
  'src/content/sentence-builder.yaml',
  'src/content/phrase-book.ts',
  'src/data/composites',
  'src/data/words',
  'src/content/word-builder.yaml',
  'src/lib/sentence-builder.js',
  'src/lib/word-builder.js',
  'src/lib/word-builder-parse.js',
];
const OWN = 'src/data/composites/bei-被.ts';
const BAD = /被|\{\{[Ww]ord:bei4\}\}|(?<![\p{L}])bèi(?![\p{L}])/u;

const files = [];
const walk = (p) => {
  let st;
  try { st = statSync(join(ROOT, p)); } catch { return; }
  if (st.isDirectory()) for (const f of readdirSync(join(ROOT, p))) walk(`${p}/${f}`);
  else files.push(p);
};
for (const p of SCAN) walk(p);

const errors = [];
for (const f of files) {
  if (f === OWN || f === 'src/data/composites/index.ts') continue;
  const lines = readFileSync(join(ROOT, f), 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (/^\s*zh:/.test(line)) return; // the Chinese gloss of a word's definition
    if (BAD.test(line)) errors.push(`${f}:${i + 1}: passive with 被/bèi -- say it with ràng: ${line.trim().slice(0, 100)}`);
  });
}

const own = readFileSync(join(ROOT, OWN), 'utf8');
if (!/hsd:\s*\[[^\]]*\{\{word:rang4\}\}/.test(own)) errors.push(`${OWN}: the passive must be written with {{word:rang4}}.`);

console.log(`check-passive: ${files.length} file(s) scanned for 被 / bèi.`);
if (errors.length) {
  for (const e of errors) console.error(`  ${e}`);
  console.error(`check-passive: ${errors.length} problem(s).`);
  process.exit(1);
}
