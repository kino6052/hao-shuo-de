// Language-independent block sequence for lesson-15 ("Modifiers 4 — Becoming and making").
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
  /** Modifiers 4 — Becoming and making */
  title: TTitle;
  /** Chapter summary: what you'll be able to say (stub until the Phase 2 rewrite). */
  summary: TSummary;
  /** Vocabulary: "to become, change into". */
  vocabBian: TVocab;
  /** Vocabulary: "puts the thing first ("bǎ it make good")". */
  vocabBa: TVocab;
  /** Vocabulary: "do, make". */
  vocabNong: TVocab;
  /** Vocabulary: "get". */
  vocabDe: TVocab;
  /** Vocabulary: "power, energy". */
  vocabLiliang: TVocab;
  /** Vocabulary: "bad, negative, broken". */
  vocabHuai: TVocab;
  /** Vocabulary: "mud, paste". */
  vocabNi: TVocab;
  /** Grammar: bian4 steps directly into the main verb slot for a state change; kaishi3 marks a gradual/starting change. [from old L09] */
  proseChangeOnset: TProse;
  /** Grammar rule box: bian4 vs kaishi3. [from old L09] */
  infoChangeVsOnset: TInfo;
  /** Example: dìfāng biàn dà. [from old L09] */
  example1: TExample;
  /** Example: shuǐguǒ biàn huài le. [from old L09] */
  example4: TExample;
  /** Grammar: "strong" is built by composing you3 + li4liang4, bound with -de. [from old L10] */
  proseBuildingAdjective: TProse;
  /** Grammar rule box: Building an Adjective (word composition when the dictionary lacks one). [from old L10] */
  infoBuildingAdjective: TInfo;
  /** Grammar: le attached to an adjective marks a change of state (not simply "it is"). [from old L10] */
  proseStateChange: TProse;
  /** Grammar rule box: State Change with le. [from old L10] */
  infoStateChange: TInfo;
  /** Grammar rule box: The Causative Rule -- ba3...bian4 turns an adjective into a caused action. [from old L10] */
  infoCausative: TInfo;
  /** Example: shuǐ gěi wǒ lìliàng. [from old L10] */
  example2L10: TExample;
  /** Example: nǐ shì yǒu-lìliàng-de nánrén. [from old L10] */
  example3L10: TExample;
  /** Example: shuǐ hǎo le. [from old L10] */
  example6L10: TExample;
  /** Example: méiyǒu rén shì huài-de. [from old L10] */
  example7L10: TExample;
  /** Exercise 2: The path becomes narrow. [from old L09] */
  exercise2: TExercise;
  /** Exercise 1: The man doesn't eat bad fruit. [from old L10] */
  exercise1L10: TExercise;
  /** Exercise 2: Eating makes me tall. [from old L10] */
  exercise2L10: TExercise;
  /** Exercise 4: The community has become strong. [from old L10] */
  exercise4L10: TExercise;
  /** Answer 2. [from old L09] */
  answer2: TAnswer;
  /** Answer 1. [from old L10] */
  answer1L10: TAnswer;
  /** Answer 2. [from old L10] */
  answer2L10: TAnswer;
  /** Answer 4. [from old L10] */
  answer4L10: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabBian: { type: "vocab", term: "{{word:bian4}}", ttsText: "变" },
  vocabBa: { type: "vocab", term: "{{word:ba3}}", ttsText: "把" },
  vocabNong: { type: "vocab", term: "{{word:nong4}}", ttsText: "弄" },
  vocabDe: { type: "vocab", term: "{{word:de2}}", ttsText: "得" },
  vocabLiliang: {
    type: "vocab",
    term: "{{word:li4liang4}}",
    ttsText: "力量",
  },
  vocabHuai: { type: "vocab", term: "{{word:huai4}}", ttsText: "坏" },
  vocabNi: { type: "vocab", term: "{{word:ni2}}", ttsText: "泥" },
  proseChangeOnset: { type: "prose" },
  infoChangeVsOnset: {
    type: "info",
    subtype: "grammar",
    tag: "verbs/change-and-onset",
    items: [{}, {}],
  },
  example1: {
    type: "example",
    pinyin: "{{Word:di4fang1}} {{word:bian4}} {{word:da4}}.",
  },
  example4: {
    type: "example",
    pinyin: "{{Word:shui3guo3}} {{word:bian4}} {{word:huai4}} {{word:le}}.",
  },
  proseBuildingAdjective: { type: "prose" },
  infoBuildingAdjective: {
    type: "info",
    subtype: "grammar",
    tag: "adjectives/composition",
    items: [{}],
  },
  proseStateChange: { type: "prose" },
  infoStateChange: {
    type: "info",
    subtype: "grammar",
    tag: "adjectives/state-change",
    items: [{}],
  },
  infoCausative: {
    type: "info",
    subtype: "grammar",
    tag: "adjectives/causative",
    items: [{ items: [{}] }],
  },
  example2L10: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:gei3}} {{word:wo3}} {{word:li4liang4}}.",
    ttsText: "水给我力量。",
  },
  example3L10: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:shi4}} {{word:you3}}-{{word:li4liang4}}-{{word:de}} {{word:nan2ren2}}.",
    ttsText: "你是有力量的男人。",
  },
  example6L10: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:hao3}} {{word:le}}.",
    ttsText: "水好了。",
  },
  example7L10: {
    type: "example",
    pinyin: "Méiyǒu {{word:ren2}} {{word:shi4}} {{word:huai4}}-{{word:de}}.",
    ttsText: "没有人是坏的。",
  },
  exercise2: { type: "exercise" },
  exercise1L10: { type: "exercise" },
  exercise2L10: { type: "exercise" },
  exercise4L10: { type: "exercise" },
  answer2: { type: "answer" },
  answer1L10: { type: "answer", ttsText: "男人不吃坏的水果。" },
  answer2L10: { type: "answer", ttsText: "吃把我变大。" },
  answer4L10: { type: "answer", ttsText: "群有力量了。" },
};

export default shape;
