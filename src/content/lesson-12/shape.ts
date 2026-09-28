// Language-independent block sequence for lesson-12 ("Modifiers 1 — How much").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): very (hěn), really (zhēn), not and not very (bù, bù hěn), asking how something is, and value (jiàzhí).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- lesson-12).
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
  /** Modifiers 1 — How much */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "really". */
  vocabZhen: TVocab;
  /** Vocabulary: "hot". */
  vocabRe: TVocab;
  /** Vocabulary: "cold". */
  vocabLeng: TVocab;
  /** Vocabulary: "sweet". */
  vocabTian: TVocab;
  /** Vocabulary: "strange". */
  vocabQiguai: TVocab;
  /** Vocabulary: "body; health". */
  vocabShenti: TVocab;
  /** Vocabulary: "value, worth". */
  vocabJiazhi: TVocab;
  /** Say: To say very, put hěn before the adjective. Pattern: Thing + hěn + adjective */
  proseVery: TProse;
  /** Example: zhè-ge gōngjù hěn yǒu jiàzhí. */
  exampleVery1: TExample;
  /** Example: shuǐ-de jiàzhí hěn dà. */
  exampleVery2: TExample;
  /** Example: shuǐ hěn rè. */
  exampleVery3: TExample;
  /** Example: wǒ hěn lěng. */
  exampleVery4: TExample;
  /** Example: shuǐguǒ hěn tián. */
  exampleVery5: TExample;
  /** Example: tā-de shēntǐ hěn hǎo. */
  exampleVery6: TExample;
  /** Example: wǒ-de jiǎo hěn lěng. */
  exampleVery7: TExample;
  /** Example: wǒ kàn-guò hěn qíguài-de dòngwù. */
  exampleVery8: TExample;
  /** Say: To say really, put zhēn before the adjective. Pattern: Thing + zhēn + adjective */
  proseReally: TProse;
  /** Example: zhēn rè! */
  exampleReally1: TExample;
  /** Example: tā zhēn qíguài. */
  exampleReally2: TExample;
  /** Example: zhè-ge shuǐguǒ zhēn tián! */
  exampleReally3: TExample;
  /** Say: To say not, or not very, put bù or bù hěn before the adjective. Pattern: Thing + bù (+ hěn) + adjective */
  proseNot: TProse;
  /** Example: shuǐ bù lěng. */
  exampleNot1: TExample;
  /** Example: zhè-ge bù hěn qíguài. */
  exampleNot2: TExample;
  /** Example: mǐfàn bù rè. */
  exampleNot3: TExample;
  /** Vocabulary: "new". */
  vocabXin: TVocab;
  /** Say: To ask how something is, put ma after the adjective. Pattern: Thing + adjective + ma? */
  proseAsk: TProse;
  /** Example: shuǐ rè ma? */
  exampleAsk1: TExample;
  /** Example: nǐ lěng ma? */
  exampleAsk2: TExample;
  /** Example: nǐ-de shēntǐ hǎo ma? */
  exampleAsk3: TExample;
  /** Example: zhè-ge hézi xīn ma? */
  exampleAsk4: TExample;
  /** Example: wǒ yào xīn-de yīfu. */
  exampleAsk5: TExample;
  /** Example: wǒ-de shēntǐ zhēn rè. */
  exampleAsk6: TExample;
  /** Example: zhè-ge yǒu jiàzhí ma? */
  exampleAsk7: TExample;
  /** Grammar box: hěn, zhēn, bù / bù hěn before an adjective, adjective + ma, and hěn yǒu jiàzhí. */
  infoHowMuch: TInfo;
  /** Exercise 1: Water has great value. */
  exercise1: TExercise;
  /** Exercise 2: The rice is really hot. */
  exercise2: TExercise;
  /** Exercise 3: I'm very cold. */
  exercise3: TExercise;
  /** Exercise 4: Is the fruit sweet? */
  exercise4: TExercise;
  /** Exercise 5: That person is really strange. */
  exercise5: TExercise;
  /** Exercise 6: I want new clothes. */
  exercise6: TExercise;
  /** Exercise 7: She is in good health. */
  exercise7: TExercise;
  /** Exercise 8: The water isn't cold. */
  exercise8: TExercise;
  /** Answer 1: shuǐ-de jiàzhí hěn dà. */
  answer1: TAnswer;
  /** Answer 2: mǐfàn zhēn rè. */
  answer2: TAnswer;
  /** Answer 3: wǒ hěn lěng. */
  answer3: TAnswer;
  /** Answer 4: shuǐguǒ tián ma? */
  answer4: TAnswer;
  /** Answer 5: nà-ge rén zhēn qíguài. */
  answer5: TAnswer;
  /** Answer 6: wǒ yào xīn-de yīfu. */
  answer6: TAnswer;
  /** Answer 7: tā-de shēntǐ hěn hǎo. */
  answer7: TAnswer;
  /** Answer 8: shuǐ bù lěng. */
  answer8: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabZhen: { type: "vocab", term: "{{word:zhen1}}", ttsText: "真" },
  vocabRe: { type: "vocab", term: "{{word:re4}}", ttsText: "热" },
  vocabLeng: { type: "vocab", term: "{{word:leng3}}", ttsText: "冷" },
  vocabTian: { type: "vocab", term: "{{word:tian2}}", ttsText: "甜" },
  vocabQiguai: {
    type: "vocab",
    term: "{{word:qi2guai4}}",
    ttsText: "奇怪",
  },
  vocabShenti: {
    type: "vocab",
    term: "{{word:shen1ti3}}",
    ttsText: "身体",
  },
  vocabJiazhi: {
    type: "vocab",
    term: "{{word:jia4zhi2}}",
    ttsText: "价值",
  },
  proseVery: { type: "prose" },
  exampleVery1: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:gong1ju4}} {{word:hen3}} {{word:you3}} {{word:jia4zhi2}}.",
    ttsText: "这个工具很有价值。",
  },
  exampleVery2: {
    type: "example",
    pinyin: "{{Word:shui3}}-{{word:de}} {{word:jia4zhi2}} {{word:hen3}} {{word:da4}}.",
    ttsText: "水的价值很大。",
  },
  exampleVery3: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:hen3}} {{word:re4}}.",
    ttsText: "水很热。",
  },
  exampleVery4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:hen3}} {{word:leng3}}.",
    ttsText: "我很冷。",
  },
  exampleVery5: {
    type: "example",
    pinyin: "{{Word:shui3guo3}} {{word:hen3}} {{word:tian2}}.",
    ttsText: "水果很甜。",
  },
  exampleVery6: {
    type: "example",
    pinyin: "{{Word:ta1}}-{{word:de}} {{word:shen1ti3}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "他的身体很好。",
  },
  exampleVery7: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:jiao3}} {{word:hen3}} {{word:leng3}}.",
    ttsText: "我的脚很冷。",
  },
  exampleVery8: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:guo4}} {{word:hen3}} {{word:qi2guai4}}-{{word:de}} {{word:dong4wu4}}.",
    ttsText: "我看过很奇怪的动物。",
  },
  proseReally: { type: "prose" },
  exampleReally1: {
    type: "example",
    pinyin: "{{Word:zhen1}} {{word:re4}}!",
    ttsText: "真热！",
  },
  exampleReally2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:zhen1}} {{word:qi2guai4}}.",
    ttsText: "她真奇怪。",
  },
  exampleReally3: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:shui3guo3}} {{word:zhen1}} {{word:tian2}}!",
    ttsText: "这个水果真甜！",
  },
  proseNot: { type: "prose" },
  exampleNot1: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:bu4}} {{word:leng3}}.",
    ttsText: "水不冷。",
  },
  exampleNot2: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:bu4}} {{word:hen3}} {{word:qi2guai4}}.",
    ttsText: "这个不很奇怪。",
  },
  exampleNot3: {
    type: "example",
    pinyin: "{{Word:mi3fan4}} {{word:bu4}} {{word:re4}}.",
    ttsText: "米饭不热。",
  },
  vocabXin: { type: "vocab", term: "{{word:xin1}}", ttsText: "新" },
  proseAsk: { type: "prose" },
  exampleAsk1: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:re4}} {{word:ma}}?",
    ttsText: "水热吗？",
  },
  exampleAsk2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:leng3}} {{word:ma}}?",
    ttsText: "你冷吗？",
  },
  exampleAsk3: {
    type: "example",
    pinyin: "{{Word:ni3}}-{{word:de}} {{word:shen1ti3}} {{word:hao3}} {{word:ma}}?",
    ttsText: "你的身体好吗？",
  },
  exampleAsk4: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:he2zi}} {{word:xin1}} {{word:ma}}?",
    ttsText: "这个盒子新吗？",
  },
  exampleAsk5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:xin1}}-{{word:de}} {{word:yi1fu}}.",
    ttsText: "我要新的衣服。",
  },
  exampleAsk6: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:shen1ti3}} {{word:zhen1}} {{word:re4}}.",
    ttsText: "我的身体真热。",
  },
  exampleAsk7: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:you3}} {{word:jia4zhi2}} {{word:ma}}?",
    ttsText: "这个有价值吗？",
  },
  infoHowMuch: {
    type: "info",
    subtype: "grammar",
    tag: "describing/how-much",
    items: [{}, {}, {}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  exercise8: { type: "exercise" },
  answer1: { type: "answer", ttsText: "水的价值很大。" },
  answer2: { type: "answer", ttsText: "米饭真热。" },
  answer3: { type: "answer", ttsText: "我很冷。" },
  answer4: { type: "answer", ttsText: "水果甜吗？" },
  answer5: { type: "answer", ttsText: "那个人真奇怪。" },
  answer6: { type: "answer", ttsText: "我要新的衣服。" },
  answer7: { type: "answer", ttsText: "她的身体很好。" },
  answer8: { type: "answer", ttsText: "水不冷。" },
};

export default shape;
