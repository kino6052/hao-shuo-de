// Language-independent block sequence for lesson-09 ("Pre-Verbs & Auxiliaries").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
//
// LessonShape is this lesson's exact, hand-written type -- one property per
// block, in render order. Every JSDoc comment lives here, and ONLY here:
// en.ts/ru.ts/zh.ts type their object as `PartialByKey<LessonShape>`, which
// carries these same keys and comments over to them (hover a key in any of
// the four files and you see the same hint), without repeating the comment
// text in each file. `shape` itself only ever needs the structural fields
// (type, term, pinyin, tag, items, ...) -- never `en`/`ru`/`zh`.
import type { TTitle, TSummary, TVocab, TProse, TInfo, TInfoItem, TExample, TExercise, TAnswer } from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Chapter title. */
  title: TTitle;
  /** Chapter summary. */
  summary: TSummary;

  /** Vocabulary: "to want, need, must, should". */
  vocabYao: TVocab;
  /** Vocabulary: "can, may, be able to" (bare pinyin -- not yet in the dictionary). */
  vocabKeyi: TVocab;
  /** Vocabulary: "to know, know how to". */
  vocabZhidao: TVocab;
  /** Vocabulary: "to begin to, start to, manage to". */
  vocabKaishi: TVocab;
  /** Vocabulary: "to become, change into". */
  vocabBian: TVocab;

  /** Grammar: auxiliary verbs (intent/ability/change) sit right before the main predicate. */
  proseAuxiliaries: TProse;
  /** Grammar rule box: Auxiliary Verb Word Order. */
  infoAuxiliaryOrder: TInfo & { items: [TInfoItem] };
  /** Grammar: bian4 steps directly into the main verb slot for a state change; kaishi3 marks a gradual/starting change. */
  proseChangeOnset: TProse;
  /** Grammar rule box: bian4 vs kaishi3. */
  infoChangeVsOnset: TInfo & { items: [TInfoItem, TInfoItem] };

  /** Example: dìfāng biàn dà. */
  example1: TExample;
  /** Example: wǒ kāishǐ zhīdào Hǎo-shuō-de. */
  example2: TExample;
  /** Example: nǐ kěyǐ-bù-kěyǐ lái? */
  example3: TExample;
  /** Example: shuǐguǒ biàn huài le. */
  example4: TExample;
  /** Example: wǒ yào liú zài wǒ fùmǔ-de dìfāng. */
  example5: TExample;
  /** Example: zhíwù kāishǐ yǒu shuǐ. */
  example6: TExample;

  /** Exercise 1: You may keep your name. */
  exercise1: TExercise;
  /** Exercise 2: The path becomes narrow. */
  exercise2: TExercise;
  /** Exercise 3: Do you want to eat some fish? */
  exercise3: TExercise;

  /** Answer 1. */
  answer1: TAnswer;
  /** Answer 2. */
  answer2: TAnswer;
  /** Answer 3. */
  answer3: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },

  vocabYao: { type: "vocab", term: "{{word:yao4}}", ttsText: "要" },
  vocabKeyi: { type: "vocab", term: "kěyǐ" },
  vocabZhidao: { type: "vocab", term: "{{word:zhi1dao4}}", ttsText: "知道" },
  vocabKaishi: { type: "vocab", term: "{{word:kai1shi3}}", ttsText: "开始" },
  vocabBian: { type: "vocab", term: "{{word:bian4}}", ttsText: "变" },

  proseAuxiliaries: { type: "prose" },
  infoAuxiliaryOrder: { type: "info", subtype: "grammar", tag: "verbs/auxiliaries", items: [{}] },
  proseChangeOnset: { type: "prose" },
  infoChangeVsOnset: { type: "info", subtype: "grammar", tag: "verbs/change-and-onset", items: [{}, {}] },

  example1: { type: "example", pinyin: "{{Word:di4fang1}} {{word:bian4}} {{word:da4}}." },
  example2: { type: "example", pinyin: "{{Word:wo3}} {{word:kai1shi3}} {{word:zhi1dao4}} Hǎo-shuō-de." },
  example3: { type: "example", pinyin: "{{Word:ni3}} kěyǐ-{{word:bu4}}-kěyǐ {{word:lai2}}?" },
  example4: { type: "example", pinyin: "{{Word:shui3guo3}} {{word:bian4}} {{word:huai4}} {{word:le}}." },
  example5: { type: "example", pinyin: "{{Word:wo3}} {{word:yao4}} {{word:liu2}} {{word:zai4}} {{word:wo3}} {{word:fu4mu3}}-{{word:de}} {{word:di4fang1}}." },
  example6: { type: "example", pinyin: "{{Word:zhi2wu4}} {{word:kai1shi3}} {{word:you3}} {{word:shui3}}." },

  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },

  answer1: { type: "answer" },
  answer2: { type: "answer" },
  answer3: { type: "answer" },
};

export default shape;
