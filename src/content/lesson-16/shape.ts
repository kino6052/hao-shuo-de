// Language-independent block sequence for lesson-16 ("Numbers").
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
  TExample,
  TExercise,
  TAnswer,
  TInfo,
} from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Numbers */
  title: TTitle;
  /** Chapter summary. [from old L13] */
  summary: TSummary;
  /** Vocabulary: "one". */
  vocabYi: TVocab;
  /** Vocabulary: "two (used exclusively before measure words for counting objects/quantities)". */
  vocabLiang: TVocab;
  /** Vocabulary: "number identity, name of a number, day of the month". */
  vocabHao: TVocab;
  /** Vocabulary: "three". */
  vocabSan: TVocab;
  /** Vocabulary: "four". */
  vocabSi: TVocab;
  /** Vocabulary: "five". */
  vocabWu: TVocab;
  /** Vocabulary: "six". */
  vocabLiu: TVocab;
  /** Vocabulary: "seven". */
  vocabQi: TVocab;
  /** Vocabulary: "eight". */
  vocabBa: TVocab;
  /** Vocabulary: "nine". */
  vocabJiu: TVocab;
  /** Vocabulary: "ten". */
  vocabShi: TVocab;
  /** Grammar rule box: Counting and Ordering -- 1/2 via gè, duō beyond two, dì- for ordinals. [from old L13] */
  infoCountingAndOrdering: TInfo;
  /** Example: nǐ shì dì-yī-hào! [from old L13] */
  example1: TExample;
  /** Example: zhè-ge shì dì-èr-ge shíjiān. [from old L13] */
  example2: TExample;
  /** Example: liǎng-ge xiǎo nánrén liú-le hěn-duō zhíwù. [from old L13] */
  example3: TExample;
  /** Example: wǒ zhīdào hěn-duō shuō. [from old L13] */
  example4: TExample;
  /** Exercise 1: What is the third thing? [from old L13] */
  exercise1: TExercise;
  /** Exercise 2: I know two languages. [from old L13] */
  exercise2: TExercise;
  /** Exercise 3: This is the first day. [from old L13] */
  exercise3: TExercise;
  /** Answer 1. [from old L13] */
  answer1: TAnswer;
  /** Answer 2. [from old L13] */
  answer2: TAnswer;
  /** Answer 3. [from old L13] */
  answer3: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabYi: { type: "vocab", term: "{{word:yi1}}", ttsText: "一" },
  vocabLiang: { type: "vocab", term: "{{word:liang3}}", ttsText: "两" },
  vocabHao: { type: "vocab", term: "{{word:hao4}}", ttsText: "号" },
  vocabSan: { type: "vocab", term: "{{word:san1}}", ttsText: "三" },
  vocabSi: { type: "vocab", term: "{{word:si4}}", ttsText: "四" },
  vocabWu: { type: "vocab", term: "{{word:wu3}}", ttsText: "五" },
  vocabLiu: { type: "vocab", term: "{{word:liu4}}", ttsText: "六" },
  vocabQi: { type: "vocab", term: "{{word:qi1}}", ttsText: "七" },
  vocabBa: { type: "vocab", term: "{{word:ba1}}", ttsText: "八" },
  vocabJiu: { type: "vocab", term: "{{word:jiu3}}", ttsText: "九" },
  vocabShi: { type: "vocab", term: "{{word:shi2}}", ttsText: "十" },
  infoCountingAndOrdering: {
    type: "info",
    subtype: "grammar",
    tag: "numbers/counting-and-ordering",
    items: [{}, {}, {}],
  },
  example1: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:shi4}} dì-{{word:yi1}}-{{word:hao4}}!",
  },
  example2: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:shi4}} dì-èr-ge {{word:shi2jian1}}.",
  },
  example3: {
    type: "example",
    pinyin: "{{Word:liang3}}-ge {{word:xiao3}} {{word:nan2ren2}} {{word:liu2}}-{{word:le}} {{word:hen3}}-{{word:duo1}} {{word:zhi2wu4}}.",
  },
  example4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:hen3}}-{{word:duo1}} {{word:shuo1}}.",
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  answer1: { type: "answer" },
  answer2: { type: "answer" },
  answer3: { type: "answer" },
};

export default shape;
