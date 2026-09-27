// English text for lesson-08, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Expressing Time and Space"] },
  summary: {
    en: [
      "A time, place, or condition clause fronts the main sentence and is set off by a comma -- no dedicated \"if\" word needed -- and \"when X\" is built compositionally as X-de + `{{word:shi2jian1}}` (\"the time of X\"), reusing `-{{word:de}}` rather than a dedicated \"when\" word.",
    ],
  },

  vocabShijian: { en: ["time, moment, occasion"] },

  proseFrontedContext: {
    en: [
      "Hao-shuo-de has no dedicated word for \"if,\" and no separate particle to mark a time or place clause ahead of the main sentence either.",
      "Instead, the sentence itself already tells you what's context and what's the main statement, purely from where things sit.",
      "Put the context or condition phrase at the very start of the sentence, immediately followed by a pause -- a comma -- and everything after that comma is the main statement it applies to.",
    ],
    tldr: { en: ["A fronted phrase followed by a comma marks time, place, or condition -- no dedicated word like \"if\" is needed."] },
    necessity: { en: ["Explains sentences that open with a time/place/condition clause before any dedicated marker word ever appears for it."] },
  },
  infoFrontedContext: {
    title: { en: ["Fronted Context Clause"] },
    items: [
      { en: ["[Context / Condition Phrase], [Main Statement] -- the context phrase always comes first, set off by a comma."] },
    ],
  },
  proseDeShijian: {
    en: [
      'Hao-shuo-de also has no dedicated word for "when." Instead, "when X" is built the same way any other description is: bind X onto `{{word:shi2jian1}}` ("time, moment") with `-{{word:de}}`, the same particle from Lesson 3.',
      '`{{word:chi1}}-{{word:de}} {{word:shi2jian1}}` is literally "the eating\'s time" -- fronted as a context clause, it means "when [I] eat."',
      "No new grammar is needed: it's just -de binding a description onto a noun (here, {{word:shi2jian1}}), and that whole phrase then fronted like any other context clause.",
    ],
    tldr: { en: ["\"When X\" is X-de + `{{word:shi2jian1}}` (\"the time of X\"), fronted as a context clause -- reusing `-{{word:de}}`, not a new word."] },
    necessity: { en: ["Shows that \"when\" doesn't need its own particle either -- it's `-{{word:de}}` and the fronted-clause pattern working together."] },
  },

  example1: { en: ["What time is he coming?"] },
  example2: { en: ["In a crowded place, I'm fine."] },
  example3: { en: ["When I eat, I'm content."] },
  example4: { en: ["Without water, the animal isn't well."] },

  exercise1: { en: ["Ask: \"What time are you coming?\""] },
  exercise2: { en: ["Say: \"When you speak, I listen.\""] },
  exercise3: { en: ["Say: \"If the tool isn't good, don't use it.\""] },

  answer1: { en: ["{{Word:shen2me}} {{word:shi2jian1}} {{word:ni3}} {{word:lai2}}?"] },
  answer2: { en: ["{{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:ting1}}."] },
  answer3: { en: ["{{Word:gong1ju4}} {{word:bu4}} {{word:hao3}}, {{word:bu4}} {{word:yong4}} {{word:ta1}}."] },
};

export default en;
