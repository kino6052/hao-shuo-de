// Language-independent block sequence for lesson-06 ("Questions and Answers").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): yes-or-no questions (ma, verb-not-verb), what (shénme), why (wèishénme), how (zěnme), and answering.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- lesson-06).
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
  /** Questions and Answers */
  title: TTitle;
  /** Chapter summary. [from old L06] */
  summary: TSummary;
  /** Vocabulary: "what, which". */
  vocabShenme: TVocab;
  /** Vocabulary: "turns a sentence into a yes-or-no question". */
  vocabMa: TVocab;
  /** Vocabulary: "why". */
  vocabWeishenme: TVocab;
  /** Vocabulary: "how". */
  vocabZenme: TVocab;
  /** Vocabulary: "ask". */
  vocabWen: TVocab;
  /** Vocabulary: "look for". */
  vocabZhao: TVocab;
  /** Vocabulary: "tool". */
  vocabGongju: TVocab;
  /** Vocabulary: "box". */
  vocabHezi: TVocab;
  /** Say: To ask a yes-or-no question, put ma at the end. Pattern: sentence + ma? */
  proseYesNo: TProse;
  /** Example: nǐ yǒu gōngjù ma? */
  exampleYesNo1: TExample;
  /** Example: zhè shì hézi ma? */
  exampleYesNo2: TExample;
  /** Example: tā chī shuǐguǒ ma? */
  exampleYesNo3: TExample;
  /** Example: nǐ tīng-bù-tīng fùmǔ? */
  exampleYesNo4: TExample;
  /** Example: tā yǒu-méi-yǒu jīn? */
  exampleYesNo5: TExample;
  /** Say: To ask "what?", put shénme right where the answer would go. Pattern: Who + verb + shénme? */
  proseWhat: TProse;
  /** Example: nǐ zhǎo shénme? */
  exampleWhat1: TExample;
  /** Example: zhè shì shénme? */
  exampleWhat2: TExample;
  /** Example: tā wèn shénme? */
  exampleWhat3: TExample;
  /** Example: shénme rén chī shuǐguǒ? */
  exampleWhat4: TExample;
  /** Example: wǒ zhǎo hézi. */
  exampleWhat5: TExample;
  /** Say: To ask "why?" or "how?", put wèishénme (why) at the start, or zěnme (how) before the verb. Pattern: wèishénme + sentence? / zěnme + verb? */
  proseWhyHow: TProse;
  /** Example: wèishénme nǐ bù chī? */
  exampleWhyHow1: TExample;
  /** Example: wèishénme tā zhǎo hézi? */
  exampleWhyHow2: TExample;
  /** Example: wèishénme nǐ wèn? */
  exampleWhyHow3: TExample;
  /** Example: zhè-ge zěnme shuō? */
  exampleWhyHow4: TExample;
  /** Example: zhè-ge zěnme xiě? */
  exampleWhyHow5: TExample;
  /** Example: nǐ zěnme zhǎo tā? */
  exampleWhyHow6: TExample;
  /** Say: To answer yes or no, repeat the verb for "yes", or put bù before it for "no". Pattern: verb. / bù + verb. */
  proseAnswer: TProse;
  /** Example: tīng. */
  exampleAnswer1: TExample;
  /** Example: bù tīng. */
  exampleAnswer2: TExample;
  /** Example: yǒu. */
  exampleAnswer3: TExample;
  /** Example: wǒ wèn nǐ. */
  exampleAnswer4: TExample;
  /** Grammar box: ma, verb-bù-verb, shénme, wèishénme, zěnme. */
  infoAskingQuestions: TInfo;
  /** Exercise 1: What tools do you have? */
  exercise1: TExercise;
  /** Exercise 2: Ask "Does he listen?" without {{word:ma}}. */
  exercise2: TExercise;
  /** Exercise 3: Is the tool small? */
  exercise3: TExercise;
  /** Exercise 4: Is that your box? */
  exercise4: TExercise;
  /** Exercise 5: Why is he looking for water? */
  exercise5: TExercise;
  /** Exercise 6: How do you write this? */
  exercise6: TExercise;
  /** Exercise 7: Who is asking? */
  exercise7: TExercise;
  /** Answer 1: nǐ yǒu shénme gōngjù? */
  answer1: TAnswer;
  /** Answer 2: tā tīng-bù-tīng? */
  answer2: TAnswer;
  /** Answer 3: gōngjù xiǎo ma? */
  answer3: TAnswer;
  /** Answer 4: nà shì nǐ-de hézi ma? */
  answer4: TAnswer;
  /** Answer 5: wèishénme tā zhǎo shuǐ? */
  answer5: TAnswer;
  /** Answer 6: zhè-ge zěnme xiě? */
  answer6: TAnswer;
  /** Answer 7: shénme rén wèn? */
  answer7: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabShenme: { type: "vocab", term: "{{word:shen2me}}", ttsText: "什么" },
  vocabMa: { type: "vocab", term: "{{word:ma}}", ttsText: "吗" },
  vocabWeishenme: {
    type: "vocab",
    term: "{{word:wei4shen2me}}",
    ttsText: "为什么",
  },
  vocabZenme: { type: "vocab", term: "{{word:zen3me}}", ttsText: "怎么" },
  vocabWen: { type: "vocab", term: "{{word:wen4}}", ttsText: "问" },
  vocabZhao: { type: "vocab", term: "{{word:zhao3}}", ttsText: "找" },
  vocabGongju: {
    type: "vocab",
    term: "{{word:gong1ju4}}",
    ttsText: "工具",
  },
  vocabHezi: { type: "vocab", term: "{{word:he2zi}}", ttsText: "盒子" },
  proseYesNo: { type: "prose" },
  exampleYesNo1: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:you3}} {{word:gong1ju4}} {{word:ma}}?",
    ttsText: "你有工具吗？",
  },
  exampleYesNo2: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:he2zi}} {{word:ma}}?",
    ttsText: "这是盒子吗？",
  },
  exampleYesNo3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:chi1}} {{word:shui3guo3}} {{word:ma}}?",
    ttsText: "他吃水果吗？",
  },
  exampleYesNo4: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}} {{word:fu4mu3}}?",
    ttsText: "你听不听父母？",
  },
  exampleYesNo5: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:you3}}-{{word:mei2}}-{{word:you3}} {{word:jin1}}?",
    ttsText: "她有没有金？",
  },
  proseWhat: { type: "prose" },
  exampleWhat1: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:zhao3}} {{word:shen2me}}?",
    ttsText: "你找什么？",
  },
  exampleWhat2: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:shen2me}}?",
    ttsText: "这是什么？",
  },
  exampleWhat3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:wen4}} {{word:shen2me}}?",
    ttsText: "他问什么？",
  },
  exampleWhat4: {
    type: "example",
    pinyin: "{{Word:shen2me}} {{word:ren2}} {{word:chi1}} {{word:shui3guo3}}?",
    ttsText: "什么人吃水果？",
  },
  exampleWhat5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zhao3}} {{word:he2zi}}.",
    ttsText: "我找盒子。",
  },
  proseWhyHow: { type: "prose" },
  exampleWhyHow1: {
    type: "example",
    pinyin: "{{Word:wei4shen2me}} {{word:ni3}} {{word:bu4}} {{word:chi1}}?",
    ttsText: "为什么你不吃？",
  },
  exampleWhyHow2: {
    type: "example",
    pinyin: "{{Word:wei4shen2me}} {{word:ta1}} {{word:zhao3}} {{word:he2zi}}?",
    ttsText: "为什么他找盒子？",
  },
  exampleWhyHow3: {
    type: "example",
    pinyin: "{{Word:wei4shen2me}} {{word:ni3}} {{word:wen4}}?",
    ttsText: "为什么你问？",
  },
  exampleWhyHow4: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:zen3me}} {{word:shuo1}}?",
    ttsText: "这个怎么说？",
  },
  exampleWhyHow5: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:zen3me}} {{word:xie3}}?",
    ttsText: "这个怎么写？",
  },
  exampleWhyHow6: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:zen3me}} {{word:zhao3}} {{word:ta1}}?",
    ttsText: "你怎么找他？",
  },
  proseAnswer: { type: "prose" },
  exampleAnswer1: {
    type: "example",
    pinyin: "{{Word:ting1}}.",
    ttsText: "听。",
  },
  exampleAnswer2: {
    type: "example",
    pinyin: "{{Word:bu4}} {{word:ting1}}.",
    ttsText: "不听。",
  },
  exampleAnswer3: {
    type: "example",
    pinyin: "{{Word:you3}}.",
    ttsText: "有。",
  },
  exampleAnswer4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:wen4}} {{word:ni3}}.",
    ttsText: "我问你。",
  },
  infoAskingQuestions: {
    type: "info",
    subtype: "grammar",
    tag: "questions/asking",
    items: [{}, {}, {}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  answer1: { type: "answer", ttsText: "你有什么工具？" },
  answer2: { type: "answer", ttsText: "他听不听？" },
  answer3: { type: "answer", ttsText: "工具小吗？" },
  answer4: { type: "answer", ttsText: "那是你的盒子吗？" },
  answer5: { type: "answer", ttsText: "为什么他找水？" },
  answer6: { type: "answer", ttsText: "这个怎么写？" },
  answer7: { type: "answer", ttsText: "什么人问？" },
};

export default shape;
