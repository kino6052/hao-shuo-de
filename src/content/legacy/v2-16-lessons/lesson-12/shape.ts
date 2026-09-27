// Language-independent block sequence for lesson-12 ("Greetings and Feelings").
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
} from "../../../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Chapter title. */
  title: TTitle;
  /** Chapter summary. */
  summary: TSummary;

  /** Vocabulary: "to feel, think". */
  vocabJuede: TVocab;
  /** Vocabulary: "sound, noise" (bare pinyin -- not yet in the dictionary). */
  vocabShengyin: TVocab;
  /** Vocabulary: "to call, make an animal sound (used alongside the Quote Partition)". */
  vocabJiao: TVocab;
  /** Vocabulary: "sun, light". */
  vocabRi: TVocab;

  /** Grammar: greetings/imperatives/blessings reuse ordinary sentence patterns instead of dedicated particles. */
  proseReusedPatterns: TProse;
  /** Grammar rule box: Greetings, Commands, and Blessings -- 4 patterns (greetings, imperatives, animal sounds, wishes). */
  infoGreetingsCommandsBlessings: TInfo & {
    items: [TInfoItem, TInfoItem, TInfoItem, TInfoItem];
  };

  /** Example: nǐ hǎo ma? */
  example1: TExample;
  /** Example: qù nǐ-de dìfāng! */
  example2: TExample;
  /** Example: bù shuō. Zuò dōngxi. */
  example3: TExample;
  /** Example: wǒ qù le. */
  example4: TExample;
  /** Example: nà-ge dòngwù jiào "wang-wang". */
  example5: TExample;
  /** Example: wèishénme nǐ juéde huài? */
  example6: TExample;
  /** Example: nǐ hěn dà! */
  example7: TExample;
  /** Example: hǎo-hǎo-de rì! */
  example8: TExample;
  /** Example: hǎo-hǎo juéde! */
  example9: TExample;

  /** Exercise 1: Give the tool to me. */
  exercise1: TExercise;
  /** Exercise 2: "Lisa" is happy. */
  exercise2: TExercise;
  /** Exercise 3: Meow! */
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

  vocabJuede: { type: "vocab", term: "{{word:jue2de}}", ttsText: "觉得" },
  vocabShengyin: { type: "vocab", term: "shēngyīn" },
  vocabJiao: { type: "vocab", term: "{{word:jiao4}}", ttsText: "叫" },
  vocabRi: { type: "vocab", term: "{{word:ri4}}", ttsText: "日" },

  proseReusedPatterns: { type: "prose" },
  infoGreetingsCommandsBlessings: {
    type: "info",
    subtype: "grammar",
    tag: "expressions/greetings-and-wishes",
    items: [{}, {}, {}, {}],
  },

  example1: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:hao3}} {{word:ma}}?",
  },
  example2: {
    type: "example",
    pinyin: "{{Word:qu4}} {{word:ni3}}-{{word:de}} {{word:di4fang1}}!",
  },
  example3: {
    type: "example",
    pinyin: "{{Word:bu4}} {{word:shuo1}}. {{Word:nong4}} {{word:dong1xi}}.",
  },
  example4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:qu4}} {{word:le}}.",
  },
  example5: {
    type: "example",
    pinyin: '{{Word:na4}}-ge {{word:dong4wu4}} {{word:jiao4}} "wang-wang".',
  },
  example6: {
    type: "example",
    pinyin: "{{Word:wei4shen2me}} {{word:ni3}} {{word:jue2de}} {{word:huai4}}?",
  },
  example7: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:hen3}} {{word:da4}}!",
  },
  example8: {
    type: "example",
    pinyin: "{{Word:hao3}}-{{word:hao3}}-{{word:de}} {{word:ri4}}!",
  },
  example9: {
    type: "example",
    pinyin: "{{Word:hao3}}-{{word:hao3}} {{word:jue2de}}!",
  },

  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },

  answer1: { type: "answer" },
  answer2: { type: "answer" },
  answer3: { type: "answer" },
};

export default shape;
