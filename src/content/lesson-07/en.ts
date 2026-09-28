// English text for lesson-07, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Pre-Verbs"] },
  summary: {
    en: [
      "We often want to say what we want, can, or know how to do.",
      "In this lesson, you'll be able to say \"I want to eat.\", \"I can hear.\", \"I know how to write.\", and \"I love to eat.\"",
    ],
  },
  vocabYao: { en: ["want; want to"] },
  vocabDeng: { en: ["wait"] },
  vocabYifu: { en: ["clothes"] },
  proseWant: {
    en: [
      "**To say you want to do something**, put {{word:yao4}} (want) before the verb.",
      "",
      "**Who + {{word:yao4}} + verb**",
      "",
      'It works with a thing too: {{Word:wo3}} {{word:yao4}} {{word:shui3}} means "I want water".',
    ],
    tldr: {
      en: [
        "Put {{word:yao4}} before a verb to say you want to do it.",
      ],
    },
    necessity: { en: ["Now you can say what you want."] },
  },
  exampleWant1: { en: ["I want to eat."] },
  exampleWant2: { en: ["I want water."] },
  exampleWant3: { en: ["What do you want?"] },
  exampleWant4: { en: ["She wants clothes."] },
  exampleWant5: { en: ["Do you want to wait?"] },
  vocabNeng: { en: ["can"] },
  proseCan: {
    en: [
      "**To say you can do something**, put {{word:neng2}} (can) before the verb.",
      "",
      "**Who + {{word:neng2}} + verb**",
      "",
      "To say you can't, put {{word:bu4}} before {{word:neng2}}.",
    ],
    tldr: {
      en: [
        "Put {{word:neng2}} before a verb to say you can do it.",
      ],
    },
    necessity: { en: ["Now you can say what you can and can't do."] },
  },
  exampleCan1: { en: ["I can hear."] },
  exampleCan2: { en: ["I can wait."] },
  exampleCan3: { en: ["He can't eat."] },
  exampleCan4: { en: ["Can you see?"] },
  vocabZhidao: { en: ["know; know how to (with zěnme)"] },
  proseKnowHow: {
    en: [
      "**To say you know how to do something**, put {{word:zhi1dao4}} {{word:zen3me}} (know how) before the verb.",
      "",
      "**Who + {{word:zhi1dao4}} {{word:zen3me}} + verb**",
      "",
      '{{word:zhi1dao4}} by itself means "know": {{Word:wo3}} {{word:zhi1dao4}} means "I know".',
    ],
    tldr: {
      en: [
        '{{word:zhi1dao4}} {{word:zen3me}} before a verb means "know how to".',
      ],
    },
    necessity: { en: ["Now you can say what you know how to do."] },
  },
  exampleKnowHow1: { en: ["I know how to write."] },
  exampleKnowHow2: { en: ["Do you know how to say it?"] },
  exampleKnowHow3: { en: ["I know."] },
  exampleKnowHow4: { en: ["He doesn't know."] },
  vocabAi: { en: ["love; love to"] },
  proseLove: {
    en: [
      "**To say you love to do something**, put {{word:ai4}} (love) before the verb.",
      "",
      "**Who + {{word:ai4}} + verb**",
      "",
      'It works with a person or a thing too: {{Word:wo3}} {{word:ai4}} {{word:ni3}} means "I love you".',
    ],
    tldr: {
      en: [
        "Put {{word:ai4}} before a verb to say you love doing it.",
      ],
    },
    necessity: { en: ["Now you can talk about what you like."] },
  },
  exampleLove1: { en: ["I love to eat."] },
  exampleLove2: { en: ["I love you."] },
  exampleLove3: { en: ["She loves to read."] },
  exampleLove4: { en: ["I love your clothes."] },
  exampleLove5: { en: ["Are these your clothes?"] },
  vocabKeneng: { en: ["maybe, might"] },
  proseMaybe: {
    en: [
      "**To say maybe**, put {{word:ke3neng2}} (maybe) before the verb.",
      "",
      "**Who + {{word:ke3neng2}} + verb**",
      "",
      'On its own, {{Word:ke3neng2}}. means "Maybe."',
    ],
    tldr: {
      en: [
        "Put {{word:ke3neng2}} before a verb to say it might be so.",
      ],
    },
    necessity: { en: ["Now you can say you're not sure."] },
  },
  exampleMaybe1: { en: ["He might know."] },
  exampleMaybe2: { en: ["She might want to eat."] },
  exampleMaybe3: { en: ["I might not be able to wait."] },
  exampleMaybe4: { en: ["Maybe."] },
  infoPreVerbs: {
    title: { en: ["Words Before a Verb"] },
    items: [
      {
        en: [
          "{{word:yao4}} + verb, want to: {{Word:wo3}} {{word:yao4}} {{word:chi1}}. (I want to eat.)",
        ],
      },
      {
        en: [
          "{{word:neng2}} + verb, can: {{Word:wo3}} {{word:neng2}} {{word:ting1}}. (I can hear.)",
        ],
      },
      {
        en: [
          "{{word:zhi1dao4}} {{word:zen3me}} + verb, know how to: {{Word:wo3}} {{word:zhi1dao4}} {{word:zen3me}} {{word:xie3}}. (I know how to write.)",
        ],
      },
      {
        en: [
          "{{word:ai4}} + verb, love to: {{Word:wo3}} {{word:ai4}} {{word:chi1}}. (I love to eat.)",
        ],
      },
      {
        en: [
          "{{word:ke3neng2}} + verb, maybe: {{Word:ta1}} {{word:ke3neng2}} {{word:zhi1dao4}}. (He might know.)",
        ],
      },
      {
        en: [
          "For \"not\", put {{word:bu4}} first: {{Word:ta1}} {{word:bu4}} {{word:neng2}} {{word:chi1}}. (He can't eat.)",
        ],
      },
    ],
  },
  exercise1: { en: ["I want to wait."] },
  exercise2: { en: ["Can you write?"] },
  exercise3: { en: ["She loves to eat fruit."] },
  exercise4: { en: ["I don't know how to say it."] },
  exercise5: { en: ["What do you want to eat?"] },
  exercise6: { en: ["He can't wait."] },
  exercise7: { en: ["Do you have clothes?"] },
  exercise8: { en: ["Maybe she knows."] },
  answer1: { en: ["{{Word:wo3}} {{word:yao4}} {{word:deng3}}."] },
  answer2: {
    en: [
      "{{Word:ni3}} {{word:neng2}} {{word:xie3}} {{word:ma}}?",
    ],
  },
  answer3: {
    en: [
      "{{Word:ta1}} {{word:ai4}} {{word:chi1}} {{word:shui3guo3}}.",
    ],
  },
  answer4: {
    en: [
      "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:zen3me}} {{word:shuo1}}.",
    ],
  },
  answer5: {
    en: [
      "{{Word:ni3}} {{word:yao4}} {{word:chi1}} {{word:shen2me}}?",
    ],
  },
  answer6: {
    en: [
      "{{Word:ta1}} {{word:bu4}} {{word:neng2}} {{word:deng3}}.",
    ],
  },
  answer7: {
    en: [
      "{{Word:ni3}} {{word:you3}} {{word:yi1fu}} {{word:ma}}?",
    ],
  },
  answer8: {
    en: ["{{Word:ta1}} {{word:ke3neng2}} {{word:zhi1dao4}}."],
  },
};

export default en;
