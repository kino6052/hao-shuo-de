// English text for lesson-03, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Modifying Nouns"] },
  summary: {
    en: [
      "Often we want to describe objects that we are talking about, for example we want to say that house is big or beautify etc. We use adjectives for that. Adjectives are words that modify nouns.",
    ],
  },

  vocabHen: {
    en: [
      "very (in this role, a required neutral connector, not an intensifier)",
    ],
  },
  vocabShui: { en: ["water, liquid"] },
  vocabDifang: {
    en: ["a place (both in space or metaphorical to mean part of something)"],
  },
  vocabXiao: { en: ["little, small"] },
  vocabHao: { en: ["good, simple, friendly"] },
  vocabDa: { en: ["big, important, tall"] },

  proseHenConnector: {
    en: [
      "Often we want to describe objects that we are talking about, for example we want to say that house is big or beautiful etc.",
      "Adjectives are words that modify nouns. For example if house is a noun, big is the word that tells us about it.",
      "Adjectives can connect to a subject like Subject - {{word:hen3}} - Adjective (conveying the sense that house is big).",
      'Lesson 2 gave you <audio-example zh="是">{{word:shi4}}</audio-example>, the word that connects a subject to a noun (<audio-example zh="人是女人">{{Word:ren2}} {{word:shi4}} {{word:nv3ren2}}</audio-example> — "the person is a woman").',
      'Adjectives need a connector too, but Mandarin doesn\'t reuse <audio-example zh="是">{{word:shi4}}</audio-example> for the job — it uses a different word instead: <audio-example zh="很">{{word:hen3}}</audio-example>.',
      "",
      'Subject + <audio-example zh="很">{{word:hen3}}</audio-example> + Adjective',
      "",
    ],
    necessity: {
      en: [
        "Explains how we modify nouns with adjectives, and introduces the special word {{word:hen3}}.",
      ],
    },
    tldr: {
      en: [
        "Adjectives can connect to a subject via special word {{word:hen3}}.",
      ],
    },
  },
  example3: { en: ["Water is good."] },

  proseDeRequired: {
    en: [
      "Adjectives can modify nouns directly. For example: we want to say not that house is big but directly say: big house. In this case we use the word {{word:de}} to bind the adjective to the noun.",
      'When an adjective sits right next to a noun instead of making its own statement — describing it as a single unit, the way <audio-example zh="很小的地方">{{word:hen3}}-{{word:xiao3}}-{{word:de}} {{word:di4fang1}}</audio-example> describes "a small place" — it binds on with <code>-{{word:de}}</code>, the same hyphen you already saw gluing <audio-example zh="写的东西">{{word:xie3}}-{{word:de}} {{word:dong1xi}}</audio-example> ("document") together back in Lesson 2.',
      "",
      'Once the adjective is modified by a degree word like <audio-example zh="很">{{word:hen3}}</audio-example>, <code>-{{word:de}}</code> becomes mandatory — you can\'t attach it directly.',
      '<audio-example zh="很小地方">{{word:hen3}}-{{word:xiao3}} {{word:di4fang1}}</audio-example> is ungrammatical; you need <audio-example zh="很小的地方">{{word:hen3}}-{{word:xiao3}}-{{word:de}} {{word:di4fang1}}</audio-example>.',
    ],
    tldr: {
      en: ["Adjectives can also modify nouns directly with word {{word:de}}"],
    },
    necessity: {
      en: ["Direct modification of the noun"],
    },
  },
  example4: { en: ["This is a small place."] },
  example5: { en: ["This is a very big animal."] },

  exercise1: { en: ["This one is an animal."] },
  exercise2: { en: ["That one is a woman."] },
  exercise5: { en: ["The place is small."] },

  answer1: { en: ["{{Word:zhe4}}-ge {{word:shi4}} {{word:dong4wu4}}."] },
  answer2: { en: ["{{Word:na4}}-ge {{word:shi4}} {{word:nv3ren2}}."] },
  answer5: { en: ["{{Word:di4fang1}} {{word:hen3}} {{word:xiao3}}."] },
};

export default en;
