// Is every dictionary word actually used? (BOOK_PLAN.md §4a, rule 7.)
// Pure functions over already-loaded lessons, shared by
// scripts/check-word-use.js (the gate) and tested in scripts/word-use.test.js.
//
// A word is "used" in a sentence when it appears in an example's pinyin or
// in an answer -- real Chinese a learner reads or says -- as a {{word:id}} ref
// or as plain pinyin (same rules as scripts/early-words.js). A word's vocab
// card and mentions in the explanations don't count.
//
// Rule 7 targets: at least HOME_LESSON_MIN sentences in the word's own
// lesson, and reuse in at least LATER_LESSONS_MIN later lessons (a use in the
// stories appendix also counts as reuse).

import { wordsIn, termIndex } from './early-words.js';

export const HOME_LESSON_MIN = 3;
export const LATER_LESSONS_MIN = 2;

const WORD_REF_RE = /\{\{(?:word|Word):([a-z0-9-]+)\}\}/g;

// Chinese sentences in an assembled lesson entry.
function sentencesOf(entry) {
  if ((entry.type === 'example' || entry.type === 'story') && entry.pinyin) return [entry.pinyin];
  if (entry.type === 'answer') return entry.en ?? [];
  return [];
}

// lessons: [{ id, number, entries }] (assembled entries); storyTexts: strings
// from the stories appendix.
// -> [{ id, term, home (lesson number or null), homeUses, laterLessons: [numbers], inStories }]
export function wordUse(lessons, dictionary, storyTexts = []) {
  const terms = termIndex(dictionary);
  const home = new Map();
  for (const lesson of lessons) {
    for (const entry of lesson.entries) {
      const id = entry.type === 'vocab' ? entry.term.match(/^\{\{word:([a-z0-9-]+)\}\}$/)?.[1] : null;
      if (id && !home.has(id)) home.set(id, lesson.number);
    }
  }
  const stats = new Map(Object.keys(dictionary).map((id) => [id, { homeUses: 0, lessons: new Set(), inStories: false }]));
  for (const lesson of lessons) {
    for (const entry of lesson.entries) {
      for (const sentence of sentencesOf(entry)) {
        const ids = new Set(wordsIn(sentence, terms, { pinyinField: true }).map((w) => w.id).filter((id) => stats.has(id)));
        for (const id of ids) {
          const s = stats.get(id);
          s.lessons.add(lesson.number);
          if (lesson.number === home.get(id)) s.homeUses += 1;
        }
      }
    }
  }
  for (const text of storyTexts) {
    for (const [, id] of text.matchAll(WORD_REF_RE)) if (stats.has(id)) stats.get(id).inStories = true;
  }
  return [...stats].map(([id, s]) => {
    const h = home.get(id) ?? null;
    return {
      id,
      term: dictionary[id].term,
      home: h,
      homeUses: s.homeUses,
      laterLessons: [...s.lessons].filter((n) => h !== null && n > h).sort((a, b) => a - b),
      usedAnywhere: s.lessons.size > 0,
      inStories: s.inStories,
    };
  });
}

// -> { unused, fewHomeUses, notReused } lists of word-use rows.
export function wordUseProblems(rows) {
  return {
    unused: rows.filter((r) => !r.usedAnywhere),
    fewHomeUses: rows.filter((r) => r.home !== null && r.homeUses < HOME_LESSON_MIN),
    notReused: rows.filter((r) => r.home !== null && r.laterLessons.length < LATER_LESSONS_MIN && !r.inStories),
  };
}
