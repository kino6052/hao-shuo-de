// See src/lib/chapter-content.js for the schema this is transformed by.
// zh/ru intentionally blank -- new content, not yet translated.
import type { Entry, InfoEntry, LangText } from "../lib/chapter-entry-types.ts";
import { SECTIONS, BACK_MATTER, lessonNumber } from "./book.js";

// The table of contents: one line per lesson, keyed by lesson id. The
// sections, their order, the lesson numbers, and the titles all come from
// src/content/book.js and the lessons themselves, so moving a lesson never
// touches this file. scripts/check-book.js checks that every lesson has a line.
export const LESSON_BLURBS: Record<string, LangText> = {
  "sounds-and-symbols": { en: ["where everything starts: how pinyin and tones work."], zh: [], ru: [] },
  "words-and-sentences": { en: ["your first words, and the simplest sentence you can build with them: NOUN + shì + NOUN."], zh: [], ru: [] },
  "modifying-nouns": { en: ["describing things: big, small, good, many, and few."], zh: [], ru: [] },
  "pointing": { en: ["pointers: words that point at things and people. This one, that one (with the counting word gè), I, you, and he or she."], zh: [], ru: [] },
  "who-does-what": { en: ["the second most important type of word, for sentences like \"I eat rice.\""], zh: [], ru: [] },
  "questions": { en: ["a new type of sentence: yes-or-no questions, \"what?\", \"why?\", and \"how?\", and how to answer them."], zh: [], ru: [] },
  "pre-verbs": { en: ["words that go before a verb to say you want to, can, learn to, know how to, love to, or might."], zh: [], ru: [] },
  "when-it-happens": { en: ["saying that something happened, is happening right now, will happen, or has happened before, placing a time up front in a sentence, and asking what happened."], zh: [], ru: [] },
  "around-an-action": { en: ["\"when X\" with `X-de shíjiān`, finishing an action, what comes after it, starting, doing it again, how many times, and doing something for a moment."], zh: [], ru: [] },
  "where-it-is": { en: ["saying where something is: inside, on, under, in front, behind, beside, left, and right."], zh: [], ru: [] },
  "moving": { en: ["coming and going, where you come from, arriving, direction words like up and down, moving, far and nearby, and roads."], zh: [], ru: [] },
  "how-much": { en: ["words that say how much: very, really, and not very, and what something is worth."], zh: [], ru: [] },
  "comparing": { en: ["bigger than, the biggest, the same, different, other, and kinds of things."], zh: [], ru: [] },
  "also-and-all": { en: ["also, all of them, everything, and part of it."], zh: [], ru: [] },
  "becoming-and-making": { en: ["how things change (\"it got better\"), and how to make them change (\"fix it\")."], zh: [], ru: [] },
  "direction-and-result": { en: ["words after a verb: which way it goes (bring, take out, come in, go home), sitting, standing, and lying down, how it ends (find, fix, break), whether you can (can't see, can't finish), and how things seem (looks good)."], zh: [], ru: [] },
  "numbers": { en: ["another type of noun: counting, saying how many, number one, number two, the time, a little, and simple sums."], zh: [], ru: [] },
  "colors": { en: ["special nouns: red, yellow, blue, black, and white, and asking what color something is."], zh: [], ru: [] },
  "roles-of-a-word": { en: ["how -de turns a verb into a thing (\"what you eat\") or a person (\"the one who writes\"), and how to say how well someone does something."], zh: [], ru: [] },
  "inside-a-sentence": { en: ["giving to, using, and, or, toward, groups, and how people get along: ways to connect words inside one sentence."], zh: [], ru: [] },
  "linking-sentences": { en: ["because, but, and if (rúguǒ): ways to link one sentence to another."], zh: [], ru: [] },
  "greetings-and-feelings": { en: ["another type of sentence: saying hello and thank you, saying your name, telling someone what to do, and saying how you feel: happy, scared, careful."], zh: [], ru: [] },
  "doubling-words": { en: ["saying a word twice: to do something just a little, to make a describing word stronger, and to say every one."], zh: [], ru: [] },
  "everyday-patterns": { en: ["useful ways of saying things that don't fit anywhere else: let me (`wǒ lái`), let me see (`gěi wǒ kàn yīxià`), help (bāng), letting someone (jiào), teaching (jiāo), may I, and let's."], zh: [], ru: [] },
};

const SECTION_TITLES: Record<string, LangText> = {
  sectionFoundations: { en: ["Section 1 — Sounds, Words, and Simple Sentences"], zh: [], ru: [] },
  sectionModifying: { en: ["Section 2 — Modifying Words and Meaning"], zh: [], ru: [] },
  sectionSpecial: { en: ["Section 3 — Special Words and Concepts"], zh: [], ru: [] },
};

// The same for the chapters after the lessons, keyed by chapter id, in the
// groups and order src/content/book.js gives them (BACK_MATTER).
export const CHAPTER_BLURBS: Record<string, LangText> = {
  "phrase-book": { en: ["ready-made sentences for travel and daily life: greetings, directions, food, shopping, and getting help."], zh: [], ru: [] },
  "appendix-stories": { en: ["ten well-known tales, retold with dictionary words only, with sound for every line."], zh: [], ru: [] },
  "appendix-pinyin": { en: ["every sound pinyin can spell, and the spellings that trip up English speakers."], zh: [], ru: [] },
  "appendix-sandhi": { en: ["how tones change when words come together."], zh: [], ru: [] },
  "appendix-grammar": { en: ["every grammar box from the lessons, in one place."], zh: [], ru: [] },
  "dictionary": { en: ["every word, in alphabetical order."], zh: [], ru: [] },
  "categorical-dictionary": { en: ["every word, grouped by meaning."], zh: [], ru: [] },
  "composite-dictionary": { en: ["common words there's no word for, and how to say them by putting words together."], zh: [], ru: [] },
  "sentence-builder": { en: ["a tool for building your own sentences from the dictionary."], zh: [], ru: [] },
  "appendix-minimality": { en: ["why so few words can say so much."], zh: [], ru: [] },
  "appendix-toki-pona": { en: ["how Hao-shuo-de differs from Toki Pona."], zh: [], ru: [] },
};

const GROUP_TITLES: Record<string, LangText> = {
  sectionContent: { en: ["Content — things to read"], zh: [], ru: [] },
  sectionReference: { en: ["Reference — how the language works"], zh: [], ru: [] },
  sectionTools: { en: ["Tools — dictionaries and builders"], zh: [], ru: [] },
  sectionMisc: { en: ["Misc — extra articles"], zh: [], ru: [] },
};

const backMatter: InfoEntry[] = BACK_MATTER.map((group) => ({
  type: "info",
  title: GROUP_TITLES[group.key],
  items: group.chapters.map((id) => ({
    text: { en: [`**{{title:${id}}}** — ${CHAPTER_BLURBS[id].en.join(" ")}`], zh: [], ru: [] },
  })),
}));

const tableOfContents: InfoEntry[] = SECTIONS.map((section) => ({
  type: "info",
  title: SECTION_TITLES[section.key],
  ordered: true,
  start: lessonNumber(section.lessons[0]) ?? 1,
  items: section.lessons.map((id) => ({
    text: { en: [`**{{title:${id}}}** — ${LESSON_BLURBS[id].en.join(" ")}`], zh: [], ru: [] },
  })),
}));

export const meta = {
  id: "intro-3",
  type: "intro",
  lessonNumber: 3,
  order: 3,
};

const content: Entry[] = [
  {
    type: "title",
    en: ["Simplified Chinese, Not Invented Chinese"],
    zh: [],
    ru: [],
  },
  {
    type: "summary",
    en: [
      "Hao-shuo-de is real Chinese, made as simple as it can be. This chapter shows how the book is laid out.",
    ],
    zh: [],
    ru: [],
  },
  {
    type: "prose",
    en: [
      "Toki Pona showed that a small, fixed set of words can still let you say almost anything.",
      "Hao-shuo-de borrows that idea, but not the language itself.",
      "Toki Pona invents its own grammar from scratch.",
      "Hao-shuo-de does the opposite: every rule of grammar you'll learn here is ordinary, real Mandarin.",
      "We are not building a Chinese-flavored Toki Pona.",
      "We are taking real Chinese and making it as small as it can be: the fewest words and rules that a native speaker still understands.",
      "Later, you can grow it into full Mandarin without starting over.",
      "",
      "The lessons are in three sections, and each one builds on the last. After them come four groups of everything that isn't a lesson: things to read, reference, tools, and extra articles.",
    ],
    zh: [],
    ru: [],
  },
  ...tableOfContents,
  ...backMatter,
];

export default content;
