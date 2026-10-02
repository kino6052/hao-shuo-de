// Language-independent block sequence for lesson-04 ("Pointing at People and Things").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): pointers (pronouns), the measure word
// gè with zhè-ge / nà-ge, men for more than one person, and body words.
// Word cards sit next to the points that use them.
import type {
  TTitle,
  TSummary,
  TVocab,
  TProse,
  TExample,
  TExercise,
  TAnswer,
  TInfo,
  TFaq,
} from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Pointing at People and Things */
  title: TTitle;
  /** Chapter summary: what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "that, those". */
  vocabNa: TVocab;
  /** Pointers: zhè (this) and nà (that) work like nouns. [from old L04] */
  prosePointersAreNouns: TProse;
  /** Example: zhè. [from old L04] */
  pointersExample01: TExample;
  /** Example: nà. [from old L04] */
  pointersExample02: TExample;
  /** Full Chinese has a different measure word for each kind of thing. [from old L11] */
  proseMandarinMeasureWords: TProse;
  /** Vocabulary: "goes between this / that / a number and a noun". */
  vocabGe: TVocab;
  /** Hao-shuo-de keeps one measure word, gè: zhè-ge, nà-ge. [from old L11] */
  proseGeIsUniversal: TProse;
  /** Callout: one measure word for everything -- zhè / nà / a number + ge + noun. [from old L11] */
  infoUniversalClassifier: TInfo;
  /** Example: zhè-ge rén. [from old L11] */
  example1L11: TExample;
  /** Example: nà-ge dòngwù. [from old L11] */
  example2L11: TExample;
  /** Example: nà-ge nǚrén. [from old L11] */
  example3L11: TExample;
  /** Example: zhè-ge shuǐguǒ hěn hǎo. [from old L11] */
  example4L11: TExample;
  /** Example: nà-ge dōngxi shì shuǐguǒ. [from old L11] */
  example5L11: TExample;
  /** Vocabulary: "I, me". */
  vocabWo: TVocab;
  /** Vocabulary: "you". */
  vocabNi: TVocab;
  /** Vocabulary: "he, she, it, they". */
  vocabTa: TVocab;
  /** Pointers for people: wǒ, nǐ, tā. [from old L04] */
  prosePointingToPeople: TProse;
  /** Example: wǒ. [from old L04] */
  pointToPeopleExample01: TExample;
  /** Example: nǐ. [from old L04] */
  pointToPeopleExample02: TExample;
  /** Example: tā. [from old L04] */
  pointToPeopleExample03: TExample;
  /** Vocabulary: "more than one person" (wǒ-men, "we"). */
  vocabMen: TVocab;
  /** Pointing at more than one person: wǒ-men, nǐ-men, tā-men. [from old L04] */
  prosePluralPointers: TProse;
  /** Example: wǒ-men. [from old L04] */
  pluralPointersExample01: TExample;
  /** Example: nǐ-men. [from old L04] */
  pluralPointersExample02: TExample;
  /** Example: tā-men. [from old L04] */
  pluralPointersExample03: TExample;
  /** Vocabulary: "home, family". */
  vocabJia: TVocab;
  /** Vocabulary: "head". */
  vocabTou: TVocab;
  /** Vocabulary: "hand". */
  vocabShou: TVocab;
  /** Vocabulary: "foot". */
  vocabJiao: TVocab;
  /** Grammar: whose it is, with -de (the same -de as Lesson 3's adjectives). [from old L04] */
  prosePossessionDe: TProse;
  /** Example: wǒ-de shuǐguǒ. [from old L04] */
  posessionDeExample01: TExample;
  /** Example: nǐ-de jiā. [from old L04] */
  posessionDeExample02: TExample;
  /** Example: wǒ-de hǎo-de rén. [from old L04] */
  posessionDeExample03: TExample;
  /** Example: wǒ-de tóu. */
  posessionDeExample04: TExample;
  /** Example: nǐ-de jiǎo hěn dà. */
  posessionDeExample05: TExample;
  /** Example: wǒ-de shǒu hěn dà. */
  posessionDeExample06: TExample;
  /** Example: tā-de tóu hěn xiǎo. */
  posessionDeExample07: TExample;
  /** Example: tā-de jiǎo hěn xiǎo. */
  posessionDeExample08: TExample;
  /** Exercise 1: This one is an animal. [from old L03] */
  exercise1L03: TExercise;
  /** Exercise 2: That one is a woman. [from old L03] */
  exercise2L03: TExercise;
  /** Exercise: Say "this person", using ge. [from old L11] */
  exercise1L11: TExercise;
  /** Exercise 2: Say "this animal", using ge. [from old L11] */
  exercise2L11: TExercise;
  /** Exercise: Say "That fruit is good.", using ge. [from old L11] */
  exercise3L11: TExercise;
  /** Exercise 1: Your fruit is good. [from old L04] */
  exercise1: TExercise;
  /** Exercise: That is your family. [from old L04] */
  exercise2: TExercise;
  /** Exercise 3: I am a good person. [from old L04] */
  exercise3: TExercise;
  /** Exercise 4: They are people. */
  exercise4: TExercise;
  /** Exercise 5: Your hand is big. */
  exercise5: TExercise;
  /** Exercise 6: Her head is big. */
  exercise6: TExercise;
  /** Exercise 7: My feet are small. */
  exercise7: TExercise;
  /** Answer 1. [from old L03] */
  answer1L03: TAnswer;
  /** Answer 2. [from old L03] */
  answer2L03: TAnswer;
  /** Answer 1. [from old L11] */
  answer1L11: TAnswer;
  /** Answer 2. [from old L11] */
  answer2L11: TAnswer;
  /** Answer 3. [from old L11] */
  answer3L11: TAnswer;
  /** Answer 1. [from old L04] */
  answer1: TAnswer;
  /** Answer 2. [from old L04] */
  answer2: TAnswer;
  /** Answer 3. [from old L04] */
  answer3: TAnswer;
  /** Answer 4. */
  answer4: TAnswer;
  /** Answer 5. */
  answer5: TAnswer;
  /** Answer 6. */
  answer6: TAnswer;
  /** Answer 7. */
  answer7: TAnswer;
  /** FAQ: is gè really right for everything? (other counting words exist; gè is understood) */
  faqGeForEverything: TFaq;
  /** FAQ: does tā mean he or she? (both, and it) */
  faqTaHeOrShe: TFaq;
  /** FAQ: can I drop -de in wǒ-de jiā? (often, for family and home; -de is always correct) */
  faqDropDe: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabNa: { type: "vocab", term: "{{word:na4}}", ttsText: "那" },
  prosePointersAreNouns: { type: "prose" },
  pointersExample01: {
    type: "example",
    pinyin: "{{Word:zhe4}}.",
    ttsText: "这",
  },
  pointersExample02: {
    type: "example",
    pinyin: "{{Word:na4}}.",
    ttsText: "那",
  },
  proseMandarinMeasureWords: { type: "prose" },
  vocabGe: { type: "vocab", term: "{{word:ge4}}", ttsText: "个" },
  proseGeIsUniversal: { type: "prose" },
  infoUniversalClassifier: {
    type: "info",
    subtype: "grammar",
    tag: "pointers/counting-word",
    items: [{}],
  },
  example1L11: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:ren2}}.",
    ttsText: "这个人。",
  },
  example2L11: {
    type: "example",
    pinyin: "{{Word:na4}}-ge {{word:dong4wu4}}.",
    ttsText: "那个动物。",
  },
  example3L11: {
    type: "example",
    pinyin: "{{Word:na4}}-ge {{word:nv3ren2}}.",
    ttsText: "那个女人。",
  },
  example4L11: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:shui3guo3}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "这个水果很好。",
  },
  example5L11: {
    type: "example",
    pinyin:
      "{{Word:na4}}-ge {{word:dong1xi}} {{word:shi4}} {{word:shui3guo3}}.",
    ttsText: "那个东西是水果。",
  },
  vocabWo: { type: "vocab", term: "{{word:wo3}}", ttsText: "我" },
  vocabNi: { type: "vocab", term: "{{word:ni3}}", ttsText: "你" },
  vocabTa: { type: "vocab", term: "{{word:ta1}}", ttsText: "他" },
  prosePointingToPeople: { type: "prose" },
  pointToPeopleExample01: {
    type: "example",
    pinyin: "{{Word:wo3}}.",
    ttsText: "我",
  },
  pointToPeopleExample02: {
    type: "example",
    pinyin: "{{Word:ni3}}.",
    ttsText: "你",
  },
  pointToPeopleExample03: {
    type: "example",
    pinyin: "{{Word:ta1}}.",
    ttsText: "他",
  },
  vocabMen: { type: "vocab", term: "{{word:men}}", ttsText: "们" },
  prosePluralPointers: { type: "prose" },
  pluralPointersExample01: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:men}}.",
    ttsText: "我们",
  },
  pluralPointersExample02: {
    type: "example",
    pinyin: "{{Word:ni3}}-{{word:men}}.",
    ttsText: "你们",
  },
  pluralPointersExample03: {
    type: "example",
    pinyin: "{{Word:ta1}}-{{word:men}}.",
    ttsText: "他们",
  },
  vocabJia: { type: "vocab", term: "{{word:jia1}}", ttsText: "家" },
  vocabTou: { type: "vocab", term: "{{word:tou2}}", ttsText: "头" },
  vocabShou: { type: "vocab", term: "{{word:shou3}}", ttsText: "手" },
  vocabJiao: { type: "vocab", term: "{{word:jiao3}}", ttsText: "脚" },
  prosePossessionDe: { type: "prose" },
  posessionDeExample01: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:shui3guo3}}.",
    ttsText: "我的水果。",
  },
  posessionDeExample02: {
    type: "example",
    pinyin: "{{Word:ni3}}-{{word:de}} {{word:jia1}}.",
    ttsText: "你的家。",
  },
  posessionDeExample03: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:hao3}}-{{word:de}} {{word:ren2}}.",
    ttsText: "我的好的人。",
  },
  posessionDeExample04: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:tou2}}.",
    ttsText: "我的头。",
  },
  posessionDeExample05: {
    type: "example",
    pinyin:
      "{{Word:ni3}}-{{word:de}} {{word:jiao3}} {{word:hen3}} {{word:da4}}.",
    ttsText: "你的脚很大。",
  },
  posessionDeExample06: {
    type: "example",
    pinyin:
      "{{Word:wo3}}-{{word:de}} {{word:shou3}} {{word:hen3}} {{word:da4}}.",
    ttsText: "我的手很大。",
  },
  posessionDeExample07: {
    type: "example",
    pinyin:
      "{{Word:ta1}}-{{word:de}} {{word:tou2}} {{word:hen3}} {{word:xiao3}}.",
    ttsText: "他的头很小。",
  },
  posessionDeExample08: {
    type: "example",
    pinyin:
      "{{Word:ta1}}-{{word:de}} {{word:jiao3}} {{word:hen3}} {{word:xiao3}}.",
    ttsText: "她的脚很小。",
  },

  exercise1L03: { type: "exercise" },
  exercise2L03: { type: "exercise" },
  exercise1L11: { type: "exercise" },
  exercise2L11: { type: "exercise" },
  exercise3L11: { type: "exercise" },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  answer1L03: { type: "answer", ttsText: "这个是动物。" },
  answer2L03: { type: "answer", ttsText: "那个是女人。" },
  answer1L11: { type: "answer", ttsText: "这个人。" },
  answer2L11: { type: "answer", ttsText: "这个动物。" },
  answer3L11: { type: "answer", ttsText: "那个水果很好。" },
  answer1: { type: "answer", ttsText: "你的水果很好。" },
  answer2: { type: "answer", ttsText: "那是你的家。" },
  answer3: { type: "answer", ttsText: "我是好的人。" },
  answer4: { type: "answer", ttsText: "他们是人。" },
  answer5: { type: "answer", ttsText: "你的手很大。" },
  answer6: { type: "answer", ttsText: "她的头很大。" },
  answer7: { type: "answer", ttsText: "我的脚很小。" },
  faqGeForEverything: { type: "faq" },
  faqTaHeOrShe: { type: "faq" },
  faqDropDe: { type: "faq" },
};

export default shape;
