// Language-independent block sequence for lesson-18 ("Changing the Role of a Word").
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
} from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Changing the Role of a Word */
  title: TTitle;
  /** Chapter summary: what you'll be able to say (stub until the Phase 2 rewrite). */
  summary: TSummary;
  /** Vocabulary: "word". */
  vocabCi: TVocab;
  /** Vocabulary: "way, method". */
  vocabFangfa: TVocab;
  /** Vocabulary: "nose". */
  vocabBizi: TVocab;
  /** Vocabulary: "skin, bark, peel". */
  vocabPifu: TVocab;
  /** Example: nǐ-de zuò-de hěn hǎo. [from old L10] */
  example1: TExample;
  /** Example: zhīdào-de rén kàn xiě-de dōngxi. [from old L10] */
  example4: TExample;
  /** Example: wǒ zhīdào hǎo shuō-de. [from old L05] */
  example1L05: TExample;
  /** Example: nà-ge nánrén shì shuō-de rén. [from old L05] */
  example2L05: TExample;
  /** Example: qún-de xiě-de dōngxi hěn hǎo. [from old L05] */
  example4L05: TExample;
  /** Example: zhīdào-de rén tīng. [from old L05] */
  example6L05: TExample;
  /** Example: zhīdào-de dìfāng yǒu xiě-de dōngxi. [from old L05] */
  example7L05: TExample;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabCi: { type: "vocab", term: "{{word:ci2}}", ttsText: "词" },
  vocabFangfa: {
    type: "vocab",
    term: "{{word:fang1fa3}}",
    ttsText: "方法",
  },
  vocabBizi: { type: "vocab", term: "{{word:bi2zi}}", ttsText: "鼻子" },
  vocabPifu: { type: "vocab", term: "{{word:pi2fu1}}", ttsText: "皮肤" },
  example1: {
    type: "example",
    pinyin: "{{Word:ni3}}-{{word:de}} {{word:nong4}}-{{word:de}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "你的做的很好。",
  },
  example4: {
    type: "example",
    pinyin: "{{Word:zhi1dao4}}-{{word:de}} {{word:ren2}} {{word:kan4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.",
    ttsText: "知道的人看写的东西。",
  },
  example1L05: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:hao3}} {{word:shuo1}}-{{word:de}}.",
    ttsText: "我知道好说的。",
  },
  example2L05: {
    type: "example",
    pinyin: "{{Word:na4}}-ge {{word:nan2ren2}} {{word:shi4}} {{word:shuo1}}-{{word:de}} {{word:ren2}}.",
    ttsText: "那个男人是说的人。",
  },
  example4L05: {
    type: "example",
    pinyin: "{{Word:qun2}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1xi}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "群的写的东西很好。",
  },
  example6L05: {
    type: "example",
    pinyin: "{{Word:zhi1dao4}}-{{word:de}} {{word:ren2}} {{word:ting1}}.",
    ttsText: "知道的人听。",
  },
  example7L05: {
    type: "example",
    pinyin: "{{Word:zhi1dao4}}-{{word:de}} {{word:di4fang1}} {{word:you3}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.",
    ttsText: "知道的地方有写的东西。",
  },
};

export default shape;
