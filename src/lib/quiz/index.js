// The tests and the final exam (BOOK_PLAN.md §3 "Tests and the final exam", Phase 5, D66).
//
//   question.js  the question model          kinds/     one template per kind of question
//   source.js    a lesson read into modules  pool.js    a pool of questions per lesson
//   draw.js      the seeded, stratified draw result.js  a try's score    progress.js  the record kept in the browser
//
// Pure: the app (src/components/LessonTest.jsx, FinalExam.jsx), the gate (scripts/check-tests.js) and the tests all
// use the same code.

export * from './question.js';
export { lessonSource, dictFrom, wordHomes } from './source.js';
export { buildPools } from './pool.js';
export * from './draw.js';
export * from './result.js';
export { rngFrom, newSeed } from './rng.js';
