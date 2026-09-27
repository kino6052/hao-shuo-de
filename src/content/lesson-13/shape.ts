// Language-independent block sequence for lesson-13 ("Modifiers 2 — Comparing").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): A bǐ B + describing word (bigger than), yīyàng (the same), and bùtóng (different).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- lesson-13).
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
  /** Modifiers 2 — Comparing */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "than". */
  vocabBi: TVocab;
  /** Vocabulary: "the same". */
  vocabYiyang: TVocab;
  /** Vocabulary: "different". */
  vocabButong: TVocab;
  /** Vocabulary: "hard". */
  vocabYing: TVocab;
  /** Vocabulary: "round". */
  vocabYuan: TVocab;
  /** Vocabulary: "stick". */
  vocabGunzi: TVocab;
  /** Vocabulary: "line, rope, thread". */
  vocabXian: TVocab;
  /** Say: To say one thing is more than another, put bǐ (than) between them, then the describing word. Pattern: A + bǐ + B + describing word */
  proseThan: TProse;
  /** Example: wǒ bǐ nǐ dà. */
  exampleThan1: TExample;
  /** Example: gùnzi bǐ xiàn yìng. */
  exampleThan2: TExample;
  /** Example: zhè-ge shuǐguǒ bǐ nà-ge tián. */
  exampleThan3: TExample;
  /** Example: zhè-ge hézi bǐ nà-ge yuán. */
  exampleThan4: TExample;
  /** Example: shénme bǐ gùnzi yìng? */
  exampleThan5: TExample;
  /** Say: To say things are the same, use yīyàng. Pattern: Things + yīyàng / yīyàng-de + noun */
  proseSame: TProse;
  /** Example: tā-men yīyàng. */
  exampleSame1: TExample;
  /** Example: wǒ-men-de yīfu yīyàng. */
  exampleSame2: TExample;
  /** Example: wǒ yào yīyàng-de xiàn. */
  exampleSame3: TExample;
  /** Say: To say things are different, use bùtóng. Pattern: Things + bùtóng / bùtóng-de + noun */
  proseDifferent: TProse;
  /** Example: tā-men bùtóng. */
  exampleDifferent1: TExample;
  /** Example: wǒ yào bùtóng-de yīfu. */
  exampleDifferent2: TExample;
  /** Example: zhè-ge dìfāng hěn bùtóng. */
  exampleDifferent3: TExample;
  /** Say: To say how something looks or feels, use describing words like yìng (hard) and yuán (round). Pattern: Thing + hěn + yìng / yuán */
  proseShapeFeel: TProse;
  /** Example: gùnzi hěn yìng. */
  exampleShapeFeel1: TExample;
  /** Example: yuè hěn yuán. */
  exampleShapeFeel2: TExample;
  /** Example: xiàn zài hézi-lǐ. */
  exampleShapeFeel3: TExample;
  /** Example: wǒ yǒu gùnzi. */
  exampleShapeFeel4: TExample;
  /** Example: zhè-ge kǒu hěn yuán. */
  exampleShapeFeel5: TExample;
  /** Grammar box: A bǐ B + describing word (no hěn), yīyàng, bùtóng. */
  infoComparing: TInfo;
  /** Exercise 1: This stick is harder than that one. */
  exercise1: TExercise;
  /** Exercise 2: You're bigger than me. */
  exercise2: TExercise;
  /** Exercise 3: Their homes are the same. */
  exercise3: TExercise;
  /** Exercise 4: I want a different box. */
  exercise4: TExercise;
  /** Exercise 5: The moon is round. */
  exercise5: TExercise;
  /** Exercise 6: Where is the rope? */
  exercise6: TExercise;
  /** Exercise 7: Is the stick hard? */
  exercise7: TExercise;
  /** Answer 1: zhè-ge gùnzi bǐ nà-ge yìng. */
  answer1: TAnswer;
  /** Answer 2: nǐ bǐ wǒ dà. */
  answer2: TAnswer;
  /** Answer 3: tā-men-de jiā yīyàng. */
  answer3: TAnswer;
  /** Answer 4: wǒ yào bùtóng-de hézi. */
  answer4: TAnswer;
  /** Answer 5: yuè hěn yuán. */
  answer5: TAnswer;
  /** Answer 6: xiàn zài nǎlǐ? */
  answer6: TAnswer;
  /** Answer 7: gùnzi yìng ma? */
  answer7: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabBi: { type: "vocab", term: "{{word:bi3}}", ttsText: "比" },
  vocabYiyang: {
    type: "vocab",
    term: "{{word:yi1yang4}}",
    ttsText: "一样",
  },
  vocabButong: {
    type: "vocab",
    term: "{{word:bu4tong2}}",
    ttsText: "不同",
  },
  vocabYing: { type: "vocab", term: "{{word:ying4}}", ttsText: "硬" },
  vocabYuan: { type: "vocab", term: "{{word:yuan2}}", ttsText: "圆" },
  vocabGunzi: { type: "vocab", term: "{{word:gun4zi}}", ttsText: "棍子" },
  vocabXian: { type: "vocab", term: "{{word:xian4}}", ttsText: "线" },
  proseThan: { type: "prose" },
  exampleThan1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}}.",
    ttsText: "我比你大。",
  },
  exampleThan2: {
    type: "example",
    pinyin: "{{Word:gun4zi}} {{word:bi3}} {{word:xian4}} {{word:ying4}}.",
    ttsText: "棍子比线硬。",
  },
  exampleThan3: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:shui3guo3}} {{word:bi3}} {{word:na4}}-ge {{word:tian2}}.",
    ttsText: "这个水果比那个甜。",
  },
  exampleThan4: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:he2zi}} {{word:bi3}} {{word:na4}}-ge {{word:yuan2}}.",
    ttsText: "这个盒子比那个圆。",
  },
  exampleThan5: {
    type: "example",
    pinyin: "{{Word:shen2me}} {{word:bi3}} {{word:gun4zi}} {{word:ying4}}?",
    ttsText: "什么比棍子硬？",
  },
  proseSame: { type: "prose" },
  exampleSame1: {
    type: "example",
    pinyin: "{{Word:ta1}}-{{word:men}} {{word:yi1yang4}}.",
    ttsText: "他们一样。",
  },
  exampleSame2: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:men}}-{{word:de}} {{word:yi1fu}} {{word:yi1yang4}}.",
    ttsText: "我们的衣服一样。",
  },
  exampleSame3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:yi1yang4}}-{{word:de}} {{word:xian4}}.",
    ttsText: "我要一样的线。",
  },
  proseDifferent: { type: "prose" },
  exampleDifferent1: {
    type: "example",
    pinyin: "{{Word:ta1}}-{{word:men}} {{word:bu4tong2}}.",
    ttsText: "它们不同。",
  },
  exampleDifferent2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:bu4tong2}}-{{word:de}} {{word:yi1fu}}.",
    ttsText: "我要不同的衣服。",
  },
  exampleDifferent3: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:di4fang1}} {{word:hen3}} {{word:bu4tong2}}.",
    ttsText: "这个地方很不同。",
  },
  proseShapeFeel: { type: "prose" },
  exampleShapeFeel1: {
    type: "example",
    pinyin: "{{Word:gun4zi}} {{word:hen3}} {{word:ying4}}.",
    ttsText: "棍子很硬。",
  },
  exampleShapeFeel2: {
    type: "example",
    pinyin: "{{Word:yue4}} {{word:hen3}} {{word:yuan2}}.",
    ttsText: "月很圆。",
  },
  exampleShapeFeel3: {
    type: "example",
    pinyin: "{{Word:xian4}} {{word:zai4}} {{word:he2zi}}-{{word:li3}}.",
    ttsText: "线在盒子里。",
  },
  exampleShapeFeel4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:you3}} {{word:gun4zi}}.",
    ttsText: "我有棍子。",
  },
  exampleShapeFeel5: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:kou3}} {{word:hen3}} {{word:yuan2}}.",
    ttsText: "这个口很圆。",
  },
  infoComparing: {
    type: "info",
    subtype: "grammar",
    tag: "describing/comparing",
    items: [{}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  answer1: { type: "answer", ttsText: "这个棍子比那个硬。" },
  answer2: { type: "answer", ttsText: "你比我大。" },
  answer3: { type: "answer", ttsText: "他们的家一样。" },
  answer4: { type: "answer", ttsText: "我要不同的盒子。" },
  answer5: { type: "answer", ttsText: "月很圆。" },
  answer6: { type: "answer", ttsText: "线在哪里？" },
  answer7: { type: "answer", ttsText: "棍子硬吗？" },
};

export default shape;
