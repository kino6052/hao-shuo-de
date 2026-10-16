#!/usr/bin/env node
// Turns the HSK 3.0 grammar list into kb/yardsticks/hsk30-grammar.json (KB_PLAN.md phase 6, K13).
// The list is hsk30-grammar.csv from github.com/ivankra/hsk30 (MIT), a community copy of the HSK 3.0 syllabus's grammar
// table (not the official document). Download it once, then:
//
//   node scripts/generate-hsk-grammar.js <path to hsk30-grammar.csv>
//
// Output: [{ no, level, group, category, details, content }], one row per line. The file is committed; the download is not.

import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const OUT = resolve(fileURLToPath(new URL('.', import.meta.url)), '../kb/yardsticks/hsk30-grammar.json');

// CSV text -> rows of fields. A field in double quotes may hold commas and line breaks ("" is a quote inside one).
export function parseCsv(text) {
  const rows = [];
  let row = [];
  let cur = '';
  let quoted = false;
  const s = text.replace(/^﻿/, '');
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (quoted) {
      if (ch === '"' && s[i + 1] === '"') {
        cur += '"';
        i++;
      } else if (ch === '"') quoted = false;
      else cur += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ',') {
      row.push(cur);
      cur = '';
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && s[i + 1] === '\n') i++;
      row.push(cur);
      if (row.some((f) => f.trim())) rows.push(row);
      row = [];
      cur = '';
    } else cur += ch;
  }
  row.push(cur);
  if (row.some((f) => f.trim())) rows.push(row);
  return rows;
}

export function hskRows(text) {
  const [, ...rows] = parseCsv(text);
  // a field that ran over several lines is one line here
  const oneLine = (s) => s.replace(/\s*\n\s*/g, ' ').trim();
  return rows.map(([no, level, group, category, details, ...content]) => ({
    no: Number(no),
    level: oneLine(level),
    group: oneLine(group),
    category: oneLine(category),
    details: oneLine(details),
    content: oneLine(content.join(',')),
  }));
}

function main() {
  const path = process.argv[2];
  if (!path) throw new Error('usage: node scripts/generate-hsk-grammar.js <path to hsk30-grammar.csv>');
  const rows = hskRows(readFileSync(path, 'utf8'));
  mkdirSync(resolve(OUT, '..'), { recursive: true });
  writeFileSync(OUT, `[\n${rows.map((r) => JSON.stringify(r)).join(',\n')}\n]\n`);
  const levels = {};
  for (const r of rows) levels[r.level] = (levels[r.level] ?? 0) + 1;
  console.log(`generate-hsk-grammar: ${rows.length} grammar points (${Object.entries(levels).map(([l, n]) => `level ${l}: ${n}`).join(', ')}) -> kb/yardsticks/hsk30-grammar.json`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) main();
