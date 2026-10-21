#!/usr/bin/env node
// Grammar gate (KB_PLAN.md phase 4, K7): every Hao-shuo-de sentence of the book parses.
//
//   1. Every lesson sentence parses with the patterns taught up to its lesson (the early-patterns
//      rule: kb.parseUpTo). One that parses only with a later pattern, or not at all, is a gap.
//      This includes a complete sentence written inline in a lesson's prose, info box or FAQ --
//      not only the ones in an examples/exercises array (lesson_inline, src/lib/kb/inline-sentences.js).
//   2. Every sentence of the other texts (composite examples, stories, the phrase book, the
//      frontier) parses, inline sentences in their prose and info boxes included (extra_inline).
//
// A gap the author knows about is listed in kb/grammar-gaps.json ({ text, why }); it does not fail.
// A new gap fails. A listed gap that now parses fails too, so the list only shrinks: remove it.
//
//   node scripts/check-grammar.js                  # lessons and the other texts
//   node scripts/check-grammar.js --lessons-only   # the quick one: lessons 1-24 only
//   node scripts/check-grammar.js --list           # name every known gap as well
//   node scripts/check-grammar.js --update         # add the new gaps to the list (empty why)

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { openKb } from './kb.js';
import { parseReport, sayText } from '../src/lib/kb/parse-report.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const FILE = resolve(ROOT, 'kb/grammar-gaps.json');
const args = process.argv.slice(2);
const lessonsOnly = args.includes('--lessons-only');
const list = args.includes('--list');
const update = args.includes('--update');

const kb = await openKb({ memo: true });
const lessons = kb.source.lessons.map(({ id, number }) => ({ id, number }));
const groups = lessonsOnly
  ? []
  : [
      { id: 'composite-examples', title: 'composite examples', kinds: ['composite_example'] },
      { id: 'stories', title: 'stories', kinds: ['story'] },
      { id: 'phrase-book', title: 'phrase book', kinds: ['phrase_book'] },
      { id: 'extra-inline', title: 'inline sentences outside the lessons', kinds: ['extra_inline'] },
    ];
const report = parseReport({ sentences: kb.facts.sentences, parseText: kb.parse, parseLesson: kb.parseUpTo, patternLesson: kb.patternLesson, lessons, groups });

const known = existsSync(FILE) ? JSON.parse(readFileSync(FILE, 'utf8')) : [];
const knownText = new Map(known.map((k) => [k.text, k]));
const where = (it) => `${it.lesson}${it.module ? `/${it.module}` : ''}`;
const say = (it) => sayText(it.piece?.text ?? '', kb.source.words);
const needs = (it) => (it.late ? ` -- needs ${it.late.map((p) => `${p.id} (${p.lesson ? `lesson ${p.lesson}` : 'no lesson'})`).join(' + ')}` : '');

const gaps = [...report.failures, ...report.late].filter((it) => it.piece);
const seen = new Set(gaps.map(say));
const fresh = gaps.filter((it) => !knownText.has(say(it)));
const fixed = lessonsOnly ? [] : known.filter((k) => !seen.has(k.text));

if (update && fresh.length) {
  const add = [...new Map(fresh.map((it) => [say(it), { text: say(it), why: '' }])).values()];
  writeFileSync(FILE, `${JSON.stringify([...known, ...add], null, 2)}\n`);
  console.log(`check-grammar: ${add.length} gap(s) added to kb/grammar-gaps.json; say why for each.`);
  process.exit(0);
}

const errors = [];
for (const it of fresh) errors.push(`${where(it)}: "${say(it)}" does not parse${needs(it) || ` -- ${it.piece.failure?.token ? `stopped at "${it.piece.failure.token}"` : 'the sentence ended too soon'}`}`);
for (const k of fixed) errors.push(`kb/grammar-gaps.json: "${k.text}" parses now; remove it from the list`);

console.log(
  `check-grammar: ${report.parsed} of ${report.total} sentences parse; ${gaps.length - fresh.length} known gap${gaps.length - fresh.length === 1 ? '' : 's'}` +
    `${report.late.length ? ` (${report.late.length} use a pattern before it is taught)` : ''}.`,
);
if (list) for (const it of gaps) if (knownText.has(say(it))) console.log(`  known: ${where(it)}: "${say(it)}"${needs(it)}${knownText.get(say(it)).why ? ` (${knownText.get(say(it)).why})` : ''}`);
if (errors.length) {
  for (const e of errors) console.error(`  ${e}`);
  console.error(`check-grammar: ${errors.length} problem(s). A gap is a missing pattern (fix the rule), or a sentence for the author to reword or accept (kb/grammar-gaps.json).`);
  process.exit(1);
}
