#!/usr/bin/env node
// Practice gate: in every lesson, each word the lesson introduces appears in
// at least one of its example sentences AND in at least one exercise (its
// answer -- exercise prompts are English). A lesson with new words must have
// examples and exercises at all. Rules in scripts/word-use.js (practiceGaps).
// Fails for the blocking lessons (scripts/finished-lessons.js: the finished
// lessons, or the lessons you name, or every lesson with --strict), and
// reports the rest.
//
//   npm run check-practice                  # report all; fail for finished lessons
//   npm run check-practice -- lesson-08     # fail if lesson 8 has a gap
//   npm run check-practice -- --summary     # only the lessons with gaps
//   npm run check-practice -- --strict      # fail for any lesson

import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { practiceGaps } from './word-use.js';
import { gatePolicy } from './finished-lessons.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = resolve(__dirname, '..');
const CONTENT_DIR = resolve(ROOT, 'src/content');
const { named, blocking, scopeLabel, summary } = gatePolicy();

const dictionary = JSON.parse(readFileSync(resolve(ROOT, 'src/data/dictionary.json'), 'utf-8')).words;
const lessons = [];
for (const id of readdirSync(CONTENT_DIR).filter((d) => /^lesson-\d+$/.test(d)).sort()) {
  if (named.length && !named.includes(id)) continue;
  const { meta, default: entries } = await import(pathToFileURL(resolve(CONTENT_DIR, id, 'index.ts')));
  lessons.push({ id, number: meta.lessonNumber, entries });
}
const unknown = named.filter((id) => !lessons.some((l) => l.id === id));
if (unknown.length) {
  console.error(`check-practice: no lesson called ${unknown.join(', ')}`);
  process.exit(2);
}

const failing = [];
let others = 0;
for (const g of practiceGaps(lessons, dictionary)) {
  const problems = [];
  if (g.introduced && !g.examples) problems.push('no examples');
  if (g.introduced && !g.exercises) problems.push('no exercises');
  if (g.examples && g.missingExample.length) problems.push(`not in any example: ${g.missingExample.join(', ')}`);
  if (g.exercises && g.missingExercise.length) problems.push(`not in any exercise: ${g.missingExercise.join(', ')}`);
  if (problems.length) (blocking(g.lesson) ? failing : { push: () => others++ }).push(g.lesson);
  if (summary && !problems.length) continue;
  const counts = `${g.introduced} new word(s), ${g.examples} example(s), ${g.exercises} exercise(s)`;
  console.log(`${g.lesson}: ${counts}${problems.length ? `  ✗ ${problems.join('; ')}${blocking(g.lesson) ? '  (blocking)' : ''}` : ''}`);
}

if (failing.length) {
  console.error(`\ncheck-practice: words without an example or an exercise in ${scopeLabel}: ${failing.join(', ')}.`);
  process.exit(1);
}
console.log(`\ncheck-practice: OK for ${scopeLabel}${others ? ` (${others} other lesson(s) with gaps, reported only)` : ''}.`);
