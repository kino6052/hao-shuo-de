// English text for lesson-07, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Prepositions"] },
  summary: {
    en: [
      "Words like `{{word:gei3}}`, `{{word:zai4}}`, `{{word:yong4}}`, and `{{word:yin1wei4}}` work as coverbs: they introduce a noun phrase and sit before the main verb, and if no other verb is present, the coverb itself becomes the main predicate.",
    ],
  },

  vocabGei: { en: ["to, for, give"] },
  vocabZai: { en: ["at, in, present, existing"] },
  vocabYong: { en: ["using, with, by means of"] },
  vocabYinwei: { en: ["from, because of"] },

  proseCoverbWordOrder: {
    en: [
      "A handful of Hao-shuo-de words work double duty as both a verb on their own and a coverb -- a word that introduces a noun phrase and sits in front of the main action, the way a preposition would in English.",
      '`{{word:gei3}}` ("give, to, for"), `{{word:zai4}}` ("at, in"), `{{word:yong4}}` ("using, by means of"), and `{{word:yin1wei4}}` ("because of") all work this way.',
      "A coverb phrase always sits between the subject and the main verb, never after it:",
    ],
    tldr: {
      en: [
        "Coverbs like `{{word:gei3}}`, `{{word:zai4}}`, `{{word:yong4}}`, and `{{word:yin1wei4}}` introduce a noun phrase and sit right before the main verb.",
      ],
    },
    necessity: {
      en: [
        "Establishes the coverb word-order slot before any example sentence uses more than one verb-like word in a row.",
      ],
    },
  },
  infoCoverbWordOrder: {
    title: { en: ["Coverb Word Order"] },
    items: [
      {
        en: [
          "Subject + Coverb Phrase + Main Verb + Object -- the coverb phrase always comes between the subject and the main action, never after it.",
        ],
      },
    ],
  },
  proseCoverbAsPredicate: {
    en: [
      "If a clause has no separate action verb, the coverb doesn't leave an empty slot behind -- it simply steps up and serves as the main predicate by itself.",
      '`{{word:wo3}} {{word:zai4}} {{word:di4fang1}}` (\"I am in the house\") has no other verb at all; `{{word:zai4}}` alone is doing the whole job of the sentence.',
    ],
    tldr: {
      en: [
        "With no other verb in the clause, the coverb itself becomes the main predicate.",
      ],
    },
    necessity: {
      en: [
        "Explains sentences like `{{word:wo3}} {{word:zai4}} {{word:di4fang1}}` that would otherwise look like they're missing a verb.",
      ],
    },
  },

  example1: { en: ["I give a swimming animal to her."] },
  example2: { en: ["I give a swimming animal to her in the house."] },
  example3: { en: ["I am in the house."] },
  example4: { en: ["I am moving towards you / going to your side."] },
  example5: { en: ["My parent is going to the sea / big water."] },
  example6: { en: ["Because of this, I worked a lot."] },
  example7: { en: ["I speak in Hao-shuo-de / use Hao-shuo-de to speak."] },

  exercise1: { en: ["The worker uses tools."] },
  exercise2: { en: ["He gives things from his house."] },
  exercise3: { en: ["Why did you do it?"] },

  answer1: {
    en: [
      "{{Word:zhe4}}-ge {{word:gong1ju4}}-{{word:de}} {{word:ren2}} {{word:yong4}} {{word:gong1ju4}}. (or {{Word:zhe4}}-ge {{word:ren2}} {{word:yong4}} {{word:gong1ju4}}.)",
    ],
  },
  answer2: {
    en: [
      "{{Word:ta1}} {{word:gei3}} {{word:lai2}}-{{word:ta1}}-{{word:de}}-{{word:di4fang1}}-{{word:de}} {{word:dong1xi}}.",
    ],
  },
  answer3: {
    en: [
      "{{Word:wei4shen2me}} {{word:ni3}} {{word:nong4}} {{word:le}} {{word:zhe4}}-ge?",
    ],
  },
};

export default en;
