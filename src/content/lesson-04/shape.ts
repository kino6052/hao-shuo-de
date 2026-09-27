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
} from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Chapter title. Pointing at people and things*/
  title: TTitle;
  /** Chapter summary. */
  summary: TSummary;

  /** Vocabulary: "I, me". */
  vocabWo: TVocab;
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

  /** Grammar: pronouns are ordinary nouns; wǒ is strictly singular, plurals built by adding nouns. */
  prosePronounsAreNouns: TProse;
  /** Grammar: possession via -de, same particle as Lesson 3's adjectives. */
  prosePossessionDe: TProse;

  /** Example: wǒ shì rén. */
  example1: TExample;
  /** Example: wǒ shì nánrén. */
  example2: TExample;
  /** Example: nǐ shì hǎo-de rén. */
  example3: TExample;
  /** Example: zhè-ge shì wǒ-de xiě-de dōngxi. */
  example4: TExample;
  /** Example: nà-ge shì nǐ-de dōngxi. */
  example5: TExample;
  /** Example: wǒ-de qún hěn dà. */
  example6: TExample;
  /** Example: nánrén-de dòngwù hěn xiǎo. */
  example7: TExample;

  /** Exercise 1: Your fruit is good. */
  exercise1: TExercise;
  /** Exercise 2: This is a new community. */
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
  vocabNanren: { type: "vocab", term: "{{word:nan2ren2}}", ttsText: "男人" },
  vocabNi: { type: "vocab", term: "{{word:ni3}}", ttsText: "你" },
  vocabQun: { type: "vocab", term: "{{word:qun2}}", ttsText: "群" },
  vocabXin: { type: "vocab", term: "{{word:xin1}}", ttsText: "新" },

  prosePronounsAreNouns: { type: "prose" },
  prosePossessionDe: { type: "prose" },

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
      "{{Word:ni3}}-{{word:de}} {{word:di4fang1}} {{word:hen3}} {{word:xin1}}.",
    ttsText: "你的地方很新。",
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
  answer2: { type: "answer", ttsText: "这个是新的群。" },
  answer3: { type: "answer", ttsText: "我是好的人。" },
};

export default shape;
