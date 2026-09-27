// Language-independent block sequence for lesson-06 ("Questions and Answers").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Phase 1 skeleton (BOOK_PLAN.md): the vocab list follows BOOK_PLAN §4b, and
// the other blocks were moved here unchanged from the old 16-lesson layout
// ([from old LNN] says where; the old lessons are archived in
// src/content/legacy/v2-16-lessons/). They get rewritten in Phase 2.
import type {
  TTitle,
  TSummary,
  TVocab,
  TProse,
  TExample,
  TExercise,
  TAnswer,
  TInfo,
} from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Questions and Answers */
  title: TTitle;
  /** Chapter summary. [from old L06] */
  summary: TSummary;
  /** Vocabulary: "what, which". */
  vocabShenme: TVocab;
  /** Vocabulary: "turns a sentence into a yes-or-no question". */
  vocabMa: TVocab;
  /** Vocabulary: "why". */
  vocabWeishenme: TVocab;
  /** Vocabulary: "how". */
  vocabZenme: TVocab;
  /** Vocabulary: "ask". */
  vocabWen: TVocab;
  /** Vocabulary: "look for". */
  vocabZhao: TVocab;
  /** Vocabulary: "tool, machine, device". */
  vocabGongju: TVocab;
  /** Vocabulary: "box". */
  vocabHezi: TVocab;
  /** Grammar: question words sit in-situ, exactly where the answer would go. [from old L06] */
  proseQuestionWordsInSitu: TProse;
  /** Grammar box: yes-or-no questions -- ma at the end, or verb-not-verb. */
  infoYesNoQuestions: TInfo;
  /** Grammar: answering yes/no by repeating (or negating) the verb. [from old L06] */
  proseAnsweringYesNo: TProse;
  /** Example: shénme shì hǎo-de? [from old L06] */
  example1: TExample;
  /** Example: shénme rén chī shuǐguǒ? [from old L06] */
  example2: TExample;
  /** Example: tā yǒu-méi-yǒu hěn-duō-de shuǐguǒ? [from old L06] */
  example3: TExample;
  /** Example: yǒu. [from old L06] */
  example4: TExample;
  /** Example: nǐ tīng-bù-tīng fùmǔ? [from old L06] */
  example5: TExample;
  /** Example: bù tīng. [from old L06] */
  example6: TExample;
  /** Example: tā chī shénme? [from old L06] */
  example7: TExample;
  /** Example: nǐ yǒu gōngjù ma? [from old L06] */
  example8: TExample;
  /** Example: wèishénme nǐ bù chī? [from old L06] */
  example9: TExample;
  /** Example: zhè-ge zěnme shuō? [from old L06] */
  example10: TExample;
  /** Example: nǐ chī shuǐguǒ ma? [from old L06] */
  example11: TExample;
  /** Example: zhe shi ni-de difang? bu shi [from old L06] */
  example12: TExample;
  /** Example: nǐ zhǎo shénme? */
  example13: TExample;
  /** Example: zhè shì hézi ma? */
  example14: TExample;
  /** Example: tā wèn shénme? */
  example15: TExample;
  /** Exercise 1: What tools do you have? [from old L06] */
  exercise1: TExercise;
  /** Exercise 2: Does he listen? [from old L06] */
  exercise2: TExercise;
  /** Exercise 3: Is the tool small? [from old L06] */
  exercise3: TExercise;
  /** Exercise 4: Is that your box? */
  exercise4: TExercise;
  /** Exercise 5: Why is he looking for water? */
  exercise5: TExercise;
  /** Exercise 6: How do you write this? */
  exercise6: TExercise;
  /** Exercise 7: Who is asking? */
  exercise7: TExercise;
  /** Answer 1. [from old L06] */
  answer1: TAnswer;
  /** Answer 2. [from old L06] */
  answer2: TAnswer;
  /** Answer 3. [from old L06] */
  answer3: TAnswer;
  /** Answer 4. */
  answer4: TAnswer;
  /** Answer 5. */
  answer5: TAnswer;
  /** Answer 6. */
  answer6: TAnswer;
  /** Answer 7. */
  answer7: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabShenme: { type: "vocab", term: "{{word:shen2me}}", ttsText: "什么" },
  vocabMa: { type: "vocab", term: "{{word:ma}}", ttsText: "吗" },
  vocabWeishenme: {
    type: "vocab",
    term: "{{word:wei4shen2me}}",
    ttsText: "为什么",
  },
  vocabZenme: { type: "vocab", term: "{{word:zen3me}}", ttsText: "怎么" },
  vocabWen: { type: "vocab", term: "{{word:wen4}}", ttsText: "问" },
  vocabZhao: { type: "vocab", term: "{{word:zhao3}}", ttsText: "找" },
  vocabGongju: {
    type: "vocab",
    term: "{{word:gong1ju4}}",
    ttsText: "工具",
  },
  vocabHezi: { type: "vocab", term: "{{word:he2zi}}", ttsText: "盒子" },
  proseQuestionWordsInSitu: { type: "prose" },
  infoYesNoQuestions: {
    type: "info",
    subtype: "grammar",
    tag: "questions/yes-or-no",
    items: [{ items: [{}, {}] }],
  },
  proseAnsweringYesNo: { type: "prose" },
  example1: {
    type: "example",
    pinyin: "{{Word:shen2me}} {{word:shi4}} {{word:hao3}}-{{word:de}}?",
    ttsText: "什么是好的？",
  },
  example2: {
    type: "example",
    pinyin: "{{Word:shen2me}} {{word:ren2}} {{word:chi1}} {{word:shui3guo3}}?",
    ttsText: "什么人吃水果？",
  },
  example3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:you3}}-méi-{{word:you3}} {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:shui3guo3}}?",
    ttsText: "他有没有很多的水果？",
  },
  example4: {
    type: "example",
    pinyin: "{{Word:you3}}.",
    ttsText: "有。",
  },
  example5: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}} {{word:fu4mu3}}?",
    ttsText: "你听不听父母？",
  },
  example6: {
    type: "example",
    pinyin: "{{Word:bu4}} {{word:ting1}}.",
    ttsText: "不听。",
  },
  example7: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:chi1}} {{word:shen2me}}?",
    ttsText: "他吃什么？",
  },
  example8: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:you3}} {{word:gong1ju4}} {{word:ma}}?",
    ttsText: "你有工具吗？",
  },
  example9: {
    type: "example",
    pinyin: "{{Word:wei4shen2me}} {{word:ni3}} {{word:bu4}} {{word:chi1}}?",
    ttsText: "为什么你不吃？",
  },
  example10: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:zen3me}} {{word:shuo1}}?",
    ttsText: "这个怎么说？",
  },
  example11: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:chi1}} {{word:shui3guo3}} {{word:ma}}?",
    ttsText: "你吃水果吗？",
  },
  example12: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:ni3}}-{{word:de}} {{word:di4fang1}} {{word:bu4}}-{{word:shi4}}?",
    ttsText: "这是你的地方不是？",
  },
  example13: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:zhao3}} {{word:shen2me}}?",
    ttsText: "你找什么？",
  },
  example14: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:he2zi}} {{word:ma}}?",
    ttsText: "这是盒子吗？",
  },
  example15: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:wen4}} {{word:shen2me}}?",
    ttsText: "他问什么？",
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  answer1: { type: "answer", ttsText: "你有什么工具？" },
  answer2: { type: "answer", ttsText: "他听不听？（或：他听吗？）" },
  answer3: { type: "answer", ttsText: "工具小不小？（或：工具小吗？）" },
  answer4: { type: "answer", ttsText: "那是你的盒子吗？" },
  answer5: { type: "answer", ttsText: "为什么他找水？" },
  answer6: { type: "answer", ttsText: "这个怎么写？" },
  answer7: { type: "answer", ttsText: "什么人问？" },
};

export default shape;
