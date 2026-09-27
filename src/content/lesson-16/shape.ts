// Language-independent block sequence for lesson-16 ("Numbers").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): number + gè + noun, liǎng for two things, 11-19 (shí + number), and number labels (hào).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- lesson-16).
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
  /** Numbers */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "one". */
  vocabYi: TVocab;
  /** Vocabulary: "two (before gè)". */
  vocabLiang: TVocab;
  /** Vocabulary: "number (as in number three)". */
  vocabHao: TVocab;
  /** Vocabulary: "three". */
  vocabSan: TVocab;
  /** Vocabulary: "four". */
  vocabSi: TVocab;
  /** Vocabulary: "five". */
  vocabWu: TVocab;
  /** Vocabulary: "six". */
  vocabLiu: TVocab;
  /** Vocabulary: "seven". */
  vocabQi: TVocab;
  /** Vocabulary: "eight". */
  vocabBa: TVocab;
  /** Vocabulary: "nine". */
  vocabJiu: TVocab;
  /** Vocabulary: "ten". */
  vocabShi: TVocab;
  /** Say: To count things, put the number, then gè, then the thing. Pattern: number + gè + noun */
  proseCount: TProse;
  /** Example: yī-ge rén. */
  exampleCount1: TExample;
  /** Example: liǎng-ge dòngwù. */
  exampleCount2: TExample;
  /** Example: sān-ge hézi. */
  exampleCount3: TExample;
  /** Example: wǒ yǒu sì-ge shuǐguǒ. */
  exampleCount4: TExample;
  /** Example: wǔ-ge rén zài jiā-lǐ. */
  exampleCount5: TExample;
  /** Example: tā yào liù-ge. */
  exampleCount6: TExample;
  /** Example: qī-ge gùnzi zài di-shàng. */
  exampleCount7: TExample;
  /** Example: wǒ-men bā-ge rén qù shìchǎng. */
  exampleCount8: TExample;
  /** Example: jiǔ-ge rén chī mǐfàn. */
  exampleCount9: TExample;
  /** Example: shí-ge zhíwù. */
  exampleCount10: TExample;
  /** Example: liǎng-ge rén yīyàng. */
  exampleCount11: TExample;
  /** Example: wǒ yào qī-ge. */
  exampleCount12: TExample;
  /** Example: tā yǒu jiǔ-ge gùnzi. */
  exampleCount13: TExample;
  /** Example: sì-ge rén zài wài-miàn. */
  exampleCount14: TExample;
  /** Example: liù-ge shuǐguǒ huài le. */
  exampleCount15: TExample;
  /** Example: bā-ge hézi hěn dà. */
  exampleCount16: TExample;
  /** Say: To say 11 to 19, say shí (ten), then the number. Pattern: shí + number */
  proseTeens: TProse;
  /** Example: shí-yī-ge rén. */
  exampleTeens1: TExample;
  /** Example: wǒ yǒu shí-sān-ge gōngjù. */
  exampleTeens2: TExample;
  /** Example: shí-wǔ-ge dòngwù zài zhè-lǐ. */
  exampleTeens3: TExample;
  /** Say: To say number one, number three, put hào after the number. Pattern: number + hào */
  proseLabel: TProse;
  /** Example: wǒ-de jiā shì wǔ-hào. */
  exampleLabel1: TExample;
  /** Example: sān-hào zài nǎlǐ? */
  exampleLabel2: TExample;
  /** Example: nǐ shì yī-hào! */
  exampleLabel3: TExample;
  /** Grammar box: the numbers 1-10, number + gè + noun, shí + number, number + hào. */
  infoCounting: TInfo;
  /** Exercise 1: one box */
  exercise1: TExercise;
  /** Exercise 2: two people */
  exercise2: TExercise;
  /** Exercise 3: I have three tools. */
  exercise3: TExercise;
  /** Exercise 4: four plants */
  exercise4: TExercise;
  /** Exercise 5: Five people eat. */
  exercise5: TExercise;
  /** Exercise 6: I want six. */
  exercise6: TExercise;
  /** Exercise 7: seven animals */
  exercise7: TExercise;
  /** Exercise 8: eight sticks */
  exercise8: TExercise;
  /** Exercise 9: nine pieces of fruit */
  exercise9: TExercise;
  /** Exercise 10: ten people */
  exercise10: TExercise;
  /** Exercise 11: Where is number four? */
  exercise11: TExercise;
  /** Answer 1: yī-ge hézi. */
  answer1: TAnswer;
  /** Answer 2: liǎng-ge rén. */
  answer2: TAnswer;
  /** Answer 3: wǒ yǒu sān-ge gōngjù. */
  answer3: TAnswer;
  /** Answer 4: sì-ge zhíwù. */
  answer4: TAnswer;
  /** Answer 5: wǔ-ge rén chī. */
  answer5: TAnswer;
  /** Answer 6: wǒ yào liù-ge. */
  answer6: TAnswer;
  /** Answer 7: qī-ge dòngwù. */
  answer7: TAnswer;
  /** Answer 8: bā-ge gùnzi. */
  answer8: TAnswer;
  /** Answer 9: jiǔ-ge shuǐguǒ. */
  answer9: TAnswer;
  /** Answer 10: shí-ge rén. */
  answer10: TAnswer;
  /** Answer 11: sì-hào zài nǎlǐ? */
  answer11: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabYi: { type: "vocab", term: "{{word:yi1}}", ttsText: "一" },
  vocabLiang: { type: "vocab", term: "{{word:liang3}}", ttsText: "两" },
  vocabHao: { type: "vocab", term: "{{word:hao4}}", ttsText: "号" },
  vocabSan: { type: "vocab", term: "{{word:san1}}", ttsText: "三" },
  vocabSi: { type: "vocab", term: "{{word:si4}}", ttsText: "四" },
  vocabWu: { type: "vocab", term: "{{word:wu3}}", ttsText: "五" },
  vocabLiu: { type: "vocab", term: "{{word:liu4}}", ttsText: "六" },
  vocabQi: { type: "vocab", term: "{{word:qi1}}", ttsText: "七" },
  vocabBa: { type: "vocab", term: "{{word:ba1}}", ttsText: "八" },
  vocabJiu: { type: "vocab", term: "{{word:jiu3}}", ttsText: "九" },
  vocabShi: { type: "vocab", term: "{{word:shi2}}", ttsText: "十" },
  proseCount: { type: "prose" },
  exampleCount1: {
    type: "example",
    pinyin: "{{Word:yi1}}-ge {{word:ren2}}.",
    ttsText: "一个人。",
  },
  exampleCount2: {
    type: "example",
    pinyin: "{{Word:liang3}}-ge {{word:dong4wu4}}.",
    ttsText: "两个动物。",
  },
  exampleCount3: {
    type: "example",
    pinyin: "{{Word:san1}}-ge {{word:he2zi}}.",
    ttsText: "三个盒子。",
  },
  exampleCount4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:you3}} {{word:si4}}-ge {{word:shui3guo3}}.",
    ttsText: "我有四个水果。",
  },
  exampleCount5: {
    type: "example",
    pinyin: "{{Word:wu3}}-ge {{word:ren2}} {{word:zai4}} {{word:jia1}}-{{word:li3}}.",
    ttsText: "五个人在家里。",
  },
  exampleCount6: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:yao4}} {{word:liu4}}-ge.",
    ttsText: "他要六个。",
  },
  exampleCount7: {
    type: "example",
    pinyin: "{{Word:qi1}}-ge {{word:gun4zi}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
    ttsText: "七个棍子在地上。",
  },
  exampleCount8: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:men}} {{word:ba1}}-ge {{word:ren2}} {{word:qu4}} {{word:shi4chang3}}.",
    ttsText: "我们八个人去市场。",
  },
  exampleCount9: {
    type: "example",
    pinyin: "{{Word:jiu3}}-ge {{word:ren2}} {{word:chi1}} {{word:mi3fan4}}.",
    ttsText: "九个人吃米饭。",
  },
  exampleCount10: {
    type: "example",
    pinyin: "{{Word:shi2}}-ge {{word:zhi2wu4}}.",
    ttsText: "十个植物。",
  },
  exampleCount11: {
    type: "example",
    pinyin: "{{Word:liang3}}-ge {{word:ren2}} {{word:yi1yang4}}.",
    ttsText: "两个人一样。",
  },
  exampleCount12: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:qi1}}-ge.",
    ttsText: "我要七个。",
  },
  exampleCount13: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:you3}} {{word:jiu3}}-ge {{word:gun4zi}}.",
    ttsText: "她有九个棍子。",
  },
  exampleCount14: {
    type: "example",
    pinyin: "{{Word:si4}}-ge {{word:ren2}} {{word:zai4}} {{word:wai4}}-{{word:mian4}}.",
    ttsText: "四个人在外面。",
  },
  exampleCount15: {
    type: "example",
    pinyin: "{{Word:liu4}}-ge {{word:shui3guo3}} {{word:huai4}} {{word:le}}.",
    ttsText: "六个水果坏了。",
  },
  exampleCount16: {
    type: "example",
    pinyin: "{{Word:ba1}}-ge {{word:he2zi}} {{word:hen3}} {{word:da4}}.",
    ttsText: "八个盒子很大。",
  },
  proseTeens: { type: "prose" },
  exampleTeens1: {
    type: "example",
    pinyin: "{{Word:shi2}}-{{word:yi1}}-ge {{word:ren2}}.",
    ttsText: "十一个人。",
  },
  exampleTeens2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:you3}} {{word:shi2}}-{{word:san1}}-ge {{word:gong1ju4}}.",
    ttsText: "我有十三个工具。",
  },
  exampleTeens3: {
    type: "example",
    pinyin: "{{Word:shi2}}-{{word:wu3}}-ge {{word:dong4wu4}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
    ttsText: "十五个动物在这里。",
  },
  proseLabel: { type: "prose" },
  exampleLabel1: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:shi4}} {{word:wu3}}-{{word:hao4}}.",
    ttsText: "我的家是五号。",
  },
  exampleLabel2: {
    type: "example",
    pinyin: "{{Word:san1}}-{{word:hao4}} {{word:zai4}} {{word:na3li3}}?",
    ttsText: "三号在哪里？",
  },
  exampleLabel3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:shi4}} {{word:yi1}}-{{word:hao4}}!",
    ttsText: "你是一号！",
  },
  infoCounting: {
    type: "info",
    subtype: "grammar",
    tag: "numbers/counting",
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
  exercise9: { type: "exercise" },
  exercise10: { type: "exercise" },
  exercise11: { type: "exercise" },
  answer1: { type: "answer", ttsText: "一个盒子。" },
  answer2: { type: "answer", ttsText: "两个人。" },
  answer3: { type: "answer", ttsText: "我有三个工具。" },
  answer4: { type: "answer", ttsText: "四个植物。" },
  answer5: { type: "answer", ttsText: "五个人吃。" },
  answer6: { type: "answer", ttsText: "我要六个。" },
  answer7: { type: "answer", ttsText: "七个动物。" },
  answer8: { type: "answer", ttsText: "八个棍子。" },
  answer9: { type: "answer", ttsText: "九个水果。" },
  answer10: { type: "answer", ttsText: "十个人。" },
  answer11: { type: "answer", ttsText: "四号在哪里？" },
};

export default shape;
