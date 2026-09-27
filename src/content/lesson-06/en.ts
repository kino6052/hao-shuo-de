// English text for lesson-06, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Questions and Answers"] },
  summary: {
    en: [
      "Every conversation needs questions.",
      "In this lesson, you'll be able to ask \"What is this?\", \"Are you a person?\", \"Why?\", and \"How?\", and answer yes or no.",
    ],
  },
  vocabShenme: { en: ["what, which"] },
  vocabMa: { en: ["turns a sentence into a yes-or-no question"] },
  vocabWeishenme: { en: ["why"] },
  vocabZenme: { en: ["how"] },
  vocabWen: { en: ["ask"] },
  vocabZhao: { en: ["look for"] },
  vocabGongju: { en: ["tool"] },
  vocabHezi: { en: ["box"] },
  proseYesNo: {
    en: [
      "**To ask a yes-or-no question**, put {{word:ma}} at the end.",
      "",
      "**sentence + {{word:ma}}?**",
      "",
      "Or say the verb, then {{word:bu4}}, then the verb again: {{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? For {{word:you3}}: {{word:you3}}-{{word:mei2}}-{{word:you3}}.",
    ],
    tldr: {
      en: [
        "Put {{word:ma}} at the end to ask a yes-or-no question.",
      ],
    },
    necessity: { en: ["Now you can check if something is true."] },
  },
  exampleYesNo1: { en: ["Do you have a tool?"] },
  exampleYesNo2: { en: ["Is this a box?"] },
  exampleYesNo3: { en: ["Does he eat fruit?"] },
  exampleYesNo4: { en: ["Do you listen to your parents?"] },
  exampleYesNo5: { en: ["Does she have money?"] },
  proseWhat: {
    en: [
      '**To ask "what?"**, put {{word:shen2me}} right where the answer would go.',
      "",
      "**Who + verb + {{word:shen2me}}?**",
      "",
      "The rest of the sentence stays the same. {{word:shen2me}} {{word:ren2}} means who.",
    ],
    tldr: {
      en: [
        "Put {{word:shen2me}} (what) right where the answer would go.",
      ],
    },
    necessity: {
      en: [
        "You don't need to move any words to ask a question.",
      ],
    },
  },
  exampleWhat1: { en: ["What are you looking for?"] },
  exampleWhat2: { en: ["What is this?"] },
  exampleWhat3: { en: ["What does he ask?"] },
  exampleWhat4: { en: ["Who eats fruit?"] },
  exampleWhat5: { en: ["I'm looking for a box."] },
  proseWhyHow: {
    en: [
      '**To ask "why?" or "how?"**, put {{word:wei4shen2me}} (why) at the start, or {{word:zen3me}} (how) before the verb.',
      "",
      "**{{word:wei4shen2me}} + sentence? / {{word:zen3me}} + verb?**",
    ],
    tldr: {
      en: [
        "{{word:wei4shen2me}} asks why. {{word:zen3me}} before a verb asks how.",
      ],
    },
    necessity: { en: ["Now you can ask for reasons and ways."] },
  },
  exampleWhyHow1: { en: ["Why don't you eat?"] },
  exampleWhyHow2: { en: ["Why is he looking for a box?"] },
  exampleWhyHow3: { en: ["Why are you asking?"] },
  exampleWhyHow4: { en: ["How do you say this?"] },
  exampleWhyHow5: { en: ["How do you write this?"] },
  exampleWhyHow6: { en: ["How do you find him?"] },
  proseAnswer: {
    en: [
      '**To answer yes or no**, repeat the verb for "yes", or put {{word:bu4}} before it for "no".',
      "",
      "**verb. / {{word:bu4}} + verb.**",
      "",
      "Chinese has no single word for \"yes\" or \"no\". You can also answer {{word:shi4}} (\"yes, it is\") or {{word:bu4}} {{word:shi4}} (\"no, it isn't\").",
    ],
    tldr: {
      en: [
        "To answer yes, repeat the verb. To answer no, put {{word:bu4}} before it.",
      ],
    },
    necessity: {
      en: ['Chinese has no single word for "yes" or "no".'],
    },
  },
  exampleAnswer1: { en: ["Yes, I do. (I listen.)"] },
  exampleAnswer2: { en: ["No, I don't."] },
  exampleAnswer3: { en: ["Yes, I have some."] },
  exampleAnswer4: { en: ["I'm asking you."] },
  infoAskingQuestions: {
    title: { en: ["Asking Questions"] },
    items: [
      {
        en: [
          "sentence + {{word:ma}}?, yes or no: {{Word:ni3}} {{word:you3}} {{word:gong1ju4}} {{word:ma}}? (Do you have a tool?)",
        ],
      },
      {
        en: [
          "verb-{{word:bu4}}-verb?, yes or no: {{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? (Do you listen?)",
        ],
      },
      {
        en: [
          "{{word:shen2me}} where the answer goes: {{Word:ni3}} {{word:zhao3}} {{word:shen2me}}? (What are you looking for?)",
        ],
      },
      {
        en: [
          "{{word:wei4shen2me}}, why: {{Word:wei4shen2me}} {{word:ni3}} {{word:bu4}} {{word:chi1}}? (Why don't you eat?)",
        ],
      },
      {
        en: [
          "{{word:zen3me}} + verb, how: {{Word:zhe4}}-ge {{word:zen3me}} {{word:shuo1}}? (How do you say this?)",
        ],
      },
    ],
  },
  exercise1: { en: ["What tools do you have?"] },
  exercise2: { en: ['Ask "Does he listen?" without {{word:ma}}.'] },
  exercise3: { en: ["Is the tool small?"] },
  exercise4: { en: ["Is that your box?"] },
  exercise5: { en: ["Why is he looking for water?"] },
  exercise6: { en: ["How do you write this?"] },
  exercise7: { en: ["Who is asking?"] },
  answer1: {
    en: [
      "{{Word:ni3}} {{word:you3}} {{word:shen2me}} {{word:gong1ju4}}?",
    ],
  },
  answer2: {
    en: [
      "{{Word:ta1}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}?",
    ],
  },
  answer3: { en: ["{{Word:gong1ju4}} {{word:xiao3}} {{word:ma}}?"] },
  answer4: {
    en: [
      "{{Word:na4}} {{word:shi4}} {{word:ni3}}-{{word:de}} {{word:he2zi}} {{word:ma}}?",
    ],
  },
  answer5: {
    en: [
      "{{Word:wei4shen2me}} {{word:ta1}} {{word:zhao3}} {{word:shui3}}?",
    ],
  },
  answer6: {
    en: ["{{Word:zhe4}}-ge {{word:zen3me}} {{word:xie3}}?"],
  },
  answer7: { en: ["{{Word:shen2me}} {{word:ren2}} {{word:wen4}}?"] },
};

export default en;
