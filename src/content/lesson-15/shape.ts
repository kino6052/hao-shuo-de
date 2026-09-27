// Language-independent block sequence for lesson-15 ("Modifiers 4 — Becoming and making").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): it changed (describing word + le), became (biàn), making it so (nòng), putting the thing first (bǎ), and strong (yǒu lìliàng).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- lesson-15).
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
  /** Modifiers 4 — Becoming and making */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "become, change". */
  vocabBian: TVocab;
  /** Vocabulary: "puts the thing first: bǎ + thing + action". */
  vocabBa: TVocab;
  /** Vocabulary: "do, make". */
  vocabNong: TVocab;
  /** Vocabulary: "get". */
  vocabDe: TVocab;
  /** Vocabulary: "strength; yǒu lìliàng: strong". */
  vocabLiliang: TVocab;
  /** Vocabulary: "bad, broken". */
  vocabHuai: TVocab;
  /** Vocabulary: "mud, paste". */
  vocabNi: TVocab;
  /** Say: To say something changed, put le after the describing word. Pattern: Thing + describing word + le */
  proseChanged: TProse;
  /** Example: shuǐ rè le. */
  exampleChanged1: TExample;
  /** Example: hǎo le. */
  exampleChanged2: TExample;
  /** Example: shuǐguǒ huài le. */
  exampleChanged3: TExample;
  /** Example: gōngjù huài le. */
  exampleChanged4: TExample;
  /** Say: To say something became different, put biàn (become) before the describing word, and le after. Pattern: Thing + biàn + describing word + le */
  proseBecame: TProse;
  /** Example: shuǐ biàn lěng le. */
  exampleBecame1: TExample;
  /** Example: tā biàn hǎo le. */
  exampleBecame2: TExample;
  /** Example: kōngqì biàn rè le. */
  exampleBecame3: TExample;
  /** Example: shuǐ biàn ní le. */
  exampleBecame4: TExample;
  /** Example: di-shàng yǒu ní. */
  exampleBecame5: TExample;
  /** Say: To say you make something so, put nòng (do, make) before the result. Pattern: Who + nòng + result */
  proseMake: TProse;
  /** Example: wǒ nòng hǎo le. */
  exampleMake1: TExample;
  /** Example: nǐ nòng huài le. */
  exampleMake2: TExample;
  /** Example: nǐ néng nòng hǎo ma? */
  exampleMake3: TExample;
  /** Example: nǐ dé le shénme? */
  exampleMake4: TExample;
  /** Example: wǒ dé le xīn-de yīfu. */
  exampleMake5: TExample;
  /** Say: To say what you do to a thing, put bǎ and the thing before the action. Pattern: Who + bǎ + thing + nòng + result */
  proseBa: TProse;
  /** Example: wǒ bǎ gōngjù nòng hǎo le. */
  exampleBa1: TExample;
  /** Example: tā bǎ hézi nòng huài le. */
  exampleBa2: TExample;
  /** Example: bǎ shuǐ nòng rè. */
  exampleBa3: TExample;
  /** Say: To say strong, say yǒu lìliàng, "have strength". Pattern: Who + hěn yǒu lìliàng */
  proseStrong: TProse;
  /** Example: tā hěn yǒu lìliàng. */
  exampleStrong1: TExample;
  /** Example: wǒ méi-yǒu lìliàng. */
  exampleStrong2: TExample;
  /** Example: nǐ-de shǒu hěn yǒu lìliàng. */
  exampleStrong3: TExample;
  /** Grammar box: describing word + le, biàn, nòng + result, bǎ + thing, yǒu lìliàng. */
  infoBecomingAndMaking: TInfo;
  /** Exercise 1: The rice got cold. */
  exercise1: TExercise;
  /** Exercise 2: My tool is broken. */
  exercise2: TExercise;
  /** Exercise 3: The water became hot. */
  exercise3: TExercise;
  /** Exercise 4: I fixed the box. */
  exercise4: TExercise;
  /** Exercise 5: She is very strong. */
  exercise5: TExercise;
  /** Exercise 6: What did he get? */
  exercise6: TExercise;
  /** Exercise 7: There's mud on my clothes. */
  exercise7: TExercise;
  /** Answer 1: mǐfàn lěng le. */
  answer1: TAnswer;
  /** Answer 2: wǒ-de gōngjù huài le. */
  answer2: TAnswer;
  /** Answer 3: shuǐ biàn rè le. */
  answer3: TAnswer;
  /** Answer 4: wǒ bǎ hézi nòng hǎo le. */
  answer4: TAnswer;
  /** Answer 5: tā hěn yǒu lìliàng. */
  answer5: TAnswer;
  /** Answer 6: tā dé le shénme? */
  answer6: TAnswer;
  /** Answer 7: wǒ-de yīfu-shàng yǒu ní. */
  answer7: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabBian: { type: "vocab", term: "{{word:bian4}}", ttsText: "变" },
  vocabBa: { type: "vocab", term: "{{word:ba3}}", ttsText: "把" },
  vocabNong: { type: "vocab", term: "{{word:nong4}}", ttsText: "弄" },
  vocabDe: { type: "vocab", term: "{{word:de2}}", ttsText: "得" },
  vocabLiliang: {
    type: "vocab",
    term: "{{word:li4liang4}}",
    ttsText: "力量",
  },
  vocabHuai: { type: "vocab", term: "{{word:huai4}}", ttsText: "坏" },
  vocabNi: { type: "vocab", term: "{{word:ni2}}", ttsText: "泥" },
  proseChanged: { type: "prose" },
  exampleChanged1: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:re4}} {{word:le}}.",
    ttsText: "水热了。",
  },
  exampleChanged2: {
    type: "example",
    pinyin: "{{Word:hao3}} {{word:le}}.",
    ttsText: "好了。",
  },
  exampleChanged3: {
    type: "example",
    pinyin: "{{Word:shui3guo3}} {{word:huai4}} {{word:le}}.",
    ttsText: "水果坏了。",
  },
  exampleChanged4: {
    type: "example",
    pinyin: "{{Word:gong1ju4}} {{word:huai4}} {{word:le}}.",
    ttsText: "工具坏了。",
  },
  proseBecame: { type: "prose" },
  exampleBecame1: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:bian4}} {{word:leng3}} {{word:le}}.",
    ttsText: "水变冷了。",
  },
  exampleBecame2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:bian4}} {{word:hao3}} {{word:le}}.",
    ttsText: "他变好了。",
  },
  exampleBecame3: {
    type: "example",
    pinyin: "{{Word:kong1qi4}} {{word:bian4}} {{word:re4}} {{word:le}}.",
    ttsText: "空气变热了。",
  },
  exampleBecame4: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:bian4}} {{word:ni2}} {{word:le}}.",
    ttsText: "水变泥了。",
  },
  exampleBecame5: {
    type: "example",
    pinyin: "{{Word:di4}}-{{word:shang4}} {{word:you3}} {{word:ni2}}.",
    ttsText: "地上有泥。",
  },
  proseMake: { type: "prose" },
  exampleMake1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:nong4}} {{word:hao3}} {{word:le}}.",
    ttsText: "我弄好了。",
  },
  exampleMake2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:nong4}} {{word:huai4}} {{word:le}}.",
    ttsText: "你弄坏了。",
  },
  exampleMake3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:neng2}} {{word:nong4}} {{word:hao3}} {{word:ma}}?",
    ttsText: "你能弄好吗？",
  },
  exampleMake4: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:de2}} {{word:le}} {{word:shen2me}}?",
    ttsText: "你得了什么？",
  },
  exampleMake5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:de2}} {{word:le}} {{word:xin1}}-{{word:de}} {{word:yi1fu}}.",
    ttsText: "我得了新的衣服。",
  },
  proseBa: { type: "prose" },
  exampleBa1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ba3}} {{word:gong1ju4}} {{word:nong4}} {{word:hao3}} {{word:le}}.",
    ttsText: "我把工具弄好了。",
  },
  exampleBa2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:ba3}} {{word:he2zi}} {{word:nong4}} {{word:huai4}} {{word:le}}.",
    ttsText: "他把盒子弄坏了。",
  },
  exampleBa3: {
    type: "example",
    pinyin: "{{Word:ba3}} {{word:shui3}} {{word:nong4}} {{word:re4}}.",
    ttsText: "把水弄热。",
  },
  proseStrong: { type: "prose" },
  exampleStrong1: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:hen3}} {{word:you3}} {{word:li4liang4}}.",
    ttsText: "他很有力量。",
  },
  exampleStrong2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:li4liang4}}.",
    ttsText: "我没有力量。",
  },
  exampleStrong3: {
    type: "example",
    pinyin: "{{Word:ni3}}-{{word:de}} {{word:shou3}} {{word:hen3}} {{word:you3}} {{word:li4liang4}}.",
    ttsText: "你的手很有力量。",
  },
  infoBecomingAndMaking: {
    type: "info",
    subtype: "grammar",
    tag: "describing/becoming-and-making",
    items: [{}, {}, {}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  answer1: { type: "answer", ttsText: "米饭冷了。" },
  answer2: { type: "answer", ttsText: "我的工具坏了。" },
  answer3: { type: "answer", ttsText: "水变热了。" },
  answer4: { type: "answer", ttsText: "我把盒子弄好了。" },
  answer5: { type: "answer", ttsText: "她很有力量。" },
  answer6: { type: "answer", ttsText: "他得了什么？" },
  answer7: { type: "answer", ttsText: "我的衣服上有泥。" },
};

export default shape;
