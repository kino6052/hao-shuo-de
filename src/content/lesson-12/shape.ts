// Language-independent block sequence for lesson-12 ("Modifiers 1 — How much").
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
  /** Modifiers 1 — How much */
  title: TTitle;
  /** Chapter summary: what you'll be able to say (stub until the Phase 2 rewrite). */
  summary: TSummary;
  /** Vocabulary: "really". */
  vocabZhen: TVocab;
  /** Vocabulary: "hot". */
  vocabRe: TVocab;
  /** Vocabulary: "cold". */
  vocabLeng: TVocab;
  /** Vocabulary: "sweet". */
  vocabTian: TVocab;
  /** Vocabulary: "strange". */
  vocabQiguai: TVocab;
  /** Vocabulary: "new". */
  vocabXin: TVocab;
  /** Vocabulary: "body". */
  vocabShenti: TVocab;
  /** Grammar: an adjective placed before another adjective or verb acts as an adverb. [from old L10] */
  proseAdjectivesAsAdverbs: TProse;
  /** Grammar rule box: Adjectives as Adverbs. [from old L10] */
  infoAdjectivesAsAdverbs: TInfo;
  /** Example: xiǎo-de nǚrén méiyǒu hǎo-de tīng fùmǔ. [from old L10] */
  example5: TExample;
  /** Example: nánrén-de fùmǔ duō-de kàn xiě-de dōngxi. [from old L10] */
  example8: TExample;
  /** Exercise 3: I know Hao-shuo-de a bit. [from old L10] */
  exercise3: TExercise;
  /** Answer 3. [from old L10] */
  answer3: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabZhen: { type: "vocab", term: "{{word:zhen1}}", ttsText: "真" },
  vocabRe: { type: "vocab", term: "{{word:re4}}", ttsText: "热" },
  vocabLeng: { type: "vocab", term: "{{word:leng3}}", ttsText: "冷" },
  vocabTian: { type: "vocab", term: "{{word:tian2}}", ttsText: "甜" },
  vocabQiguai: {
    type: "vocab",
    term: "{{word:qi2guai4}}",
    ttsText: "奇怪",
  },
  vocabXin: { type: "vocab", term: "{{word:xin1}}", ttsText: "新" },
  vocabShenti: {
    type: "vocab",
    term: "{{word:shen1ti3}}",
    ttsText: "身体",
  },
  proseAdjectivesAsAdverbs: { type: "prose" },
  infoAdjectivesAsAdverbs: {
    type: "info",
    subtype: "grammar",
    tag: "adjectives/adverbial-use",
    items: [{}],
  },
  example5: {
    type: "example",
    pinyin: "{{Word:xiao3}}-{{word:de}} {{word:nv3ren2}} méiyǒu {{word:hao3}}-{{word:de}} {{word:ting1}} {{word:fu4mu3}}.",
    ttsText: "小的女人没有好的听父母。",
  },
  example8: {
    type: "example",
    pinyin: "{{Word:nan2ren2}}-{{word:de}} {{word:fu4mu3}} {{word:duo1}}-{{word:de}} {{word:kan4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.",
    ttsText: "男人的父母多的看写的东西。",
  },
  exercise3: { type: "exercise" },
  answer3: { type: "answer", ttsText: "好说的，我知道的不多。" },
};

export default shape;
