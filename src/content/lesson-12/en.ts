// English text for lesson-12, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Modifiers 1 — How much"] },
  summary: {
    en: [
      "We often want to say how much: a little, or a lot.",
      "In this lesson, you'll be able to say \"really hot\", \"very cold\", \"not very strange\", and \"Are you cold?\"",
    ],
  },
  vocabZhen: { en: ["really"] },
  vocabRe: { en: ["hot"] },
  vocabLeng: { en: ["cold"] },
  vocabTian: { en: ["sweet"] },
  vocabQiguai: { en: ["strange"] },
  vocabXin: { en: ["new"] },
  vocabShenti: { en: ["body; health"] },
  proseVery: {
    en: [
      "**To say very**, put {{word:hen3}} before the describing word.",
      "",
      "**Thing + {{word:hen3}} + describing word**",
    ],
    tldr: {
      en: ["{{word:hen3}} before a describing word means very."],
    },
    necessity: { en: ["Now you can say how something is."] },
  },
  exampleVery1: { en: ["The water is very hot."] },
  exampleVery2: { en: ["I'm very cold."] },
  exampleVery3: { en: ["The fruit is very sweet."] },
  exampleVery4: { en: ["He is in good health."] },
  exampleVery5: { en: ["My feet are cold."] },
  exampleVery6: { en: ["I've seen a very strange animal."] },
  proseReally: {
    en: [
      "**To say really**, put {{word:zhen1}} before the describing word.",
      "",
      "**Thing + {{word:zhen1}} + describing word**",
      "",
      "On its own, it's a whole sentence: {{Word:zhen1}} {{word:re4}}! (It's really hot!)",
    ],
    tldr: {
      en: [
        "{{word:zhen1}} before a describing word means really.",
      ],
    },
    necessity: {
      en: [
        "Now you can say how strongly you feel about something.",
      ],
    },
  },
  exampleReally1: { en: ["It's really hot!"] },
  exampleReally2: { en: ["She's really strange."] },
  exampleReally3: { en: ["This fruit is really sweet!"] },
  proseNot: {
    en: [
      "**To say not, or not very**, put {{word:bu4}} or {{word:bu4}} {{word:hen3}} before the describing word.",
      "",
      "**Thing + {{word:bu4}} (+ {{word:hen3}}) + describing word**",
    ],
    tldr: {
      en: [
        "{{word:bu4}} before a describing word means not. {{word:bu4}} {{word:hen3}} means not very.",
      ],
    },
    necessity: { en: ["Now you can say how something isn't."] },
  },
  exampleNot1: { en: ["The water isn't cold."] },
  exampleNot2: { en: ["This isn't very strange."] },
  exampleNot3: { en: ["The rice isn't hot."] },
  proseAsk: {
    en: [
      "**To ask how something is**, put {{word:ma}} after the describing word.",
      "",
      "**Thing + describing word + {{word:ma}}?**",
      "",
      '{{word:xin1}} means new: {{word:xin1}}-{{word:de}} {{word:yi1fu}} is "new clothes".',
    ],
    tldr: {
      en: [
        "Put {{word:ma}} after a describing word to ask about it: {{Word:ni3}} {{word:leng3}} {{word:ma}}?",
      ],
    },
    necessity: { en: ["Now you can ask how someone is."] },
  },
  exampleAsk1: { en: ["Is the water hot?"] },
  exampleAsk2: { en: ["Are you cold?"] },
  exampleAsk3: { en: ["Are you in good health?"] },
  exampleAsk4: { en: ["Is this box new?"] },
  exampleAsk5: { en: ["I want new clothes."] },
  exampleAsk6: { en: ["My body is really hot."] },
  infoHowMuch: {
    title: { en: ["How Much"] },
    items: [
      {
        en: [
          "{{word:hen3}} + describing word, very: {{Word:shui3}} {{word:hen3}} {{word:re4}}. (The water is very hot.)",
        ],
      },
      {
        en: [
          "{{word:zhen1}} + describing word, really: {{Word:zhen1}} {{word:re4}}! (It's really hot!)",
        ],
      },
      {
        en: [
          "{{word:bu4}} / {{word:bu4}} {{word:hen3}} + describing word, not / not very: {{Word:shui3}} {{word:bu4}} {{word:leng3}}. (The water isn't cold.)",
        ],
      },
      {
        en: [
          "describing word + {{word:ma}}?, asking: {{Word:ni3}} {{word:leng3}} {{word:ma}}? (Are you cold?)",
        ],
      },
    ],
  },
  exercise1: { en: ["The rice is really hot."] },
  exercise2: { en: ["I'm very cold."] },
  exercise3: { en: ["Is the fruit sweet?"] },
  exercise4: { en: ["That person is really strange."] },
  exercise5: { en: ["I want new clothes."] },
  exercise6: { en: ["She is in good health."] },
  exercise7: { en: ["The water isn't cold."] },
  answer1: { en: ["{{Word:mi3fan4}} {{word:zhen1}} {{word:re4}}."] },
  answer2: { en: ["{{Word:wo3}} {{word:hen3}} {{word:leng3}}."] },
  answer3: { en: ["{{Word:shui3guo3}} {{word:tian2}} {{word:ma}}?"] },
  answer4: {
    en: [
      "{{Word:na4}}-ge {{word:ren2}} {{word:zhen1}} {{word:qi2guai4}}.",
    ],
  },
  answer5: {
    en: [
      "{{Word:wo3}} {{word:yao4}} {{word:xin1}}-{{word:de}} {{word:yi1fu}}.",
    ],
  },
  answer6: {
    en: [
      "{{Word:ta1}}-{{word:de}} {{word:shen1ti3}} {{word:hen3}} {{word:hao3}}.",
    ],
  },
  answer7: { en: ["{{Word:shui3}} {{word:bu4}} {{word:leng3}}."] },
};

export default en;
