// Language-independent block sequence for lesson-07 ("Prepositions").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
import type {
  TTitle,
  TSummary,
  TVocab,
  TProse,
  TInfo,
  TInfoItem,
  TExample,
  TExercise,
  TAnswer,
} from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Chapter title. */
  title: TTitle;
  /** Chapter summary. */
  summary: TSummary;

  /** Vocabulary: "to, for, give". */
  vocabGei: TVocab;
  /** Vocabulary: "at, in, present, existing". */
  vocabZai: TVocab;
  /** Vocabulary: "using, with, by means of". */
  vocabYong: TVocab;
  /** Vocabulary: "from, because of". */
  vocabYinwei: TVocab;

  /** Grammar: coverbs introduce a noun phrase and sit right before the main verb. */
  proseCoverbWordOrder: TProse;
  /** Grammar rule box: Coverb Word Order. */
  infoCoverbWordOrder: TInfo & { items: [TInfoItem] };
  /** Grammar: with no other action verb, the coverb itself becomes the main predicate. */
  proseCoverbAsPredicate: TProse;

  /** Example: wǒ gěi tā zài-shuǐ-lǐ-de dòngwù. */
  example1: TExample;
  /** Example: wǒ zài dìfāng gěi tā zài-shuǐ-lǐ-de dòngwù. */
  example2: TExample;
  /** Example: wǒ zài dìfāng. */
  example3: TExample;
  /** Example: wǒ qù nǐ-de pángbiān. */
  example4: TExample;
  /** Example: wǒ-de fùmǔ qù kàn hěn-dà-de shuǐ. */
  example5: TExample;
  /** Example: yīnwèi zhè-ge, wǒ zuò le hěn duō. */
  example6: TExample;
  /** Example: wǒ yòng Hǎo-shuō-de shuō. */
  example7: TExample;

  /** Exercise 1: The worker uses tools. */
  exercise1: TExercise;
  /** Exercise 2: He gives things from his house. */
  exercise2: TExercise;
  /** Exercise 3: Why did you do it? */
  exercise3: TExercise;

  /** Answer 1. */
  answer1: TAnswer;
  /** Answer 2. */
  answer2: TAnswer;
  /** Answer 3. */
  answer3: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },

  vocabGei: { type: "vocab", term: "{{word:gei3}}", ttsText: "给" },
  vocabZai: { type: "vocab", term: "{{word:zai4}}", ttsText: "在" },
  vocabYong: { type: "vocab", term: "{{word:yong4}}", ttsText: "用" },
  vocabYinwei: { type: "vocab", term: "{{word:yin1wei4}}", ttsText: "因为" },

  proseCoverbWordOrder: { type: "prose" },
  infoCoverbWordOrder: {
    type: "info",
    subtype: "grammar",
    tag: "coverbs/word-order",
    items: [{}],
  },
  proseCoverbAsPredicate: { type: "prose" },

  example1: {
    type: "example",
    pinyin:
      "{{Word:wo3}} {{word:gei3}} {{word:ta1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}}.",
  },
  example2: {
    type: "example",
    pinyin:
      "{{Word:wo3}} {{word:zai4}} {{word:di4fang1}} {{word:gei3}} {{word:ta1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}}.",
  },
  example3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zai4}} {{word:di4fang1}}.",
  },
  example4: {
    type: "example",
    pinyin:
      "{{Word:wo3}} {{word:qu4}} {{word:ni3}}-{{word:de}} {{word:pang2bian1}}.",
  },
  example5: {
    type: "example",
    pinyin:
      "{{Word:wo3}}-{{word:de}} {{word:fu4mu3}} {{word:qu4}} {{word:kan4}} {{word:hen3}}-{{word:da4}}-{{word:de}} {{word:shui3}}.",
  },
  example6: {
    type: "example",
    pinyin:
      "{{Word:yin1wei4}} {{word:zhe4}}-ge, {{word:wo3}} {{word:nong4}} {{word:le}} {{word:hen3}} {{word:duo1}}.",
  },
  example7: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yong4}} Hǎo-shuō-de {{word:shuo1}}.",
  },

  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },

  answer1: { type: "answer" },
  answer2: { type: "answer" },
  answer3: { type: "answer" },
};

export default shape;
