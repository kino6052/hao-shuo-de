#!/usr/bin/env node
// Lists the next words for the composite dictionary (src/data/composites/,
// BOOK_PLAN.md D40): the most common Chinese words it doesn't have yet, most
// common first. Words the dictionary already has are marked with their id.
// The frequency list is misc/translation's dictionary.raw.csv next to this
// app, ranked by its speaking, then writing, commonality index -- the same
// ranking phase 1 used. The simple definition (简单话) is a hint for the
// composite.
//
//   node scripts/composites-next.js         # the next 100
//   node scripts/composites-next.js 500     # the next 500 (a phase)

import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { LESSON_IDS, lessonNumber, importLessonFile } from './lessons.js';
import compositesData from '../src/data/composites.ts';
import { soleWordRef } from '../src/lib/word-refs.js';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const CSV = resolve(ROOT, '../misc/translation/src/dictionaries/dictionary.raw.csv');
const count = Number(process.argv[2] ?? 100);

// Minimal CSV parsing: quoted fields may hold commas.
function parseCsv(text) {
  return text.split(/\r?\n/).filter(Boolean).map((line) => {
    const cells = [];
    let cell = '';
    let quoted = false;
    for (const ch of line) {
      if (ch === '"') quoted = !quoted;
      else if (ch === ',' && !quoted) { cells.push(cell); cell = ''; }
      else cell += ch;
    }
    cells.push(cell);
    return cells;
  });
}

// hanzi -> dictionary word id, from every lesson's word cards
const hanzi = new Map();
for (const id of LESSON_IDS) {
  const entries = await importLessonFile(id, 'index.ts');
  for (const e of entries) {
    const word = e.type === 'vocab' && soleWordRef(e.term);
    if (word) hanzi.set(e.ttsText, word);
  }
}

const done = new Set(compositesData.entries.map((e) => e.zh));
const seen = new Set();
const rows = parseCsv(readFileSync(CSV, 'utf-8'))
  .slice(1)
  .filter((r) => r.length >= 11 && r[11]?.trim().toUpperCase() !== 'TRUE')
  .filter((r) => !seen.has(r[1]) && seen.add(r[1]))
  .sort((a, b) => (Number(b[9]) || 0) - (Number(a[9]) || 0) || (Number(b[10]) || 0) - (Number(a[10]) || 0))
  .map((r, i) => ({ rank: i + 1, zh: r[1], py: r[2], pos: r[3], simple: r[4] }))
  .filter((r) => !done.has(r.zh))
  .slice(0, count);

for (const r of rows) {
  const word = hanzi.get(r.zh);
  console.log([r.rank, r.zh, r.py, r.pos, word ? `= {{word:${word}}}` : r.simple].join('\t'));
}
console.error(`composites-next: ${rows.length} word(s); the composite dictionary has ${done.size}.`);
