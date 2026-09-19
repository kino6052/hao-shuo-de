// Language-independent block sequence for lesson-11 ("Numbers and Order").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// Note: the original content listed "dì" as a vocab item twice (once as
// "sequence marker", once as "ordinal marker prefix") -- consolidated here
// into the single ordinal-prefix sense, since that's the sense every example
// actually uses.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "ordinal marker prefix (placed before a number to turn it into first, second, third...)" (bare pinyin -- not yet in the dictionary). */
  { type: "vocab", term: "dì" },
  /** Vocabulary: "one". */
  { type: "vocab", term: "{{word:yi1}}", ttsText: "一" },
  /** Vocabulary: "two (used exclusively before measure words for counting objects/quantities)". */
  { type: "vocab", term: "{{word:liang3}}", ttsText: "两" },
  /** Vocabulary: "two (used exclusively for mathematics, digit lists, serial numbers, and ordinal rankings)" (bare pinyin). */
  { type: "vocab", term: "èr" },
  /** Vocabulary: "three" (bare pinyin). */
  { type: "vocab", term: "sān" },
  /** Vocabulary: "four" (bare pinyin). */
  { type: "vocab", term: "sì" },
  /** Vocabulary: "five" (bare pinyin). */
  { type: "vocab", term: "wǔ" },
  /** Vocabulary: "six" (bare pinyin). */
  { type: "vocab", term: "liù" },
  /** Vocabulary: "seven" (bare pinyin). */
  { type: "vocab", term: "qī" },
  /** Vocabulary: "eight" (bare pinyin). */
  { type: "vocab", term: "bā" },
  /** Vocabulary: "nine" (bare pinyin). */
  { type: "vocab", term: "jiǔ" },
  /** Vocabulary: "ten" (bare pinyin). */
  { type: "vocab", term: "shí" },
  /** Vocabulary: "hundred" (bare pinyin). */
  { type: "vocab", term: "bǎi" },
  /** Vocabulary: "thousand" (bare pinyin). */
  { type: "vocab", term: "qiān" },
  /** Vocabulary: "number identity, name of a number, day of the month". */
  { type: "vocab", term: "{{word:hao4}}", ttsText: "号" },
  /** Vocabulary: "all, completely, everything". */
  { type: "vocab", term: "{{word:quan2bu4}}", ttsText: "全部" },

  /** Grammar: counting maps onto Mandarin number rules, capping precise numbers at two. */
  { type: "prose", hasTldr: true, hasNecessity: true },
  /** Grammar rule box: Counting and Ordering -- 1/2 via gè, duō beyond two, dì- for ordinals. */
  { type: "info", hasTitle: true, subtype: "grammar", tag: "numbers/counting-and-ordering", items: [{}, {}, {}] },

  /** Example: nǐ shì dì-yī-hào! */
  { type: "example", pinyin: "{{Word:ni3}} {{word:shi4}} dì-{{word:yi1}}-{{word:hao4}}!" },
  /** Example: zhè-ge shì dì-èr-ge shíjiān. */
  { type: "example", pinyin: "{{Word:zhe4}}-ge {{word:shi4}} dì-èr-ge {{word:shi2jian1}}." },
  /** Example: liǎng-ge xiǎo nánrén liú-le hěn-duō zhíwù. */
  { type: "example", pinyin: "{{Word:liang3}}-ge {{word:xiao3}} {{word:nan2ren2}} {{word:liu2}}-{{word:le}} {{word:hen3}}-{{word:duo1}} {{word:zhi2wu4}}." },
  /** Example: wǒ zhīdào hěn-duō shuō. */
  { type: "example", pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:hen3}}-{{word:duo1}} {{word:shuo1}}." },
  /** Example: quánbù rén tīng tā. */
  { type: "example", pinyin: "{{Word:quan2bu4}} {{word:ren2}} {{word:ting1}} {{word:ta1}}." },

  /** Exercise 1: What is the third thing? */
  { type: "exercise" },
  /** Exercise 2: I know two languages. */
  { type: "exercise" },
  /** Exercise 3: This is the first day. */
  { type: "exercise" },

  /** Answer 1. */
  { type: "answer" },
  /** Answer 2. */
  { type: "answer" },
  /** Answer 3. */
  { type: "answer" },
];

export default shape;
