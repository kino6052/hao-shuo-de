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
  vocabYou: { en: ["to have, contain, carry"] },
  vocabMei: {
    en: [
      "not, but only with {{word:you3}}: {{word:mei2}}-{{word:you3}} means \"don't have\"",
    ],
  },
  vocabChi: { en: ["to eat, drink, consume; food"] },
  vocabKan: { en: ["look, read"] },
  vocabTing: { en: ["to listen to, hear, obey"] },
  vocabShuo: { en: ["to talk, speak, communicate"] },
  vocabXie: { en: ["write"] },
  vocabJin: { en: ["money"] },
  vocabMifan: { en: ["rice, staple food"] },
  proseVerbs: {
    en: [
      'A verb is an action word. It tells you what someone does. `{{word:chi1}}` ("eat"), `{{word:shuo1}}` ("speak"), and `{{word:kan4}}` ("look") are verbs.',
      "A sentence goes in this order: who does it, then the verb, then what it is done to.",
      "Who + verb + what.",
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
  verbsExample1: { en: ["I eat things."] },
  verbsExample2: { en: ["He/She speaks Hao-shuo-de."] },
  verbsExample3: { en: ["I have fruit."] },
  verbsExample4: { en: ["I eat rice."] },
  proseVerbNegation: {
    en: [
      'To say "not", put `{{word:bu4}}` (from Lesson 2) right before the verb.',
      "`{{word:you3}}` (\"have\") is the one verb that is different. It uses `{{word:mei2}}` instead: `{{word:mei2}}-{{word:you3}}` means \"don't have\".",
    ],
    tldr: {
      en: [
        "Put {{word:bu4}} before a verb to say \"not\". For \"don't have\", say {{word:mei2}}-{{word:you3}}.",
      ],
    },
    necessity: {
      en: [
        "{{word:you3}} is the only verb that doesn't use {{word:bu4}}.",
      ],
    },
  },
  negationExample1: { en: ["I don't have fruit."] },
  negationExample2: { en: ["I don't eat things."] },
  negationExample3: { en: ["He/She doesn't have anything."] },
  negationExample4: { en: ["She doesn't write."] },
  negationExample5: { en: ["I don't have money."] },
  proseWordOrderObject: {
    en: [
      "The order of the words tells you who does what.",
      "The word before the verb is the one doing it. The word after the verb is the one it is done to.",
      "Swap them, and the meaning swaps too.",
    ],
    tldr: { en: ["The order of the words shows who does what."] },
    necessity: { en: ["Swap the words and the meaning changes."] },
  },
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
  wordOrderExample1: { en: ["I look at him/her."] },
  wordOrderExample2: { en: ["He/She looks at me."] },
  exercise1: { en: ["I listen to you."] },
  answer1: { en: ["{{Word:wo3}} {{word:ting1}} {{word:ni3}}."] },
};

export default en;
