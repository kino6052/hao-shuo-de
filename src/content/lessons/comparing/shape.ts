// Language-independent block sequence for comparing ("Modifiers 2 — Comparing").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see sounds-and-symbols's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): A bǐ B + adjective (bigger than), yīyàng (the same), bùtóng (different), biéde (other), and zhǒng (kind).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- comparing).
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
} from "../../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Modifiers 2 — Comparing */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "than". */
  vocabBi: TVocab;
  /** Vocabulary: "hard". */
  vocabYing: TVocab;
  /** Vocabulary: "round". */
  vocabYuan: TVocab;
  /** Vocabulary: "stick". */
  vocabGunzi: TVocab;
  /** Vocabulary: "line, rope, thread". */
  vocabXian: TVocab;
  /** Say: To say one thing is more than another, put bǐ (than) between them, then the adjective. Pattern: A + bǐ + B + adjective */
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
  /** Example: wǒ-de jīn bǐ nǐ-de shǎo. */
  exampleThan6: TExample;
  /** Example: nà-ge dìfāng bǐ jiā yuǎn. */
  exampleThan7: TExample;
  /** Example: wǒ-de jiā bǐ nǐ-de yuǎn. */
  exampleThan8: TExample;
  /** Example: rén bǐ jīn yǒu jiàzhí. */
  exampleThan9: TExample;
  /** Example: zhè-cì bǐ nà-cì hǎo. */
  exampleThan10: TExample;
  /** Example: tā bǐ wǒ lǎo. */
  exampleThan11: TExample;
  /** Example: zhè-ge lù bǐ nà-ge yuǎn. */
  exampleThan12: TExample;
  /** Example: yòubiān-de hézi bǐ zuǒbiān-de dà. */
  exampleThan13: TExample;
  /** Vocabulary: "most". */
  vocabZui: TVocab;
  /** Say: To say the most, put zuì before the adjective. zuì-hòu is "last". Pattern: Thing + zuì + adjective */
  proseMost: TProse;
  /** Example: zhè-ge zuì dà. */
  exampleMost1: TExample;
  /** Example: tā zuì kuài. */
  exampleMost2: TExample;
  /** Example: shénme zuì hǎo? */
  exampleMost3: TExample;
  /** Example: wǒ zuì ài shuǐguǒ. */
  exampleMost4: TExample;
  /** Example: tā zuì-hòu lái. */
  exampleMost5: TExample;
  /** Vocabulary: "the same". */
  vocabYiyang: TVocab;
  /** Say: To say things are the same, use yīyàng. Pattern: Things + yīyàng / yīyàng-de + noun */
  proseSame: TProse;
  /** Example: tā-men yīyàng. */
  exampleSame1: TExample;
  /** Example: wǒ-men-de yīfu yīyàng. */
  exampleSame2: TExample;
  /** Example: wǒ yào yīyàng-de xiàn. */
  exampleSame3: TExample;
  /** Vocabulary: "different". */
  vocabButong: TVocab;
  /** Vocabulary: "other, else". */
  vocabBiede: TVocab;
  /** Say: To say things are different, use bùtóng. Pattern: Things + bùtóng / bùtóng-de + noun */
  proseDifferent: TProse;
  /** Example: tā-men bùtóng. */
  exampleDifferent1: TExample;
  /** Example: wǒ yào bùtóng-de yīfu. */
  exampleDifferent2: TExample;
  /** Example: zhè-ge dìfāng hěn bùtóng. */
  exampleDifferent3: TExample;
  /** Example: wǒ yào biéde. */
  exampleDifferent4: TExample;
  /** Example: nǐ yǒu biéde yīfu ma? */
  exampleDifferent5: TExample;
  /** Example: biéde rén bǐ wǒ dà. */
  exampleDifferent6: TExample;
  /** Vocabulary: "kind, type". */
  vocabZhong: TVocab;
  /** Say: To say what kind, use zhǒng (kind). It goes after zhè or nà, like gè. Pattern: zhè-zhǒng / nà-zhǒng + noun */
  proseKind: TProse;
  /** Example: zhè-zhǒng shuǐguǒ hěn tián. */
  exampleKind1: TExample;
  /** Example: zhè-zhǒng bǐ nà-zhǒng hǎo. */
  exampleKind2: TExample;
  /** Example: wǒ yào nà-zhǒng gùnzi. */
  exampleKind3: TExample;
  /** Say: To say how something looks or feels, use adjectives like yìng (hard) and yuán (round). Pattern: Thing + hěn + yìng / yuán */
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
  /** Grammar box: A bǐ B + adjective (no hěn), yīyàng, bùtóng, biéde, zhè-zhǒng. */
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
  /** Exercise 8: I want something else. */
  exercise8: TExercise;
  /** Exercise 9: This kind of fruit is sweet. */
  exercise9: TExercise;
  /** Exercise 10: This one is the biggest. */
  exercise10: TExercise;
  /** Exercise 11: He's older than me. */
  exercise11: TExercise;
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
  /** Answer 8: wǒ yào biéde. */
  answer8: TAnswer;
  /** Answer 9: zhè-zhǒng shuǐguǒ hěn tián. */
  answer9: TAnswer;
  /** Answer 10: zhè-ge zuì dà. */
  answer10: TAnswer;
  /** Answer 11: tā bǐ wǒ lǎo. */
  answer11: TAnswer;
  /** FAQ: how do I say "much bigger"? (adjective + hěn duō) */
  faqMuchBigger: TFaq;
  /** FAQ: how do I say "not as big as"? (méi-yǒu) */
  faqNotAsBig: TFaq;
  /** FAQ: bùtóng vs biéde */
  faqButongOrBiede: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabBi: { type: "vocab", term: "{{word:bi3}}", ttsText: "比" },
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
  exampleThan6: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:jin1}} {{word:bi3}} {{word:ni3}}-{{word:de}} {{word:shao3}}.",
    ttsText: "我的金比你的少。",
  },
  exampleThan7: {
    type: "example",
    pinyin: "{{Word:na4}}-ge {{word:di4fang1}} {{word:bi3}} {{word:jia1}} {{word:yuan3}}.",
    ttsText: "那个地方比家远。",
  },
  exampleThan8: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:bi3}} {{word:ni3}}-{{word:de}} {{word:yuan3}}.",
    ttsText: "我的家比你的远。",
  },
  exampleThan9: {
    type: "example",
    pinyin: "{{Word:ren2}} {{word:bi3}} {{word:jin1}} {{word:you3}} {{word:jia4zhi2}}.",
    ttsText: "人比金有价值。",
  },
  exampleThan10: {
    type: "example",
    pinyin: "{{Word:zhe4}}-{{word:ci4}} {{word:bi3}} {{word:na4}}-{{word:ci4}} {{word:hao3}}.",
    ttsText: "这次比那次好。",
  },
  exampleThan11: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:bi3}} {{word:wo3}} {{word:lao3}}.",
    ttsText: "他比我老。",
  },
  exampleThan12: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:lu4}} {{word:bi3}} {{word:na4}}-ge {{word:yuan3}}.",
    ttsText: "这个路比那个远。",
  },
  exampleThan13: {
    type: "example",
    pinyin: "{{Word:you4bian1}}-{{word:de}} {{word:he2zi}} {{word:bi3}} {{word:zuo3bian1}}-{{word:de}} {{word:da4}}.",
    ttsText: "右边的盒子比左边的大。",
  },
  vocabZui: { type: "vocab", term: "{{word:zui4}}", ttsText: "最" },
  proseMost: { type: "prose" },
  exampleMost1: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:zui4}} {{word:da4}}.",
    ttsText: "这个最大。",
  },
  exampleMost2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:zui4}} {{word:kuai4}}.",
    ttsText: "他最快。",
  },
  exampleMost3: {
    type: "example",
    pinyin: "{{Word:shen2me}} {{word:zui4}} {{word:hao3}}?",
    ttsText: "什么最好？",
  },
  exampleMost4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zui4}} {{word:ai4}} {{word:shui3guo3}}.",
    ttsText: "我最爱水果。",
  },
  exampleMost5: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:zui4}}-{{word:hou4}} {{word:lai2}}.",
    ttsText: "他最后来。",
  },
  vocabYiyang: {
    type: "vocab",
    term: "{{word:yi1yang4}}",
    ttsText: "一样",
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
  vocabButong: {
    type: "vocab",
    term: "{{word:bu4tong2}}",
    ttsText: "不同",
  },
  vocabBiede: { type: "vocab", term: "{{word:bie2de}}", ttsText: "别的" },
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
  exampleDifferent4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:bie2de}}.",
    ttsText: "我要别的。",
  },
  exampleDifferent5: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:you3}} {{word:bie2de}} {{word:yi1fu}} {{word:ma}}?",
    ttsText: "你有别的衣服吗？",
  },
  exampleDifferent6: {
    type: "example",
    pinyin: "{{Word:bie2de}} {{word:ren2}} {{word:bi3}} {{word:wo3}} {{word:da4}}.",
    ttsText: "别的人比我大。",
  },
  vocabZhong: { type: "vocab", term: "{{word:zhong3}}", ttsText: "种" },
  proseKind: { type: "prose" },
  exampleKind1: {
    type: "example",
    pinyin: "{{Word:zhe4}}-{{word:zhong3}} {{word:shui3guo3}} {{word:hen3}} {{word:tian2}}.",
    ttsText: "这种水果很甜。",
  },
  exampleKind2: {
    type: "example",
    pinyin: "{{Word:zhe4}}-{{word:zhong3}} {{word:bi3}} {{word:na4}}-{{word:zhong3}} {{word:hao3}}.",
    ttsText: "这种比那种好。",
  },
  exampleKind3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:na4}}-{{word:zhong3}} {{word:gun4zi}}.",
    ttsText: "我要那种棍子。",
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
  exercise11: { type: "exercise" },
  answer1: { type: "answer", ttsText: "这个棍子比那个硬。" },
  answer2: { type: "answer", ttsText: "你比我大。" },
  answer3: { type: "answer", ttsText: "他们的家一样。" },
  answer4: { type: "answer", ttsText: "我要不同的盒子。" },
  answer5: { type: "answer", ttsText: "月很圆。" },
  answer6: { type: "answer", ttsText: "线在哪里？" },
  answer7: { type: "answer", ttsText: "棍子硬吗？" },
  answer8: { type: "answer", ttsText: "我要别的。" },
  answer9: { type: "answer", ttsText: "这种水果很甜。" },
  answer10: { type: "answer", ttsText: "这个最大。" },
  answer11: { type: "answer", ttsText: "他比我老。" },
  faqMuchBigger: { type: "faq" },
  faqNotAsBig: { type: "faq" },
  faqButongOrBiede: { type: "faq" },
};

export default shape;
