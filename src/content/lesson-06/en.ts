// English text for lesson-06, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Questions and Answers"] },
  summary: {
    en: [
      "Question words like `{{word:shen2me}}` (\"what\") sit right where the answer would go, `{{word:ma}}` turns any statement into a yes-or-no question, and A-not-A reduplication (`{{word:you3}}-méi-{{word:you3}}`) asks the same thing without `{{word:ma}}`.",
    ],
  },

  vocabGongju: { en: ["tool, machine, device"] },
  vocabTa: { en: ["he, she, it, they"] },
  vocabHuozhe: { en: ["or"] },
  vocabShenme: { en: ["what, which"] },
  vocabWeishenme: { en: ["why"] },
  vocabZenme: { en: ["how"] },

  proseQuestionWordsInSitu: {
    en: [
      "Hao-shuo-de does not move question words to the front of a sentence, and it does not build a separate question form of the verb either.",
      "A question word simply sits exactly where its answer would go.",
      '`{{word:ta1}} {{word:zai4}} {{word:chi1}} {{word:shen2me}}?` (\"He is eating what?\") asks for whatever belongs in the object slot; `{{word:shen2me}} {{word:ren2}} {{word:zai4}} {{word:shuo1}}?` (\"What person is speaking?\") asks for whatever belongs in the subject slot.',
      "The sentence's shape never changes -- only the word occupying one slot does.",
    ],
    tldr: { en: ["Question words like `{{word:shen2me}}` stay in the exact slot their answer would fill -- nothing moves to the front."] },
    necessity: { en: ["Confirms that Lesson 2's fixed word order also governs questions -- there is no separate question-word-fronting rule to learn."] },
  },
  infoYesNoQuestions: {
    title: { en: ["Yes-or-No Questions"] },
    items: [
      {
        en: ["There are two ways to ask a question that expects yes or no, and either one works:"],
        items: [
          { en: ['Add `{{word:ma}}` to the end of any statement: `{{word:ta1}} {{word:you3}} {{word:shui3guo3}}.` ("He has fruit.") becomes `{{word:ta1}} {{word:you3}} {{word:shui3guo3}} {{word:ma}}?` ("Does he have fruit?").'] },
          { en: ["Repeat the verb in positive-then-negative form (\"A-not-A\") with no `{{word:ma}}` at all: `{{word:you3}}-méi-{{word:you3}}` (\"have-not-have\") asks the same question as `{{word:you3}} ... {{word:ma}}`."] },
        ],
      },
    ],
  },
  proseAnsweringYesNo: {
    en: [
      "Hao-shuo-de has no single word for \"yes\" or \"no\".",
      "Instead, you answer a yes-or-no question by repeating the verb being asked about -- alone for \"yes\", or with `{{word:bu4}}` in front of it for \"no\".",
      '`{{word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}} {{word:fu4mu3}}?` (\"Do you listen to your parents?\") can be answered simply `{{word:ting1}}.` (\"[I] listen.\") or `{{word:bu4}} {{word:ting1}}.` (\"[I] don\'t listen.\").',
      "The same pattern answers a `{{word:ma}}` question too: repeat the verb the question was built on.",
    ],
    tldr: { en: ['Answer yes/no by repeating the verb (yes) or adding `{{word:bu4}}` before it (no) -- there is no standalone word for "yes" or "no".'] },
    necessity: { en: ["Explains why Hao-shuo-de speakers answer questions by echoing the verb instead of a fixed yes/no word -- a pattern that otherwise looks unexplained in the examples."] },
  },

  example1: { en: ["What is new?"] },
  example2: { en: ["What person is speaking?"] },
  example3: { en: ["Does he have a lot of fruit?"] },
  example4: { en: ["[He] has [some]."] },
  example5: { en: ["Do you listen to your parents?"] },
  example6: { en: ["[I] don't listen."] },
  example7: { en: ["What is it eating?"] },
  example8: { en: ["Do you give her the animal that's in the water?"] },
  example9: { en: ["Why do you give her the animal that's in the water?"] },
  example10: { en: ["How do you turn Hao-shuo-de into something known?"] },

  exercise1: { en: ["Ask: \"What tools do you have?\""] },
  exercise2: { en: ["Ask: \"Does he listen?\" -- using A-not-A."] },
  exercise3: { en: ["Ask: \"Is the tool small?\" -- using either `{{word:ma}}` or A-not-A."] },

  answer1: { en: ["{{Word:ni3}} {{word:you3}} {{word:shen2me}} {{word:gong1ju4}}?"] },
  answer2: { en: ["{{Word:ta1}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}?"] },
  answer3: { en: ["{{Word:gong1ju4}} {{word:xiao3}}-{{word:bu4}}-{{word:xiao3}}?"] },
};

export default en;
