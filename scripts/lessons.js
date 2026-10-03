// Every lesson, in book order. The build scripts load lessons through this,
// never by listing folders: the order, the sections, and every lesson's
// number come from src/content/book.js, and a lesson lives in
// src/content/lessons/<id>/. scripts/check-book.js checks the two agree.

import { readdirSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { LESSON_IDS, lessonNumber } from '../src/content/book.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
export const LESSONS_DIR = resolve(ROOT, 'src/content/lessons');
export { LESSON_IDS, lessonNumber };

// -> the path of one of a lesson's files (index.ts, shape.ts, en.ts, ...).
export const lessonFile = (id, file) => resolve(LESSONS_DIR, id, file);

// -> a lesson file's default export.
export async function importLessonFile(id, file) {
  return (await import(pathToFileURL(lessonFile(id, file)))).default;
}

// -> [{ id, number, entries }] for every lesson in the book, in order.
export async function loadLessons() {
  const lessons = [];
  for (const id of LESSON_IDS) {
    lessons.push({ id, number: lessonNumber(id), entries: await importLessonFile(id, 'index.ts') });
  }
  return lessons;
}

// -> the folders in src/content/lessons/, whether or not book.js lists them.
export function lessonFolders() {
  return readdirSync(LESSONS_DIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort();
}
