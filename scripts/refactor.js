#!/usr/bin/env node
// Applies a refactor list: a file in refactors/ whose default export is a
// list of word ops (see scripts/refactor-lib.js for each op's fields), in
// order. A dry run by default: a per-file summary, then the notes to check
// by hand. --write applies it and rebuilds the data indexes and the
// dictionary pages; --diff also prints the changed lines. The list stays in
// the repo as the record of the decision.
//
//   npm run refactor -- refactors/D60.ts
//   npm run refactor -- refactors/D60.ts --diff
//   npm run refactor -- refactors/D60.ts --write

import { resolve } from 'path';
import { pathToFileURL } from 'url';
import { run } from './word.js';

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith('--'));
if (!file) {
  console.error('usage: npm run refactor -- refactors/<name>.ts [--diff] [--write]');
  process.exit(1);
}

try {
  const ops = (await import(pathToFileURL(resolve(file)))).default;
  if (!Array.isArray(ops)) throw new Error(`${file}: the default export must be a list of ops`);
  run(ops, { write: args.includes('--write'), diff: args.includes('--diff'), title: `refactor ${file}: ${ops.length} op(s)` });
} catch (e) {
  console.error(`refactor: ${e.message}`);
  process.exit(1);
}
