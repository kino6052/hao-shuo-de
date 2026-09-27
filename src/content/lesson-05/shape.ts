// Language-independent block sequence for lesson-05 ("Verbs").
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
  /** Verbs */
  title: TTitle;
  /** Chapter summary. [from old L05] */
  summary: TSummary;
  /** Vocabulary: "to have, contain, carry". */
  vocabYou: TVocab;
  /** Vocabulary: "negation word used only with {{word:you3}} -- together they make {{word:mei2}}-{{word:you3}} ("to not have")". */
  vocabMei: TVocab;
  /** Vocabulary: "to eat, drink, consume; food". */
  vocabChi: TVocab;
  /** Vocabulary: "look, read". */
  vocabKan: TVocab;
  /** Vocabulary: "to listen to, hear, obey". */
  vocabTing: TVocab;
  /** Vocabulary: "to talk, speak, communicate". */
  vocabShuo: TVocab;
  /** Vocabulary: "write". */
  vocabXie: TVocab;
  /** Vocabulary: "money". */
  vocabJin: TVocab;
  /** Vocabulary: "rice, staple food". */
  vocabMifan: TVocab;
  /** Verbs are a way to say what someone does or what happens. [from old L05] */
  proseVerbs: TProse;
  /** Example: wo3 chi1 dong1xi. [from old L05] */
  verbsExample1: TExample;
  /** Example: ta1 shuo1 Hao3-shuo1-de. [from old L05] */
  verbsExample2: TExample;
  /** Example: wo3 you3 shui3guo3. [from old L05] */
  verbsExample3: TExample;
  /** Example: wǒ chī mǐfàn. */
  verbsExample4: TExample;
  /** Example: wǒ tīng nǐ. */
  verbsExample5: TExample;
  /** Verbs need a special word to be negated, not bu [from old L05] */
  proseVerbNegation: TProse;
  /** Example: wo3 mei2-you3 shui3guo3. [from old L05] */
  negationExample1: TExample;
  /** Example: wo3 bu4 chi1 dong1xi. [from old L05] */
  negationExample2: TExample;
  /** Example: ta1 mei2-you3 dong1xi. [from old L05] */
  negationExample3: TExample;
  /** Example: tā bù xiě. */
  negationExample4: TExample;
  /** Example: wǒ méi-yǒu jīn. */
  negationExample5: TExample;
  /** Grammar: verb is put after subject, the word next to it is the object or nothing. [from old L05] */
  proseWordOrderObject: TProse;
  /** Grammar box: who + verb + what; bù before a verb; méi-yǒu for "don't have". */
  infoWhoDoesWhat: TInfo;
  /** Example: wǒ kàn tā. [from old L05] */
  wordOrderExample1: TExample;
  /** Example: tā kàn wǒ. [from old L05] */
  wordOrderExample2: TExample;
  /** Exercise 1: I will listen to you. [from old L05] */
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
  /** Answer 1. [from old L05] */
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
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabYou: { type: "vocab", term: "{{word:you3}}", ttsText: "有" },
  vocabMei: { type: "vocab", term: "{{word:mei2}}", ttsText: "没" },
  vocabChi: { type: "vocab", term: "{{word:chi1}}", ttsText: "吃" },
  vocabKan: { type: "vocab", term: "{{word:kan4}}", ttsText: "看" },
  vocabTing: { type: "vocab", term: "{{word:ting1}}", ttsText: "听" },
  vocabShuo: { type: "vocab", term: "{{word:shuo1}}", ttsText: "说" },
  vocabXie: { type: "vocab", term: "{{word:xie3}}", ttsText: "写" },
  vocabJin: { type: "vocab", term: "{{word:jin1}}", ttsText: "金" },
  vocabMifan: { type: "vocab", term: "{{word:mi3fan4}}", ttsText: "米饭" },
  proseVerbs: { type: "prose" },
  verbsExample1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:chi1}} {{word:dong1xi}}.",
    ttsText: "我吃东西。",
  },
  verbsExample2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shuo1}} Hǎo-shuō-de.",
    ttsText: "他说好说的。",
  },
  verbsExample3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:you3}} {{word:shui3guo3}}.",
    ttsText: "我有水果。",
  },
  verbsExample4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:chi1}} {{word:mi3fan4}}.",
    ttsText: "我吃米饭。",
  },
  verbsExample5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ting1}} {{word:ni3}}.",
    ttsText: "我听你。",
  },
  proseVerbNegation: { type: "prose" },
  negationExample1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:shui3guo3}}.",
    ttsText: "我没有水果。",
  },
  negationExample2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:bu4}} {{word:chi1}} {{word:dong1xi}}.",
    ttsText: "我不吃东西。",
  },
  negationExample3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:mei2}}-{{word:you3}} {{word:dong1xi}}.",
    ttsText: "他没有东西。",
  },
  negationExample4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:bu4}} {{word:xie3}}.",
    ttsText: "她不写。",
  },
  negationExample5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
    ttsText: "我没有金。",
  },
  proseWordOrderObject: { type: "prose" },
  infoWhoDoesWhat: {
    type: "info",
    subtype: "grammar",
    tag: "verbs/who-does-what",
    items: [{}, {}, {}],
  },
  wordOrderExample1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:kan4}} {{word:ta1}}.",
    ttsText: "我看他。",
  },
  wordOrderExample2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:kan4}} {{word:wo3}}.",
    ttsText: "他看我。",
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
};

export default shape;
