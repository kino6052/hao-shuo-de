#!/usr/bin/env node
// Grammar-box gate: every lesson has at least one grammar box -- an `info`
// block with `subtype: "grammar"`, a title, and a tag. The grammar overview
// is built from these boxes, so each tag must be unique across the book
// (BOOK_PLAN.md §6). Fails for the blocking chapters in
// scripts/finished-lessons.js; reports the rest.
//
//   npm run check-grammar-blocks                  # report all, fail for finished lessons
//   npm run check-grammar-blocks -- lesson-07     # fail if lesson 7 has a problem
//   npm run check-grammar-blocks -- --strict      # fail for any lesson
//   npm run check-grammar-blocks -- --summary     # only the lessons with problems

import { readdirSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { gatePolicy } from './finished-lessons.js';

const CONTENT_DIR = resolve(fileURLToPath(new URL('.', import.meta.url)), '../src/content');
const { blocking, named, scopeLabel, summary } = gatePolicy();

const lessons = [];
for (const id of readdirSync(CONTENT_DIR).filter((d) => /^lesson-\d+$/.test(d)).sort()) {
  const { default: entries } = await import(pathToFileURL(resolve(CONTENT_DIR, id, 'index.ts')));
  lessons.push({ id, boxes: entries.filter((e) => e.type === 'info' && e.subtype === 'grammar') });
}
const unknown = named.filter((id) => !lessons.some((l) => l.id === id));
if (unknown.length) {
  console.error(`check-grammar-blocks: no lesson called ${unknown.join(', ')}`);
  process.exit(2);
}

const problems = []; // { lesson, text }
const tagOwner = new Map();
for (const { id, boxes } of lessons) {
  if (!boxes.length) problems.push({ lesson: id, text: 'no grammar box' });
  boxes.forEach((box, i) => {
    const title = box.title?.en?.join(' ');
    if (!title) problems.push({ lesson: id, text: `grammar box ${i + 1} has no title` });
    if (!box.tag) problems.push({ lesson: id, text: `grammar box "${title ?? i + 1}" has no tag` });
    else if (tagOwner.has(box.tag)) problems.push({ lesson: id, text: `tag "${box.tag}" is already used in ${tagOwner.get(box.tag)}` });
    else tagOwner.set(box.tag, id);
  });
}

for (const { id, boxes } of lessons) {
  const mine = problems.filter((p) => p.lesson === id);
  if (summary && !mine.length) continue;
  const list = boxes.map((b) => b.tag ?? '(no tag)').join(', ');
  console.log(`${id}: ${boxes.length} grammar box(es)${list ? ` -- ${list}` : ''}${mine.length ? `  ✗ ${mine.map((p) => p.text).join('; ')}` : ''}`);
}
const failing = problems.filter((p) => blocking(p.lesson));
if (failing.length) {
  console.error(`\ncheck-grammar-blocks: ${failing.length} problem(s) in ${scopeLabel}: ${[...new Set(failing.map((p) => p.lesson))].join(', ')}.`);
  process.exit(1);
}
const others = problems.length - failing.length;
console.log(`\ncheck-grammar-blocks: OK for ${scopeLabel}${others ? ` (${others} problem(s) in other lessons, reported only)` : ''}.`);
