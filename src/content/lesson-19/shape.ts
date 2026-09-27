// Language-independent block sequence for lesson-19 ("Relationships 1 — Inside a sentence").
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
  /** Relationships 1 — Inside a sentence */
  title: TTitle;
  /** Chapter summary: what you'll be able to say (stub until the Phase 2 rewrite). */
  summary: TSummary;
  /** Vocabulary: "to, for, give". */
  vocabGei: TVocab;
  /** Vocabulary: "using, with, by means of". */
  vocabYong: TVocab;
  /** Vocabulary: "and". */
  vocabHe: TVocab;
  /** Vocabulary: "or". */
  vocabHuozhe: TVocab;
  /** Vocabulary: "toward, for". */
  vocabDui: TVocab;
  /** Vocabulary: "group". */
  vocabQun: TVocab;
  /** Vocabulary: "touch". */
  vocabMo: TVocab;
  /** Vocabulary: "hit". */
  vocabDa: TVocab;
  /** Grammar: some words specify a relationship (to/for, at/in, using, because of) and sit right before the main verb. [from old L10] */
  proseRelationshipWords: TProse;
  /** Grammar rule box: Relationship Word Order. [from old L10] */
  infoRelationshipWordOrder: TInfo;
  /** Example: wǒ gěi tā zài-shuǐ-lǐ-de dòngwù. [from old L07] */
  example1L07: TExample;
  /** Example: wǒ yòng Hǎo-shuō-de shuō. [from old L07] */
  example7L07: TExample;
  /** Grammar: dui4...lai2shuo1 marks perspective, he2 connects subjects, ye3 sequences states on one subject. [from old L16] */
  proseDuiHeYe: TProse;
  /** Grammar rule box: Perspective and Connection -- dui4...lai2shuo1, he2, ye3. [from old L16] */
  infoPerspectiveConnection: TInfo;
  /** Example: duì wǒ lái shuō, tián-de dōngxi hěn hǎo. [from old L16] */
  example1L16: TExample;
  /** Example: duì shàngmiàn-de ài lái shuō, quánbù dìfāng hěn hǎo. [from old L16] */
  example2L16: TExample;
  /** Exercise 1: The worker uses tools. [from old L07] */
  exercise1L07: TExercise;
  /** Exercise 2: He gives things from his house. [from old L07] */
  exercise2L07: TExercise;
  /** Exercise 3: Why did you do it? [from old L07] */
  exercise3L07: TExercise;
  /** Answer 1. [from old L07] */
  answer1L07: TAnswer;
  /** Answer 2. [from old L07] */
  answer2L07: TAnswer;
  /** Answer 3. [from old L07] */
  answer3L07: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabGei: { type: "vocab", term: "{{word:gei3}}", ttsText: "给" },
  vocabYong: { type: "vocab", term: "{{word:yong4}}", ttsText: "用" },
  vocabHe: { type: "vocab", term: "{{word:he2}}", ttsText: "和" },
  vocabHuozhe: {
    type: "vocab",
    term: "{{word:huo4zhe3}}",
    ttsText: "或者",
  },
  vocabDui: { type: "vocab", term: "{{word:dui4}}", ttsText: "对" },
  vocabQun: { type: "vocab", term: "{{word:qun2}}", ttsText: "群" },
  vocabMo: { type: "vocab", term: "{{word:mo1}}", ttsText: "摸" },
  vocabDa: { type: "vocab", term: "{{word:da3}}", ttsText: "打" },
  proseRelationshipWords: { type: "prose" },
  infoRelationshipWordOrder: {
    type: "info",
    subtype: "grammar",
    tag: "relationships/word-order",
    items: [{}],
  },
  example1L07: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:gei3}} {{word:ta1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}}.",
  },
  example7L07: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yong4}} Hǎo-shuō-de {{word:shuo1}}.",
  },
  proseDuiHeYe: { type: "prose" },
  infoPerspectiveConnection: {
    type: "info",
    subtype: "grammar",
    tag: "sentences/perspective-and-connection",
    items: [{}, {}, {}],
  },
  example1L16: {
    type: "example",
    pinyin: "{{Word:dui4}} {{word:wo3}} {{word:lai2}} {{word:shuo1}}, {{word:tian2}}-{{word:de}} {{word:dong1xi}} {{word:hen3}} {{word:hao3}}.",
  },
  example2L16: {
    type: "example",
    pinyin: "{{Word:dui4}} {{word:shang4}}-{{word:de}} {{word:ai4}} {{word:lai2}} {{word:shuo1}}, {{word:quan2bu4}} {{word:di4fang1}} {{word:hen3}} {{word:hao3}}.",
  },
  exercise1L07: { type: "exercise" },
  exercise2L07: { type: "exercise" },
  exercise3L07: { type: "exercise" },
  answer1L07: { type: "answer" },
  answer2L07: { type: "answer" },
  answer3L07: { type: "answer" },
};

export default shape;
