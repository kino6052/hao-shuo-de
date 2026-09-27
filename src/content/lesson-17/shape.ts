// Language-independent block sequence for lesson-17 ("Colors").
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
} from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Colors */
  title: TTitle;
  /** Chapter summary. [from old L14] */
  summary: TSummary;
  /** Vocabulary: "color". */
  vocabYanse: TVocab;
  /** Vocabulary: "white, pale". */
  vocabBaise: TVocab;
  /** Vocabulary: "black, dark". */
  vocabHeise: TVocab;
  /** Vocabulary: "red". */
  vocabHongse: TVocab;
  /** Vocabulary: "yellow". */
  vocabHuangse: TVocab;
  /** Vocabulary: "blue, green". */
  vocabLanse: TVocab;
  /** Grammar: colors are two-syllable adjectives, binding to their noun with -de like any other. [from old L14] */
  proseColorsAreAdjectives: TProse;
  /** Example: zhè-ge hēisè-de shíjiān, tā lái. [from old L14] */
  example1: TExample;
  /** Example: nǐ kàn-jiàn huángsè-de shuǐ, bù chī tā. [from old L14] */
  example2: TExample;
  /** Example: lánsè-de gōngjù zài báisè-de dìfāng. [from old L14] */
  example3: TExample;
  /** Example: wǒ-de shēntǐ biàn lánsè, zhè-ge hěn huài. [from old L14] */
  example4: TExample;
  /** Exercise 1: The tool is red. [from old L14] */
  exercise1: TExercise;
  /** Exercise 2: This is a black place. [from old L14] */
  exercise2: TExercise;
  /** Exercise 3: Is the fruit yellow? [from old L14] */
  exercise3: TExercise;
  /** Answer 1. [from old L14] */
  answer1: TAnswer;
  /** Answer 2. [from old L14] */
  answer2: TAnswer;
  /** Answer 3. [from old L14] */
  answer3: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabYanse: { type: "vocab", term: "{{word:yan2se4}}", ttsText: "颜色" },
  vocabBaise: { type: "vocab", term: "{{word:bai2se4}}", ttsText: "白色" },
  vocabHeise: { type: "vocab", term: "{{word:hei1se4}}", ttsText: "黑色" },
  vocabHongse: {
    type: "vocab",
    term: "{{word:hong2se4}}",
    ttsText: "红色",
  },
  vocabHuangse: {
    type: "vocab",
    term: "{{word:huang2se4}}",
    ttsText: "黄色",
  },
  vocabLanse: { type: "vocab", term: "{{word:lan2se4}}", ttsText: "蓝色" },
  proseColorsAreAdjectives: { type: "prose" },
  example1: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:hei1se4}}-{{word:de}} {{word:shi2jian1}}, {{word:ta1}} {{word:lai2}}.",
  },
  example2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:kan4}}-jiàn {{word:huang2se4}}-{{word:de}} {{word:shui3}}, {{word:bu4}} {{word:chi1}} {{word:ta1}}.",
  },
  example3: {
    type: "example",
    pinyin: "{{Word:lan2se4}}-{{word:de}} {{word:gong1ju4}} {{word:zai4}} {{word:bai2se4}}-{{word:de}} {{word:di4fang1}}.",
  },
  example4: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:shen1ti3}} {{word:bian4}} {{word:lan2se4}}, {{word:zhe4}}-ge {{word:hen3}} {{word:huai4}}.",
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  answer1: { type: "answer", ttsText: "工具很红色。" },
  answer2: { type: "answer", ttsText: "这个是黑色的地方。" },
  answer3: { type: "answer", ttsText: "水果很黄色吗？" },
};

export default shape;
