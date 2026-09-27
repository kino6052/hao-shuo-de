// English text for lesson-20, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Relationships 2 — Linking sentences"] },
  summary: {
    en: [
      "We often join two ideas: one thing happens because of another, or only if something else is true.",
      "In this lesson, you'll be able to say \"because…\", \"but…\", and \"if…\".",
    ],
  },
  vocabYinwei: { en: ["from, because of"] },
  vocabDanshi: { en: ["but, however"] },
  vocabYan: { en: ["salt"] },
  vocabSi: { en: ["die, dead"] },
  vocabHua: { en: ['(X-de huà, "if X")'] },
  proseFrontedContext: {
    en: [
      'Hao-shuo-de has no dedicated word for "if," and no separate particle to mark a time or place clause ahead of the main sentence either.',
      "Instead, the sentence itself already tells you what's context and what's the main statement, purely from where things sit.",
      "Put the context or condition phrase at the very start of the sentence, immediately followed by a pause -- a comma -- and everything after that comma is the main statement it applies to.",
    ],
    tldr: {
      en: [
        "Put the when, where, or if part first, then a comma, then the rest.",
      ],
    },
    necessity: {
      en: ["Often you don't need a word for \"if\" at all."],
    },
  },
  infoFrontedContext: {
    title: { en: ["Fronted Context Clause"] },
    items: [
      {
        en: [
          "[Context / Condition Phrase], [Main Statement] -- the context phrase always comes first, set off by a comma.",
        ],
      },
    ],
  },
  example2: { en: ["In a crowded place, I'm fine."] },
  example4: { en: ["Without water, the animal isn't well."] },
  example6L07: { en: ["Because of this, I worked a lot."] },
  example4L16: { en: ["But men and women are working and are happy."] },
  exercise3: { en: ["Say: \"If the tool isn't good, don't use it.\""] },
  answer3: {
    en: [
      "{{Word:gong1ju4}} {{word:bu4}} {{word:hao3}}, {{word:bu4}} {{word:yong4}} {{word:ta1}}.",
    ],
  },
};

export default en;
