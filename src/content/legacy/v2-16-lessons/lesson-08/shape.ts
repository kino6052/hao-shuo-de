// Language-independent block sequence for lesson-08 ("Expressing Time and Space").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// New lesson (not a direct port): covers intro-3's "placing time and space
// up front in a sentence, and the de-huà / de-shíhou constructions."
// Hao-shuo-de collapses both of those into things it already has: a
// fronted clause needs no dedicated "if" word (reusing the general
// fronted-context-clause pattern, salvaged from the legacy "Colors and la"
// lesson), and "when X" is just X-de + {{word:shi2jian1}} ("the time of
// X"), reusing -de (Lesson 3) rather than a dedicated "when" word.
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
  /** Chapter title. Time and Space*/
  title: TTitle;
  /** Chapter summary. */
  summary: TSummary;

  /** Vocabulary: "time, moment, occasion". */
  vocabShijian: TVocab;

  /** Grammar: no dedicated "if" word -- context/condition is a fronted clause followed by a comma. */
  proseFrontedContext: TProse;
  /** Grammar rule box: Fronted Context Clause. */
  infoFrontedContext: TInfo & { items: [TInfoItem] };
  /** Grammar: "when X" is built compositionally as X-de + shíjiān ("the time of X"), reusing -de. */
  proseDeShijian: TProse;

  /** Example: shénme shíjiān tā lái? */
  example1: TExample;
  /** Example: hěn-duō-rén-de dìfāng, wǒ hěn hǎo. */
  example2: TExample;
  /** Example: wǒ chī-de shíjiān, wǒ hěn hǎo. */
  example3: TExample;
  /** Example: méi-yǒu shuǐ, dòngwù bù hǎo. */
  example4: TExample;

  /** Exercise 1: Ask "What time are you coming?" */
  exercise1: TExercise;
  /** Exercise 2: Say "When you speak, I listen." */
  exercise2: TExercise;
  /** Exercise 3: Say "If the tool isn't good, don't use it." */
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

  vocabShijian: { type: "vocab", term: "{{word:shi2jian1}}", ttsText: "时间" },

  proseFrontedContext: { type: "prose" },
  infoFrontedContext: {
    type: "info",
    subtype: "grammar",
    tag: "sentences/fronted-context",
    items: [{}],
  },
  proseDeShijian: { type: "prose" },

  example1: {
    type: "example",
    pinyin: "{{Word:shen2me}} {{word:shi2jian1}} {{word:ta1}} {{word:lai2}}?",
    ttsText: "什么时间他来？",
  },
  example2: {
    type: "example",
    pinyin:
      "{{Word:hen3}}-{{word:duo1}}-{{word:ren2}}-{{word:de}} {{word:di4fang1}}, {{word:wo3}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "很多人的地方，我很好。",
  },
  example3: {
    type: "example",
    pinyin:
      "{{Word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "我吃的时间，我很好。",
  },
  example4: {
    type: "example",
    pinyin:
      "{{Word:mei2}}-{{word:you3}} {{word:shui3}}, {{word:dong4wu4}} {{word:bu4}} {{word:hao3}}.",
    ttsText: "没有水，动物不好。",
  },

  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },

  answer1: { type: "answer", ttsText: "什么时间你来？" },
  answer2: { type: "answer", ttsText: "你说的时间，我听。" },
  answer3: { type: "answer", ttsText: "工具不好，不用它。" },
};

export default shape;
