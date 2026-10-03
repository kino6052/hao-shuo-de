// The book's structure, in one place: which lessons there are, which section
// each one is in, and their order, then the chapters after the lessons
// (BACK_MATTER). A lesson's number is its position here, so moving a lesson
// means moving its id in this file and nothing else.
//
// Each id is the lesson's folder under src/content/lessons/ and its URL.
// Ids are names, not numbers, so they never change when lessons move. Text
// points at a lesson with {{lesson:ID}}, which renders its current number
// ("Lesson {{lesson:numbers}}" -> "Lesson 17"); intro-3's table of contents
// is built from SECTIONS. scripts/check-book.js checks that every lesson
// folder is listed here exactly once.
//
// Pure data (no Node or browser APIs): the app, the build scripts, and the
// Vite plugins all import it.

export const SECTIONS = [
  {
    key: "sectionFoundations",
    lessons: [
      "sounds-and-symbols",
      "words-and-sentences",
      "modifying-nouns",
      "pointing",
      "who-does-what",
      "questions",
    ],
  },
  {
    key: "sectionModifying",
    lessons: [
      "pre-verbs",
      "when-it-happens",
      "around-an-action",
      "where-it-is",
      "moving",
      "how-much",
      "comparing",
      "also-and-all",
      "becoming-and-making",
      "direction-and-result",
    ],
  },
  {
    key: "sectionSpecial",
    lessons: [
      "numbers",
      "colors",
      "roles-of-a-word",
      "inside-a-sentence",
      "linking-sentences",
      "greetings-and-feelings",
      "doubling-words",
      "everyday-patterns",
    ],
  },
];

// After the lessons: everything that isn't a lesson, in four groups, by
// chapter id. Content is to read and use (the phrase book, the stories),
// reference explains how the language works, tools are dictionaries and
// builders, and misc holds extra articles. The sidebar and intro-3 show them
// in this order.
export const BACK_MATTER = [
  { key: "sectionContent", chapters: ["phrase-book", "appendix-stories"] },
  { key: "sectionReference", chapters: ["appendix-pinyin", "appendix-sandhi", "appendix-grammar"] },
  {
    key: "sectionTools",
    chapters: ["dictionary", "categorical-dictionary", "composite-dictionary", "sentence-builder"],
  },
  { key: "sectionMisc", chapters: ["appendix-minimality", "appendix-toki-pona"] },
];

// Every back-matter chapter id, in reading order.
export const BACK_MATTER_IDS = BACK_MATTER.flatMap((g) => g.chapters);

// -> the i18n key of the back-matter group a chapter is in, or null.
export function groupKeyForChapter(id) {
  return BACK_MATTER.find((g) => g.chapters.includes(id))?.key ?? null;
}

// Every lesson id, in reading order.
export const LESSON_IDS = SECTIONS.flatMap((s) => s.lessons);

// id -> lesson number (1-based position in LESSON_IDS).
export const LESSON_NUMBERS = new Map(LESSON_IDS.map((id, i) => [id, i + 1]));

// -> the lesson's number, or null if it isn't in the book.
export function lessonNumber(id) {
  return LESSON_NUMBERS.get(id) ?? null;
}

// -> the i18n key of the section a lesson is in, or null.
export function sectionKeyForLesson(id) {
  return SECTIONS.find((s) => s.lessons.includes(id))?.key ?? null;
}
