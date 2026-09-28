// Language-independent block sequence for lesson-03 ("Modifying Nouns").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): NOUN + hěn + adjective, adjective-de + NOUN, many (hěn-duō-de), and few (shǎo).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- lesson-03).
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
  /** Modifying Nouns */
  title: TTitle;
  /** Chapter summary. [from old L03] */
  summary: TSummary;
  /** Vocabulary: "very". */
  vocabHen: TVocab;
  /** Vocabulary: "good". */
  vocabHao: TVocab;
  /** Vocabulary: "big". */
  vocabDa: TVocab;
  /** Vocabulary: "small". */
  vocabXiao: TVocab;
  /** Vocabulary: "water". */
  vocabShui: TVocab;
  /** Vocabulary: "place". */
  vocabDifang: TVocab;
  /** Vocabulary: "parents". */
  vocabFumu: TVocab;
  /** Say: To say what something is like, put hěn before the adjective (a describing word, like dà or hǎo). Pattern: NOUN + hěn + adjective */
  proseLike: TProse;
  /** Example: shuǐ hěn hǎo. */
  exampleLike1: TExample;
  /** Example: dìfāng hěn dà. */
  exampleLike2: TExample;
  /** Example: dòngwù hěn xiǎo. */
  exampleLike3: TExample;
  /** Example: fùmǔ hěn hǎo. */
  exampleLike4: TExample;
  /** Example: shuǐguǒ hěn dà. */
  exampleLike5: TExample;
  /** Vocabulary: "joins an adjective to a noun". */
  vocabDe: TVocab;
  /** Say: To put an adjective before a noun, join them with -de. Pattern: adjective-de + NOUN */
  proseBefore: TProse;
  /** Example: dà-de dìfāng. */
  exampleBefore1: TExample;
  /** Example: hǎo-de fùmǔ. */
  exampleBefore2: TExample;
  /** Example: zhè shì hěn-xiǎo-de dìfāng. */
  exampleBefore3: TExample;
  /** Example: zhè shì hǎo-de shuǐ. */
  exampleBefore4: TExample;
  /** Example: zhè shì hěn-dà-de dòngwù. */
  exampleBefore5: TExample;
  /** Vocabulary: "many, much". */
  vocabDuo: TVocab;
  /** Vocabulary: "few, little". */
  vocabShao: TVocab;
  /** Say: To say many, put hěn-duō-de before the noun. Pattern: hěn-duō-de + NOUN */
  proseMany: TProse;
  /** Example: hěn-duō-de rén. */
  exampleMany1: TExample;
  /** Example: hěn-duō-de shuǐguǒ. */
  exampleMany2: TExample;
  /** Example: shuǐ hěn duō. */
  exampleMany3: TExample;
  /** Example: shuǐ hěn shǎo. */
  exampleMany4: TExample;
  /** Example: rén hěn shǎo. */
  exampleMany5: TExample;
  /** Example: shuǐguǒ hěn shǎo. */
  exampleMany6: TExample;
  /** Grammar box: NOUN + hěn + adjective, adjective + -de + NOUN, hěn-duō-de. */
  infoDescribing: TInfo;
  /** Exercise 1: The place is small. */
  exercise1: TExercise;
  /** Exercise 2: The water is good. */
  exercise2: TExercise;
  /** Exercise 3: a big place */
  exercise3: TExercise;
  /** Exercise 4: good parents */
  exercise4: TExercise;
  /** Exercise 5: many people */
  exercise5: TExercise;
  /** Exercise 6: The animal is small. */
  exercise6: TExercise;
  /** Exercise 7: There is a lot of fruit. */
  exercise7: TExercise;
  /** Exercise 8: There are very few people. */
  exercise8: TExercise;
  /** Answer 1: dìfāng hěn xiǎo. */
  answer1: TAnswer;
  /** Answer 2: shuǐ hěn hǎo. */
  answer2: TAnswer;
  /** Answer 3: dà-de dìfāng */
  answer3: TAnswer;
  /** Answer 4: hǎo-de fùmǔ */
  answer4: TAnswer;
  /** Answer 5: hěn-duō-de rén */
  answer5: TAnswer;
  /** Answer 6: dòngwù hěn xiǎo. */
  answer6: TAnswer;
  /** Answer 7: shuǐguǒ hěn duō. */
  answer7: TAnswer;
  /** Answer 8: rén hěn shǎo. */
  answer8: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabHen: { type: "vocab", term: "{{word:hen3}}", ttsText: "很" },
  vocabHao: { type: "vocab", term: "{{word:hao3}}", ttsText: "好" },
  vocabDa: { type: "vocab", term: "{{word:da4}}", ttsText: "大" },
  vocabXiao: { type: "vocab", term: "{{word:xiao3}}", ttsText: "小" },
  vocabShui: { type: "vocab", term: "{{word:shui3}}", ttsText: "水" },
  vocabDifang: {
    type: "vocab",
    term: "{{word:di4fang1}}",
    ttsText: "地方",
  },
  vocabFumu: { type: "vocab", term: "{{word:fu4mu3}}", ttsText: "父母" },
  proseLike: { type: "prose" },
  exampleLike1: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "水很好。",
  },
  exampleLike2: {
    type: "example",
    pinyin: "{{Word:di4fang1}} {{word:hen3}} {{word:da4}}.",
    ttsText: "地方很大。",
  },
  exampleLike3: {
    type: "example",
    pinyin: "{{Word:dong4wu4}} {{word:hen3}} {{word:xiao3}}.",
    ttsText: "动物很小。",
  },
  exampleLike4: {
    type: "example",
    pinyin: "{{Word:fu4mu3}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "父母很好。",
  },
  exampleLike5: {
    type: "example",
    pinyin: "{{Word:shui3guo3}} {{word:hen3}} {{word:da4}}.",
    ttsText: "水果很大。",
  },
  vocabDe: { type: "vocab", term: "{{word:de}}", ttsText: "的" },
  proseBefore: { type: "prose" },
  exampleBefore1: {
    type: "example",
    pinyin: "{{Word:da4}}-{{word:de}} {{word:di4fang1}}.",
    ttsText: "大的地方。",
  },
  exampleBefore2: {
    type: "example",
    pinyin: "{{Word:hao3}}-{{word:de}} {{word:fu4mu3}}.",
    ttsText: "好的父母。",
  },
  exampleBefore3: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:hen3}}-{{word:xiao3}}-{{word:de}} {{word:di4fang1}}.",
    ttsText: "这是很小的地方。",
  },
  exampleBefore4: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:hao3}}-{{word:de}} {{word:shui3}}.",
    ttsText: "这是好的水。",
  },
  exampleBefore5: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:hen3}}-{{word:da4}}-{{word:de}} {{word:dong4wu4}}.",
    ttsText: "这是很大的动物。",
  },
  vocabDuo: { type: "vocab", term: "{{word:duo1}}", ttsText: "多" },
  vocabShao: { type: "vocab", term: "{{word:shao3}}", ttsText: "少" },
  proseMany: { type: "prose" },
  exampleMany1: {
    type: "example",
    pinyin: "{{Word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}}.",
    ttsText: "很多的人。",
  },
  exampleMany2: {
    type: "example",
    pinyin: "{{Word:hen3}}-{{word:duo1}}-{{word:de}} {{word:shui3guo3}}.",
    ttsText: "很多的水果。",
  },
  exampleMany3: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:hen3}} {{word:duo1}}.",
    ttsText: "水很多。",
  },
  exampleMany4: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:hen3}} {{word:shao3}}.",
    ttsText: "水很少。",
  },
  exampleMany5: {
    type: "example",
    pinyin: "{{Word:ren2}} {{word:hen3}} {{word:shao3}}.",
    ttsText: "人很少。",
  },
  exampleMany6: {
    type: "example",
    pinyin: "{{Word:shui3guo3}} {{word:hen3}} {{word:shao3}}.",
    ttsText: "水果很少。",
  },
  infoDescribing: {
    type: "info",
    subtype: "grammar",
    tag: "describing/hen-and-de",
    items: [{}, {}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  exercise8: { type: "exercise" },
  answer1: { type: "answer", ttsText: "地方很小。" },
  answer2: { type: "answer", ttsText: "水很好。" },
  answer3: { type: "answer", ttsText: "大的地方" },
  answer4: { type: "answer", ttsText: "好的父母" },
  answer5: { type: "answer", ttsText: "很多的人" },
  answer6: { type: "answer", ttsText: "动物很小。" },
  answer7: { type: "answer", ttsText: "水果很多。" },
  answer8: { type: "answer", ttsText: "人很少。" },
};

export default shape;
