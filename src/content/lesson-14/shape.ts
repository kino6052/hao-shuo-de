// Language-independent block sequence for lesson-14 ("Modifiers 3 — Also and all").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): also (yě) with verbs and with describing words, and all (quánbù).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- lesson-14).
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
  /** Modifiers 3 — Also and all */
  title: TTitle;
  /** Chapter summary: what you'll be able to say (stub until the Phase 2 rewrite). */
  summary: TSummary;
  /** Vocabulary: "also, too". */
  vocabYe: TVocab;
  /** Vocabulary: "all". */
  vocabQuanbu: TVocab;
  /** Vocabulary: "plant". */
  vocabZhiwu: TVocab;
  /** Vocabulary: "fire". */
  vocabHuo: TVocab;
  /** Vocabulary: "air". */
  vocabKongqi: TVocab;
  /** Say: To say someone also does something, put yě (also) right before the verb. Pattern: Who + yě + verb */
  proseAlsoDo: TProse;
  /** Example: wǒ yě chī. */
  exampleAlsoDo1: TExample;
  /** Example: nǐ yě yào ma? */
  exampleAlsoDo2: TExample;
  /** Example: zhíwù yě yào kōngqì. */
  exampleAlsoDo3: TExample;
  /** Example: tā yě kàn huǒ. */
  exampleAlsoDo4: TExample;
  /** Say: To say something is also like that, put yě before hěn and the describing word. Pattern: Thing + yě + hěn + describing word */
  proseAlsoIs: TProse;
  /** Example: wǒ hěn lěng, tā yě hěn lěng. */
  exampleAlsoIs1: TExample;
  /** Example: kōngqì yě hěn lěng. */
  exampleAlsoIs2: TExample;
  /** Example: huǒ hěn rè, rì yě hěn rè. */
  exampleAlsoIs3: TExample;
  /** Say: To say all, use quánbù. Pattern: quánbù-de + noun / verb + quánbù */
  proseAll: TProse;
  /** Example: wǒ yào quánbù. */
  exampleAll1: TExample;
  /** Example: quánbù-de zhíwù hěn hǎo. */
  exampleAll2: TExample;
  /** Example: quánbù chī-wán le. */
  exampleAll3: TExample;
  /** Example: zhíwù yào shuǐ. */
  exampleAll4: TExample;
  /** Example: wài-miàn-de kōngqì hěn hǎo. */
  exampleAll5: TExample;
  /** Example: huǒ zài nǎlǐ? */
  exampleAll6: TExample;
  /** Grammar box: yě + verb, yě hěn + describing word, quánbù. */
  infoAlsoAndAll: TInfo;
  /** Exercise 1: I want some too. */
  exercise1: TExercise;
  /** Exercise 2: The water is hot too. */
  exercise2: TExercise;
  /** Exercise 3: I want all the fruit. */
  exercise3: TExercise;
  /** Exercise 4: The plant is small. */
  exercise4: TExercise;
  /** Exercise 5: The fire is really hot. */
  exercise5: TExercise;
  /** Exercise 6: The air here is cold. */
  exercise6: TExercise;
  /** Answer 1: wǒ yě yào. */
  answer1: TAnswer;
  /** Answer 2: shuǐ yě hěn rè. */
  answer2: TAnswer;
  /** Answer 3: wǒ yào quánbù-de shuǐguǒ. */
  answer3: TAnswer;
  /** Answer 4: zhíwù hěn xiǎo. */
  answer4: TAnswer;
  /** Answer 5: huǒ zhēn rè. */
  answer5: TAnswer;
  /** Answer 6: zhè-lǐ-de kōngqì hěn lěng. */
  answer6: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabYe: { type: "vocab", term: "{{word:ye3}}", ttsText: "也" },
  vocabQuanbu: {
    type: "vocab",
    term: "{{word:quan2bu4}}",
    ttsText: "全部",
  },
  vocabZhiwu: { type: "vocab", term: "{{word:zhi2wu4}}", ttsText: "植物" },
  vocabHuo: { type: "vocab", term: "{{word:huo3}}", ttsText: "火" },
  vocabKongqi: {
    type: "vocab",
    term: "{{word:kong1qi4}}",
    ttsText: "空气",
  },
  proseAlsoDo: { type: "prose" },
  exampleAlsoDo1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ye3}} {{word:chi1}}.",
    ttsText: "我也吃。",
  },
  exampleAlsoDo2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:ye3}} {{word:yao4}} {{word:ma}}?",
    ttsText: "你也要吗？",
  },
  exampleAlsoDo3: {
    type: "example",
    pinyin: "{{Word:zhi2wu4}} {{word:ye3}} {{word:yao4}} {{word:kong1qi4}}.",
    ttsText: "植物也要空气。",
  },
  exampleAlsoDo4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:ye3}} {{word:kan4}} {{word:huo3}}.",
    ttsText: "他也看火。",
  },
  proseAlsoIs: { type: "prose" },
  exampleAlsoIs1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}}.",
    ttsText: "我很冷，他也很冷。",
  },
  exampleAlsoIs2: {
    type: "example",
    pinyin: "{{Word:kong1qi4}} {{word:ye3}} {{word:hen3}} {{word:leng3}}.",
    ttsText: "空气也很冷。",
  },
  exampleAlsoIs3: {
    type: "example",
    pinyin: "{{Word:huo3}} {{word:hen3}} {{word:re4}}, {{word:ri4}} {{word:ye3}} {{word:hen3}} {{word:re4}}.",
    ttsText: "火很热，日也很热。",
  },
  proseAll: { type: "prose" },
  exampleAll1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:quan2bu4}}.",
    ttsText: "我要全部。",
  },
  exampleAll2: {
    type: "example",
    pinyin: "{{Word:quan2bu4}}-{{word:de}} {{word:zhi2wu4}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "全部的植物很好。",
  },
  exampleAll3: {
    type: "example",
    pinyin: "{{Word:quan2bu4}} {{word:chi1}}-{{word:wan2}} {{word:le}}.",
    ttsText: "全部吃完了。",
  },
  exampleAll4: {
    type: "example",
    pinyin: "{{Word:zhi2wu4}} {{word:yao4}} {{word:shui3}}.",
    ttsText: "植物要水。",
  },
  exampleAll5: {
    type: "example",
    pinyin: "{{Word:wai4}}-{{word:mian4}}-{{word:de}} {{word:kong1qi4}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "外面的空气很好。",
  },
  exampleAll6: {
    type: "example",
    pinyin: "{{Word:huo3}} {{word:zai4}} {{word:na3li3}}?",
    ttsText: "火在哪里？",
  },
  infoAlsoAndAll: {
    type: "info",
    subtype: "grammar",
    tag: "describing/also-and-all",
    items: [{}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  answer1: { type: "answer", ttsText: "我也要。" },
  answer2: { type: "answer", ttsText: "水也很热。" },
  answer3: { type: "answer", ttsText: "我要全部的水果。" },
  answer4: { type: "answer", ttsText: "植物很小。" },
  answer5: { type: "answer", ttsText: "火真热。" },
  answer6: { type: "answer", ttsText: "这里的空气很冷。" },
};

export default shape;
