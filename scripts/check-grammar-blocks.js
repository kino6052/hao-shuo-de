#!/usr/bin/env node
// Info-block gate: a lesson is assembled from modules (src/lib/lesson.ts),
// and every module has exactly one info block -- the point's pattern in a
// line or a short box -- right after its explanation, before its examples.
// Every lesson has at least one pattern (an info block that isn't
// `kind: "note"`): the Grammar Patterns chapter is built from them
// (scripts/generate-grammar-overview.js). Fails for the blocking chapters in
// scripts/finished-lessons.js; reports the rest.
//
//   npm run check-grammar-blocks                  # report all, fail for finished lessons
//   npm run check-grammar-blocks -- pre-verbs     # fail if that lesson has a problem
//   npm run check-grammar-blocks -- --strict      # fail for any lesson
//   npm run check-grammar-blocks -- --summary     # only the lessons with problems

import { gatePolicy } from './finished-lessons.js';
import { LESSON_IDS, importLessonFile } from './lessons.js';

const { blocking, named, scopeLabel, summary } = gatePolicy();

const unknown = named.filter((id) => !LESSON_IDS.includes(id));
if (unknown.length) {
  console.error(`check-grammar-blocks: no lesson called ${unknown.join(', ')}`);
  process.exit(2);
}

const hasEnglish = (info) => {
  const lines = (items) => items.some((it) => it.text?.en?.length || lines(it.items ?? []));
  return Boolean(info.title?.en?.length) || lines(info.items ?? []);
};

const problems = []; // { lesson, text }
const report = [];
for (const id of LESSON_IDS) {
  const entries = await importLessonFile(id, 'index.ts');
  const modules = [...new Set(entries.map((e) => e.module).filter((m) => m !== 'head' && m !== 'practice'))];
  let patterns = 0;
  for (const m of modules) {
    const mine = entries.filter((e) => e.module === m);
    const infos = mine.filter((e) => e.type === 'info' || e.type === 'warning');
    if (infos.length !== 1) problems.push({ lesson: id, text: `module "${m}" has ${infos.length} info blocks (one, please)` });
    for (const info of infos) {
      if (!hasEnglish(info)) problems.push({ lesson: id, text: `module "${m}": the info block is empty` });
      if (info.subtype === 'grammar') patterns++;
    }
    const firstExample = mine.findIndex((e) => e.type === 'example');
    const infoAt = mine.findIndex((e) => e.type === 'info' || e.type === 'warning');
    if (firstExample >= 0 && infoAt > firstExample) problems.push({ lesson: id, text: `module "${m}": the info block comes after the examples` });
  }
  if (!patterns) problems.push({ lesson: id, text: 'no pattern (every info block is a note)' });
  report.push({ id, modules: modules.length, patterns });
}

for (const { id, modules, patterns } of report) {
  const mine = problems.filter((p) => p.lesson === id);
  if (summary && !mine.length) continue;
  console.log(`${id}: ${modules} module(s), ${patterns} pattern(s)${mine.length ? `  ✗ ${mine.map((p) => p.text).join('; ')}` : ''}`);
}
const failing = problems.filter((p) => blocking(p.lesson));
if (failing.length) {
  console.error(`\ncheck-grammar-blocks: ${failing.length} problem(s) in ${scopeLabel}: ${[...new Set(failing.map((p) => p.lesson))].join(', ')}.`);
  process.exit(1);
}
const others = problems.length - failing.length;
console.log(`\ncheck-grammar-blocks: OK for ${scopeLabel}${others ? ` (${others} problem(s) in other lessons, reported only)` : ''}.`);
