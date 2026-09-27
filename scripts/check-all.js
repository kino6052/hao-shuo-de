#!/usr/bin/env node
// Runs every book gate (BOOK_PLAN.md §6) -- the first step of `npm run
// build`. Each gate's report is shown even when an earlier one fails. Exits 1
// if any gate failed. Extra arguments (e.g. --strict, or chapter ids) are
// passed to every gate.
//
//   npm run check              # what the build runs
//   npm run check -- --strict  # every gate strict for every chapter

import { spawnSync } from 'child_process';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const SCRIPTS = fileURLToPath(new URL('.', import.meta.url));
const extra = process.argv.slice(2);

// [script, default arguments]
const GATES = [
  ['check-book', []],
  ['check-summaries', ['--over']],
  ['check-jargon', ['--summary']],
  ['check-early-words', ['--summary']],
  ['check-word-use', ['--summary']],
  ['check-grammar-blocks', ['--summary']],
  ['check-practice', ['--summary']],
];

const results = [];
for (const [name, args] of GATES) {
  console.log(`\n━━ ${name} ${'━'.repeat(Math.max(0, 60 - name.length))}`);
  const run = spawnSync(process.execPath, [resolve(SCRIPTS, `${name}.js`), ...args, ...extra], { stdio: 'inherit' });
  results.push([name, run.status === 0]);
}

console.log(`\n━━ gates ${'━'.repeat(55)}`);
for (const [name, ok] of results) console.log(`  ${ok ? '✓' : '✗'} ${name}`);
const failed = results.filter(([, ok]) => !ok).map(([name]) => name);
if (failed.length) {
  console.error(`\ncheck-all: ${failed.length} gate(s) failed: ${failed.join(', ')}.`);
  process.exit(1);
}
console.log('\ncheck-all: every gate passed.');
