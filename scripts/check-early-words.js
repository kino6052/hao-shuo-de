#!/usr/bin/env node
// Early-words gate: a lesson may only use words introduced in that lesson or
// an earlier one (BOOK_PLAN.md §4a, rule 2). Lists, per lesson, every word
// used before its home lesson and every pinyin word the dictionary doesn't
// have, with the block and sentence it's in. The rules for what counts as
// "using" a word are in scripts/early-words.js. It fails for problems in the
// blocking lessons (scripts/finished-lessons.js: the finished lessons, or the
// lessons you name, or every lesson with --strict), and reports the rest.
//
//   npm run check-early-words                          # every lesson; fails for finished ones
//   npm run check-early-words -- lesson-05 lesson-06   # only these lessons; fails for them
//   npm run check-early-words -- --summary             # one line per lesson
//   npm run check-early-words -- --strict              # fails for any lesson

import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { findEarlyWords } from './early-words.js';
import { gatePolicy } from './finished-lessons.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = resolve(__dirname, '..');
const CONTENT_DIR = resolve(ROOT, 'src/content');

const { named, blocking, scopeLabel, summary: summaryOnly } = gatePolicy();

// Every lesson is loaded (home lessons depend on all of them); naming lessons
// only limits what gets reported.
const lessons = [];
for (const id of readdirSync(CONTENT_DIR).filter((d) => /^lesson-\d+$/.test(d)).sort()) {
  const { meta, default: entries } = await import(pathToFileURL(resolve(CONTENT_DIR, id, 'index.ts')));
  const keys = Object.keys((await import(pathToFileURL(resolve(CONTENT_DIR, id, 'shape.ts')))).default);
  lessons.push({ id, number: meta.lessonNumber, entries: entries.map((e, i) => ({ key: keys[i], ...e })) });
}
lessons.sort((a, b) => a.number - b.number);

const dictionary = JSON.parse(readFileSync(resolve(ROOT, 'src/data/dictionary.json'), 'utf-8')).words;
const unknown = named.filter((id) => !lessons.some((l) => l.id === id));
if (unknown.length) {
  console.error(`check-early-words: no lesson called ${unknown.join(', ')}`);
  process.exit(2);
}
const reported = lessons.filter((l) => named.length === 0 || named.includes(l.id));
const { problems } = findEarlyWords(lessons, dictionary);
const mine = problems.filter((p) => reported.some((l) => l.id === p.lesson));

const LABEL = {
  early: (p) => `${p.word} (introduced in L${p.home})`,
  'not-in-dictionary': (p) => `${p.word} (not in the dictionary)`,
  'never-introduced': (p) => `${p.word} (no lesson introduces it)`,
};
for (const lesson of reported) {
  const list = mine.filter((p) => p.lesson === lesson.id);
  if (!list.length) continue;
  const words = [...new Set(list.map((p) => LABEL[p.kind](p)))];
  console.log(`${summaryOnly ? '' : '\n'}${lesson.id}: ${list.length} use(s) of ${words.length} word(s) -- ${words.join(', ')}${blocking(lesson.id) ? '  ✗ blocking' : ''}`);
  if (summaryOnly) continue;
  for (const p of list) {
    const text = p.text.replace(/\s+/g, ' ');
    console.log(`  ${p.key}  [${p.word}]  "${text.length > 110 ? `${text.slice(0, 110)}…` : text}"`);
  }
}
const failingLessons = [...new Set(mine.filter((p) => blocking(p.lesson)).map((p) => p.lesson))];
if (!mine.length) {
  console.log(`check-early-words: every word is introduced before it's used (${reported.length} lesson(s)).`);
} else if (failingLessons.length) {
  console.error(`\ncheck-early-words: words used too early, or not in the dictionary, in ${scopeLabel}: ${failingLessons.join(', ')}. See BOOK_PLAN.md §4a, rule 2.`);
  process.exit(1);
} else {
  const others = new Set(mine.map((p) => p.lesson)).size;
  console.log(`\ncheck-early-words: OK for ${scopeLabel}. ${mine.length} use(s) in ${others} other lesson(s), reported only.`);
}
