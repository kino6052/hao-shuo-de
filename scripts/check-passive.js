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
// original text and aren't scanned. The rule itself is in scripts/passive.js
// (scripts/check-quick.js uses it on one edited file).
//
//   npm run check-passive

import { readFileSync, readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';
import { OWN, SCAN, ownProblem, passiveProblems, scanned } from './passive.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');

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
  if (scanned(f)) errors.push(...passiveProblems(f, readFileSync(join(ROOT, f), 'utf8')));
}

const own = ownProblem(readFileSync(join(ROOT, OWN), 'utf8'));
if (own) errors.push(own);

console.log(`check-passive: ${files.length} file(s) scanned for 被 / bèi.`);
if (errors.length) {
  for (const e of errors) console.error(`  ${e}`);
  console.error(`check-passive: ${errors.length} problem(s).`);
  process.exit(1);
}
