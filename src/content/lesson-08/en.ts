// English text for lesson-08, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Time 1 — When it happens"] },
  summary: {
    en: [
      "We often need to say when something happens.",
      "In this lesson, you'll be able to say \"I ate.\", \"I'm eating right now.\", \"I will eat.\", \"I've eaten rice before.\", and \"At night, I sleep.\"",
    ],
  },
  vocabShijian: { en: ["time"] },
  vocabLe: { en: ["after a verb: it's done"] },
  vocabHui: { en: ["will"] },
  vocabZai: { en: ["before a verb: right now"] },
  vocabRi: { en: ["sun, day"] },
  vocabYue: { en: ["moon, night"] },
  vocabShuijiao: { en: ["sleep"] },
  vocabGuo: { en: ["after a verb: have done before"] },
  proseDone: {
    en: [
      "**To say something is done**, put {{word:le}} after the verb.",
      "",
      "**Who + verb + {{word:le}}**",
      "",
      "Verbs never change. Small words like {{word:le}} show when.",
    ],
    tldr: {
      en: ["Put {{word:le}} after a verb to say it is done."],
    },
    necessity: {
      en: ["Now you can talk about what already happened."],
    },
  },
  exampleDone1: { en: ["I ate. / I've eaten."] },
  exampleDone2: { en: ["He went to sleep."] },
  exampleDone3: { en: ["Did you see it?"] },
  proseNow: {
    en: [
      "**To say something is happening right now**, put {{word:zai4}} before the verb.",
      "",
      "**Who + {{word:zai4}} + verb**",
      "",
      'It works like "-ing" in English.',
    ],
    tldr: {
      en: [
        "Put {{word:zai4}} before a verb to say it is happening right now.",
      ],
    },
    necessity: { en: ["Now you can say what is going on."] },
  },
  exampleNow1: { en: ["I'm eating right now."] },
  exampleNow2: { en: ["She's sleeping."] },
  exampleNow3: { en: ["What are you looking at?"] },
  proseWill: {
    en: [
      "**To say something will happen**, put {{word:hui4}} before the verb.",
      "",
      "**Who + {{word:hui4}} + verb**",
    ],
    tldr: {
      en: [
        "Put {{word:hui4}} before a verb to say it will happen.",
      ],
    },
    necessity: { en: ["Now you can talk about what comes next."] },
  },
  exampleWill1: { en: ["I will eat."] },
  exampleWill2: { en: ["He will wait."] },
  exampleWill3: { en: ["Will you sleep?"] },
  proseBefore: {
    en: [
      "**To say you have done something before**, put {{word:guo4}} after the verb.",
      "",
      "**Who + verb-{{word:guo4}}**",
      "",
      "Join it to the verb with a hyphen: {{word:chi1}}-{{word:guo4}}.",
    ],
    tldr: {
      en: [
        "Put {{word:guo4}} after a verb to say you have done it before.",
      ],
    },
    necessity: {
      en: ["Now you can talk about things you have tried."],
    },
  },
  exampleBefore1: { en: ["I've eaten rice before."] },
  exampleBefore2: { en: ["Have you ever looked at the moon?"] },
  exampleBefore3: { en: ["He has said it before."] },
  proseTime: {
    en: [
      "**To say when**, put the time first, then a comma, then the rest.",
      "",
      "**Time, who + verb**",
      "",
      '{{word:shi2jian1}} means "time". {{word:ri4}} is the sun, or the day. {{word:yue4}} is the moon, or the night.',
      '{{word:yue4}}-{{word:de}} {{word:shi2jian1}} ("moon time") means "at night".',
    ],
    tldr: {
      en: [
        "Say the time first: {{word:yue4}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:shui4jiao4}}.",
      ],
    },
    necessity: { en: ["Now you can say when things happen."] },
  },
  exampleTime1: { en: ["At night, I sleep."] },
  exampleTime2: { en: ["In the daytime, I eat."] },
  exampleTime3: { en: ["When do you eat?"] },
  exampleTime4: { en: ["I look at the sun."] },
  exampleTime5: { en: ["I look at the moon."] },
  infoWhenItHappens: {
    title: { en: ["When It Happens"] },
    items: [
      {
        en: [
          "verb + {{word:le}}, done: {{Word:wo3}} {{word:chi1}} {{word:le}}. (I ate.)",
        ],
      },
      {
        en: [
          "{{word:zai4}} + verb, right now: {{Word:wo3}} {{word:zai4}} {{word:chi1}}. (I'm eating.)",
        ],
      },
      {
        en: [
          "{{word:hui4}} + verb, will: {{Word:wo3}} {{word:hui4}} {{word:chi1}}. (I will eat.)",
        ],
      },
      {
        en: [
          "verb-{{word:guo4}}, done before: {{Word:wo3}} {{word:chi1}}-{{word:guo4}} {{word:mi3fan4}}. (I've eaten rice before.)",
        ],
      },
      {
        en: [
          "Time first: {{Word:yue4}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:shui4jiao4}}. (At night, I sleep.)",
        ],
      },
    ],
  },
  exercise1: { en: ["I slept."] },
  exercise2: { en: ["He is waiting right now."] },
  exercise3: { en: ["Will you write?"] },
  exercise4: { en: ["I've heard it before."] },
  exercise5: { en: ["What are you eating?"] },
  exercise6: { en: ["When do you sleep?"] },
  exercise7: { en: ["The sun is big."] },
  exercise8: { en: ["The moon is small."] },
  answer1: { en: ["{{Word:wo3}} {{word:shui4jiao4}} {{word:le}}."] },
  answer2: { en: ["{{Word:ta1}} {{word:zai4}} {{word:deng3}}."] },
  answer3: {
    en: [
      "{{Word:ni3}} {{word:hui4}} {{word:xie3}} {{word:ma}}?",
    ],
  },
  answer4: { en: ["{{Word:wo3}} {{word:ting1}}-{{word:guo4}}."] },
  answer5: {
    en: [
      "{{Word:ni3}} {{word:zai4}} {{word:chi1}} {{word:shen2me}}?",
    ],
  },
  answer6: {
    en: [
      "{{Word:shen2me}} {{word:shi2jian1}} {{word:ni3}} {{word:shui4jiao4}}?",
    ],
  },
  answer7: { en: ["{{Word:ri4}} {{word:hen3}} {{word:da4}}."] },
  answer8: { en: ["{{Word:yue4}} {{word:hen3}} {{word:xiao3}}."] },
};

export default en;
