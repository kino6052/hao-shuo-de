// Language-independent block sequence for lesson-13 ("Modifiers 2 — Comparing").
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
  /** Modifiers 2 — Comparing */
  title: TTitle;
  /** Chapter summary: what you'll be able to say (stub until the Phase 2 rewrite). */
  summary: TSummary;
  /** Vocabulary: "than". */
  vocabBi: TVocab;
  /** Vocabulary: "same, similar, sibling". */
  vocabYiyang: TVocab;
  /** Vocabulary: "different, altered". */
  vocabButong: TVocab;
  /** Vocabulary: "hard". */
  vocabYing: TVocab;
  /** Vocabulary: "round". */
  vocabYuan: TVocab;
  /** Vocabulary: "stick". */
  vocabGunzi: TVocab;
  /** Vocabulary: "line, rope". */
  vocabXian: TVocab;
  /** Example: wǒ-de yīyàng-de nǚrén kāishǐ le dòng hào hé dòng hào-liǎng. [from old L16] */
  example5: TExample;
  /** Example: nǐ-de dìfāng shì hēisè-de, bù-shì bùtóng-de dìfāng. [from old L16] */
  example6: TExample;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabBi: { type: "vocab", term: "{{word:bi3}}", ttsText: "比" },
  vocabYiyang: {
    type: "vocab",
    term: "{{word:yi1yang4}}",
    ttsText: "一样",
  },
  vocabButong: {
    type: "vocab",
    term: "{{word:bu4tong2}}",
    ttsText: "不同",
  },
  vocabYing: { type: "vocab", term: "{{word:ying4}}", ttsText: "硬" },
  vocabYuan: { type: "vocab", term: "{{word:yuan2}}", ttsText: "圆" },
  vocabGunzi: { type: "vocab", term: "{{word:gun4zi}}", ttsText: "棍子" },
  vocabXian: { type: "vocab", term: "{{word:xian4}}", ttsText: "线" },
  example5: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:yi1yang4}}-{{word:de}} {{word:nv3ren2}} {{word:kai1shi3}} {{word:le}} dòng {{word:hao4}} {{word:he2}} dòng {{word:hao4}}-{{word:liang3}}.",
  },
  example6: {
    type: "example",
    pinyin: "{{Word:ni3}}-{{word:de}} {{word:di4fang1}} {{word:shi4}} {{word:hei1se4}}-{{word:de}}, {{word:bu4}}-{{word:shi4}} {{word:bu4tong2}}-{{word:de}} {{word:di4fang1}}.",
  },
};

export default shape;
