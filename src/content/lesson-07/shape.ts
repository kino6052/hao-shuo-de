// Language-independent block sequence for lesson-07 ("Pre-Verbs").
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
  /** Pre-Verbs */
  title: TTitle;
  /** Chapter summary. [from old L09] */
  summary: TSummary;
  /** Vocabulary: "to want, need, must, should". */
  vocabYao: TVocab;
  /** Vocabulary: "can". */
  vocabNeng: TVocab;
  /** Vocabulary: "to know, know how to". */
  vocabZhidao: TVocab;
  /** Vocabulary: "love". */
  vocabAi: TVocab;
  /** Vocabulary: "wait". */
  vocabDeng: TVocab;
  /** Vocabulary: "clothes". */
  vocabYifu: TVocab;
  /** Grammar: auxiliary verbs (intent/ability/change) sit right before the main predicate. [from old L09] */
  proseAuxiliaries: TProse;
  /** Grammar rule box: Auxiliary Verb Word Order. [from old L09] */
  infoAuxiliaryOrder: TInfo;
  /** Example: nǐ kěyǐ-bù-kěyǐ lái? [from old L09] */
  example3: TExample;
  /** Example: wǒ yào liú zài wǒ fùmǔ-de dìfāng. [from old L09] */
  example5: TExample;
  /** Exercise 1: You may keep your name. [from old L09] */
  exercise1: TExercise;
  /** Exercise 3: Do you want to eat some fish? [from old L09] */
  exercise3: TExercise;
  /** Answer 1. [from old L09] */
  answer1: TAnswer;
  /** Answer 3. [from old L09] */
  answer3: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabYao: { type: "vocab", term: "{{word:yao4}}", ttsText: "要" },
  vocabNeng: { type: "vocab", term: "{{word:neng2}}", ttsText: "能" },
  vocabZhidao: {
    type: "vocab",
    term: "{{word:zhi1dao4}}",
    ttsText: "知道",
  },
  vocabAi: { type: "vocab", term: "{{word:ai4}}", ttsText: "爱" },
  vocabDeng: { type: "vocab", term: "{{word:deng3}}", ttsText: "等" },
  vocabYifu: { type: "vocab", term: "{{word:yi1fu}}", ttsText: "衣服" },
  proseAuxiliaries: { type: "prose" },
  infoAuxiliaryOrder: {
    type: "info",
    subtype: "grammar",
    tag: "verbs/auxiliaries",
    items: [{}],
  },
  example3: {
    type: "example",
    pinyin: "{{Word:ni3}} kěyǐ-{{word:bu4}}-kěyǐ {{word:lai2}}?",
  },
  example5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:liu2}} {{word:zai4}} {{word:wo3}} {{word:fu4mu3}}-{{word:de}} {{word:di4fang1}}.",
  },
  exercise1: { type: "exercise" },
  exercise3: { type: "exercise" },
  answer1: { type: "answer" },
  answer3: { type: "answer" },
};

export default shape;
