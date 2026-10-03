#!/usr/bin/env node
// Summary gate: every chapter summary is at most SUMMARY_MAX_WORDS (50)
// words (BOOK_PLAN.md §1, rule 7). Checks the English summary of every lesson,
// intro, and .yaml chapter (appendices, sentence builder). Prints each
// chapter's word count, and exits 1 if any summary is too long. A lesson with
// no summary is an error too. Intros and appendices may skip it.
//
//   npm run check-summaries                         # every chapter
//   npm run check-summaries -- who-does-what intro-3    # only these chapters
//   npm run check-summaries -- --over               # only the ones too long

import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { parse as parseYaml } from 'yaml';
import { SUMMARY_MAX_WORDS, countWords } from './limits.js';
import { LESSON_IDS, lessonNumber, importLessonFile } from './lessons.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const CONTENT_DIR = resolve(__dirname, '../src/content');

const args = process.argv.slice(2);
const overOnly = args.includes('--over');
const only = new Set(args.filter((a) => !a.startsWith('--')));
const wanted = (id) => only.size === 0 || only.has(id);

// [{ id, summary: string | null, required }]
const chapters = [];

for (const file of readdirSync(CONTENT_DIR).filter((f) => /^(intro-\d+|appendix-[a-z-]+)\.ts$/.test(f)).sort()) {
  const id = file.replace(/\.ts$/, '');
  if (!wanted(id)) continue;
  const entries = (await import(pathToFileURL(resolve(CONTENT_DIR, file)))).default;
  const summary = entries.find((e) => e.type === 'summary');
  chapters.push({ id, summary: summary ? summary.en.join(' ') : null, required: false });
}
for (const id of LESSON_IDS) {
  if (!wanted(id)) continue;
  const en = await importLessonFile(id, 'en.ts');
  chapters.push({ id, summary: en.summary?.en?.join(' ') || null, required: true });
}
for (const file of readdirSync(CONTENT_DIR).filter((f) => /\.ya?ml$/.test(f)).sort()) {
  const doc = parseYaml(readFileSync(resolve(CONTENT_DIR, file), 'utf-8'));
  const id = doc.id ?? file.replace(/\.ya?ml$/, '');
  if (!wanted(id)) continue;
  chapters.push({ id, summary: doc.summary?.eng ?? null, required: false });
}

const unknown = [...only].filter((id) => !chapters.some((c) => c.id === id));
if (unknown.length) {
  console.error(`check-summaries: no chapter called ${unknown.join(', ')}`);
  process.exit(2);
}

const problems = [];
const width = Math.max(...chapters.map((c) => c.id.length));
for (const { id, summary, required } of chapters) {
  if (!summary) {
    if (required) problems.push(id);
    if (!overOnly || required) console.log(`${id.padEnd(width)}   —   ${required ? 'MISSING' : '(no summary)'}`);
    continue;
  }
  const words = countWords(summary);
  const over = words > SUMMARY_MAX_WORDS;
  if (over) problems.push(id);
  if (overOnly && !over) continue;
  console.log(`${id.padEnd(width)}  ${String(words).padStart(3)}  ${over ? `TOO LONG (max ${SUMMARY_MAX_WORDS}): ${summary}` : ''}`);
}

if (problems.length) {
  console.error(`\ncheck-summaries: ${problems.length} summary(ies) missing or over ${SUMMARY_MAX_WORDS} words: ${problems.join(', ')}`);
  process.exit(1);
}
console.log(`\ncheck-summaries: all ${chapters.length} chapter summaries are ${SUMMARY_MAX_WORDS} words or fewer.`);
