// Language-independent block sequence for lesson-04 ("You and I").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },
  /** Chapter summary. */
  { type: "summary" },

  /** Vocabulary: "I, me". */
  { type: "vocab", term: "{{word:wo3}}", ttsText: "我" },
  /** Vocabulary: "man, male". */
  { type: "vocab", term: "{{word:nan2ren2}}", ttsText: "男人" },
  /** Vocabulary: "you". */
  { type: "vocab", term: "{{word:ni3}}", ttsText: "你" },
  /** Vocabulary: "community, group". */
  { type: "vocab", term: "{{word:qun2}}", ttsText: "群" },
  /** Vocabulary: "new, another, fresh". */
  { type: "vocab", term: "{{word:xin1}}", ttsText: "新" },

  /** Grammar: pronouns are ordinary nouns; wǒ is strictly singular, plurals built by adding nouns. */
  { type: "prose", hasTldr: true, hasNecessity: true },

  /** Grammar: possession via -de, same particle as Lesson 4's adjectives. */
  { type: "prose", hasTldr: true, hasNecessity: true },

  /** Example: wǒ shì rén. */
  { type: "example", pinyin: "{{Word:wo3}} {{word:shi4}} {{word:ren2}}.", ttsText: "我是人。" },
  /** Example: wǒ shì nánrén. */
  { type: "example", pinyin: "{{Word:wo3}} {{word:shi4}} {{word:nan2ren2}}.", ttsText: "我是男人。" },
  /** Example: nǐ shì hǎo-de rén. */
  { type: "example", pinyin: "{{Word:ni3}} {{word:shi4}} {{word:hao3}}-{{word:de}} {{word:ren2}}.", ttsText: "你是好的人。" },
  /** Example: zhè-ge shì wǒ-de xiě-de dōngxi. */
  { type: "example", pinyin: "{{Word:zhe4}}-ge {{word:shi4}} {{word:wo3}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.", ttsText: "这个是我的写的东西。" },
  /** Example: nǐ-de dìfāng hěn xīn. */
  { type: "example", pinyin: "{{Word:ni3}}-{{word:de}} {{word:di4fang1}} {{word:hen3}} {{word:xin1}}.", ttsText: "你的地方很新。" },
  /** Example: wǒ-de qún hěn dà. */
  { type: "example", pinyin: "{{Word:wo3}}-{{word:de}} {{word:qun2}} {{word:hen3}} {{word:da4}}.", ttsText: "我的群很大。" },
  /** Example: nánrén-de dòngwù hěn xiǎo. */
  { type: "example", pinyin: "{{Word:nan2ren2}}-{{word:de}} {{word:dong4wu4}} {{word:hen3}} {{word:xiao3}}.", ttsText: "男人的动物很小。" },

  /** Exercise 1: Your fruit is good. */
  { type: "exercise" },
  /** Exercise 2: This is a new community. */
  { type: "exercise" },
  /** Exercise 3: I am a good person. */
  { type: "exercise" },

  /** Answer 1. */
  { type: "answer", ttsText: "你的水果很好。" },
  /** Answer 2. */
  { type: "answer", ttsText: "这个是新的群。" },
  /** Answer 3. */
  { type: "answer", ttsText: "我是好的人。" },
];

export default shape;
