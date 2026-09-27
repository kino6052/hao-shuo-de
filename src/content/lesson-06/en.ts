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
  vocabGongju: { en: ["tool, machine, device"] },
  vocabHezi: { en: ["box"] },
  proseQuestionWordsInSitu: {
    en: [
      "There are a few ways to ask a question.",
      'To ask "what?", put `{{word:shen2me}}` right where the answer would go.',
      '`{{word:ta1}} {{word:chi1}} {{word:shen2me}}?` means "What does he eat?" `{{word:shen2me}}` sits where the food would be.',
      '`{{word:shen2me}} {{word:ren2}} {{word:chi1}} {{word:shui3guo3}}?` means "Who eats fruit?" `{{word:shen2me}} {{word:ren2}}` sits where the person would be.',
      "The rest of the sentence stays the same.",
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
  infoYesNoQuestions: {
    title: { en: ["Yes-or-No Questions"] },
    items: [
      {
        en: ["There are two ways to ask a yes-or-no question:"],
        items: [
          {
            en: [
              'Add `{{word:ma}}` to the end. `{{word:ta1}} {{word:you3}} {{word:shui3guo3}}.` ("He has fruit.") becomes `{{word:ta1}} {{word:you3}} {{word:shui3guo3}} {{word:ma}}?` ("Does he have fruit?").',
            ],
          },
          {
            en: [
              'Or say the verb, then "not", then the verb again. `{{word:you3}}-{{word:mei2}}-{{word:you3}}` ("have, not have") means the same as `{{word:you3}} ... {{word:ma}}`.',
            ],
          },
        ],
      },
    ],
  },
  proseAnsweringYesNo: {
    en: [
      'Chinese has no single word for "yes" or "no".',
      'To answer, repeat the verb from the question. Say it alone for "yes". Put `{{word:bu4}}` in front of it for "no".',
      "`{{word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}} {{word:fu4mu3}}?` (\"Do you listen to your parents?\") → `{{word:ting1}}.` (\"Yes, I do.\") or `{{word:bu4}} {{word:ting1}}.` (\"No, I don't.\")",
      "This works for `{{word:ma}}` questions too.",
      "You can also answer with `{{word:shi4}}` (\"yes, it is\") or `{{word:bu4}} {{word:shi4}}` (\"no, it isn't\").",
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
  example1: { en: ["What is good?"] },
  example2: { en: ["Who eats fruit?"] },
  example3: { en: ["Does he have a lot of fruit?"] },
  example4: { en: ["[He] has [some]."] },
  example5: { en: ["Do you listen to your parents?"] },
  example6: { en: ["[I] don't listen."] },
  example7: { en: ["What does he eat?"] },
  example8: { en: ["Do you have a tool?"] },
  example9: { en: ["Why don't you eat?"] },
  example10: { en: ["How do you say this?"] },
  example11: { en: ["Do you eat fruit?"] },
  example12: { en: ["Is this your place?"] },
  example13: { en: ["What are you looking for?"] },
  example14: { en: ["Is this a box?"] },
  example15: { en: ["What does he ask?"] },
  exercise1: { en: ['Ask: "What tools do you have?"'] },
  exercise2: { en: ['Ask "Does he listen?" without `{{word:ma}}`.'] },
  exercise3: {
    en: [
      'Ask "Is the tool small?" Use `{{word:ma}}`, or say "small, not small".',
    ],
  },
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
  answer3: {
    en: [
      "{{Word:gong1ju4}} {{word:xiao3}}-{{word:bu4}}-{{word:xiao3}}?",
    ],
  },
};

export default en;
