#!/usr/bin/env node
// Cross-references every dictionary word against every lesson/proverbs/appendix
// content file, so the dictionary UI can show "used in: Lesson 3, Lesson 5"
// next to each word -- and, just as importantly, flag words that appear in
// NO chapter at all, so unused vocabulary is easy to spot.
//
// Chapters reference dictionary words by id via {{word:ID}} / {{Word:ID}}
// (see scripts/word-refs.js) rather than hardcoding pinyin, so dictionary.json
// stays the single source of truth for spelling. That makes usage detection
// exact: this script just collects every {{word:ID}}/{{Word:ID}} reference in
// each chapter's raw source, before word-refs.js substitutes it -- no fuzzy
// text matching, no tone/homophone ambiguity.
//
// Output: src/data/word-usage.json, structured as:
//   { chapters: { <chapterId>: { label, order } }, words: { <wordId>: [chapterId, ...] } }
// Regenerate after editing any lesson/proverbs/appendix content or the
// dictionary itself: `node scripts/generate-word-usage.js`.

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import matter from 'gray-matter';
import { parse as parseYaml } from 'yaml';
import { listContentFiles } from './list-content-files.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = resolve(__dirname, '..');
const CONTENT_DIR = resolve(ROOT, 'src/content');
const DICTIONARY_PATH = resolve(ROOT, 'src/data/dictionary.json');
const OUT_PATH = resolve(ROOT, 'src/data/word-usage.json');

// Content that actually teaches/uses vocabulary. Intro chapters and the
// dictionary's own pages are excluded -- they don't "use" words pedagogically,
// and including the dictionary would make every word trivially self-referential.
const EXCLUDE_PREFIXES = ['intro-', 'dictionary'];

const WORD_REF_RE = /\{\{(?:word|Word):([a-z0-9-]+)\}\}/g;

function isTrackedFile(filename) {
  if (!filename.endsWith('.md') && !filename.endsWith('.yaml') && !filename.endsWith('.yml') && !filename.endsWith('.ts')) return false;
  // A lesson folder's shape.ts/en.ts/ru.ts/zh.ts (see chapter-shape-types.ts)
  // are internal building blocks, not separate chapters -- only index.ts
  // (or a flat file like intro-1.ts) is one.
  if (filename.endsWith('.ts') && filename.includes('/') && !filename.endsWith('/index.ts')) return false;
  return !EXCLUDE_PREFIXES.some((prefix) => filename.startsWith(prefix));
}

async function loadChapter(filename) {
  // For a folder-based chapter (lesson-01/index.ts), {{word:..}} refs live
  // scattered across shape.ts/en.ts/ru.ts/zh.ts too (see
  // chapter-shape-types.ts) -- concatenate the whole folder's *.ts files so
  // the regex scan below still sees every reference, not just index.ts's.
  const raw = filename.endsWith('/index.ts')
    ? readdirSync(dirname(resolve(CONTENT_DIR, filename)))
        .filter((f) => f.endsWith('.ts'))
        .map((f) => readFileSync(resolve(CONTENT_DIR, dirname(filename), f), 'utf-8'))
        .join('\n')
    : readFileSync(resolve(CONTENT_DIR, filename), 'utf-8');

  if (filename.endsWith('.yaml') || filename.endsWith('.yml')) {
    // Reading id/lessonNumber/title back out of the parsed doc (rather than
    // regexing the raw text) keeps this in sync with the real chapter schema;
    // reference IDs themselves are still collected from the raw source below.
    const chapter = parseYaml(raw);
    return {
      id: chapter.id,
      lessonNumber: chapter.lessonNumber,
      order: chapter.order ?? 999,
      title: chapter.title?.eng ?? chapter.id,
      raw,
    };
  }

  if (filename.endsWith('.ts')) {
    // See src/lib/chapter-content.js: meta.title lives in the entries array
    // (a `type: 'title'` entry), not on `meta` itself.
    const { meta, default: entries } = await import(pathToFileURL(resolve(CONTENT_DIR, filename)));
    const titleEntry = entries.find((e) => e.type === 'title');
    return {
      id: meta.id,
      lessonNumber: meta.lessonNumber,
      order: meta.order ?? 999,
      title: titleEntry?.en?.join(' ') || meta.id,
      raw,
    };
  }

  const { data } = matter(raw);
  return {
    id: data.id,
    lessonNumber: data.lessonNumber,
    order: data.order ?? 999,
    title: data.title ?? data.id,
    raw,
  };
}

function collectWordRefs(text) {
  const ids = new Set();
  for (const match of text.matchAll(WORD_REF_RE)) ids.add(match[1]);
  return ids;
}

async function main() {
  const dictionary = JSON.parse(readFileSync(DICTIONARY_PATH, 'utf-8'));
  const files = listContentFiles(CONTENT_DIR).filter(isTrackedFile);
  const chaptersRaw = await Promise.all(files.map(loadChapter));

  const chapters = {};
  for (const c of chaptersRaw) {
    chapters[c.id] = {
      label: c.lessonNumber != null ? `Lesson ${c.lessonNumber} · ${c.title}` : c.title,
      order: c.lessonNumber ?? c.order,
    };
  }

  const words = {};
  for (const id of Object.keys(dictionary.words)) words[id] = [];

  const unknownRefs = new Set();
  for (const c of chaptersRaw) {
    for (const id of collectWordRefs(c.raw)) {
      if (!dictionary.words[id]) { unknownRefs.add(`${id} (in ${c.id})`); continue; }
      words[id].push(c.id);
    }
  }
  for (const id of Object.keys(words)) {
    words[id].sort((a, b) => chapters[a].order - chapters[b].order);
  }

  if (unknownRefs.size > 0) {
    throw new Error(`{{word:..}} refs with no matching dictionary id: ${[...unknownRefs].join(', ')}`);
  }

  writeFileSync(OUT_PATH, JSON.stringify({ chapters, words }, null, 2) + '\n', 'utf-8');

  const total = Object.keys(dictionary.words).length;
  const usedCount = Object.values(words).filter((chs) => chs.length > 0).length;
  console.log(`Scanned ${chaptersRaw.length} chapters for ${total} dictionary words.`);
  console.log(`${usedCount} words used somewhere; ${total - usedCount} words not used anywhere.`);
}

await main();
