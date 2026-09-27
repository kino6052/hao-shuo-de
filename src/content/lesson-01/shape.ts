// Language-independent block sequence for lesson-01 ("Sounds and Symbols").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Phase 2 (BOOK_PLAN.md): pinyin, tones, and the Hao-shuo-de pinyin helpers.
// No new words -- lesson 1 may show words as sound examples (§4a rule 2).
// Plain words; passes every gate (npm run check -- lesson-01).
import type {
  TTitle,
  TSummary,
  TProse,
  TExercise,
  TAnswer,
  TInfo,
} from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Sounds and Symbols */
  title: TTitle;
  /** Chapter summary. [from old L01] */
  summary: TSummary;
  /** Chinese's smallest written unit is the syllable, not the letter. [from old L01] */
  proseSyllableUnit: TProse;
  /** Callout: read pinyin syllable by syllable, e.g. Zhōng + guó. [from old L01] */
  infoReadBySyllable: TInfo;
  /** Pinyin alone doesn't capture pronunciation fully -- take the pronunciation course. [from old L01] */
  prosePinyinLimits: TProse;
  /** <h2>Tones</h2> -- tone is part of the word, not decoration. [from old L01] */
  proseTonesHeading: TProse;
  /** Example callout: mā/má/mǎ/mà are four different words. [from old L01] */
  infoToneExample: TInfo;
  /** Those four words differ only by tone; here are Chinese's tones. [from old L01] */
  proseFourTonesIntro: TProse;
  /** Callout listing the five tones (ā/á/ǎ/à/a) with a mnemonic each. [from old L01] */
  infoFiveTones: TInfo;
  /** All syllables are toned except the neutral tone, which is unstressed. [from old L01] */
  proseNeutralTone: TProse;
  /** Chinese syllables run together with no word boundaries -- Hao-shuo-de adds punctuation for that. [from old L01] */
  proseNoWordBoundaries: TProse;
  /** Grammar box: the three Hao-shuo-de pinyin helpers (solid words, hyphens, quotes), with examples. */
  infoPunctuationHelpers: TInfo;
  /** Exercise: break Zhōngguórén into syllables. [from old L01] */
  exercise1: TExercise;
  /** Exercise: identify the tone of à. [from old L01] */
  exercise2: TExercise;
  /** Exercise: rewrite wǒ hǎo in tone-number notation. [from old L01] */
  exercise3: TExercise;
  /** Exercise: is hěn-dà-de one word or word+particle? [from old L01] */
  exercise4: TExercise;
  /** Answer to exercise 1. [from old L01] */
  answer1: TAnswer;
  /** Answer to exercise 2. [from old L01] */
  answer2: TAnswer;
  /** Answer to exercise 3. [from old L01] */
  answer3: TAnswer;
  /** Answer to exercise 4. [from old L01] */
  answer4: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  proseSyllableUnit: { type: "prose" },
  infoReadBySyllable: { type: "info", items: [{ items: [{}] }] },
  prosePinyinLimits: { type: "prose" },
  proseTonesHeading: { type: "prose" },
  infoToneExample: { type: "info", items: [{}, {}, {}, {}] },
  proseFourTonesIntro: { type: "prose" },
  infoFiveTones: { type: "info", items: [{}, {}, {}, {}, {}] },
  proseNeutralTone: { type: "prose" },
  proseNoWordBoundaries: { type: "prose" },
  infoPunctuationHelpers: {
    type: "info",
    subtype: "grammar",
    tag: "pinyin/helpers",
    ordered: true,
    items: [
      {},
      { items: [{}, {}, {}, {}] },
      { items: [{}, {}, {}] },
    ],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  answer1: { type: "answer" },
  answer2: { type: "answer" },
  answer3: { type: "answer" },
  answer4: { type: "answer" },
};

export default shape;
