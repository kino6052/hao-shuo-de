#!/usr/bin/env node
// Checks that the lessons match the book's plan (see BOOK_PLAN.md §3-§4):
//
//   1. intro-3's table of contents and the lessons agree: same sections, same
//      order, and each lesson's title is exactly the **bold name** intro-3
//      gives it. src/lib/lesson-sections.js must group lessons the same way.
//   2. Every dictionary word is introduced (has a `vocab` block) in exactly
//      one lesson. If BOOK_PLAN.md is present, each lesson's vocab list must
//      also match its row in the §4b table.
//   3. Every summary and tldr/necessity line (lessons and intros) is
//      jargon-free (scripts/jargon.js) and within the limits in
//      scripts/limits.js -- for every lesson, finished or not.
//
// The other gates (jargon in the rest of the text, early words, word use,
// grammar boxes) are separate scripts; scripts/check-all.js runs them all on
// every build.
//
// Prints the New / Total so far counts per lesson. Exits non-zero on failure.
//
//   node scripts/check-book.js

import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { LESSON_SECTIONS } from '../src/lib/lesson-sections.js';
import { findJargon } from './jargon.js';
import { SUMMARY_MAX_WORDS, TLDR_MAX_WORDS, countWords } from './limits.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = resolve(__dirname, '..');
const CONTENT_DIR = resolve(ROOT, 'src/content');
const PLAN_PATH = resolve(ROOT, 'BOOK_PLAN.md');

const errors = [];

const dictionary = JSON.parse(readFileSync(resolve(ROOT, 'src/data/dictionary.json'), 'utf-8')).words;
const termToId = new Map(Object.entries(dictionary).map(([id, w]) => [w.term.normalize('NFC'), id]));

// ---------- load lessons ----------
const lessonIds = readdirSync(CONTENT_DIR).filter((d) => /^lesson-\d+$/.test(d)).sort();
const lessons = [];
for (const id of lessonIds) {
  const { meta, default: entries } = await import(pathToFileURL(resolve(CONTENT_DIR, id, 'index.ts')));
  const title = entries.find((e) => e.type === 'title')?.en?.join(' ') ?? '';
  const vocab = [];
  for (const entry of entries) {
    if (entry.type !== 'vocab') continue;
    const m = entry.term.match(/^\{\{word:([a-z0-9-]+)\}\}$/);
    if (m) vocab.push(m[1]);
    else errors.push(`${id}: vocab term "${entry.term}" is not a single dictionary word`);
  }
  lessons.push({ id, number: meta.lessonNumber, title, vocab, entries });
}
lessons.sort((a, b) => a.number - b.number);

// ---------- 1. intro-3's table of contents ----------
const intro = (await import(pathToFileURL(resolve(CONTENT_DIR, 'intro-3.ts')))).default;
const tocSections = intro
  .filter((e) => e.type === 'info' && /^Section [1-3] /.test(e.title?.en?.[0] ?? ''))
  .map((e) => ({
    title: e.title.en[0],
    lessons: e.items.map((item) => item.text.en.join(' ').match(/^\*\*(.+?)\*\*/)?.[1] ?? '(no bold name)'),
  }));
const tocTitles = tocSections.flatMap((s) => s.lessons);

if (tocSections.length !== LESSON_SECTIONS.length) {
  errors.push(`intro-3 has ${tocSections.length} lesson sections, src/lib/lesson-sections.js has ${LESSON_SECTIONS.length}`);
}
if (tocTitles.length !== lessons.length) {
  errors.push(`intro-3 lists ${tocTitles.length} lessons, src/content has ${lessons.length}`);
}
lessons.forEach((lesson, i) => {
  if (lesson.number !== i + 1) errors.push(`${lesson.id}: lessonNumber is ${lesson.number}, expected ${i + 1}`);
  if (tocTitles[i] !== undefined && tocTitles[i] !== lesson.title) {
    errors.push(`${lesson.id}: title "${lesson.title}" doesn't match intro-3's lesson ${i + 1}, "${tocTitles[i]}"`);
  }
});
let offset = 0;
tocSections.forEach((section, i) => {
  const expected = lessons.slice(offset, offset + section.lessons.length).map((l) => l.id);
  offset += section.lessons.length;
  const actual = LESSON_SECTIONS[i]?.lessonIds ?? [];
  if (expected.join() !== actual.join()) {
    errors.push(`"${section.title}": intro-3 puts ${expected.join(', ')} here, lesson-sections.js has ${actual.join(', ')}`);
  }
});

// ---------- 2. every word introduced exactly once ----------
const home = new Map();
for (const lesson of lessons) {
  for (const wordId of lesson.vocab) {
    if (!dictionary[wordId]) errors.push(`${lesson.id}: vocab word "${wordId}" is not in the dictionary`);
    else if (home.has(wordId)) errors.push(`"${wordId}" is introduced twice: ${home.get(wordId).id} and ${lesson.id}`);
    else home.set(wordId, lesson);
  }
}
const neverIntroduced = Object.keys(dictionary).filter((wordId) => !home.has(wordId));
if (neverIntroduced.length) errors.push(`words no lesson introduces: ${neverIntroduced.join(', ')}`);

if (existsSync(PLAN_PATH)) {
  const plan = readFileSync(PLAN_PATH, 'utf-8');
  const table = plan.split('### 4b.')[1]?.split('\n###')[0] ?? '';
  const rows = table.split('\n').filter((line) => /^\| \d+ \|/.test(line));
  if (!rows.length) errors.push('BOOK_PLAN.md: no §4b table found');
  for (const row of rows) {
    const cells = row.split('|').map((c) => c.trim());
    const number = Number(cells[1]);
    const planned = cells
      .slice(3, 6)
      .flatMap((c) => (c === '—' ? [] : c.split(',').map((w) => w.trim().normalize('NFC'))))
      .map((term) => termToId.get(term) ?? `?${term}`);
    const lesson = lessons.find((l) => l.number === number);
    if (!lesson) { errors.push(`BOOK_PLAN.md §4b: no lesson ${number}`); continue; }
    const actual = [...lesson.vocab].sort().join();
    if ([...planned].sort().join() !== actual) {
      errors.push(`${lesson.id}: vocab [${lesson.vocab.join(', ')}] doesn't match BOOK_PLAN.md §4b [${planned.join(', ')}]`);
    }
  }
}

// ---------- 3. summaries and TL;DR lines ----------
function checkShortLine(where, field, sentences, maxWords) {
  const text = (sentences ?? []).join(' ');
  if (!text) return errors.push(`${where}: ${field} is missing`);
  const jargon = findJargon(text).map((h) => h.term);
  if (jargon.length) errors.push(`${where}: ${field} uses jargon (${[...new Set(jargon)].join(', ')}): "${text}"`);
  const words = countWords(text);
  if (words > maxWords) errors.push(`${where}: ${field} is ${words} words, max ${maxWords}: "${text}"`);
}

for (const lesson of lessons) {
  lesson.entries.forEach((entry, i) => {
    if (entry.type === 'summary') checkShortLine(lesson.id, 'summary', entry.en, SUMMARY_MAX_WORDS);
    if (entry.type === 'prose') {
      checkShortLine(`${lesson.id} block ${i}`, 'tldr', entry.tldr?.en, TLDR_MAX_WORDS);
      checkShortLine(`${lesson.id} block ${i}`, 'necessity', entry.necessity?.en, TLDR_MAX_WORDS);
    }
  });
}
for (const n of [1, 2, 3]) {
  const entries = (await import(pathToFileURL(resolve(CONTENT_DIR, `intro-${n}.ts`)))).default;
  entries.forEach((entry, i) => {
    if (entry.type === 'summary') checkShortLine(`intro-${n}`, 'summary', entry.en, SUMMARY_MAX_WORDS);
    if (entry.type === 'prose' && (entry.tldr || entry.necessity)) {
      checkShortLine(`intro-${n} block ${i}`, 'tldr', entry.tldr?.en, TLDR_MAX_WORDS);
      checkShortLine(`intro-${n} block ${i}`, 'necessity', entry.necessity?.en, TLDR_MAX_WORDS);
    }
  });
}

// ---------- report ----------
const total = Object.keys(dictionary).length;
let soFar = 0;
console.log(`L   New  Total so far  Lesson`);
for (const lesson of lessons) {
  soFar += lesson.vocab.length;
  const pct = Math.round((soFar / total) * 100);
  console.log(
    `${String(lesson.number).padEnd(3)} ${String(lesson.vocab.length).padStart(3)}  ${`${soFar} / ${total}`.padStart(9)} ${`${pct}%`.padStart(4)}  ${lesson.title}`,
  );
}
if (errors.length) {
  console.error(`\ncheck-book: ${errors.length} error(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`\ncheck-book: OK -- ${lessons.length} lessons match intro-3, ${home.size}/${total} words introduced once.`);
