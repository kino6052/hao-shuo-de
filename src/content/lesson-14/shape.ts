// Language-independent block sequence for lesson-14 ("Modifiers 3 — Also and all").
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
  /** Modifiers 3 — Also and all */
  title: TTitle;
  /** Chapter summary: what you'll be able to say (stub until the Phase 2 rewrite). */
  summary: TSummary;
  /** Vocabulary: "also". */
  vocabYe: TVocab;
  /** Vocabulary: "all, completely, everything". */
  vocabQuanbu: TVocab;
  /** Vocabulary: "plant". */
  vocabZhiwu: TVocab;
  /** Vocabulary: "fire". */
  vocabHuo: TVocab;
  /** Vocabulary: "air". */
  vocabKongqi: TVocab;
  /** Example: fùmǔ-de dìfāng hěn xiǎo, yě hěn lěng. [from old L16] */
  example3: TExample;
  /** Example: quánbù rén tīng tā. [from old L13] */
  example5L13: TExample;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabYe: { type: "vocab", term: "{{word:ye3}}", ttsText: "也" },
  vocabQuanbu: {
    type: "vocab",
    term: "{{word:quan2bu4}}",
    ttsText: "全部",
  },
  vocabZhiwu: { type: "vocab", term: "{{word:zhi2wu4}}", ttsText: "植物" },
  vocabHuo: { type: "vocab", term: "{{word:huo3}}", ttsText: "火" },
  vocabKongqi: {
    type: "vocab",
    term: "{{word:kong1qi4}}",
    ttsText: "空气",
  },
  example3: {
    type: "example",
    pinyin: "{{Word:fu4mu3}}-{{word:de}} {{word:di4fang1}} {{word:hen3}} {{word:xiao3}}, {{word:ye3}} {{word:hen3}} {{word:leng3}}.",
  },
  example5L13: {
    type: "example",
    pinyin: "{{Word:quan2bu4}} {{word:ren2}} {{word:ting1}} {{word:ta1}}.",
  },
};

export default shape;
