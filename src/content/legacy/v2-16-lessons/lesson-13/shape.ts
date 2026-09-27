// Language-independent block sequence for lesson-13 ("Numbers").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// Note: the original content listed "dì" as a vocab item twice (once as
// "sequence marker", once as "ordinal marker prefix") -- consolidated here
// into the single ordinal-prefix sense, since that's the sense every example
// actually uses.
import type {
  TTitle,
  TSummary,
  TVocab,
  TProse,
  TInfo,
  TInfoItem,
  TExample,
  TExercise,
  TAnswer,
} from "../../../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Chapter title. Numbers */
  title: TTitle;
  /** Chapter summary. */
  summary: TSummary;

  /** Vocabulary: "all, completely, everything". */
  vocabQuanbu: TVocab;

  /** Vocabulary: "many". */
  vocabMany: TVocab;

  /** Vocabulary: "ordinal marker prefix (placed before a number to turn it into first, second, third...)" (bare pinyin -- not yet in the dictionary). */
  vocabDi: TVocab;
  /** Vocabulary: "one". */
  vocabYi: TVocab;
  /** Vocabulary: "two (used exclusively before measure words for counting objects/quantities)". */
  vocabLiang: TVocab;
  /** Vocabulary: "two (used exclusively for mathematics, digit lists, serial numbers, and ordinal rankings)" (bare pinyin). */
  vocabEr: TVocab;
  /** Vocabulary: "three" (bare pinyin). */
  vocabSan: TVocab;
  /** Vocabulary: "four" (bare pinyin). */
  vocabSi: TVocab;
  /** Vocabulary: "five" (bare pinyin). */
  vocabWu: TVocab;
  /** Vocabulary: "six" (bare pinyin). */
  vocabLiu: TVocab;
  /** Vocabulary: "seven" (bare pinyin). */
  vocabQi: TVocab;
  /** Vocabulary: "eight" (bare pinyin). */
  vocabBa: TVocab;
  /** Vocabulary: "nine" (bare pinyin). */
  vocabJiu: TVocab;
  /** Vocabulary: "ten" (bare pinyin). */
  vocabShi: TVocab;
  /** Vocabulary: "hundred" (bare pinyin). */
  vocabBai: TVocab;
  /** Vocabulary: "thousand" (bare pinyin). */
  vocabQian: TVocab;
  /** Vocabulary: "number identity, name of a number, day of the month". */
  vocabHao: TVocab;

  /** Grammar rule box: Counting and Ordering -- 1/2 via gè, duō beyond two, dì- for ordinals. */
  infoCountingAndOrdering: TInfo & { items: [TInfoItem, TInfoItem, TInfoItem] };

  /** Example: nǐ shì dì-yī-hào! */
  example1: TExample;
  /** Example: zhè-ge shì dì-èr-ge shíjiān. */
  example2: TExample;
  /** Example: liǎng-ge xiǎo nánrén liú-le hěn-duō zhíwù. */
  example3: TExample;
  /** Example: wǒ zhīdào hěn-duō shuō. */
  example4: TExample;
  /** Example: quánbù rén tīng tā. */
  example5: TExample;

  /** Exercise 1: What is the third thing? */
  exercise1: TExercise;
  /** Exercise 2: I know two languages. */
  exercise2: TExercise;
  /** Exercise 3: This is the first day. */
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

  vocabDi: { type: "vocab", term: "dì" },
  vocabYi: { type: "vocab", term: "{{word:yi1}}", ttsText: "一" },
  vocabLiang: { type: "vocab", term: "{{word:liang3}}", ttsText: "两" },
  vocabEr: { type: "vocab", term: "èr" },
  vocabSan: { type: "vocab", term: "sān" },
  vocabSi: { type: "vocab", term: "sì" },
  vocabWu: { type: "vocab", term: "wǔ" },
  vocabLiu: { type: "vocab", term: "liù" },
  vocabQi: { type: "vocab", term: "qī" },
  vocabBa: { type: "vocab", term: "bā" },
  vocabJiu: { type: "vocab", term: "jiǔ" },
  vocabShi: { type: "vocab", term: "shí" },
  vocabBai: { type: "vocab", term: "bǎi" },
  vocabQian: { type: "vocab", term: "qiān" },
  vocabHao: { type: "vocab", term: "{{word:hao4}}", ttsText: "号" },
  vocabQuanbu: { type: "vocab", term: "{{word:quan2bu4}}", ttsText: "全部" },
  vocabMany: {
    type: "vocab",
    term: "{{word:hen3}}-{{word:duo1}}",
    ttsText: "很多",
  },

  infoCountingAndOrdering: {
    type: "info",
    subtype: "grammar",
    tag: "numbers/counting-and-ordering",
    items: [{}, {}, {}],
  },

  example1: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:shi4}} dì-{{word:yi1}}-{{word:hao4}}!",
  },
  example2: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:shi4}} dì-èr-ge {{word:shi2jian1}}.",
  },
  example3: {
    type: "example",
    pinyin:
      "{{Word:liang3}}-ge {{word:xiao3}} {{word:nan2ren2}} {{word:liu2}}-{{word:le}} {{word:hen3}}-{{word:duo1}} {{word:zhi2wu4}}.",
  },
  example4: {
    type: "example",
    pinyin:
      "{{Word:wo3}} {{word:zhi1dao4}} {{word:hen3}}-{{word:duo1}} {{word:shuo1}}.",
  },
  example5: {
    type: "example",
    pinyin: "{{Word:quan2bu4}} {{word:ren2}} {{word:ting1}} {{word:ta1}}.",
  },

  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },

  answer1: { type: "answer" },
  answer2: { type: "answer" },
  answer3: { type: "answer" },
};

export default shape;
