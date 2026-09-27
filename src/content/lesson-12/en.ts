// English text for lesson-12, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Modifiers 1 — How much"] },
  summary: {
    en: [
      "We often want to say how much: a little, or a lot.",
      "In this lesson, you'll be able to say \"really hot\", \"very cold\", and \"a bit strange\".",
    ],
  },
  vocabZhen: { en: ["really"] },
  vocabRe: { en: ["hot"] },
  vocabLeng: { en: ["cold"] },
  vocabTian: { en: ["sweet"] },
  vocabQiguai: { en: ["strange"] },
  vocabXin: { en: ["new"] },
  vocabShenti: { en: ["body"] },
  proseAdjectivesAsAdverbs: {
    en: [
      "Adjectives have one more job available to them: standing directly in front of another adjective or a verb, they act as adverbs, describing how much or how that other word applies.",
      'You have actually already been doing this without naming it -- `{{word:hen3}}` itself, from Lesson 3, is just an adjective ("very") pressed into adverb duty in front of another adjective.',
      '`{{word:hen3}} {{word:duo1}}` works the same way: `{{word:duo1}}` ("many") on its own is already an adjective, and stacking `{{word:hen3}}` in front of it gives you "very many," no separate adverb form required.',
    ],
    tldr: {
      en: [
        "Put a describing word before another word to say how much or how.",
      ],
    },
    necessity: {
      en: ["You already do this with {{word:hen3}} (very)."],
    },
  },
  infoAdjectivesAsAdverbs: {
    title: { en: ["Adjectives as Adverbs"] },
    items: [
      {
        en: [
          "Place an adjective directly before another adjective or a verb to use it as an adverb -- no separate adverb form exists.",
        ],
      },
    ],
  },
  example5: {
    en: [
      "The girls misheard / didn't listen well to the parent.",
    ],
  },
  example8: { en: ["Fathers use/read the book a lot."] },
  exercise3: { en: ["I know Hao-shuo-de a bit."] },
  answer3: {
    en: [
      "Hǎo-shuō-de, {{word:wo3}} {{word:zhi1dao4}}-{{word:de}} {{word:bu4}} {{word:duo1}}.",
    ],
  },
};

export default en;
