// English text for lesson-17, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Colors"] },
  summary: {
    en: [
      "Colors help us tell things apart.",
      "In this lesson, you'll be able to say \"a red box\" and \"The sky is blue.\"",
    ],
  },
  vocabYanse: { en: ["color"] },
  vocabBaise: { en: ["white, pale"] },
  vocabHeise: { en: ["black, dark"] },
  vocabHongse: { en: ["red"] },
  vocabHuangse: { en: ["yellow"] },
  vocabLanse: { en: ["blue, green"] },
  proseColorsAreAdjectives: {
    en: [
      "Colors don't need any special grammar of their own -- each one is just a two-syllable adjective, and adjectives already have a job description from Lesson 3.",
      "When a color modifies a target noun, it binds to it with `-{{word:de}}` via a hyphen, exactly the way any other adjective does.",
      'And like any other adjective, a color needs `{{word:hen3}}` to stand as a neutral predicate on its own (`{{word:gong1ju4}} {{word:hen3}} {{word:hong2se4}}` -- "the tool is red") rather than `-{{word:de}}`, which is only for binding it onto a noun directly.',
    ],
    tldr: {
      en: [
        "Colors are describing words, so they work like {{word:da4}} or {{word:hao3}}.",
      ],
    },
    necessity: { en: ["You don't need any new rules for colors."] },
  },
  example1: { en: ["Tonight / during this dark time, he is coming."] },
  example2: { en: ["If you see yellow water, don't drink it."] },
  example3: { en: ["The blue/green tool is in the white place."] },
  example4: { en: ["If my body turns blue, this is very bad."] },
  exercise1: { en: ["The tool is red."] },
  exercise2: { en: ["This is a black place."] },
  exercise3: { en: ["Is the fruit yellow?"] },
  answer1: {
    en: ["{{Word:gong1ju4}} {{word:hen3}} {{word:hong2se4}}."],
  },
  answer2: {
    en: [
      "{{Word:zhe4}}-ge {{word:shi4}} {{word:hei1se4}}-{{word:de}} {{word:di4fang1}}.",
    ],
  },
  answer3: {
    en: [
      "{{Word:shui3guo3}} {{word:hen3}} {{word:huang2se4}} {{word:ma}}?",
    ],
  },
};

export default en;
