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
  vocabLe: { en: ["after a verb: it's done"] },
  vocabShuijiao: { en: ["sleep"] },
  vocabFasheng: { en: ["happen"] },
  proseDone: {
    en: [
      "**To say something is done**, put {{word:le}} after the verb.",
      "",
      "**Who + verb + {{word:le}}**",
      "",
      "Verbs never change. Small words (particles) like {{word:le}} show when.",
      '{{Word:fa1sheng1}} {{word:le}} {{word:shen2me}}? means "What happened?" ({{word:fa1sheng1}} is happen).',
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
  exampleDone4: { en: ["What happened?"] },
  exampleDone5: { en: ["Do you know what happened?"] },
  vocabZai: { en: ["before a verb: right now"] },
  vocabXianzai: { en: ["now"] },
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
  exampleNow4: { en: ["Why are you sleeping?"] },
  exampleNow5: { en: ["He's sleeping now."] },
  exampleNow6: { en: ["He might be sleeping."] },
  vocabHui: { en: ["will"] },
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
  vocabYue: { en: ["moon, night"] },
  vocabGuo: { en: ["after a verb: have done before"] },
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
  exampleBefore4: { en: ["This has happened before."] },
  vocabShijian: { en: ["time"] },
  vocabRi: { en: ["sun, day"] },
  proseTime: {
    en: [
      "**To say when**, put the time first, then a comma, then the rest.",
      "",
      "**Time, who + verb**",
      "",
      '{{word:shi2jian1}} means "time". {{word:ri4}} is the sun, or the day. {{word:yue4}} is the moon, or the night.',
      '{{word:yue4}}-{{word:de}} {{word:shi2jian1}} ("moon time") means "at night".',
      "{{word:xian4zai4}} means now: {{Word:xian4zai4}}, {{word:wo3}} {{word:yao4}} {{word:shui4jiao4}}.",
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
  exampleTime6: { en: ["Now I want to sleep."] },
  exampleTime7: { en: ["What time is it now?"] },
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
          "Time first: {{Word:yue4}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:shui4jiao4}}. (At night, I sleep.) {{Word:xian4zai4}}, … (Now, …)",
        ],
      },
      {
        en: [
          "{{Word:fa1sheng1}} {{word:le}} {{word:shen2me}}? (What happened?)",
        ],
      },
    ],
  },
  exercise1: { en: ["What happened?"] },
  exercise2: { en: ["Now I'm eating."] },
  exercise3: { en: ["I slept."] },
  exercise4: { en: ["He is waiting right now."] },
  exercise5: { en: ["Will you write?"] },
  exercise6: { en: ["I've heard it before."] },
  exercise7: { en: ["What are you eating?"] },
  exercise8: { en: ["When do you sleep?"] },
  exercise9: { en: ["The sun is big."] },
  exercise10: { en: ["The moon is small."] },
  answer1: {
    en: ["{{Word:fa1sheng1}} {{word:le}} {{word:shen2me}}?"],
  },
  answer2: {
    en: [
      "{{Word:xian4zai4}}, {{word:wo3}} {{word:zai4}} {{word:chi1}}.",
    ],
  },
  answer3: { en: ["{{Word:wo3}} {{word:shui4jiao4}} {{word:le}}."] },
  answer4: { en: ["{{Word:ta1}} {{word:zai4}} {{word:deng3}}."] },
  answer5: {
    en: [
      "{{Word:ni3}} {{word:hui4}} {{word:xie3}} {{word:ma}}?",
    ],
  },
  answer6: { en: ["{{Word:wo3}} {{word:ting1}}-{{word:guo4}}."] },
  answer7: {
    en: [
      "{{Word:ni3}} {{word:zai4}} {{word:chi1}} {{word:shen2me}}?",
    ],
  },
  answer8: {
    en: [
      "{{Word:shen2me}} {{word:shi2jian1}} {{word:ni3}} {{word:shui4jiao4}}?",
    ],
  },
  answer9: { en: ["{{Word:ri4}} {{word:hen3}} {{word:da4}}."] },
  answer10: { en: ["{{Word:yue4}} {{word:hen3}} {{word:xiao3}}."] },
  faqLePast: {
    question: { en: ["Does {{word:le}} mean the past?"] },
    en: [
      "Not exactly. {{word:le}} says the action is done. Chinese verbs have no past form, and when you talk about the past in general, you often don't need {{word:le}} at all.",
    ],
  },
  faqLeOrGuo: {
    question: { en: ["What's the difference between {{word:le}} and -{{word:guo4}}?"] },
    en: [
      "{{word:le}} says it's done: {{Word:wo3}} {{word:chi1}} {{word:le}} (I ate, I've eaten). -{{word:guo4}} says it has happened at least once, some time before: {{Word:wo3}} {{word:chi1}}-{{word:guo4}} {{word:mi3fan4}} (I've had rice before).",
    ],
  },
  faqHuiKnowHow: {
    question: { en: ["Does {{word:hui4}} only mean \"will\"?"] },
    en: [
      "In full Mandarin, {{word:hui4}} also means \"know how to\": {{word:hui4}} {{word:xie3}} is \"can write\". Hao-shuo-de uses {{word:zhi1dao4}} {{word:zen3me}} (Lesson 7) for that, so here {{word:hui4}} just means \"will\".",
    ],
  },
};

export default en;
