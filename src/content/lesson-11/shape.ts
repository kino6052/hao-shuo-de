// Language-independent block sequence for lesson-11 ("Space 2 — Moving").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): coming and going (lái / qù), from (cóng), arriving (dào), and direction (qǐ-lái, shàng-lái, xià-lái, wài-miàn).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- lesson-11).
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
  /** Space 2 — Moving */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "from". */
  vocabCong: TVocab;
  /** Vocabulary: "come". */
  vocabLai: TVocab;
  /** Vocabulary: "go". */
  vocabQu: TVocab;
  /** Vocabulary: "rise; qǐ-lái: get up". */
  vocabQi: TVocab;
  /** Vocabulary: "out; wài-miàn: outside". */
  vocabWai: TVocab;
  /** Vocabulary: "market". */
  vocabShichang: TVocab;
  /** Vocabulary: "opening, door". */
  vocabKou: TVocab;
  /** Vocabulary: "arrive, to". */
  vocabDao: TVocab;
  /** Say: To say you come or go somewhere, put lái (come) or qù (go) before the place. Pattern: Who + lái / qù + place */
  proseComeGo: TProse;
  /** Example: wǒ qù shìchǎng. */
  exampleComeGo1: TExample;
  /** Example: nǐ lái wǒ-de jiā ma? */
  exampleComeGo2: TExample;
  /** Example: qù! */
  exampleComeGo3: TExample;
  /** Example: lái! */
  exampleComeGo4: TExample;
  /** Say: To say where you come from, put cóng (from) before the place, then lái. Pattern: Who + cóng + place + lái */
  proseFrom: TProse;
  /** Example: wǒ cóng shìchǎng lái. */
  exampleFrom1: TExample;
  /** Example: tā cóng jiā lái. */
  exampleFrom2: TExample;
  /** Example: nǐ cóng nǎlǐ lái? */
  exampleFrom3: TExample;
  /** Say: To say you arrive somewhere, put dào (arrive) before the place. Pattern: Who + dào + place + le */
  proseArrive: TProse;
  /** Example: wǒ dào jiā le. */
  exampleArrive1: TExample;
  /** Example: tā dào shìchǎng le. */
  exampleArrive2: TExample;
  /** Example: shénme shíjiān nǐ dào? */
  exampleArrive3: TExample;
  /** Say: To say which way you move, join qǐ (up), shàng (up), or xià (down) to lái or qù. Pattern: qǐ-lái / shàng-lái / xià-lái */
  proseDirection: TProse;
  /** Example: qǐ-lái! */
  exampleDirection1: TExample;
  /** Example: wǒ qǐ-lái le. */
  exampleDirection2: TExample;
  /** Example: nǐ xià-lái! */
  exampleDirection3: TExample;
  /** Example: tā shàng-qù le. */
  exampleDirection4: TExample;
  /** Example: wǒ qù wài-miàn. */
  exampleDirection5: TExample;
  /** Example: tā zài wài-miàn. */
  exampleDirection6: TExample;
  /** Example: cóng zhè-ge kǒu qù wài-miàn. */
  exampleDirection7: TExample;
  /** Example: hézi-de kǒu hěn xiǎo. */
  exampleDirection8: TExample;
  /** Example: kǒu zài nǎlǐ? */
  exampleDirection9: TExample;
  /** Grammar box: lái / qù + place, cóng ... lái, dào + place, and qǐ-lái / shàng-lái / xià-lái. */
  infoComingAndGoing: TInfo;
  /** Exercise 1: Where are you going? */
  exercise1: TExercise;
  /** Exercise 2: She comes from home. */
  exercise2: TExercise;
  /** Exercise 3: We arrived at the market. */
  exercise3: TExercise;
  /** Exercise 4: Get up! */
  exercise4: TExercise;
  /** Exercise 5: The animal is outside. */
  exercise5: TExercise;
  /** Exercise 6: The box's opening is big. */
  exercise6: TExercise;
  /** Exercise 7: Come down! */
  exercise7: TExercise;
  /** Answer 1: nǐ qù nǎlǐ? */
  answer1: TAnswer;
  /** Answer 2: tā cóng jiā lái. */
  answer2: TAnswer;
  /** Answer 3: wǒ-men dào shìchǎng le. */
  answer3: TAnswer;
  /** Answer 4: qǐ-lái! */
  answer4: TAnswer;
  /** Answer 5: dòngwù zài wài-miàn. */
  answer5: TAnswer;
  /** Answer 6: hézi-de kǒu hěn dà. */
  answer6: TAnswer;
  /** Answer 7: xià-lái! */
  answer7: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabCong: { type: "vocab", term: "{{word:cong2}}", ttsText: "从" },
  vocabLai: { type: "vocab", term: "{{word:lai2}}", ttsText: "来" },
  vocabQu: { type: "vocab", term: "{{word:qu4}}", ttsText: "去" },
  vocabQi: { type: "vocab", term: "{{word:qi3}}", ttsText: "起" },
  vocabWai: { type: "vocab", term: "{{word:wai4}}", ttsText: "外" },
  vocabShichang: {
    type: "vocab",
    term: "{{word:shi4chang3}}",
    ttsText: "市场",
  },
  vocabKou: { type: "vocab", term: "{{word:kou3}}", ttsText: "口" },
  vocabDao: { type: "vocab", term: "{{word:dao4}}", ttsText: "到" },
  proseComeGo: { type: "prose" },
  exampleComeGo1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:qu4}} {{word:shi4chang3}}.",
    ttsText: "我去市场。",
  },
  exampleComeGo2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:lai2}} {{word:wo3}}-{{word:de}} {{word:jia1}} {{word:ma}}?",
    ttsText: "你来我的家吗？",
  },
  exampleComeGo3: {
    type: "example",
    pinyin: "{{Word:qu4}}!",
    ttsText: "去！",
  },
  exampleComeGo4: {
    type: "example",
    pinyin: "{{Word:lai2}}!",
    ttsText: "来！",
  },
  proseFrom: { type: "prose" },
  exampleFrom1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:cong2}} {{word:shi4chang3}} {{word:lai2}}.",
    ttsText: "我从市场来。",
  },
  exampleFrom2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:cong2}} {{word:jia1}} {{word:lai2}}.",
    ttsText: "他从家来。",
  },
  exampleFrom3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:cong2}} {{word:na3li3}} {{word:lai2}}?",
    ttsText: "你从哪里来？",
  },
  proseArrive: { type: "prose" },
  exampleArrive1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:dao4}} {{word:jia1}} {{word:le}}.",
    ttsText: "我到家了。",
  },
  exampleArrive2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:dao4}} {{word:shi4chang3}} {{word:le}}.",
    ttsText: "她到市场了。",
  },
  exampleArrive3: {
    type: "example",
    pinyin: "{{Word:shen2me}} {{word:shi2jian1}} {{word:ni3}} {{word:dao4}}?",
    ttsText: "什么时间你到？",
  },
  proseDirection: { type: "prose" },
  exampleDirection1: {
    type: "example",
    pinyin: "{{Word:qi3}}-{{word:lai2}}!",
    ttsText: "起来！",
  },
  exampleDirection2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:qi3}}-{{word:lai2}} {{word:le}}.",
    ttsText: "我起来了。",
  },
  exampleDirection3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:xia4}}-{{word:lai2}}!",
    ttsText: "你下来！",
  },
  exampleDirection4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shang4}}-{{word:qu4}} {{word:le}}.",
    ttsText: "他上去了。",
  },
  exampleDirection5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:qu4}} {{word:wai4}}-{{word:mian4}}.",
    ttsText: "我去外面。",
  },
  exampleDirection6: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:zai4}} {{word:wai4}}-{{word:mian4}}.",
    ttsText: "她在外面。",
  },
  exampleDirection7: {
    type: "example",
    pinyin: "{{Word:cong2}} {{word:zhe4}}-ge {{word:kou3}} {{word:qu4}} {{word:wai4}}-{{word:mian4}}.",
    ttsText: "从这个口去外面。",
  },
  exampleDirection8: {
    type: "example",
    pinyin: "{{Word:he2zi}}-{{word:de}} {{word:kou3}} {{word:hen3}} {{word:xiao3}}.",
    ttsText: "盒子的口很小。",
  },
  exampleDirection9: {
    type: "example",
    pinyin: "{{Word:kou3}} {{word:zai4}} {{word:na3li3}}?",
    ttsText: "口在哪里？",
  },
  infoComingAndGoing: {
    type: "info",
    subtype: "grammar",
    tag: "place/coming-and-going",
    items: [{}, {}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  answer1: { type: "answer", ttsText: "你去哪里？" },
  answer2: { type: "answer", ttsText: "她从家来。" },
  answer3: { type: "answer", ttsText: "我们到市场了。" },
  answer4: { type: "answer", ttsText: "起来！" },
  answer5: { type: "answer", ttsText: "动物在外面。" },
  answer6: { type: "answer", ttsText: "盒子的口很大。" },
  answer7: { type: "answer", ttsText: "下来！" },
};

export default shape;
