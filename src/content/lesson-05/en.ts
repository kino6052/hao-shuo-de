// English text for lesson-05, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Verbs"] },
  summary: {
    en: [
      "Like in every other language, we want to say that someone or something does something.",
      "In this lesson, you'll be able to say \"I eat rice.\", \"She doesn't write.\", and \"I don't have money.\"",
    ],
  },
  vocabChi: { en: ["eat, drink"] },
  vocabKan: { en: ["look, read"] },
  vocabTing: { en: ["listen, hear"] },
  vocabShuo: { en: ["say, speak"] },
  vocabXie: { en: ["write"] },
  vocabMifan: { en: ["rice"] },
  proseDo: {
    en: [
      "**To say what someone does**, put the verb after the who, and the what after the verb.",
      "",
      "**Who + verb + what**",
      "",
      "A verb is an action word: {{word:chi1}} (eat), {{word:kan4}} (look), {{word:shuo1}} (speak).",
      "The order shows who does what. Swap them, and the meaning swaps: {{Word:wo3}} {{word:kan4}} {{word:ta1}} / {{Word:ta1}} {{word:kan4}} {{word:wo3}}.",
    ],
    tldr: {
      en: [
        "Say who does it, then the action, then what it is done to.",
      ],
    },
    necessity: {
      en: ["Almost every sentence you make uses this order."],
    },
  },
  exampleDo1: { en: ["I eat rice."] },
  exampleDo2: { en: ["I look at him."] },
  exampleDo3: { en: ["He looks at me."] },
  exampleDo4: { en: ["I listen to you."] },
  exampleDo5: { en: ["She speaks."] },
  exampleDo6: { en: ["I write."] },
  proseNot: {
    en: [
      '**To say "not"**, put {{word:bu4}} right before the verb.',
      "",
      "**Who + {{word:bu4}} + verb**",
    ],
    tldr: { en: ['Put {{word:bu4}} before a verb to say "not".'] },
    necessity: { en: ["Now you can say what someone doesn't do."] },
  },
  exampleNot1: { en: ["She doesn't write."] },
  exampleNot2: { en: ["I don't eat."] },
  exampleNot3: { en: ["You don't listen."] },
  exampleNot4: { en: ["I don't speak."] },
  vocabYou: { en: ["have; there is"] },
  vocabMei: {
    en: [
      "not, but only with {{word:you3}}: {{word:mei2}}-{{word:you3}} means \"don't have\"",
    ],
  },
  vocabJin: { en: ["money"] },
  proseHave: {
    en: [
      "**To say you have something**, use {{word:you3}}. For \"don't have\", say {{word:mei2}}-{{word:you3}}.",
      "",
      "**Who + {{word:you3}} / {{word:mei2}}-{{word:you3}} + thing**",
      "",
      "{{word:you3}} is the one verb that doesn't use {{word:bu4}}.",
    ],
    tldr: {
      en: [
        "{{word:you3}} is have. For \"don't have\", say {{word:mei2}}-{{word:you3}}, never {{word:bu4}} {{word:you3}}.",
      ],
    },
    necessity: {
      en: ["Now you can say what you have and don't have."],
    },
  },
  exampleHave1: { en: ["I have fruit."] },
  exampleHave2: { en: ["I don't have money."] },
  exampleHave3: { en: ["He has rice."] },
  exampleHave4: { en: ["She has money."] },
  exampleHave5: { en: ["He doesn't have anything."] },
  exampleHave6: { en: ["I have very little money."] },
  infoWhoDoesWhat: {
    title: { en: ["Who Does What"] },
    items: [
      {
        en: [
          "Who + verb + what: {{Word:wo3}} {{word:chi1}} {{word:mi3fan4}}. (I eat rice.)",
        ],
      },
      {
        en: [
          "{{word:bu4}} + verb, for \"not\": {{Word:ta1}} {{word:bu4}} {{word:xie3}}. (She doesn't write.)",
        ],
      },
      {
        en: [
          "{{word:mei2}}-{{word:you3}}, for \"don't have\": {{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}. (I don't have money.)",
        ],
      },
    ],
  },
  exercise1: { en: ["I listen to you."] },
  exercise2: { en: ["She eats rice."] },
  exercise3: { en: ["He doesn't have money."] },
  exercise4: { en: ["You look at me."] },
  exercise5: { en: ["I don't write."] },
  exercise6: { en: ["They speak."] },
  answer1: { en: ["{{Word:wo3}} {{word:ting1}} {{word:ni3}}."] },
  answer2: { en: ["{{Word:ta1}} {{word:chi1}} {{word:mi3fan4}}."] },
  answer3: {
    en: [
      "{{Word:ta1}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
    ],
  },
  answer4: { en: ["{{Word:ni3}} {{word:kan4}} {{word:wo3}}."] },
  answer5: { en: ["{{Word:wo3}} {{word:bu4}} {{word:xie3}}."] },
  answer6: { en: ["{{Word:ta1}}-{{word:men}} {{word:shuo1}}."] },
  faqPastFuture: {
    question: { en: ["How do I say \"ate\" or \"will eat\"?"] },
    en: [
      "The verb never changes. {{Word:wo3}} {{word:chi1}} {{word:mi3fan4}} can mean \"I eat rice\", \"I ate rice\", or \"I'll eat rice\". The situation tells you when, and Lesson 8 adds small words for it.",
    ],
  },
  faqChiDrink: {
    question: { en: ["Can I use {{word:chi1}} for drinking?"] },
    en: [
      "In Hao-shuo-de, yes: {{word:chi1}} {{word:shui3}}. Everyday Mandarin usually has a separate word for \"drink\", but {{word:chi1}} is understood.",
    ],
  },
};

export default en;
