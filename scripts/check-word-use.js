#!/usr/bin/env node
// Word-use gate: every dictionary word is actually used -- in at least one
// example sentence or answer in the lesson that introduces it, not just on
// its vocab card (BOOK_PLAN.md §4a, rule 7; rules in scripts/word-use.js).
// It fails for words introduced in the blocking lessons
// (scripts/finished-lessons.js: the finished lessons, or the lessons you
// name, or every lesson with --strict), and reports the rest.
//
// It also reports rule 7's targets: at least 3 sentences in the word's own
// lesson, and reuse in at least 2 later lessons (or the stories appendix).
// Those are warnings, except with --strict.
//
//   npm run check-word-use                  # report all; fail for finished lessons
//   npm run check-word-use -- lesson-07     # fail for words lesson 7 introduces
//   npm run check-word-use -- --targets     # also list every word below target
//   npm run check-word-use -- --strict      # fail for any word, and for missed targets
//   npm run check-word-use -- --summary     # counts only

import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { parse as parseYaml } from 'yaml';
import { wordUse, wordUseProblems, HOME_LESSON_MIN, LATER_LESSONS_MIN } from './word-use.js';
import { gatePolicy } from './finished-lessons.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = resolve(__dirname, '..');
const CONTENT_DIR = resolve(ROOT, 'src/content');
const { args, strict, named, blocking, scopeLabel, summary } = gatePolicy();
const showTargets = args.includes('--targets') || strict;

const dictionary = JSON.parse(readFileSync(resolve(ROOT, 'src/data/dictionary.json'), 'utf-8')).words;
const lessons = [];
for (const id of readdirSync(CONTENT_DIR).filter((d) => /^lesson-\d+$/.test(d)).sort()) {
  const { meta, default: entries } = await import(pathToFileURL(resolve(CONTENT_DIR, id, 'index.ts')));
  lessons.push({ id, number: meta.lessonNumber, entries });
}
const unknown = named.filter((id) => !lessons.some((l) => l.id === id));
if (unknown.length) {
  console.error(`check-word-use: no lesson called ${unknown.join(', ')}`);
  process.exit(2);
}
const storyTexts = [];
(function collect(v) {
  if (typeof v === 'string') storyTexts.push(v);
  else if (v && typeof v === 'object') Object.values(v).forEach(collect);
})(parseYaml(readFileSync(resolve(CONTENT_DIR, 'appendix-stories.yaml'), 'utf-8')));

const lessonId = (n) => `lesson-${String(n).padStart(2, '0')}`;
const rows = wordUse(lessons, dictionary, storyTexts).filter((r) => named.length === 0 || (r.home && named.includes(lessonId(r.home))));
const { unused, fewHomeUses, notReused } = wordUseProblems(rows);
const where = (r) => (r.home ? `L${r.home}` : 'no lesson');

// Fails: a blocking lesson's word with no sentence in that lesson; with
// --strict, also any unused word and any missed target.
const failing = rows.filter((r) => r.home && blocking(lessonId(r.home)) && r.homeUses === 0);
if (strict) for (const r of [...unused, ...fewHomeUses, ...notReused]) if (!failing.includes(r)) failing.push(r);

const notAtHome = rows.filter((r) => r.home && r.homeUses === 0);
if (notAtHome.length) {
  console.log(`No sentence in the lesson that introduces them (${notAtHome.length}):`);
  if (!summary) {
    for (const r of notAtHome) {
      const elsewhere = r.usedAnywhere ? ` -- used later in ${r.laterLessons.map((n) => `L${n}`).join(', ')}` : '';
      console.log(`  ${r.term}  ${where(r)}${elsewhere}${blocking(lessonId(r.home)) ? '  ✗ blocking' : ''}`);
    }
  }
}
if (showTargets) {
  if (fewHomeUses.length) {
    console.log(`\nFewer than ${HOME_LESSON_MIN} sentences in their own lesson (${fewHomeUses.length}):`);
    for (const r of fewHomeUses) console.log(`  ${r.term}  ${where(r)}: ${r.homeUses}`);
  }
  if (notReused.length) {
    console.log(`\nReused in fewer than ${LATER_LESSONS_MIN} later lessons, and not in the stories (${notReused.length}):`);
    for (const r of notReused) console.log(`  ${r.term}  ${where(r)} -> ${r.laterLessons.length ? r.laterLessons.map((n) => `L${n}`).join(', ') : 'none'}`);
  }
} else if (fewHomeUses.length || notReused.length) {
  console.log(`Targets (reported only): ${fewHomeUses.length} word(s) have fewer than ${HOME_LESSON_MIN} sentences in their own lesson, ${notReused.length} aren't reused in ${LATER_LESSONS_MIN}+ later lessons. Add --targets to list them.`);
}

if (failing.length) {
  console.error(`\ncheck-word-use: ${failing.length} word(s) in ${scopeLabel} not used as rule 7 asks: ${failing.map((r) => r.term).join(', ')}. See BOOK_PLAN.md §4a, rule 7.`);
  process.exit(1);
}
console.log(`\ncheck-word-use: OK for ${scopeLabel}${notAtHome.length ? ` (${notAtHome.length} word(s) in other lessons have no sentence yet, reported only)` : ''}.`);
