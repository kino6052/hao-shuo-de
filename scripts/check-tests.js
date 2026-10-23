#!/usr/bin/env node
// Tests gate (BOOK_PLAN.md Phase 5, §6): the question pools of the lesson tests and the final exam (src/lib/quiz/).
// For every lesson:
//   - the pool has at least MIN_POOL questions of at least MIN_KINDS kinds
//   - every word the lesson's word cards introduce is asked at least 3 times, every module that teaches (word cards
//     or examples) at least twice, an aside module with only an exercise once
//   - no question, and no wrong choice, uses a word before the lesson that introduces it (the early-words rule)
//   - exactly one right answer: no two choices of a question say the same (or, for sentences, mean the same)
//   - plain wording: no jargon (scripts/jargon.js) in a prompt or a choice
//   - a draw of the lesson test gives a full try with no question twice
// And across the book: every core word and every pattern is asked at least once (fails), with the least-asked
// words listed so a weak spot shows; a draw of the final exam is full and balanced.
//
// Fails for the blocking lessons (scripts/finished-lessons.js), like the other gates. Lesson 1 shows sounds, not
// words (§4a rule 2): it has no word cards or examples, so the pool minimum and the early-words rule skip it.
//
//   npm run check-tests                 # report all; fail for finished lessons
//   npm run check-tests -- numbers      # just that lesson, strict
//   npm run check-tests -- --summary    # only the lessons with problems
//   npm run check-tests -- --strict     # fail for any lesson

import { gatePolicy } from './finished-lessons.js';
import { loadLessons } from './lessons.js';
import { findJargon } from './jargon.js';
import dictionaryData from '../src/data/dictionary.ts';
import { lessonSource, dictFrom, wordHomes, buildPools, drawLessonTest, drawExam, say, normalize, LESSON_TEST_SIZE, EXAM_SIZE } from '../src/lib/quiz/index.js';

export const MIN_POOL = 50;
export const MIN_KINDS = 4;
const WORD_ASKS = 3;
const MODULE_ASKS = 2;
const SOUNDS_ONLY = ['sounds-and-symbols'];
const DRAWS = 20;

const { named, blocking, scopeLabel, summary } = gatePolicy();
const dict = dictFrom(dictionaryData);
const lessons = await loadLessons();
const unknown = named.filter((id) => !lessons.some((l) => l.id === id));
if (unknown.length) {
  console.error(`check-tests: no lesson called ${unknown.join(', ')}`);
  process.exit(2);
}
const sources = lessons.map((l) => lessonSource(l, dict));
const pools = buildPools(sources, dict);
const home = wordHomes(sources);

const choiceTexts = (q) => (q.choices ?? []).map((c) => say(c.text, 'en'));

function lessonProblems(source, pool) {
  const problems = [];
  const qs = pool.questions;
  const soundsOnly = SOUNDS_ONLY.includes(source.id);
  const kinds = new Set(qs.map((q) => q.kind));
  if (!soundsOnly && qs.length < MIN_POOL) problems.push(`${qs.length} questions (at least ${MIN_POOL})`);
  if (!soundsOnly && kinds.size < MIN_KINDS) problems.push(`${kinds.size} kinds (at least ${MIN_KINDS})`);
  for (const m of source.modules) {
    // a module that teaches (word cards or examples) is asked twice; an aside with only an exercise, once
    const n = qs.filter((q) => q.module === m.id).length;
    const need = m.cards.length || m.examples.length ? MODULE_ASKS : Math.min(1, m.exercises.length);
    if (n < need) problems.push(`module ${m.id} asked ${n} time(s) (at least ${need})`);
    for (const c of m.cards) {
      const k = qs.filter((q) => q.words.includes(c.word)).length;
      if (k < WORD_ASKS) problems.push(`word ${c.word} asked ${k} time(s) (at least ${WORD_ASKS})`);
    }
  }
  if (!soundsOnly) {
    const early = new Set();
    for (const q of qs) for (const id of q.uses) if ((home.get(id) ?? 0) > source.number) early.add(`${id} (lesson ${home.get(id)}) in ${q.id}`);
    if (early.size) problems.push(`word used before its lesson: ${[...early].slice(0, 5).join('; ')}${early.size > 5 ? ` and ${early.size - 5} more` : ''}`);
  }
  for (const q of qs) {
    if (q.kind === 'order') continue;
    const keys = q.choices.map((c) => c.key);
    if (new Set(keys).size !== keys.length) problems.push(`${q.id}: two choices say the same`);
    if (q.kind === 'listen' || q.kind === 'translation') {
      // a sentence choice is right by its meaning and its words: no wrong one may share either with the right one
      const right = q.choices[q.answer];
      const same = q.choices.filter((c) => c !== right && normalize(say(c.text, 'en')) === normalize(say(right.text, 'en')));
      if (same.length) problems.push(`${q.id}: a wrong choice says what the right one says`);
    }
    const jargon = [say(q.prompt.text, 'en'), ...choiceTexts(q)].flatMap((t) => findJargon(t));
    if (jargon.length) problems.push(`${q.id}: jargon "${jargon[0].term}"`);
  }
  for (let s = 0; s < DRAWS; s++) {
    const items = drawLessonTest({ pools, lesson: source.id, seed: `check/${source.id}/${s}` });
    const ids = new Set(items.map((i) => i.question.id));
    const want = Math.min(LESSON_TEST_SIZE, pools.slice(0, source.number).reduce((n, p) => n + p.questions.length, 0));
    if (ids.size !== items.length) problems.push(`a lesson test showed a question twice (seed check/${source.id}/${s})`);
    if (items.length !== want) problems.push(`a lesson test has ${items.length} questions, not ${want}`);
    if (problems.length) break;
  }
  return problems;
}

const failing = [];
let others = 0;
for (const [i, source] of sources.entries()) {
  if (named.length && !named.includes(source.id)) continue;
  const pool = pools[i];
  const problems = lessonProblems(source, pool);
  if (problems.length) (blocking(source.id) ? failing : { push: () => others++ }).push(source.id);
  if (summary && !problems.length) continue;
  const kinds = [...new Set(pool.questions.map((q) => q.kind))];
  const line = `${source.id}: ${pool.questions.length} questions, ${kinds.length} kinds (${kinds.join(', ')})`;
  console.log(problems.length ? `${line}  ✗ ${problems.slice(0, 8).join('; ')}${problems.length > 8 ? `; and ${problems.length - 8} more` : ''}${blocking(source.id) ? '  (blocking)' : ''}` : line);
}

// ---------- across the book: the final exam's pool ----------
const bookProblems = [];
if (!named.length) {
  const all = pools.flatMap((p) => p.questions);
  const asks = new Map([...home.keys()].map((w) => [w, 0]));
  for (const q of all) for (const w of q.words) if (asks.has(w)) asks.set(w, asks.get(w) + 1);
  const never = [...asks].filter(([, n]) => n === 0).map(([w]) => w);
  if (never.length) bookProblems.push(`core word(s) never asked: ${never.join(', ')}`);
  const patterns = new Set(sources.flatMap((s) => s.modules.map((m) => m.pattern).filter(Boolean)));
  const asked = new Set(all.map((q) => q.pattern).filter(Boolean));
  const unasked = [...patterns].filter((p) => !asked.has(p));
  if (unasked.length) bookProblems.push(`pattern(s) never asked: ${unasked.join(', ')}`);
  const least = [...asks].sort((a, b) => a[1] - b[1]).slice(0, 10).map(([w, n]) => `${w} ${n}`);
  console.log(`\nfinal exam pool: ${all.length} questions, ${asks.size} words, ${patterns.size} patterns. Least asked: ${least.join(', ')}.`);
  for (let s = 0; s < DRAWS; s++) {
    const items = drawExam({ pools, seed: `check/exam/${s}` });
    if (items.length !== EXAM_SIZE || new Set(items.map((i) => i.question.id)).size !== EXAM_SIZE) {
      bookProblems.push(`a final exam draw has ${items.length} questions or a repeat (seed check/exam/${s})`);
      break;
    }
  }
  for (const p of bookProblems) console.log(`  ✗ ${p}`);
}

if (failing.length || bookProblems.length) {
  console.error(`\ncheck-tests: test pool problems in ${[...failing, ...(bookProblems.length ? ['the final exam pool'] : [])].join(', ')}.`);
  process.exit(1);
}
console.log(`\ncheck-tests: OK for ${scopeLabel}${others ? ` (${others} other lesson(s) with problems, reported only)` : ''}.`);
