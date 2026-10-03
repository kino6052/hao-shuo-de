#!/usr/bin/env node
// Example-run gate: a lesson never shows more than MAX_EXAMPLES_IN_A_ROW
// example sentences in a row (scripts/limits.js), so a reader isn't buried
// in examples. Break a longer run with a new point, an info box, or a few
// exercises. Fails for the blocking chapters in scripts/finished-lessons.js;
// reports the rest.
//
//   npm run check-example-runs                    # report all, fail for finished lessons
//   npm run check-example-runs -- numbers         # fail if that lesson has a problem
//   npm run check-example-runs -- --strict        # fail for any lesson
//   npm run check-example-runs -- --summary       # only the lessons with problems

import { gatePolicy } from './finished-lessons.js';
import { LESSON_IDS, importLessonFile } from './lessons.js';
import { MAX_EXAMPLES_IN_A_ROW } from './limits.js';

const { blocking, named, scopeLabel, summary } = gatePolicy();

const unknown = named.filter((id) => !LESSON_IDS.includes(id));
if (unknown.length) {
  console.error(`check-example-runs: no lesson called ${unknown.join(', ')}`);
  process.exit(2);
}

const problems = []; // { lesson, text }
for (const id of LESSON_IDS) {
  const entries = await importLessonFile(id, 'index.ts');
  const keys = Object.keys(await importLessonFile(id, 'shape.ts'));
  const runs = [];
  let start = -1;
  entries.forEach((e, i) => {
    if (e.type === 'example') {
      if (start < 0) start = i;
    } else if (start >= 0) {
      runs.push([start, i - 1]);
      start = -1;
    }
  });
  if (start >= 0) runs.push([start, entries.length - 1]);
  const long = runs.filter(([a, b]) => b - a + 1 > MAX_EXAMPLES_IN_A_ROW);
  for (const [a, b] of long) {
    problems.push({ lesson: id, text: `${b - a + 1} examples in a row (${keys[a]} … ${keys[b]})` });
  }
  if (!summary || long.length) {
    const longest = Math.max(0, ...runs.map(([a, b]) => b - a + 1));
    const mine = problems.filter((p) => p.lesson === id);
    console.log(`${id}: longest run ${longest}${mine.length ? `  ✗ ${mine.map((p) => p.text).join('; ')}` : ''}`);
  }
}

const failing = problems.filter((p) => blocking(p.lesson));
if (failing.length) {
  console.error(`\ncheck-example-runs: ${failing.length} run(s) longer than ${MAX_EXAMPLES_IN_A_ROW} in ${scopeLabel}: ${[...new Set(failing.map((p) => p.lesson))].join(', ')}.`);
  process.exit(1);
}
const others = problems.length - failing.length;
console.log(`\ncheck-example-runs: OK for ${scopeLabel}${others ? ` (${others} long run(s) in other lessons, reported only)` : ''}.`);
