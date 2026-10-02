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
  vocabMa: { en: ["turns a sentence into a yes-or-no question"] },
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
  vocabShenme: { en: ["what, which"] },
  vocabWen: { en: ["ask"] },
  vocabZhao: { en: ["look for"] },
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
  vocabWeishenme: { en: ["why"] },
  vocabZenme: { en: ["how"] },
  proseWhyHow: {
    en: [
      '**To ask "why?" or "how?"**, put {{word:wei4shen2me}} (why) or {{word:zen3me}} (how) before the verb.',
      "",
      "**Who + {{word:wei4shen2me}} / {{word:zen3me}} + verb?**",
      "",
      "{{word:wei4shen2me}} also goes before {{word:bu4}}: {{Word:ni3}} {{word:wei4shen2me}} {{word:bu4}} {{word:chi1}}?",
    ],
    tldr: {
      en: [
        "Put {{word:wei4shen2me}} (why) or {{word:zen3me}} (how) before the verb.",
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
  exampleAnswer1: { en: ["Do you listen? Yes, I do."] },
  exampleAnswer2: { en: ["Do you listen? No, I don't."] },
  exampleAnswer3: { en: ["Do you have fruit? Yes, I do."] },
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
          "{{word:wei4shen2me}} + verb, why: {{Word:ni3}} {{word:wei4shen2me}} {{word:bu4}} {{word:chi1}}? (Why don't you eat?)",
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
      "{{Word:ta1}} {{word:wei4shen2me}} {{word:zhao3}} {{word:shui3}}?",
    ],
  },
  answer6: {
    en: ["{{Word:zhe4}}-ge {{word:zen3me}} {{word:xie3}}?"],
  },
  answer7: { en: ["{{Word:shen2me}} {{word:ren2}} {{word:wen4}}?"] },
  faqMaAndVerbBuVerb: {
    question: { en: ["Can I use {{word:ma}} and verb-{{word:bu4}}-verb together?"] },
    en: [
      "No, pick one. {{Word:ni3}} {{word:ting1}} {{word:ma}}? and {{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? both work, but {{word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}} {{word:ma}}? is wrong.",
      "Both ask the same thing. {{word:ma}} works with any sentence, so it's the easy one to start with.",
    ],
  },
  faqYouMeiYou: {
    question: { en: ["Why is it {{word:you3}}-{{word:mei2}}-{{word:you3}}, not {{word:you3}}-{{word:bu4}}-{{word:you3}}?"] },
    en: [
      "{{word:you3}} never takes {{word:bu4}}. Its \"not\" is {{word:mei2}}: {{word:mei2}}-{{word:you3}}. So the question uses {{word:mei2}} too.",
    ],
  },
  faqWeishenmeFirst: {
    question: { en: ["Can {{word:wei4shen2me}} go at the start of the sentence?"] },
    en: [
      "Yes, {{Word:wei4shen2me}} {{word:ni3}} {{word:bu4}} {{word:chi1}}? is also correct Mandarin. Before the verb is the usual place, and it's the same place as {{word:zen3me}}, so Hao-shuo-de always puts it there.",
    ],
  },
};

export default en;
