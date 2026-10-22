#!/usr/bin/env node
// Writes the pool the book page of the Akinator searches (AKINATOR_PLAN.md D1): the 11,000-odd words, composites, patterns and
// sentences with the features a question can ask about, as one compact file (src/lib/kb/akinator-export.js says how).
//
// Output: src/data/akinator-pool.json (not committed: the page imports it as an asset URL, so vite puts it into docs/assets on build). Regenerate with `npm run akinator-data`;
// the build does it (scripts/generate-all.js). The sentences are read through the parse memory (scripts/parse-memo.js), so
// only a new or changed sentence is parsed, and the file is written only when it changed.
//
// It stays under 400 KB zipped; the script fails when it does not. The aim was 300 KB for the 7,700 items of 2026-10-21; the
// yardstick rounds brought the pool to 11,275 items (389 KB), and the plan is to split the file in two (the book first, the
// composites after) rather than to drop content.

import { gzipSync } from 'zlib';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { openKb } from './kb.js';
import { exportPool } from '../src/lib/kb/akinator-export.js';
import { writeChanged } from './write-changed.js';

const OUT_PATH = resolve(fileURLToPath(new URL('.', import.meta.url)), '../src/data/akinator-pool.json');
const ZIPPED_LIMIT = 400 * 1024;

// kb: an opened KB to reuse (scripts/generate-all.js shares one between the steps)
export async function generate({ kb } = {}) {
  kb ??= await openKb({ memo: true });
  const lessons = (kb.source.lessons ?? []).map(({ id, number }) => ({ id, number }));
  const text = JSON.stringify(exportPool(kb.pool(), { ak: kb.akinator(), lessons, nets: kb.tags().nets }));
  writeChanged(OUT_PATH, text);
  const zipped = gzipSync(text).length;
  const kb1 = (n) => `${Math.round(n / 1024)} KB`;
  console.log(`generate-akinator-data: ${kb1(text.length)} (${kb1(zipped)} zipped)`);
  if (zipped > ZIPPED_LIMIT) throw new Error(`generate-akinator-data: the file is over ${kb1(ZIPPED_LIMIT)} zipped; shrink the export (AKINATOR_PLAN.md D1)`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  try {
    await generate();
  } catch (e) {
    console.error(e.message);
    process.exitCode = 1;
  }
}
