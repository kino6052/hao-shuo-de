// Language-independent block sequence for lesson-05 ("Verbs").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): who + verb + what (and why the order matters), bù + verb, and yǒu / méi-yǒu.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- lesson-05).
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
  /** Verbs */
  title: TTitle;
  /** Chapter summary. [from old L05] */
  summary: TSummary;
  /** Vocabulary: "eat, drink". */
  vocabChi: TVocab;
  /** Vocabulary: "look, read". */
  vocabKan: TVocab;
  /** Vocabulary: "listen, hear". */
  vocabTing: TVocab;
  /** Vocabulary: "say, speak". */
  vocabShuo: TVocab;
  /** Vocabulary: "write". */
  vocabXie: TVocab;
  /** Vocabulary: "rice". */
  vocabMifan: TVocab;
  /** Say: To say what someone does, put the verb after the who, and the what after the verb. Pattern: Who + verb + what */
  proseDo: TProse;
  /** Example: wǒ chī mǐfàn. */
  exampleDo1: TExample;
  /** Example: wǒ kàn tā. */
  exampleDo2: TExample;
  /** Example: tā kàn wǒ. */
  exampleDo3: TExample;
  /** Example: wǒ tīng nǐ. */
  exampleDo4: TExample;
  /** Example: tā shuō. */
  exampleDo5: TExample;
  /** Example: wǒ xiě. */
  exampleDo6: TExample;
  /** Say: To say "not", put bù right before the verb. Pattern: Who + bù + verb */
  proseNot: TProse;
  /** Example: tā bù xiě. */
  exampleNot1: TExample;
  /** Example: wǒ bù chī. */
  exampleNot2: TExample;
  /** Example: nǐ bù tīng. */
  exampleNot3: TExample;
  /** Example: wǒ bù shuō. */
  exampleNot4: TExample;
  /** Vocabulary: "have; there is". */
  vocabYou: TVocab;
  /** Vocabulary: "not, but only with {{word:you3}}: {{word:mei2}}-{{word:you3}} means "don't have"". */
  vocabMei: TVocab;
  /** Vocabulary: "money". */
  vocabJin: TVocab;
  /** Say: To say you have something, use yǒu. For "don't have", say méi-yǒu. Pattern: Who + yǒu / méi-yǒu + thing */
  proseHave: TProse;
  /** Example: wǒ yǒu shuǐguǒ. */
  exampleHave1: TExample;
  /** Example: wǒ méi-yǒu jīn. */
  exampleHave2: TExample;
  /** Example: tā yǒu mǐfàn. */
  exampleHave3: TExample;
  /** Example: tā yǒu jīn. */
  exampleHave4: TExample;
  /** Example: tā méi-yǒu dōngxi. */
  exampleHave5: TExample;
  /** Example: wǒ-de jīn hěn shǎo. */
  exampleHave6: TExample;
  /** Grammar box: who + verb + what; bù before a verb; méi-yǒu for "don't have". */
  infoWhoDoesWhat: TInfo;
  /** Exercise 1: I listen to you. */
  exercise1: TExercise;
  /** Exercise 2: She eats rice. */
  exercise2: TExercise;
  /** Exercise 3: He doesn't have money. */
  exercise3: TExercise;
  /** Exercise 4: You look at me. */
  exercise4: TExercise;
  /** Exercise 5: I don't write. */
  exercise5: TExercise;
  /** Exercise 6: They speak. */
  exercise6: TExercise;
  /** Answer 1: wǒ tīng nǐ. */
  answer1: TAnswer;
  /** Answer 2: tā chī mǐfàn. */
  answer2: TAnswer;
  /** Answer 3: tā méi-yǒu jīn. */
  answer3: TAnswer;
  /** Answer 4: nǐ kàn wǒ. */
  answer4: TAnswer;
  /** Answer 5: wǒ bù xiě. */
  answer5: TAnswer;
  /** Answer 6: tā-men shuō. */
  answer6: TAnswer;
  /** FAQ: how do I say "ate" or "will eat"? (the verb never changes; Lesson 8) */
  faqPastFuture: TFaq;
  /** FAQ: can chī mean drink? (in Hao-shuo-de yes; everyday Mandarin has a separate word) */
  faqChiDrink: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabChi: { type: "vocab", term: "{{word:chi1}}", ttsText: "吃" },
  vocabKan: { type: "vocab", term: "{{word:kan4}}", ttsText: "看" },
  vocabTing: { type: "vocab", term: "{{word:ting1}}", ttsText: "听" },
  vocabShuo: { type: "vocab", term: "{{word:shuo1}}", ttsText: "说" },
  vocabXie: { type: "vocab", term: "{{word:xie3}}", ttsText: "写" },
  vocabMifan: { type: "vocab", term: "{{word:mi3fan4}}", ttsText: "米饭" },
  proseDo: { type: "prose" },
  exampleDo1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:chi1}} {{word:mi3fan4}}.",
    ttsText: "我吃米饭。",
  },
  exampleDo2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:kan4}} {{word:ta1}}.",
    ttsText: "我看他。",
  },
  exampleDo3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:kan4}} {{word:wo3}}.",
    ttsText: "他看我。",
  },
  exampleDo4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ting1}} {{word:ni3}}.",
    ttsText: "我听你。",
  },
  exampleDo5: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shuo1}}.",
    ttsText: "她说。",
  },
  exampleDo6: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:xie3}}.",
    ttsText: "我写。",
  },
  proseNot: { type: "prose" },
  exampleNot1: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:bu4}} {{word:xie3}}.",
    ttsText: "她不写。",
  },
  exampleNot2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:bu4}} {{word:chi1}}.",
    ttsText: "我不吃。",
  },
  exampleNot3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:bu4}} {{word:ting1}}.",
    ttsText: "你不听。",
  },
  exampleNot4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:bu4}} {{word:shuo1}}.",
    ttsText: "我不说。",
  },
  vocabYou: { type: "vocab", term: "{{word:you3}}", ttsText: "有" },
  vocabMei: { type: "vocab", term: "{{word:mei2}}", ttsText: "没" },
  vocabJin: { type: "vocab", term: "{{word:jin1}}", ttsText: "金" },
  proseHave: { type: "prose" },
  exampleHave1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:you3}} {{word:shui3guo3}}.",
    ttsText: "我有水果。",
  },
  exampleHave2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
    ttsText: "我没有金。",
  },
  exampleHave3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:you3}} {{word:mi3fan4}}.",
    ttsText: "他有米饭。",
  },
  exampleHave4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:you3}} {{word:jin1}}.",
    ttsText: "她有金。",
  },
  exampleHave5: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:mei2}}-{{word:you3}} {{word:dong1xi}}.",
    ttsText: "他没有东西。",
  },
  exampleHave6: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:jin1}} {{word:hen3}} {{word:shao3}}.",
    ttsText: "我的金很少。",
  },
  infoWhoDoesWhat: {
    type: "info",
    subtype: "grammar",
    tag: "verbs/who-does-what",
    items: [{}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  answer1: { type: "answer", ttsText: "我听你。" },
  answer2: { type: "answer", ttsText: "她吃米饭。" },
  answer3: { type: "answer", ttsText: "他没有金。" },
  answer4: { type: "answer", ttsText: "你看我。" },
  answer5: { type: "answer", ttsText: "我不写。" },
  answer6: { type: "answer", ttsText: "他们说。" },
  faqPastFuture: { type: "faq" },
  faqChiDrink: { type: "faq" },
};

export default shape;
