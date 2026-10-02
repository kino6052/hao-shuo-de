// English text for lesson-03, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Modifying Nouns"] },
  summary: {
    en: [
      "We often want to say what something is like.",
      'In this lesson, you\'ll be able to say "The water is good.", "a big place", "good parents", and "many people".',
    ],
  },
  vocabHen: { en: ["very"] },
  vocabHao: { en: ["good"] },
  vocabDa: { en: ["big"] },
  vocabXiao: { en: ["small"] },
  vocabShui: { en: ["water"] },
  vocabDifang: { en: ["place"] },
  vocabFumu: { en: ["parents"] },
  proseLike: {
    en: [
      '**To say what something is like**, put {{word:hen3}} before the adjective (like "big" or "good").',
      "",
      "**NOUN + {{word:hen3}} + adjective**",
      "",
      '{{word:shi4}} (Lesson 2) says what something is. {{word:hen3}} says what it is like. {{word:hen3}} also means "very".',
    ],
    tldr: {
      en: [
        "To say what something is like, put {{word:hen3}} before the adjective.",
      ],
    },
    necessity: {
      en: ["This is how you describe things in a full sentence."],
    },
  },
  exampleLike1: { en: ["The water is good."] },
  exampleLike2: { en: ["The place is big."] },
  exampleLike3: { en: ["The animal is small."] },
  exampleLike4: { en: ["The parents are good."] },
  exampleLike5: { en: ["The fruit is big."] },
  vocabDe: { en: ["joins an adjective to a noun"] },
  proseBefore: {
    en: [
      '**To put an adjective before a noun**, join them with -{{word:de}} (like "{{word:da4}}-{{word:de}} {{word:di4fang1}}").',
      "",
      "**adjective-{{word:de}} + NOUN**",
      "",
      "Mandarin speakers often drop -{{word:de}} after a short adjective: {{word:da4}} {{word:di4fang1}}. Hao-shuo-de always keeps it. With -{{word:de}}, it's always correct Mandarin, so it's the only rule you need.",
    ],
    tldr: {
      en: ["To put an adjective before a noun, join them with {{word:de}}."],
    },
    necessity: {
      en: ['Now you can say "a big place", not only "the place is big".'],
    },
  },
  exampleBefore1: { en: ["A big place."] },
  exampleBefore2: { en: ["Good parents."] },
  exampleBefore3: { en: ["This is a very small place."] },
  exampleBefore4: { en: ["This is good water."] },
  exampleBefore5: { en: ["This is a very big animal."] },
  vocabDuo: { en: ["many, much"] },
  vocabShao: { en: ["few, little"] },
  proseMany: {
    en: [
      "**To say many**, put {{word:hen3}}-{{word:duo1}}-{{word:de}} before the noun.",
      "",
      "**{{word:hen3}}-{{word:duo1}}-{{word:de}} + NOUN**",
      "",
      "{{word:duo1}} and {{word:shao3}} are special. Other adjectives can go before -{{word:de}} on their own ({{word:da4}}-{{word:de}} {{word:di4fang1}}), but these two need {{word:hen3}} in front: {{word:duo1}}-{{word:de}} {{word:ren2}} sounds wrong.",
      "",
      "After a noun, {{word:hen3}} {{word:duo1}} means there is a lot: {{Word:shui3}} {{word:hen3}} {{word:duo1}}.",
      "{{word:shao3}} (few, little) is the opposite: {{Word:shui3}} {{word:hen3}} {{word:shao3}}, there is very little water.",
    ],
    tldr: {
      en: [
        "{{word:hen3}}-{{word:duo1}}-{{word:de}} + noun means many. {{word:hen3}} {{word:shao3}} means very few.",
      ],
    },
    necessity: {
      en: ["Now you can say how many: a lot, or very few."],
    },
  },
  exampleMany1: { en: ["Many people."] },
  exampleMany2: { en: ["A lot of fruit."] },
  exampleMany3: { en: ["There is a lot of water."] },
  exampleMany4: { en: ["There is very little water."] },
  exampleMany5: { en: ["There are very few people."] },
  exampleMany6: { en: ["There's very little fruit."] },
  infoDescribing: {
    title: { en: ["Describing a Noun"] },
    items: [
      {
        en: [
          "NOUN + {{word:hen3}} + adjective: {{Word:shui3}} {{word:hen3}} {{word:hao3}}. (The water is good.)",
        ],
      },
      {
        en: [
          "adjective + -{{word:de}} + NOUN: {{word:da4}}-{{word:de}} {{word:di4fang1}} (a big place)",
        ],
      },
      {
        en: [
          "{{word:hen3}}-{{word:duo1}}-{{word:de}} + NOUN: {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}} (many people)",
        ],
      },
      {
        en: [
          "NOUN + {{word:hen3}} {{word:shao3}}: {{Word:ren2}} {{word:hen3}} {{word:shao3}}. (There are very few people.)",
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
  exercise8: { en: ["There are very few people."] },
  answer1: {
    en: ["{{Word:di4fang1}} {{word:hen3}} {{word:xiao3}}."],
  },
  answer2: { en: ["{{Word:shui3}} {{word:hen3}} {{word:hao3}}."] },
  answer3: { en: ["{{Word:da4}}-{{word:de}} {{word:di4fang1}}"] },
  answer4: { en: ["{{Word:hao3}}-{{word:de}} {{word:fu4mu3}}"] },
  answer5: {
    en: ["{{Word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}}"],
  },
  answer6: {
    en: ["{{Word:dong4wu4}} {{word:hen3}} {{word:xiao3}}."],
  },
  answer7: {
    en: ["{{Word:shui3guo3}} {{word:hen3}} {{word:duo1}}."],
  },
  answer8: { en: ["{{Word:ren2}} {{word:hen3}} {{word:shao3}}."] },
  faqHenDuo: {
    question: { en: ["Does {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}} mean \"very many people\"?"] },
    en: [
      "No, just \"many people\". {{word:duo1}} can't go before a noun on its own, so it always takes {{word:hen3}}, and here {{word:hen3}} adds almost nothing.",
    ],
  },
  faqHen: {
    question: { en: ["Does {{word:hen3}} always mean \"very\"?"] },
    en: [
      "No. In NOUN + {{word:hen3}} + adjective, {{word:hen3}} is mostly there because the sentence needs it: {{Word:shui3}} {{word:hen3}} {{word:hao3}} is just \"The water is good.\"",
      "Without {{word:hen3}}, it sounds like you're comparing: the water is good, but something else isn't. To really mean \"very\", say {{word:hen3}} a little louder.",
    ],
  },
  faqShi: {
    question: { en: ["Why isn't it {{word:shui3}} {{word:shi4}} {{word:hao3}}?"] },
    en: [
      "{{word:shi4}} joins two nouns: {{Word:zhe4}} {{word:shi4}} {{word:ren2}}. An adjective doesn't take {{word:shi4}}, so use {{word:hen3}} instead: {{Word:shui3}} {{word:hen3}} {{word:hao3}}.",
    ],
  },
};

export default en;
