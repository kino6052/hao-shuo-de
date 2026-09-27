// Language-independent block sequence for lesson-21 ("Greetings and Feelings").
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
  /** Greetings and Feelings */
  title: TTitle;
  /** Chapter summary. [from old L12] */
  summary: TSummary;
  /** Vocabulary: "to feel, think". */
  vocabJuede: TVocab;
  /** Vocabulary: "be scared". */
  vocabPa: TVocab;
  /** Vocabulary: "to call, make an animal sound (used alongside the Quote Partition)". */
  vocabJiao: TVocab;
  /** Vocabulary: "sound, voice". */
  vocabShengyin: TVocab;
  /** Vocabulary: "bug". */
  vocabChongzi: TVocab;
  /** Vocabulary: "sex". */
  vocabXing: TVocab;
  /** Grammar: greetings/imperatives/blessings reuse ordinary sentence patterns instead of dedicated particles. [from old L12] */
  proseReusedPatterns: TProse;
  /** Grammar rule box: Greetings, Commands, and Blessings -- 4 patterns (greetings, imperatives, animal sounds, wishes). [from old L12] */
  infoGreetingsCommandsBlessings: TInfo;
  /** Example: nǐ hǎo ma? [from old L12] */
  example1: TExample;
  /** Example: qù nǐ-de dìfāng! [from old L12] */
  example2: TExample;
  /** Example: bù shuō. Zuò dōngxi. [from old L12] */
  example3: TExample;
  /** Example: wǒ qù le. [from old L12] */
  example4: TExample;
  /** Example: nà-ge dòngwù jiào "wang-wang". [from old L12] */
  example5: TExample;
  /** Example: wèishénme nǐ juéde huài? [from old L12] */
  example6: TExample;
  /** Example: nǐ hěn dà! [from old L12] */
  example7: TExample;
  /** Example: hǎo-hǎo-de rì! [from old L12] */
  example8: TExample;
  /** Example: hǎo-hǎo juéde! [from old L12] */
  example9: TExample;
  /** Exercise 1: Give the tool to me. [from old L12] */
  exercise1: TExercise;
  /** Exercise 2: "Lisa" is happy. [from old L12] */
  exercise2: TExercise;
  /** Exercise 3: Meow! [from old L12] */
  exercise3: TExercise;
  /** Answer 1. [from old L12] */
  answer1: TAnswer;
  /** Answer 2. [from old L12] */
  answer2: TAnswer;
  /** Answer 3. [from old L12] */
  answer3: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabJuede: { type: "vocab", term: "{{word:jue2de}}", ttsText: "觉得" },
  vocabPa: { type: "vocab", term: "{{word:pa4}}", ttsText: "怕" },
  vocabJiao: { type: "vocab", term: "{{word:jiao4}}", ttsText: "叫" },
  vocabShengyin: {
    type: "vocab",
    term: "{{word:sheng1yin1}}",
    ttsText: "声音",
  },
  vocabChongzi: {
    type: "vocab",
    term: "{{word:chong2zi}}",
    ttsText: "虫子",
  },
  vocabXing: { type: "vocab", term: "{{word:xing4}}", ttsText: "性" },
  proseReusedPatterns: { type: "prose" },
  infoGreetingsCommandsBlessings: {
    type: "info",
    subtype: "grammar",
    tag: "expressions/greetings-and-wishes",
    items: [{}, {}, {}, {}],
  },
  example1: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:hao3}} {{word:ma}}?",
  },
  example2: {
    type: "example",
    pinyin: "{{Word:qu4}} {{word:ni3}}-{{word:de}} {{word:di4fang1}}!",
  },
  example3: {
    type: "example",
    pinyin: "{{Word:bu4}} {{word:shuo1}}. {{Word:nong4}} {{word:dong1xi}}.",
  },
  example4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:qu4}} {{word:le}}.",
  },
  example5: {
    type: "example",
    pinyin: '{{Word:na4}}-ge {{word:dong4wu4}} {{word:jiao4}} "wang-wang".',
  },
  example6: {
    type: "example",
    pinyin: "{{Word:wei4shen2me}} {{word:ni3}} {{word:jue2de}} {{word:huai4}}?",
  },
  example7: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:hen3}} {{word:da4}}!",
  },
  example8: {
    type: "example",
    pinyin: "{{Word:hao3}}-{{word:hao3}}-{{word:de}} {{word:ri4}}!",
  },
  example9: {
    type: "example",
    pinyin: "{{Word:hao3}}-{{word:hao3}} {{word:jue2de}}!",
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  answer1: { type: "answer" },
  answer2: { type: "answer" },
  answer3: { type: "answer" },
};

export default shape;
