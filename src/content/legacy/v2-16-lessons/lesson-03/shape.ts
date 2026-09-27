// Language-independent block sequence for lesson-03 ("Modifying Nouns").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// Covers count/concreteness (zhè-ge/nà-ge/duō) and description (hěn/-de) --
// both are "modifying a noun", so this lesson combines what used to be two
// separate lessons.
import type {
  TTitle,
  TSummary,
  TVocab,
  TProse,
  TExample,
  TExercise,
  TAnswer,
} from "../../../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Chapter title. Modifying Nouns*/
  title: TTitle;
  /** Chapter summary. This chapter explains how to modify nouns to get more meaning across different contexts. The most important is hen3, but there are other ways*/
  summary: TSummary;

  /** Vocabulary: "special word hen3" -- neutral connector between a subject and an adjective. */
  vocabHen: TVocab;
  /** Vocabulary: "water, liquid". */
  vocabShui: TVocab;
  /** Vocabulary: "a place". */
  vocabDifang: TVocab;
  /** Vocabulary: "little, small". */
  vocabXiao: TVocab;
  /** Vocabulary: "good, simple, friendly". */
  vocabHao: TVocab;
  /** Vocabulary: "big, important, tall". */
  vocabDa: TVocab;

  /** Grammar: hěn as the neutral predicate connector for adjectives (Subject + hěn + Adjective). */
  proseHenConnector: TProse;
  /** Example: shuǐ hěn hǎo. */
  example3: TExample;

  /** Grammar: -de required to bind an adjective onto a noun when it has a modifier or is multi-character. */
  proseDeRequired: TProse;
  /** Example: zhè-ge shì hěn-xiǎo-de dìfāng. */
  example4: TExample;
  /** Example: zhè-ge shì yī-ge hěn-dà-de dòngwù. */
  example5: TExample;

  /** Exercise 1: This one is an animal. */
  exercise1: TExercise;
  /** Exercise 2: That one is a woman. */
  exercise2: TExercise;
  /** Exercise 5: The place is small. */
  exercise5: TExercise;

  /** Answer 1. */
  answer1: TAnswer;
  /** Answer 2. */
  answer2: TAnswer;
  /** Answer 5. */
  answer5: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },

  vocabHen: { type: "vocab", term: "{{word:hen3}}", ttsText: "很" },
  vocabShui: { type: "vocab", term: "{{word:shui3}}", ttsText: "水" },
  vocabDifang: { type: "vocab", term: "{{word:di4fang1}}", ttsText: "地方" },
  vocabXiao: { type: "vocab", term: "{{word:xiao3}}", ttsText: "小" },
  vocabHao: { type: "vocab", term: "{{word:hao3}}", ttsText: "好" },
  vocabDa: { type: "vocab", term: "{{word:da4}}", ttsText: "大" },

  proseHenConnector: { type: "prose" },
  example3: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "水很好。",
  },

  proseDeRequired: { type: "prose" },
  example4: {
    type: "example",
    pinyin:
      "{{Word:zhe4}}-ge {{word:shi4}} {{word:hen3}}-{{word:xiao3}}-{{word:de}} {{word:di4fang1}}.",
    ttsText: "这个是很小的地方。",
  },
  example5: {
    type: "example",
    pinyin:
      "{{Word:zhe4}}-ge {{word:shi4}} {{word:yi1}}-ge {{word:hen3}}-{{word:da4}}-{{word:de}} {{word:dong4wu4}}.",
    ttsText: "这个是一个很大的动物。",
  },

  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise5: { type: "exercise" },

  answer1: { type: "answer", ttsText: "这个是动物。" },
  answer2: { type: "answer", ttsText: "那个是女人。" },
  answer5: { type: "answer", ttsText: "地方很小。" },
};

export default shape;
