// Language-independent block sequence for lesson-07 ("Pre-Verbs").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Phase 1 skeleton (BOOK_PLAN.md): the vocab list follows BOOK_PLAN §4b, and
// the other blocks were moved here unchanged from the old 16-lesson layout
// ([from old LNN] says where; the old lessons are archived in
// src/content/legacy/v2-16-lessons/). They get rewritten in Phase 2.
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
  /** Pre-Verbs */
  title: TTitle;
  /** Chapter summary. [from old L09] */
  summary: TSummary;
  /** Vocabulary: "want; want to". */
  vocabYao: TVocab;
  /** Vocabulary: "can". */
  vocabNeng: TVocab;
  /** Vocabulary: "know; know how to (with zěnme)". */
  vocabZhidao: TVocab;
  /** Vocabulary: "love; love to". */
  vocabAi: TVocab;
  /** Vocabulary: "wait". */
  vocabDeng: TVocab;
  /** Vocabulary: "clothes". */
  vocabYifu: TVocab;
  /** Say: I want to do something. Who + yào + verb. */
  proseWant: TProse;
  /** Example: wǒ yào chī. */
  exampleWant1: TExample;
  /** Example: wǒ yào shuǐ. */
  exampleWant2: TExample;
  /** Example: nǐ yào shénme? */
  exampleWant3: TExample;
  /** Example: tā yào yīfu. */
  exampleWant4: TExample;
  /** Example: nǐ yào děng ma? */
  exampleWant5: TExample;
  /** Say: I can do something. Who + néng + verb; bù néng for can't. */
  proseCan: TProse;
  /** Example: wǒ néng tīng. */
  exampleCan1: TExample;
  /** Example: wǒ néng děng. */
  exampleCan2: TExample;
  /** Example: tā bù néng chī. */
  exampleCan3: TExample;
  /** Example: nǐ néng kàn ma? */
  exampleCan4: TExample;
  /** Say: I know how to do something. Who + zhīdào zěnme + verb. */
  proseKnowHow: TProse;
  /** Example: wǒ zhīdào zěnme xiě. */
  exampleKnowHow1: TExample;
  /** Example: nǐ zhīdào zěnme shuō ma? */
  exampleKnowHow2: TExample;
  /** Example: wǒ zhīdào. */
  exampleKnowHow3: TExample;
  /** Example: tā bù zhīdào. */
  exampleKnowHow4: TExample;
  /** Say: I love to do something. Who + ài + verb. */
  proseLove: TProse;
  /** Example: wǒ ài chī. */
  exampleLove1: TExample;
  /** Example: wǒ ài nǐ. */
  exampleLove2: TExample;
  /** Example: tā ài kàn. */
  exampleLove3: TExample;
  /** Example: wǒ ài nǐ-de yīfu. */
  exampleLove4: TExample;
  /** Example: zhè shì nǐ-de yīfu ma? */
  exampleLove5: TExample;
  /** Grammar box: yào / néng / zhīdào zěnme / ài + verb, and bù before them. */
  infoPreVerbs: TInfo;
  /** Exercise 1: I want to wait. */
  exercise1: TExercise;
  /** Exercise 2: Can you write? */
  exercise2: TExercise;
  /** Exercise 3: She loves to eat fruit. */
  exercise3: TExercise;
  /** Exercise 4: I don't know how to say it. */
  exercise4: TExercise;
  /** Exercise 5: What do you want to eat? */
  exercise5: TExercise;
  /** Exercise 6: He can't wait. */
  exercise6: TExercise;
  /** Exercise 7: Do you have clothes? */
  exercise7: TExercise;
  /** Answer 1. */
  answer1: TAnswer;
  /** Answer 2. */
  answer2: TAnswer;
  /** Answer 3. */
  answer3: TAnswer;
  /** Answer 4. */
  answer4: TAnswer;
  /** Answer 5. */
  answer5: TAnswer;
  /** Answer 6. */
  answer6: TAnswer;
  /** Answer 7. */
  answer7: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabYao: { type: "vocab", term: "{{word:yao4}}", ttsText: "要" },
  vocabNeng: { type: "vocab", term: "{{word:neng2}}", ttsText: "能" },
  vocabZhidao: {
    type: "vocab",
    term: "{{word:zhi1dao4}}",
    ttsText: "知道",
  },
  vocabAi: { type: "vocab", term: "{{word:ai4}}", ttsText: "爱" },
  vocabDeng: { type: "vocab", term: "{{word:deng3}}", ttsText: "等" },
  vocabYifu: { type: "vocab", term: "{{word:yi1fu}}", ttsText: "衣服" },
  proseWant: { type: "prose" },
  exampleWant1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:chi1}}.",
    ttsText: "我要吃。",
  },
  exampleWant2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:shui3}}.",
    ttsText: "我要水。",
  },
  exampleWant3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:yao4}} {{word:shen2me}}?",
    ttsText: "你要什么？",
  },
  exampleWant4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:yao4}} {{word:yi1fu}}.",
    ttsText: "她要衣服。",
  },
  exampleWant5: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:yao4}} {{word:deng3}} {{word:ma}}?",
    ttsText: "你要等吗？",
  },
  proseCan: { type: "prose" },
  exampleCan1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:neng2}} {{word:ting1}}.",
    ttsText: "我能听。",
  },
  exampleCan2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:neng2}} {{word:deng3}}.",
    ttsText: "我能等。",
  },
  exampleCan3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:bu4}} {{word:neng2}} {{word:chi1}}.",
    ttsText: "他不能吃。",
  },
  exampleCan4: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:neng2}} {{word:kan4}} {{word:ma}}?",
    ttsText: "你能看吗？",
  },
  proseKnowHow: { type: "prose" },
  exampleKnowHow1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:zen3me}} {{word:xie3}}.",
    ttsText: "我知道怎么写。",
  },
  exampleKnowHow2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:zen3me}} {{word:shuo1}} {{word:ma}}?",
    ttsText: "你知道怎么说吗？",
  },
  exampleKnowHow3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zhi1dao4}}.",
    ttsText: "我知道。",
  },
  exampleKnowHow4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:bu4}} {{word:zhi1dao4}}.",
    ttsText: "他不知道。",
  },
  proseLove: { type: "prose" },
  exampleLove1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ai4}} {{word:chi1}}.",
    ttsText: "我爱吃。",
  },
  exampleLove2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ai4}} {{word:ni3}}.",
    ttsText: "我爱你。",
  },
  exampleLove3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:ai4}} {{word:kan4}}.",
    ttsText: "她爱看。",
  },
  exampleLove4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ai4}} {{word:ni3}}-{{word:de}} {{word:yi1fu}}.",
    ttsText: "我爱你的衣服。",
  },
  exampleLove5: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:ni3}}-{{word:de}} {{word:yi1fu}} {{word:ma}}?",
    ttsText: "这是你的衣服吗？",
  },
  infoPreVerbs: {
    type: "info",
    subtype: "grammar",
    tag: "pre-verbs/want-can-know-love",
    items: [{}, {}, {}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  answer1: { type: "answer", ttsText: "我要等。" },
  answer2: { type: "answer", ttsText: "你能写吗？" },
  answer3: { type: "answer", ttsText: "她爱吃水果。" },
  answer4: { type: "answer", ttsText: "我不知道怎么说。" },
  answer5: { type: "answer", ttsText: "你要吃什么？" },
  answer6: { type: "answer", ttsText: "他不能等。" },
  answer7: { type: "answer", ttsText: "你有衣服吗？" },
};

export default shape;
