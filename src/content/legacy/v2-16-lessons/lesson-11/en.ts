// English text for lesson-11, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Measure word ge"] },
  summary: {
    en: [
      "Real Mandarin ties a specific measure word to each noun's shape or class -- Hao-shuo-de collapses all of them into one universal classifier, `{{word:ge4}}`, used to count anything.",
    ],
  },

  proseMandarinMeasureWords: {
    en: [
      "Standard Mandarin doesn't just count things with a number -- it also requires a measure word chosen to match the shape or category of whatever's being counted.",
      "A flat sheet gets one measure word, a long thin thing gets another, an animal gets a different one again, and so on.",
      "Native speakers memorize dozens of these pairings over years, and getting the wrong one is one of the most common mistakes a Mandarin learner makes.",
    ],
    tldr: { en: ["Standard Mandarin requires a different measure word for each noun's shape or class."] },
    necessity: { en: ["Sets up the contrast: Hao-shuo-de is about to throw this entire memorization burden away."] },
  },
  proseGeIsUniversal: {
    en: [
      "Hao-shuo-de keeps only one of them: `{{word:ge4}}`.",
      "You've already been using it since Lesson 3 to count one specific thing (`{{word:zhe4}}-ge`, `{{word:na4}}-ge`) -- what's new here is the scope: `{{word:ge4}}` isn't the measure word for one category of noun, it's the ONLY measure word, full stop.",
      "A person, an animal, a tool, a fruit, an abstract thing -- none of it matters. Number or {{word:zhe4}}/{{word:na4}} + `{{word:ge4}}` + Noun works every time.",
    ],
    tldr: { en: ["`{{word:ge4}}` is the one and only measure word in Hao-shuo-de, regardless of what kind of noun it's counting."] },
    necessity: { en: ["Without this, a learner might expect Hao-shuo-de to still require different measure words per noun class, the way real Mandarin does."] },
  },
  infoUniversalClassifier: {
    title: { en: ["One Classifier for Everything"] },
    items: [
      { en: ["Number (or {{word:zhe4}}/{{word:na4}}) + `{{word:ge4}}` + Noun -- the same classifier works for any countable noun, no matter what shape or category it belongs to in standard Mandarin."] },
    ],
  },

  example1: { en: ["One person."] },
  example2: { en: ["One animal."] },
  example3: { en: ["One tool."] },
  example4: { en: ["This fruit is good."] },
  example5: { en: ["What is that thing?"] },

  exercise1: { en: ["Say \"one tool\", using ge."] },
  exercise2: { en: ["Say \"this animal\", using ge."] },
  exercise3: { en: ["Ask \"What is that fruit?\", using ge."] },

  answer1: { en: ["{{Word:yi1}}-ge {{word:gong1ju4}}."] },
  answer2: { en: ["{{Word:zhe4}}-ge {{word:dong4wu4}}."] },
  answer3: { en: ["{{Word:na4}}-ge {{word:shui3guo3}} {{word:shi4}} {{word:shen2me}}?"] },
};

export default en;
