// Every intro, in reading order. Like lessons.js, but for the introduction
// chapters: each lives in src/content/intros/<id>/ (id "intro-1", "intro-2", ...),
// and their order is the number in the id.

import { readdirSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
export const INTROS_DIR = resolve(ROOT, 'src/content/intros');

const numberOf = (id) => Number(/-(\d+)$/.exec(id)?.[1] ?? 0);

// -> the intro ids, in reading order
export const INTRO_IDS = readdirSync(INTROS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && /^intro-\d+$/.test(d.name))
  .map((d) => d.name)
  .sort((a, b) => numberOf(a) - numberOf(b));

// -> the path of one of an intro's files (index.ts, a section's file).
export const introFile = (id, file) => resolve(INTROS_DIR, id, file);

// -> an intro file's default export (its index.ts is the entries).
export async function importIntroFile(id, file = 'index.ts') {
  return (await import(pathToFileURL(introFile(id, file)))).default;
}

// -> [{ id, number, entries }] for every intro, in order.
export async function loadIntros() {
  const intros = [];
  for (const id of INTRO_IDS) intros.push({ id, number: numberOf(id), entries: await importIntroFile(id) });
  return intros;
}
