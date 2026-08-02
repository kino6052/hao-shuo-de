#!/usr/bin/env node
// Cross-references every dictionary word against every lesson/proverbs/appendix
// content file, so the dictionary UI can show "used in: Lesson 3, Lesson 5"
// next to each word -- and, just as importantly, flag words that appear in
// NO chapter at all, so unused vocabulary is easy to spot.
//
// Matching is exact, tone-marked, word-boundary-aware (a term only counts as
// "used" where it appears as its own token, not as a substring of a longer
// word -- so "yī" doesn't false-match inside "yīfu"). This requires every
// chapter's pinyin to actually carry correct tone marks; lessons 6-20 didn't
// used to, which is why this script wasn't viable before that pass.
//
// Output: src/data/word-usage.json, structured as:
//   { chapters: { <chapterId>: { label, order } }, words: { <wordId>: [chapterId, ...] } }
// Regenerate after editing any lesson/proverbs/appendix content or the
// dictionary itself: `node scripts/generate-word-usage.js`.

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { parse as parseYaml } from 'yaml';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = resolve(__dirname, '..');
const CONTENT_DIR = resolve(ROOT, 'src/content');
const DICTIONARY_PATH = resolve(ROOT, 'src/data/dictionary.json');
const OUT_PATH = resolve(ROOT, 'src/data/word-usage.json');

// Content that actually teaches/uses vocabulary. Intro chapters and the
// dictionary's own pages are excluded -- they don't "use" words pedagogically,
// and including the dictionary would make every word trivially self-referential.
const EXCLUDE_PREFIXES = ['intro-', 'dictionary'];

function isTrackedFile(filename) {
  if (!filename.endsWith('.md') && !filename.endsWith('.yaml') && !filename.endsWith('.yml')) return false;
  return !EXCLUDE_PREFIXES.some((prefix) => filename.startsWith(prefix));
}

// Flattens every string value in a parsed YAML chapter object into one blob,
// so vocab terms, prose text, example/story pinyin, and answer text are all
// searched without hand-enumerating the block schema (and this stays correct
// if the schema grows new block types).
function flattenStrings(value, out) {
  if (typeof value === 'string') { out.push(value); return; }
  if (Array.isArray(value)) { for (const v of value) flattenStrings(v, out); return; }
  if (value && typeof value === 'object') { for (const v of Object.values(value)) flattenStrings(v, out); }
}

function loadChapter(filename) {
  const raw = readFileSync(resolve(CONTENT_DIR, filename), 'utf-8');

  if (filename.endsWith('.yaml') || filename.endsWith('.yml')) {
    const chapter = parseYaml(raw);
    const strings = [];
    flattenStrings(chapter.blocks, strings);
    flattenStrings(chapter.summary, strings);
    return {
      id: chapter.id,
      lessonNumber: chapter.lessonNumber,
      order: chapter.order ?? 999,
      title: chapter.title?.eng ?? chapter.id,
      text: strings.join('\n'),
    };
  }

  const { data, content } = matter(raw);
  return {
    id: data.id,
    lessonNumber: data.lessonNumber,
    order: data.order ?? 999,
    title: data.title ?? data.id,
    text: content,
  };
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// A term counts as "used" only as its own token: flanked by start/end of
// string or a non-letter (space, hyphen, quote, punctuation) on both sides.
// Matching is case-insensitive on the lowercased term/text so sentence-initial
// capitals (e.g. "Hǎo" for dictionary term "hǎo") still count.
function makeMatcher(term) {
  const pattern = new RegExp(`(?<![\\p{L}])${escapeRegex(term.toLowerCase())}(?![\\p{L}])`, 'u');
  return (text) => pattern.test(text.toLowerCase());
}

function main() {
  const dictionary = JSON.parse(readFileSync(DICTIONARY_PATH, 'utf-8'));
  const files = readdirSync(CONTENT_DIR).filter(isTrackedFile);
  const chaptersRaw = files.map(loadChapter);

  const chapters = {};
  for (const c of chaptersRaw) {
    chapters[c.id] = {
      label: c.lessonNumber != null ? `Lesson ${c.lessonNumber} · ${c.title}` : c.title,
      order: c.lessonNumber ?? c.order,
    };
  }

  const words = {};
  let usedCount = 0;
  for (const [id, word] of Object.entries(dictionary.words)) {
    const matches = makeMatcher(word.term);
    const usedIn = chaptersRaw.filter((c) => matches(c.text)).map((c) => c.id);
    usedIn.sort((a, b) => chapters[a].order - chapters[b].order);
    words[id] = usedIn;
    if (usedIn.length > 0) usedCount += 1;
  }

  writeFileSync(OUT_PATH, JSON.stringify({ chapters, words }, null, 2) + '\n', 'utf-8');

  const total = Object.keys(dictionary.words).length;
  console.log(`Scanned ${chaptersRaw.length} chapters for ${total} dictionary words.`);
  console.log(`${usedCount} words used somewhere; ${total - usedCount} words not used anywhere.`);
}

main();
