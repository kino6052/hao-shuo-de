#!/usr/bin/env node
// Jargon gate: the book uses no grammar jargon at all (BOOK_PLAN.md §1,
// rule 4). Scans the English text of every chapter -- lessons, intros,
// appendices, proverbs, the sentence builder, and the dictionary (definitions,
// part-of-speech labels, and category names) -- for the words listed in
// scripts/jargon.js. Prints each hit with where it is. It fails for hits in
// the blocking chapters (scripts/finished-lessons.js: the finished lessons,
// or the chapters you name, or every chapter with --strict), and reports the
// rest. The few core terms the book allows (noun, verb, subject, object)
// never fail, but their counts are printed per chapter as a reminder to use
// them only where they're needed.
//
//   npm run check-jargon                              # whole book; fails for finished lessons
//   npm run check-jargon -- lesson-05 lesson-06       # only these chapters; fails for them
//   npm run check-jargon -- --summary                 # hit counts only
//   npm run check-jargon -- --strict                  # fails for any hit
//
// Chapter ids: lesson-NN, intro-N, appendix-*, proverbs, sentence-builder,
// dictionary, categorical-dictionary.

import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { parse as parseYaml } from 'yaml';
import { findJargon, findCoreTerms } from './jargon.js';
import { gatePolicy } from './finished-lessons.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = resolve(__dirname, '..');
const CONTENT_DIR = resolve(ROOT, 'src/content');

const { named, blocking, scopeLabel, summary: summaryOnly } = gatePolicy();
const only = new Set(named);
const wanted = (id) => only.size === 0 || only.has(id);

// chapter id -> [{ where, term, snippet }]
const hits = new Map();
// chapter id -> { core term -> count }
const coreCounts = new Map();
const checked = [];
function scan(chapter, where, text) {
  if (typeof text !== 'string' || !text) return;
  for (const { term, snippet } of findJargon(text)) {
    if (!hits.has(chapter)) hits.set(chapter, []);
    hits.get(chapter).push({ where, term, snippet });
  }
  for (const { term } of findCoreTerms(text)) {
    if (!coreCounts.has(chapter)) coreCounts.set(chapter, {});
    const counts = coreCounts.get(chapter);
    counts[term] = (counts[term] ?? 0) + 1;
  }
}
const countList = (counts) => Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([t, n]) => `${t} ×${n}`).join(', ');

// Walks a nested object, scanning only strings that sit under an English key
// ("en" in .ts chapters, "eng" in .yaml ones and the dictionary).
function walkEnglish(chapter, value, path, inEnglish = false) {
  if (typeof value === 'string') {
    if (inEnglish) scan(chapter, path || '(top)', value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((v, i) => walkEnglish(chapter, v, `${path}[${i}]`, inEnglish));
    return;
  }
  if (!value || typeof value !== 'object') return;
  for (const [key, v] of Object.entries(value)) {
    if (key === 'ru' || key === 'rus' || key === 'zh') continue;
    const english = inEnglish || key === 'en' || key === 'eng';
    const next = key === 'en' || key === 'eng' ? path : path ? `${path}.${key}` : key;
    walkEnglish(chapter, v, next, english);
  }
}

// ---------- lessons: every string in en.ts, located by block key ----------
for (const dir of readdirSync(CONTENT_DIR).filter((d) => /^lesson-\d+$/.test(d)).sort()) {
  if (!wanted(dir)) continue;
  checked.push(dir);
  const en = (await import(pathToFileURL(resolve(CONTENT_DIR, dir, 'en.ts')))).default;
  walkEnglish(dir, en, '');
}

// ---------- intros ----------
for (const file of readdirSync(CONTENT_DIR).filter((f) => /^(intro-\d+|appendix-[a-z-]+)\.ts$/.test(f)).sort()) {
  const id = file.replace(/\.ts$/, '');
  if (!wanted(id)) continue;
  checked.push(id);
  const entries = (await import(pathToFileURL(resolve(CONTENT_DIR, file)))).default;
  entries.forEach((entry, i) => walkEnglish(id, entry, `block ${i} (${entry.type})`));
}

// ---------- yaml chapters: appendices, sentence builder ----------
for (const file of readdirSync(CONTENT_DIR).filter((f) => /\.ya?ml$/.test(f)).sort()) {
  const doc = parseYaml(readFileSync(resolve(CONTENT_DIR, file), 'utf-8'));
  const id = doc.id ?? file.replace(/\.ya?ml$/, '');
  if (!wanted(id)) continue;
  checked.push(id);
  walkEnglish(id, doc, '');
}

// ---------- markdown chapters (English only; dictionary.md is generated) ----------
for (const file of readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md') && !/\.(rus|zh)\.md$/.test(f) && f !== 'dictionary.md').sort()) {
  const raw = readFileSync(resolve(CONTENT_DIR, file), 'utf-8');
  const id = raw.match(/^id:\s*(\S+)/m)?.[1] ?? file.replace(/\.md$/, '');
  if (!wanted(id)) continue;
  checked.push(id);
  const frontmatter = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/)?.[0] ?? '';
  const firstLine = frontmatter.split('\n').length;
  raw.slice(frontmatter.length).split(/\r?\n/).forEach((line, i) => scan(id, `${file}:${firstLine + i}`, line));
}

// ---------- dictionary: definitions, part-of-speech labels, categories ----------
if (wanted('dictionary')) {
  checked.push('dictionary');
  const dictionary = JSON.parse(readFileSync(resolve(ROOT, 'src/data/dictionary.json'), 'utf-8'));
  for (const [id, word] of Object.entries(dictionary.words)) {
    scan('dictionary', `${id} (part of speech)`, word.pos?.eng);
    scan('dictionary', `${id} (definition)`, word.definition?.eng);
  }
  walkEnglish('dictionary', dictionary.categories, 'categories');
}

// ---------- report ----------
const unknown = [...only].filter((id) => !checked.includes(id));
if (unknown.length) {
  console.error(`check-jargon: no chapter called ${unknown.join(', ')}`);
  process.exit(2);
}
let total = 0;
for (const id of checked) {
  const list = hits.get(id);
  if (!list) continue;
  total += list.length;
  const counts = {};
  for (const h of list) counts[h.term] = (counts[h.term] ?? 0) + 1;
  console.log(`${summaryOnly ? '' : '\n'}${id}: ${list.length} hit(s) -- ${countList(counts)}${blocking(id) ? '  ✗ blocking' : ''}`);
  if (!summaryOnly) for (const h of list) console.log(`  ${h.where}  [${h.term}]  "${h.snippet}"`);
}
const withCore = checked.filter((id) => coreCounts.has(id));
if (withCore.length && !summaryOnly) {
  console.log('\nCore terms (allowed -- use only where needed):');
  for (const id of withCore) console.log(`  ${id}: ${countList(coreCounts.get(id))}`);
}
const failing = checked.filter((id) => hits.has(id) && blocking(id));
if (total === 0) {
  console.log(`\ncheck-jargon: no jargon in ${checked.length} chapter(s).`);
} else if (failing.length) {
  console.error(`\ncheck-jargon: jargon in ${scopeLabel}: ${failing.join(', ')}. Plain words only -- see BOOK_PLAN.md §1, rule 4.`);
  process.exit(1);
} else {
  console.log(`\ncheck-jargon: OK for ${scopeLabel}. ${total} hit(s) in ${hits.size} other chapter(s), reported only.`);
}
