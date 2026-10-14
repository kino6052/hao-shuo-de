#!/usr/bin/env node
// Word-class gate (KB_PLAN.md phase 4, K6): the classes a word lists besides its part of speech are true.
//
// A word fills its part-of-speech classes and the classes it lists (`classes` in src/data/words). Each listed class:
//   - is one some grammar rule asks for (@class), and is not already one of the word's parts of speech;
//   - has an example sentence that names the word, parses, and does NOT parse when the class is taken away,
//     so the example shows what the class is for.
// A class marked `proposed` is used by the parser but waits for the author; the gate counts them.
//
//   node scripts/check-classes.js

import { reloadSource } from './kb.js';
import { classProblems, classesWaiting } from '../src/lib/kb/class-proposals.js';

const { words, patterns, composites } = await reloadSource();
const { listed, errors } = classProblems({ words, patterns, composites });
const waiting = classesWaiting(words);
console.log(`check-classes: ${listed} listed class${listed === 1 ? '' : 'es'}${waiting.length ? `, ${waiting.length} waiting for the author` : ''}.`);
if (errors.length) {
  for (const e of errors) console.error(`  ${e}`);
  console.error(`check-classes: ${errors.length} problem(s).`);
  process.exit(1);
}
