// Language-independent block sequence for lesson-04 ("You and I").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type {
  TTitle,
  TSummary,
  TVocab,
  TProse,
  TExample,
  TExercise,
  TAnswer,
} from "../../../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Chapter title. Pointing at people and things*/
  title: TTitle;
  /** Chapter summary. */
  summary: TSummary;

  /** Vocabulary: "I, me". */
  vocabWo: TVocab;
  /** Vocabulary: "plural marker for pronouns and people". */
  vocabMen: TVocab;
  /** Vocabulary: "man, male". */
  vocabNanren: TVocab;
  /** Vocabulary: "you". */
  vocabNi: TVocab;
  /** Vocabulary: "community, group". */
  vocabQun: TVocab;
  /** Vocabulary: "that, those". */
  vocabNa: TVocab;
  /** Vocabulary: "this, these". */
  vocabZhe: TVocab;

  /** Grammar: pronouns (pointers) are ordinary nouns; */
  prosePointersAreNouns: TProse;

  pointersExample01: TExample;
  pointersExample02: TExample;

  /** Grammar: I, me, you, he, she  */
  prosePointingToPeople: TProse;

  pointToPeopleExample01: TExample;
  pointToPeopleExample02: TExample;
  pointToPeopleExample03: TExample;

  /** Grammar: plural pointers: we, us, they */
  prosePluralPointers: TProse;

  pluralPointersExample01: TExample;
  pluralPointersExample02: TExample;
  pluralPointersExample03: TExample;

  /** Grammar: possession via -de, same particle as Lesson 3's adjectives. */
  prosePossessionDe: TProse;

  posessionDeExample01: TExample;
  posessionDeExample02: TExample;
  posessionDeExample03: TExample;

  example1: TExample;
  example2: TExample;
  example3: TExample;
  example4: TExample;
  example5: TExample;
  example6: TExample;
  example7: TExample;

  /** Exercise 1: Your fruit is good. */
  exercise1: TExercise;
  /** Exercise 2: That is your community. */
  exercise2: TExercise;
  /** Exercise 3: I am a good person. */
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

  vocabWo: { type: "vocab", term: "{{word:wo3}}", ttsText: "我" },
  vocabMen: { type: "vocab", term: "{{word:men}}", ttsText: "们" },
  vocabNanren: { type: "vocab", term: "{{word:nan2ren2}}", ttsText: "男人" },
  vocabNi: { type: "vocab", term: "{{word:ni3}}", ttsText: "你" },
  vocabQun: { type: "vocab", term: "{{word:qun2}}", ttsText: "群" },
  vocabNa: { type: "vocab", term: "{{word:na4}}", ttsText: "那" },
  vocabZhe: { type: "vocab", term: "{{word:zhe4}}", ttsText: "这" },

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

  prosePossessionDe: { type: "prose" },

  posessionDeExample01: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:shui3guo3}}.",
    ttsText: "我的水果。",
  },

  posessionDeExample02: {
    type: "example",
    pinyin: "{{Word:ni3}}-{{word:de}} {{word:qun2}}.",
    ttsText: "你的群。",
  },

  posessionDeExample03: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:hao3}}-{{word:de}} {{word:ren2}}.",
    ttsText: "我的好的人。",
  },

  example1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:shi4}} {{word:ren2}}.",
    ttsText: "我是人。",
  },
  example2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:shi4}} {{word:nan2ren2}}.",
    ttsText: "我是男人。",
  },
  example3: {
    type: "example",
    pinyin:
      "{{Word:ni3}} {{word:shi4}} {{word:hao3}}-{{word:de}} {{word:ren2}}.",
    ttsText: "你是好的人。",
  },
  example4: {
    type: "example",
    pinyin:
      "{{Word:zhe4}}-ge {{word:shi4}} {{word:wo3}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.",
    ttsText: "这个是我的写的东西。",
  },
  example5: {
    type: "example",
    pinyin:
      "{{Word:na4}}-ge {{word:shi4}} {{word:ni3}}-{{word:de}} {{word:dong1xi}}.",
    ttsText: "那个是你的东西。",
  },
  example6: {
    type: "example",
    pinyin:
      "{{Word:wo3}}-{{word:de}} {{word:qun2}} {{word:hen3}} {{word:da4}}.",
    ttsText: "我的群很大。",
  },
  example7: {
    type: "example",
    pinyin:
      "{{Word:nan2ren2}}-{{word:de}} {{word:dong4wu4}} {{word:hen3}} {{word:xiao3}}.",
    ttsText: "男人的动物很小。",
  },

  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },

  answer1: { type: "answer", ttsText: "你的水果很好。" },
  answer2: { type: "answer", ttsText: "那是你的群。" },
  answer3: { type: "answer", ttsText: "我是好的人。" },
};

export default shape;
