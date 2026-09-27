// Language-independent block sequence for lesson-12 ("Modifiers 1 — How much").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): very (hěn), really (zhēn), not and not very (bù, bù hěn), and asking how something is.
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
  /** Vocabulary: "new". */
  vocabXin: TVocab;
  /** Vocabulary: "body; health". */
  vocabShenti: TVocab;
  /** Say: To say very, put hěn before the describing word. Pattern: Thing + hěn + describing word */
  proseVery: TProse;
  /** Example: shuǐ hěn rè. */
  exampleVery1: TExample;
  /** Example: wǒ hěn lěng. */
  exampleVery2: TExample;
  /** Example: shuǐguǒ hěn tián. */
  exampleVery3: TExample;
  /** Example: tā-de shēntǐ hěn hǎo. */
  exampleVery4: TExample;
  /** Example: wǒ-de jiǎo hěn lěng. */
  exampleVery5: TExample;
  /** Example: wǒ kàn-guò hěn qíguài-de dòngwù. */
  exampleVery6: TExample;
  /** Say: To say really, put zhēn before the describing word. Pattern: Thing + zhēn + describing word */
  proseReally: TProse;
  /** Example: zhēn rè! */
  exampleReally1: TExample;
  /** Example: tā zhēn qíguài. */
  exampleReally2: TExample;
  /** Example: zhè-ge shuǐguǒ zhēn tián! */
  exampleReally3: TExample;
  /** Say: To say not, or not very, put bù or bù hěn before the describing word. Pattern: Thing + bù (+ hěn) + describing word */
  proseNot: TProse;
  /** Example: shuǐ bù lěng. */
  exampleNot1: TExample;
  /** Example: zhè-ge bù hěn qíguài. */
  exampleNot2: TExample;
  /** Example: mǐfàn bù rè. */
  exampleNot3: TExample;
  /** Say: To ask how something is, put ma after the describing word. Pattern: Thing + describing word + ma? */
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
  /** Grammar box: hěn, zhēn, bù / bù hěn before a describing word, and describing word + ma. */
  infoHowMuch: TInfo;
  /** Exercise 1: The rice is really hot. */
  exercise1: TExercise;
  /** Exercise 2: I'm very cold. */
  exercise2: TExercise;
  /** Exercise 3: Is the fruit sweet? */
  exercise3: TExercise;
  /** Exercise 4: That person is really strange. */
  exercise4: TExercise;
  /** Exercise 5: I want new clothes. */
  exercise5: TExercise;
  /** Exercise 6: She is in good health. */
  exercise6: TExercise;
  /** Exercise 7: The water isn't cold. */
  exercise7: TExercise;
  /** Answer 1: mǐfàn zhēn rè. */
  answer1: TAnswer;
  /** Answer 2: wǒ hěn lěng. */
  answer2: TAnswer;
  /** Answer 3: shuǐguǒ tián ma? */
  answer3: TAnswer;
  /** Answer 4: nà-ge rén zhēn qíguài. */
  answer4: TAnswer;
  /** Answer 5: wǒ yào xīn-de yīfu. */
  answer5: TAnswer;
  /** Answer 6: tā-de shēntǐ hěn hǎo. */
  answer6: TAnswer;
  /** Answer 7: shuǐ bù lěng. */
  answer7: TAnswer;
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
  vocabXin: { type: "vocab", term: "{{word:xin1}}", ttsText: "新" },
  vocabShenti: {
    type: "vocab",
    term: "{{word:shen1ti3}}",
    ttsText: "身体",
  },
  proseVery: { type: "prose" },
  exampleVery1: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:hen3}} {{word:re4}}.",
    ttsText: "水很热。",
  },
  exampleVery2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:hen3}} {{word:leng3}}.",
    ttsText: "我很冷。",
  },
  exampleVery3: {
    type: "example",
    pinyin: "{{Word:shui3guo3}} {{word:hen3}} {{word:tian2}}.",
    ttsText: "水果很甜。",
  },
  exampleVery4: {
    type: "example",
    pinyin: "{{Word:ta1}}-{{word:de}} {{word:shen1ti3}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "他的身体很好。",
  },
  exampleVery5: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:jiao3}} {{word:hen3}} {{word:leng3}}.",
    ttsText: "我的脚很冷。",
  },
  exampleVery6: {
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
  infoHowMuch: {
    type: "info",
    subtype: "grammar",
    tag: "describing/how-much",
    items: [{}, {}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  answer1: { type: "answer", ttsText: "米饭真热。" },
  answer2: { type: "answer", ttsText: "我很冷。" },
  answer3: { type: "answer", ttsText: "水果甜吗？" },
  answer4: { type: "answer", ttsText: "那个人真奇怪。" },
  answer5: { type: "answer", ttsText: "我要新的衣服。" },
  answer6: { type: "answer", ttsText: "她的身体很好。" },
  answer7: { type: "answer", ttsText: "水不冷。" },
};

export default shape;
