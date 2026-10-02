// English text for lesson-07, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Pre-Verbs"] },
  summary: {
    en: [
      "We often want to say what we want, can, learn, or know how to do.",
      "In this lesson, you'll be able to say \"I want to eat.\", \"I can hear.\", \"I'm learning to write.\", \"I know how to write.\", and \"I love to eat.\"",
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
  exampleWant2: { en: ["I want to ask you."] },
  exampleWant3: { en: ["What do you want to say?"] },
  exampleWant4: { en: ["She wants to look for clothes."] },
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
  vocabXue: { en: ["learn; before a verb: learn to"] },
  proseLearn: {
    en: [
      "**To say you learn to do something**, put {{word:xue2}} (learn) before the verb.",
      "",
      "**Who + {{word:xue2}} + verb**",
    ],
    tldr: {
      en: ["Put {{word:xue2}} before the verb to say you learn to do it."],
    },
    necessity: { en: ["Now you can say what you're learning to do."] },
  },
  exampleLearn1: { en: ["I'm learning to write."] },
  exampleLearn2: { en: ["She's learning to speak."] },
  exampleLearn3: { en: ["Do you want to learn to write?"] },
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
  exampleKnowHow3: { en: ["She knows how to ask."] },
  exampleKnowHow4: { en: ["He doesn't know how to write it."] },
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
  exampleLove2: { en: ["I love listening to you talk."] },
  exampleLove3: { en: ["She loves to read."] },
  exampleLove4: { en: ["I love looking at your clothes."] },
  exampleLove5: { en: ["Do you love to write?"] },
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
  exampleMaybe4: { en: ["I might not eat."] },
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
          "{{word:xue2}} + verb, learn to: {{Word:wo3}} {{word:xue2}} {{word:xie3}}. (I'm learning to write.)",
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
  exercise7: { en: ["Do you want to look at my clothes?"] },
  exercise8: { en: ["Maybe she knows."] },
  exercise9: { en: ["He's learning to write."] },
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
      "{{Word:ni3}} {{word:yao4}} {{word:kan4}} {{word:wo3}}-{{word:de}} {{word:yi1fu}} {{word:ma}}?",
    ],
  },
  answer8: {
    en: ["{{Word:ta1}} {{word:ke3neng2}} {{word:zhi1dao4}}."],
  },
  answer9: { en: ["{{Word:ta1}} {{word:xue2}} {{word:xie3}}."] },
  faqYaoGoingTo: {
    question: { en: ["Does {{word:yao4}} only mean \"want\"?"] },
    en: [
      "It also means \"going to\". {{Word:wo3}} {{word:yao4}} {{word:chi1}} can be \"I want to eat\" or \"I'm going to eat\". The situation tells you which.",
    ],
  },
  faqBuYao: {
    question: { en: ["How do I say \"don't want\"?"] },
    en: [
      "Put {{word:bu4}} before {{word:yao4}}: {{Word:wo3}} {{word:bu4}} {{word:yao4}} {{word:chi1}} (I don't want to eat). Careful: with no who, {{Word:bu4}} {{word:yao4}} + verb means \"Don't …!\". Lesson 21 shows this.",
    ],
  },
  faqNengOrZhidao: {
    question: { en: ["When do I use {{word:neng2}}, and when {{word:zhi1dao4}} {{word:zen3me}}?"] },
    en: [
      "{{word:neng2}} is being able to: {{Word:wo3}} {{word:neng2}} {{word:deng3}} (I can wait). {{word:zhi1dao4}} {{word:zen3me}} is knowing how, something you learned: {{Word:wo3}} {{word:zhi1dao4}} {{word:zen3me}} {{word:xie3}} (I know how to write).",
    ],
  },
};

export default en;
