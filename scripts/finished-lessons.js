// Which chapters' problems fail a gate (BOOK_PLAN.md §6).
//
// Every gate (check-jargon, check-early-words, check-word-use,
// check-grammar-blocks, check-practice) reports problems in the whole book, but only fails
// for "blocking" chapters:
//   - chapter ids given on the command line -> exactly those chapters
//   - --strict -> every chapter
//   - otherwise (e.g. on every build) -> the finished lessons below
//
// A new lesson can start on DRAFT_LESSONS and come off it once it passes
// every gate. From then on, every build keeps it that way.

import { LESSON_IDS } from '../src/content/book.js';

// Lessons still being written: their problems are reported, but don't fail
// the build. Every other lesson in src/content/book.js is finished.
export const DRAFT_LESSONS = [];

export const FINISHED_LESSONS = LESSON_IDS.filter((id) => !DRAFT_LESSONS.includes(id));

export function gatePolicy(argv = process.argv) {
  const args = argv.slice(2);
  const strict = args.includes('--strict');
  const named = args.filter((a) => !a.startsWith('--'));
  const blocking = (id) => strict || (named.length ? named.includes(id) : FINISHED_LESSONS.includes(id));
  const scopeLabel = strict ? 'every chapter' : named.length ? named.join(', ') : 'the finished lessons';
  return { args, strict, named, blocking, scopeLabel, summary: args.includes('--summary') };
}
