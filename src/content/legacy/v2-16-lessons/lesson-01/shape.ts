// Language-independent block sequence for lesson-01 ("Sounds and Symbols").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
//
// LessonShape is this lesson's exact, hand-written type -- one property per
// block, in render order. Every JSDoc comment lives here, and ONLY here:
// en.ts/ru.ts/zh.ts type their object as `PartialByKey<LessonShape>`, which
// carries these same keys and comments over to them without repeating the
// comment text in each file. `shape` itself only ever needs the structural
// fields (type, term, pinyin, tag, items, ...) -- never `en`/`ru`/`zh`.
import type {
  TTitle,
  TSummary,
  TVocab,
  TProse,
  TInfo,
  TInfoItem,
  TExercise,
  TAnswer,
} from "../../../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Sounds and Symbols */
  title: TTitle;
  /** Chapter summary: what pinyin is and why it matters. */
  summary: TSummary;

  /** Chinese's smallest written unit is the syllable, not the letter. */
  proseSyllableUnit: TProse;
  /** Callout: read pinyin syllable by syllable, e.g. Zhōng + guó. */
  infoReadBySyllable: TInfo & { items: [TInfoItem & { items: [TInfoItem] }] };

  /** Pinyin alone doesn't capture pronunciation fully -- take the pronunciation course. */
  prosePinyinLimits: TProse;

  /** <h2>Tones</h2> -- tone is part of the word, not decoration. */
  proseTonesHeading: TProse;
  /** Example callout: mā/má/mǎ/mà are four different words. */
  infoToneExample: TInfo & {
    items: [TInfoItem, TInfoItem, TInfoItem, TInfoItem];
  };

  /** Those four words differ only by tone; here are Chinese's tones. */
  proseFourTonesIntro: TProse;
  /** Callout listing the five tones (ā/á/ǎ/à/a) with a mnemonic each. */
  infoFiveTones: TInfo & {
    items: [TInfoItem, TInfoItem, TInfoItem, TInfoItem, TInfoItem];
  };

  /** All syllables are toned except the neutral tone, which is unstressed. */
  proseNeutralTone: TProse;

  /** Chinese syllables run together with no word boundaries -- Hao-shuo-de adds punctuation for that. */
  proseNoWordBoundaries: TProse;
  /** Ordered callout: the three pinyin punctuation helpers (solid/hyphen/quotes), with worked examples nested under helpers 2 and 3. */
  infoPunctuationHelpers: TInfo & {
    ordered: true;
    items: [
      TInfoItem,
      TInfoItem & { items: [TInfoItem, TInfoItem, TInfoItem, TInfoItem] },
      TInfoItem & { items: [TInfoItem, TInfoItem, TInfoItem] },
    ];
  };

  /** Exercise: break Zhōngguórén into syllables. */
  exercise1: TExercise;
  /** Exercise: identify the tone of à. */
  exercise2: TExercise;
  /** Exercise: rewrite wǒ hǎo in tone-number notation. */
  exercise3: TExercise;
  /** Exercise: is hěn-dà-de one word or word+particle? */
  exercise4: TExercise;

  /** Answer to exercise 1. */
  answer1: TAnswer;
  /** Answer to exercise 2. */
  answer2: TAnswer;
  /** Answer to exercise 3. */
  answer3: TAnswer;
  /** Answer to exercise 4. */
  answer4: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },

  proseSyllableUnit: { type: "prose" },
  infoReadBySyllable: {
    type: "info",
    items: [{ items: [{}] }],
  },

  prosePinyinLimits: { type: "prose" },

  proseTonesHeading: { type: "prose" },
  infoToneExample: { type: "info", items: [{}, {}, {}, {}] },

  proseFourTonesIntro: { type: "prose" },
  infoFiveTones: { type: "info", items: [{}, {}, {}, {}, {}] },

  proseNeutralTone: { type: "prose" },

  proseNoWordBoundaries: { type: "prose" },
  infoPunctuationHelpers: {
    type: "info",
    ordered: true,
    items: [{}, { items: [{}, {}, {}, {}] }, { items: [{}, {}, {}] }],
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
