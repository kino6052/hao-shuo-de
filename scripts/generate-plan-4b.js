#!/usr/bin/env node
// Rewrites the §4b table of BOOK_PLAN.md (which words each lesson introduces)
// from the lessons themselves, so a word refactor never needs the table
// edited by hand. Each word keeps the column it had (core, theme or added);
// a word the table doesn't have yet goes under "Added words". Sense cards
// (src/lib/senses.js) are listed in the last column. check-book still
// compares the table with the lessons.
//
//   npm run plan-4b          rewrite the table
//   npm run plan-4b -- --check  only say whether it's current (exit 1 if not)

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { ROOT } from './refactor-lib.js';
import { loadLessons } from './lessons.js';
import dictionaryData from '../src/data/dictionary.ts';
import { soleWordRef } from '../src/lib/word-refs.js';

const PLAN = resolve(ROOT, 'BOOK_PLAN.md');
const W = dictionaryData.words;
const term = (id) => W[id]?.term ?? id;

export async function planTable(plan) {
  const head = plan.indexOf('### 4b.');
  if (head < 0) throw new Error('BOOK_PLAN.md: no §4b section');
  const end = plan.indexOf('\n###', head + 1);
  const section = plan.slice(head, end < 0 ? undefined : end);
  const lines = section.split('\n');
  const first = lines.findIndex((l) => /^\|\s*Id\s*\|/.test(l));
  let last = first;
  while (last + 1 < lines.length && lines[last + 1].startsWith('|')) last++;

  // the column each word had: 0 core, 1 theme, 2 added
  const column = new Map();
  const titles = new Map();
  for (const row of lines.slice(first + 2, last + 1)) {
    const cells = row.split('|').map((c) => c.trim());
    if (!/^[a-z]/.test(cells[1] ?? '')) continue;
    titles.set(cells[1], cells[2]);
    for (let k = 0; k < 3; k++)
      for (const t of (cells[3 + k] ?? '').split(',').map((s) => s.trim().normalize('NFC')))
        if (t && t !== '—') column.set(t, k);
  }

  const lessons = await loadLessons();
  const total = Object.keys(W).length;
  let soFar = 0;
  const sums = [0, 0, 0];
  const rows = [];
  for (const lesson of lessons) {
    const cols = [[], [], []];
    const senses = [];
    for (const e of lesson.entries) {
      if (e.type !== 'vocab') continue;
      const id = soleWordRef(e.term);
      if (!id) continue;
      if (e.sense) {
        senses.push(`${term(id)} (${e.sense})`);
        continue;
      }
      cols[column.get(term(id)) ?? 2].push(term(id));
    }
    const n = cols.flat().length;
    soFar += n;
    cols.forEach((c, k) => (sums[k] += c.length));
    const title = titles.get(lesson.id) ?? lesson.entries.find((e) => e.type === 'title')?.en?.[0] ?? lesson.id;
    const cell = (list) => (list.length ? list.join(', ') : '—');
    rows.push(`| ${lesson.id} | ${title} | ${cols.map(cell).join(' | ')} | ${cell(senses)} | **${n}** | ${soFar} / ${total} | ${Math.round((soFar / total) * 100)}% |`);
  }
  const table = [
    '| Id  | Lesson                            | Core words                                                 | Theme words                                 | Added words                        | Senses |     New | Total so far |    % |',
    '| --- | --------------------------------- | ---------------------------------------------------------- | ------------------------------------------- | ---------------------------------- | ------ | ------: | -----------: | ---: |',
    ...rows,
    `| | **Total** | **${sums[0]}** | **${sums[1]}** | **${sums[2]}** | | **${soFar}** | | |`,
  ];
  const next = [...lines.slice(0, first), ...table, ...lines.slice(last + 1)].join('\n');
  return plan.slice(0, head) + next + plan.slice(head + section.length);
}

if (process.argv[1]?.endsWith('generate-plan-4b.js')) {
  const plan = readFileSync(PLAN, 'utf-8');
  const next = await planTable(plan);
  if (process.argv.includes('--check')) {
    if (next !== plan) {
      console.error('plan-4b: BOOK_PLAN.md §4b is out of date -- run npm run plan-4b.');
      process.exit(1);
    }
    console.log('plan-4b: §4b is current.');
  } else {
    writeFileSync(PLAN, next);
    console.log(next === plan ? 'plan-4b: §4b already current.' : 'plan-4b: rewrote BOOK_PLAN.md §4b.');
  }
}
