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
  vocabJiazhi: { en: ["value, worth"] },
  proseVery: {
    en: [
      "**To say very**, put {{word:hen3}} before the adjective.",
      "",
      "**Thing + {{word:hen3}} + adjective**",
      "",
      "Words that say how much, like {{word:hen3}}, {{word:zhen1}}, and {{word:bu4}}, are called adverbs.",
      '{{word:hen3}} {{word:you3}} {{word:jia4zhi2}} ("has a lot of value") means valuable.',
    ],
    tldr: {
      en: ["{{word:hen3}} before an adjective means very."],
    },
    necessity: { en: ["Now you can say how something is."] },
  },
  exampleVery1: { en: ["This tool is very valuable."] },
  exampleVery2: { en: ["Water's value is great."] },
  exampleVery3: { en: ["The water is very hot."] },
  exampleVery4: { en: ["I'm very cold."] },
  exampleVery5: { en: ["The fruit is very sweet."] },
  exampleVery6: { en: ["He is in good health."] },
  exampleVery7: { en: ["My feet are cold."] },
  exampleVery8: { en: ["I've seen a very strange animal."] },
  proseReally: {
    en: [
      "**To say really**, put {{word:zhen1}} before the adjective.",
      "",
      "**Thing + {{word:zhen1}} + adjective**",
      "",
      "On its own, it's a whole sentence: {{Word:zhen1}} {{word:re4}}! (It's really hot!)",
    ],
    tldr: {
      en: ["{{word:zhen1}} before an adjective means really."],
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
      "**To say not, or not very**, put {{word:bu4}} or {{word:bu4}} {{word:hen3}} before the adjective.",
      "",
      "**Thing + {{word:bu4}} (+ {{word:hen3}}) + adjective**",
    ],
    tldr: {
      en: [
        "{{word:bu4}} before an adjective means not. {{word:bu4}} {{word:hen3}} means not very.",
      ],
    },
    necessity: { en: ["Now you can say how something isn't."] },
  },
  exampleNot1: { en: ["The water isn't cold."] },
  exampleNot2: { en: ["This isn't very strange."] },
  exampleNot3: { en: ["The rice isn't hot."] },
  proseAsk: {
    en: [
      "**To ask how something is**, put {{word:ma}} after the adjective.",
      "",
      "**Thing + adjective + {{word:ma}}?**",
      "",
      '{{word:xin1}} means new: {{word:xin1}}-{{word:de}} {{word:yi1fu}} is "new clothes".',
    ],
    tldr: {
      en: [
        "Put {{word:ma}} after an adjective to ask about it: {{Word:ni3}} {{word:leng3}} {{word:ma}}?",
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
  exampleAsk7: { en: ["Is this worth anything?"] },
  infoHowMuch: {
    title: { en: ["How Much"] },
    items: [
      {
        en: [
          "{{word:hen3}} + adjective, very: {{Word:shui3}} {{word:hen3}} {{word:re4}}. (The water is very hot.)",
        ],
      },
      {
        en: [
          "{{word:zhen1}} + adjective, really: {{Word:zhen1}} {{word:re4}}! (It's really hot!)",
        ],
      },
      {
        en: [
          "{{word:bu4}} / {{word:bu4}} {{word:hen3}} + adjective, not / not very: {{Word:shui3}} {{word:bu4}} {{word:leng3}}. (The water isn't cold.)",
        ],
      },
      {
        en: [
          "adjective + {{word:ma}}?, asking: {{Word:ni3}} {{word:leng3}} {{word:ma}}? (Are you cold?)",
        ],
      },
      {
        en: [
          "{{word:hen3}} {{word:you3}} {{word:jia4zhi2}}, valuable: {{Word:zhe4}}-ge {{word:gong1ju4}} {{word:hen3}} {{word:you3}} {{word:jia4zhi2}}. (This tool is very valuable.)",
        ],
      },
    ],
  },
  exercise1: { en: ["Water has great value."] },
  exercise2: { en: ["The rice is really hot."] },
  exercise3: { en: ["I'm very cold."] },
  exercise4: { en: ["Is the fruit sweet?"] },
  exercise5: { en: ["That person is really strange."] },
  exercise6: { en: ["I want new clothes."] },
  exercise7: { en: ["She is in good health."] },
  exercise8: { en: ["The water isn't cold."] },
  answer1: {
    en: [
      "{{Word:shui3}}-{{word:de}} {{word:jia4zhi2}} {{word:hen3}} {{word:da4}}.",
    ],
  },
  answer2: { en: ["{{Word:mi3fan4}} {{word:zhen1}} {{word:re4}}."] },
  answer3: { en: ["{{Word:wo3}} {{word:hen3}} {{word:leng3}}."] },
  answer4: { en: ["{{Word:shui3guo3}} {{word:tian2}} {{word:ma}}?"] },
  answer5: {
    en: [
      "{{Word:na4}}-ge {{word:ren2}} {{word:zhen1}} {{word:qi2guai4}}.",
    ],
  },
  answer6: {
    en: [
      "{{Word:wo3}} {{word:yao4}} {{word:xin1}}-{{word:de}} {{word:yi1fu}}.",
    ],
  },
  answer7: {
    en: [
      "{{Word:ta1}}-{{word:de}} {{word:shen1ti3}} {{word:hen3}} {{word:hao3}}.",
    ],
  },
  answer8: { en: ["{{Word:shui3}} {{word:bu4}} {{word:leng3}}."] },
};

export default en;
