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
  vocabDuo: { en: ["many"] },
  vocabHao: { en: ["good, simple, friendly"] },
  vocabDa: { en: ["big, important, tall"] },
  vocabXiao: { en: ["little, small"] },
  vocabShui: { en: ["water, liquid"] },
  vocabDifang: { en: ["place"] },
  vocabFumu: { en: ["parents"] },
  proseHenConnector: {
    en: [
      'To say what something is like, you need a describing word, like "big" or "good".',
      'Lesson 2 gave you <audio-example zh="是">{{word:shi4}}</audio-example> to say what something is: <audio-example zh="人是女人">{{Word:ren2}} {{word:shi4}} {{word:nv3ren2}}</audio-example> ("the person is a woman").',
      'To say what something is like, use <audio-example zh="很">{{word:hen3}}</audio-example> instead.',
      "",
      'Noun + <audio-example zh="很">{{word:hen3}}</audio-example> + describing word',
      "",
    ],
    necessity: {
      en: [
        "This is how you describe things in a full sentence.",
      ],
    },
    tldr: {
      en: [
        "To say what something is like, put {{word:hen3}} before the describing word.",
      ],
    },
  },
  example3: { en: ["Water is good."] },
  proseDeRequired: {
    en: [
      'You can also put a describing word right before a noun: "a big place" instead of "the place is big".',
      'Join them with <code>-{{word:de}}</code>: <audio-example zh="很小的地方">{{word:hen3}}-{{word:xiao3}}-{{word:de}} {{word:di4fang1}}</audio-example> means "a very small place".',
      "Don't leave out <code>-{{word:de}}</code>: <audio-example zh=\"很小地方\">{{word:hen3}}-{{word:xiao3}} {{word:di4fang1}}</audio-example> sounds wrong.",
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
    ],
  },
  example4: { en: ["This is a small place."] },
  example5: { en: ["This is a very big animal."] },
  exampleGoodParents: { en: ["Good parents."] },
  exampleManyPeople: { en: ["Many people."] },
  exercise5: { en: ["The place is small."] },
  answer5: {
    en: ["{{Word:di4fang1}} {{word:hen3}} {{word:xiao3}}."],
  },
};

export default en;
