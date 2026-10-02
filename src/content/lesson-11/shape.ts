// Language-independent block sequence for lesson-11 ("Space 2 — Moving").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): coming and going (lái / qù), from (cóng), arriving (dào), direction (qǐ-lái, shàng-lái, xià-lái, wài-miàn), moving (dòng), and far / near (yuǎn, jìn).
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
  TFaq,
} from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Space 2 — Moving */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "come". */
  vocabLai: TVocab;
  /** Vocabulary: "go". */
  vocabQu: TVocab;
  /** Vocabulary: "market". */
  vocabShichang: TVocab;
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
  /** Example: wǒ qù-guò shìchǎng. */
  exampleComeGo5: TExample;
  /** Example: chī-wán hòu, wǒ-men qù shìchǎng. */
  exampleComeGo6: TExample;
  /** Example: tā lái wǒ-de páng-biān. */
  exampleComeGo7: TExample;
  /** Example: wǒ-men xiànzài qù shìchǎng. */
  exampleComeGo8: TExample;
  /** Example: nǐ lái yīxià. */
  exampleComeGo9: TExample;
  /** Vocabulary: "from". */
  vocabCong: TVocab;
  /** Say: To say where you come from, put cóng (from) before the place, then lái. Pattern: Who + cóng + place + lái */
  proseFrom: TProse;
  /** Example: wǒ cóng shìchǎng lái. */
  exampleFrom1: TExample;
  /** Example: tā cóng jiā lái. */
  exampleFrom2: TExample;
  /** Example: nǐ cóng nǎlǐ lái? */
  exampleFrom3: TExample;
  /** Example: tā cóng qián-miàn lái. */
  exampleFrom4: TExample;
  /** Vocabulary: "arrive, to". */
  vocabDao: TVocab;
  /** Say: To say you arrive somewhere, put dào (arrive) before the place. Pattern: Who + dào + place + le */
  proseArrive: TProse;
  /** Example: wǒ dào jiā le. */
  exampleArrive1: TExample;
  /** Example: tā dào shìchǎng le. */
  exampleArrive2: TExample;
  /** Example: shénme shíjiān nǐ dào? */
  exampleArrive3: TExample;
  /** Vocabulary: "rise; qǐ-lái: get up". */
  vocabQi: TVocab;
  /** Vocabulary: "out; wài-miàn: outside". */
  vocabWai: TVocab;
  /** Vocabulary: "opening, door". */
  vocabKou: TVocab;
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
  /** Vocabulary: "move". */
  vocabDong: TVocab;
  /** Say: To say something moves, use dòng (move). Pattern: Who + dòng */
  proseMove: TProse;
  /** Example: tā dòng le. */
  exampleMove1: TExample;
  /** Example: bù yào dòng! */
  exampleMove2: TExample;
  /** Example: dòngwù zài dòng. */
  exampleMove3: TExample;
  /** Example: nǐ néng dòng ma? */
  exampleMove4: TExample;
  /** Vocabulary: "far". */
  vocabYuan: TVocab;
  /** Vocabulary: "near". */
  vocabJin: TVocab;
  /** Say: To say a place is far or near, use yuǎn (far) or jìn (near). Pattern: Place + hěn + yuǎn / jìn */
  proseFar: TProse;
  /** Example: shìchǎng hěn yuǎn. */
  exampleFar1: TExample;
  /** Example: wǒ-de jiā hěn jìn. */
  exampleFar2: TExample;
  /** Example: nǐ-de jiā yuǎn ma? */
  exampleFar3: TExample;
  /** Example: wǒ-men qù jìn-de shìchǎng. */
  exampleFar4: TExample;
  /** Example: tā cóng hěn yuǎn-de dìfāng lái. */
  exampleFar5: TExample;
  /** Grammar box: lái / qù + place, cóng ... lái, dào + place, qǐ-lái / shàng-lái / xià-lái, dòng, and yuǎn / jìn. */
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
  /** Exercise 8: Don't move! */
  exercise8: TExercise;
  /** Exercise 9: The market is far. */
  exercise9: TExercise;
  /** Exercise 10: My home is near. */
  exercise10: TExercise;
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
  /** Answer 8: bù yào dòng! */
  answer8: TAnswer;
  /** Answer 9: shìchǎng hěn yuǎn. */
  answer9: TAnswer;
  /** Answer 10: wǒ-de jiā hěn jìn. */
  answer10: TAnswer;
  /** FAQ: dào vs qù */
  faqDaoOrQu: TFaq;
  /** FAQ: why cóng + place before lái? */
  faqCongOrder: TFaq;
  /** FAQ: lái or qù depends on where the speaker is */
  faqLaiOrQu: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabLai: { type: "vocab", term: "{{word:lai2}}", ttsText: "来" },
  vocabQu: { type: "vocab", term: "{{word:qu4}}", ttsText: "去" },
  vocabShichang: {
    type: "vocab",
    term: "{{word:shi4chang3}}",
    ttsText: "市场",
  },
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
  exampleComeGo5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:qu4}}-{{word:guo4}} {{word:shi4chang3}}.",
    ttsText: "我去过市场。",
  },
  exampleComeGo6: {
    type: "example",
    pinyin: "{{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}}-{{word:men}} {{word:qu4}} {{word:shi4chang3}}.",
    ttsText: "吃完后，我们去市场。",
  },
  exampleComeGo7: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:lai2}} {{word:wo3}}-{{word:de}} {{word:pang2}}-{{word:bian1}}.",
    ttsText: "他来我的旁边。",
  },
  exampleComeGo8: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:men}} {{word:xian4zai4}} {{word:qu4}} {{word:shi4chang3}}.",
    ttsText: "我们现在去市场。",
  },
  exampleComeGo9: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:lai2}} {{word:yi1xia4}}.",
    ttsText: "你来一下。",
  },
  vocabCong: { type: "vocab", term: "{{word:cong2}}", ttsText: "从" },
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
  exampleFrom4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:cong2}} {{word:qian2}}-{{word:mian4}} {{word:lai2}}.",
    ttsText: "他从前面来。",
  },
  vocabDao: { type: "vocab", term: "{{word:dao4}}", ttsText: "到" },
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
  vocabQi: { type: "vocab", term: "{{word:qi3}}", ttsText: "起" },
  vocabWai: { type: "vocab", term: "{{word:wai4}}", ttsText: "外" },
  vocabKou: { type: "vocab", term: "{{word:kou3}}", ttsText: "口" },
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
  vocabDong: { type: "vocab", term: "{{word:dong4}}", ttsText: "动" },
  proseMove: { type: "prose" },
  exampleMove1: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:dong4}} {{word:le}}.",
    ttsText: "它动了。",
  },
  exampleMove2: {
    type: "example",
    pinyin: "{{Word:bu4}} {{word:yao4}} {{word:dong4}}!",
    ttsText: "不要动！",
  },
  exampleMove3: {
    type: "example",
    pinyin: "{{Word:dong4wu4}} {{word:zai4}} {{word:dong4}}.",
    ttsText: "动物在动。",
  },
  exampleMove4: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:neng2}} {{word:dong4}} {{word:ma}}?",
    ttsText: "你能动吗？",
  },
  vocabYuan: { type: "vocab", term: "{{word:yuan3}}", ttsText: "远" },
  vocabJin: { type: "vocab", term: "{{word:jin4}}", ttsText: "近" },
  proseFar: { type: "prose" },
  exampleFar1: {
    type: "example",
    pinyin: "{{Word:shi4chang3}} {{word:hen3}} {{word:yuan3}}.",
    ttsText: "市场很远。",
  },
  exampleFar2: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:hen3}} {{word:jin4}}.",
    ttsText: "我的家很近。",
  },
  exampleFar3: {
    type: "example",
    pinyin: "{{Word:ni3}}-{{word:de}} {{word:jia1}} {{word:yuan3}} {{word:ma}}?",
    ttsText: "你的家远吗？",
  },
  exampleFar4: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} {{word:jin4}}-{{word:de}} {{word:shi4chang3}}.",
    ttsText: "我们去近的市场。",
  },
  exampleFar5: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:cong2}} {{word:hen3}} {{word:yuan3}}-{{word:de}} {{word:di4fang1}} {{word:lai2}}.",
    ttsText: "他从很远的地方来。",
  },
  infoComingAndGoing: {
    type: "info",
    subtype: "grammar",
    tag: "place/coming-and-going",
    items: [{}, {}, {}, {}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  exercise8: { type: "exercise" },
  exercise9: { type: "exercise" },
  exercise10: { type: "exercise" },
  answer1: { type: "answer", ttsText: "你去哪里？" },
  answer2: { type: "answer", ttsText: "她从家来。" },
  answer3: { type: "answer", ttsText: "我们到市场了。" },
  answer4: { type: "answer", ttsText: "起来！" },
  answer5: { type: "answer", ttsText: "动物在外面。" },
  answer6: { type: "answer", ttsText: "盒子的口很大。" },
  answer7: { type: "answer", ttsText: "下来！" },
  answer8: { type: "answer", ttsText: "不要动！" },
  answer9: { type: "answer", ttsText: "市场很远。" },
  answer10: { type: "answer", ttsText: "我的家很近。" },
  faqDaoOrQu: { type: "faq" },
  faqCongOrder: { type: "faq" },
  faqLaiOrQu: { type: "faq" },
};

export default shape;
