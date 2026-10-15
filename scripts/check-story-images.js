#!/usr/bin/env node
// Story-picture gate (MASCOT_PLAN.md §5, §9): every picture of the book's story
// (an `image` entry in a lesson or an intro) is a real file in public/story/, is
// named after its chapter, has a caption (Miao-miao's line in Hao-shuo-de and
// its plain meaning) and a description in English and Russian, and every file
// there is used. A lesson with no picture yet is reported; with --strict it
// fails (use that once the whole book has its pictures).
//
//   npm run check-story-images                  # fail for a broken picture, report lessons without one
//   npm run check-story-images -- --strict      # also fail for a lesson without a picture

import { existsSync, readdirSync, readFileSync, statSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { LESSON_IDS, importLessonFile } from './lessons.js';
import { INTRO_IDS, importIntroFile } from './intros.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const DIR = resolve(ROOT, 'public/story');
const MAX_BYTES = 600 * 1024;
const strict = process.argv.includes('--strict');

const has = (t) => Array.isArray(t) && t.some((s) => typeof s === 'string' && s.trim());

// -> [{ chapter, entries }] for the lessons, then the intros
const chapters = [];
for (const id of LESSON_IDS) chapters.push({ chapter: id, entries: await importLessonFile(id, 'index.ts') });
for (const id of INTRO_IDS) chapters.push({ chapter: id, entries: await importIntroFile(id) });

const problems = [];
const missing = [];
const used = new Set();
let count = 0;
for (const { chapter, entries } of chapters) {
  const images = entries.filter((e) => e.type === 'image');
  if (!images.length && LESSON_IDS.includes(chapter)) missing.push(chapter);
  images.forEach((img, i) => {
    count += 1;
    const where = `${chapter}${img.key ? `/${img.key}` : ` (picture ${i + 1})`}`;
    const bad = (text) => problems.push(`${where}: ${text}`);
    if (!img.file || !/^[a-z0-9-]+$/.test(img.file)) return bad(`file name "${img.file}" must be lowercase letters, digits and hyphens`);
    if (img.file !== chapter && !img.file.startsWith(`${chapter}-`)) bad(`file "${img.file}" must be named after its chapter ("${chapter}" or "${chapter}-…")`);
    if (used.has(img.file)) bad(`file "${img.file}" is used twice`);
    used.add(img.file);
    if (!has(img.alt?.en)) bad('no English description (alt)');
    if (!has(img.alt?.ru)) bad('no Russian description (alt)');
    if (!has(img.en)) bad('no English caption');
    if (!img.pinyin || !img.pinyin.trim()) bad("no caption in Hao-shuo-de (pinyin)");
    const path = resolve(DIR, `${img.file}.webp`);
    if (!existsSync(path)) return bad(`public/story/${img.file}.webp doesn't exist`);
    const bytes = readFileSync(path);
    if (bytes.length < 12 || bytes.toString('ascii', 0, 4) !== 'RIFF' || bytes.toString('ascii', 8, 12) !== 'WEBP') bad('the file is not a WebP picture');
    if (statSync(path).size > MAX_BYTES) bad(`the file is ${Math.round(statSync(path).size / 1024)} KB; keep it under ${MAX_BYTES / 1024} KB`);
  });
}

const files = existsSync(DIR) ? readdirSync(DIR).filter((f) => !f.startsWith('.')) : [];
for (const f of files) {
  if (!f.endsWith('.webp')) problems.push(`public/story/${f}: only .webp pictures belong here`);
  else if (!used.has(f.replace(/\.webp$/, ''))) problems.push(`public/story/${f}: no chapter uses this picture`);
}

if (problems.length) {
  console.error(problems.map((p) => `  ✗ ${p}`).join('\n'));
  console.error(`\ncheck-story-images: ${problems.length} problem(s).`);
  process.exit(1);
}
if (missing.length) {
  const list = `${missing.length} of ${LESSON_IDS.length} lessons have no picture yet`;
  if (strict) {
    console.error(`check-story-images: ${list}: ${missing.join(', ')}`);
    process.exit(1);
  }
  console.log(`check-story-images: OK for ${count} picture(s); ${list} (reported only).`);
} else {
  console.log(`check-story-images: OK, ${count} picture(s), every lesson has one.`);
}
