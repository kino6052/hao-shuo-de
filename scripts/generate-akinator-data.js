#!/usr/bin/env node
// Writes the pool the book page of the Akinator searches (AKINATOR_PLAN.md D1): the 7,000-odd words, composites, patterns and
// sentences with the features a question can ask about, as one compact file (src/lib/kb/akinator-export.js says how).
//
// Output: src/data/akinator-pool.json (not committed: the page imports it as an asset URL, so vite puts it into docs/assets on build). Regenerate with `npm run akinator-data`;
// the build does it. It stays under 300 KB zipped; the script says so when it does not.

import { mkdirSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { gzipSync } from 'zlib';
import { openKb } from './kb.js';
import { exportPool } from '../src/lib/kb/akinator-export.js';

const OUT_PATH = resolve(fileURLToPath(new URL('.', import.meta.url)), '../src/data/akinator-pool.json');
const ZIPPED_LIMIT = 300 * 1024;

async function main() {
  const kb = await openKb();
  const lessons = (kb.source.lessons ?? []).map(({ id, number }) => ({ id, number }));
  const text = JSON.stringify(exportPool(kb.pool(), { ak: kb.akinator(), lessons }));
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, text);
  const zipped = gzipSync(text).length;
  const kb1 = (n) => `${Math.round(n / 1024)} KB`;
  console.log(`generate-akinator-data: ${kb1(text.length)} (${kb1(zipped)} zipped)`);
  if (zipped > ZIPPED_LIMIT) {
    console.error(`generate-akinator-data: the file is over ${kb1(ZIPPED_LIMIT)} zipped; shrink the export (AKINATOR_PLAN.md D1)`);
    process.exitCode = 1;
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) await main();
