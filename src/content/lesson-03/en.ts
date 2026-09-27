// English text for lesson-03, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Modifying Nouns"] },
  summary: {
    en: [
      "We often want to say what something is like.",
      "In this lesson, you'll be able to say \"The water is good.\", \"a big place\", \"good parents\", and \"many people\".",
    ],
  },
  vocabHen: { en: ["very"] },
  vocabDe: { en: ["joins a describing word to a noun"] },
  vocabDuo: { en: ["many, much"] },
  vocabHao: { en: ["good"] },
  vocabDa: { en: ["big"] },
  vocabXiao: { en: ["small"] },
  vocabShui: { en: ["water"] },
  vocabDifang: { en: ["place"] },
  vocabFumu: { en: ["parents"] },
  proseLike: {
    en: [
      "**To say what something is like**, put {{word:hen3}} before the describing word.",
      "",
      "**NOUN + {{word:hen3}} + describing word**",
      "",
      '{{word:shi4}} (Lesson 2) says what something is. {{word:hen3}} says what it is like. {{word:hen3}} also means "very".',
    ],
    tldr: {
      en: [
        "To say what something is like, put {{word:hen3}} before the describing word.",
      ],
    },
    necessity: {
      en: [
        "This is how you describe things in a full sentence.",
      ],
    },
  },
  exampleLike1: { en: ["The water is good."] },
  exampleLike2: { en: ["The place is big."] },
  exampleLike3: { en: ["The animal is small."] },
  exampleLike4: { en: ["The parents are good."] },
  exampleLike5: { en: ["The fruit is big."] },
  proseBefore: {
    en: [
      "**To put a describing word before a noun**, join them with -{{word:de}}.",
      "",
      "**describing word-{{word:de}} + NOUN**",
      "",
      "Don't leave out -{{word:de}}: {{word:hen3}}-{{word:xiao3}} {{word:di4fang1}} sounds wrong.",
    ],
    tldr: {
      en: [
        "To put a describing word before a noun, join them with {{word:de}}.",
      ],
    },
    necessity: {
      en: [
        'Now you can say "a big place", not only "the place is big".',
      ],
    },
  },
  exampleBefore1: { en: ["A big place."] },
  exampleBefore2: { en: ["Good parents."] },
  exampleBefore3: { en: ["This is a very small place."] },
  exampleBefore4: { en: ["This is good water."] },
  exampleBefore5: { en: ["This is a very big animal."] },
  proseMany: {
    en: [
      "**To say many**, put {{word:hen3}}-{{word:duo1}}-{{word:de}} before the noun.",
      "",
      "**{{word:hen3}}-{{word:duo1}}-{{word:de}} + NOUN**",
      "",
      "After a noun, {{word:hen3}} {{word:duo1}} means there is a lot: {{Word:shui3}} {{word:hen3}} {{word:duo1}}.",
    ],
    tldr: {
      en: [
        "{{word:hen3}}-{{word:duo1}}-{{word:de}} + noun means many.",
      ],
    },
    necessity: { en: ["Now you can talk about more than one."] },
  },
  exampleMany1: { en: ["Many people."] },
  exampleMany2: { en: ["A lot of fruit."] },
  exampleMany3: { en: ["There is a lot of water."] },
  infoDescribing: {
    title: { en: ["Describing a Noun"] },
    items: [
      {
        en: [
          "NOUN + {{word:hen3}} + describing word: {{Word:shui3}} {{word:hen3}} {{word:hao3}}. (The water is good.)",
        ],
      },
      {
        en: [
          "describing word + -{{word:de}} + NOUN: {{word:da4}}-{{word:de}} {{word:di4fang1}} (a big place)",
        ],
      },
      {
        en: [
          "{{word:hen3}}-{{word:duo1}}-{{word:de}} + NOUN: {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}} (many people)",
        ],
      },
    ],
  },
  exercise1: { en: ["The place is small."] },
  exercise2: { en: ["The water is good."] },
  exercise3: { en: ["a big place"] },
  exercise4: { en: ["good parents"] },
  exercise5: { en: ["many people"] },
  exercise6: { en: ["The animal is small."] },
  exercise7: { en: ["There is a lot of fruit."] },
  answer1: {
    en: ["{{Word:di4fang1}} {{word:hen3}} {{word:xiao3}}."],
  },
  answer2: { en: ["{{Word:shui3}} {{word:hen3}} {{word:hao3}}."] },
  answer3: { en: ["{{Word:da4}}-{{word:de}} {{word:di4fang1}}"] },
  answer4: { en: ["{{Word:hao3}}-{{word:de}} {{word:fu4mu3}}"] },
  answer5: {
    en: [
      "{{Word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}}",
    ],
  },
  answer6: {
    en: ["{{Word:dong4wu4}} {{word:hen3}} {{word:xiao3}}."],
  },
  answer7: {
    en: ["{{Word:shui3guo3}} {{word:hen3}} {{word:duo1}}."],
  },
};

export default en;
