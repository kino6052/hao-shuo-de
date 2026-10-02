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
// stories appendix also counts as reuse). Near the end of the book there are
// fewer later lessons than that, so the target is capped at how many there
// are: a word from the last lesson has nothing later to be reused in.

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
// -> [{ id, term, home (lesson number or null), homeUses, laterLessons: [numbers],
//       lessonsAfterHome (how many lessons come after home), inStories }]
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
      lessonsAfterHome: h === null ? 0 : lessons.filter((l) => l.number > h).length,
      usedAnywhere: s.lessons.size > 0,
      inStories: s.inStories,
    };
  });
}

// Practice check: in each lesson, every word the lesson introduces appears in
// at least one of its examples AND in at least one exercise's answer. Also
// counts the lesson's FAQ ("Some questions you may have"): `faqIncomplete`
// questions lack a question or an answer, and `faqOutOfPlace` is true unless
// the faq blocks come together, after the last exercise and answer.
// -> [{ lesson, number, examples, exercises, missingExample: [terms], missingExercise: [terms], faq, faqIncomplete, faqOutOfPlace }]
export function practiceGaps(lessons, dictionary) {
  const terms = termIndex(dictionary);
  const idsIn = (text) => new Set(wordsIn(text, terms, { pinyinField: true }).map((w) => w.id).filter(Boolean));
  return lessons.map((lesson) => {
    const introduced = lesson.entries
      .filter((e) => e.type === 'vocab')
      .map((e) => e.term.match(/^\{\{word:([a-z0-9-]+)\}\}$/)?.[1])
      .filter((id) => id && dictionary[id]);
    const inExamples = new Set();
    const inAnswers = new Set();
    let examples = 0;
    let exercises = 0;
    let lastPractice = -1;
    const faqAt = [];
    let faqIncomplete = 0;
    lesson.entries.forEach((entry, i) => {
      if ((entry.type === 'example' || entry.type === 'story') && entry.pinyin) {
        examples += 1;
        idsIn(entry.pinyin).forEach((id) => inExamples.add(id));
      }
      if (entry.type === 'exercise') exercises += 1;
      if (entry.type === 'answer') (entry.en ?? []).forEach((t) => idsIn(t).forEach((id) => inAnswers.add(id)));
      if (entry.type === 'exercise' || entry.type === 'answer') lastPractice = i;
      if (entry.type === 'faq') {
        faqAt.push(i);
        if (!entry.question?.en?.length || !entry.en?.length) faqIncomplete += 1;
      }
    });
    return {
      lesson: lesson.id,
      number: lesson.number,
      introduced: introduced.length,
      examples,
      exercises,
      missingExample: introduced.filter((id) => !inExamples.has(id)).map((id) => dictionary[id].term),
      missingExercise: introduced.filter((id) => !inAnswers.has(id)).map((id) => dictionary[id].term),
      faq: faqAt.length,
      faqIncomplete,
      faqOutOfPlace: faqAt.some((at, k) => at < lastPractice || (k > 0 && at !== faqAt[k - 1] + 1)),
    };
  });
}

// -> { unused, fewHomeUses, notReused } lists of word-use rows.
export function wordUseProblems(rows) {
  return {
    unused: rows.filter((r) => !r.usedAnywhere),
    fewHomeUses: rows.filter((r) => r.home !== null && r.homeUses < HOME_LESSON_MIN),
    notReused: rows.filter((r) => r.home !== null && r.laterLessons.length < Math.min(LATER_LESSONS_MIN, r.lessonsAfterHome) && !r.inStories),
  };
}
