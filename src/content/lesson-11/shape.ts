// Language-independent block sequence for lesson-11 ("Measure word ge").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// New lesson: Lesson 3 already introduced -ge for zhè-ge/nà-ge (counting
// one specific thing); this lesson formalizes the bigger picture -- real
// Mandarin ties a different measure word to each noun's shape or class,
// and Hao-shuo-de collapses all of that down to one universal classifier.
import type { TTitle, TSummary, TProse, TInfo, TInfoItem, TExample, TExercise, TAnswer } from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Chapter title. */
  title: TTitle;
  /** Chapter summary. */
  summary: TSummary;

  /** Grammar: standard Mandarin ties a specific measure word to each noun's shape or class. */
  proseMandarinMeasureWords: TProse;
  /** Grammar: Hao-shuo-de collapses all of them into one universal classifier, ge. */
  proseGeIsUniversal: TProse;
  /** Grammar rule box: One Classifier for Everything -- Number/zhè/nà + ge + Noun, regardless of the noun's real-Mandarin class. */
  infoUniversalClassifier: TInfo & { items: [TInfoItem] };

  /** Example: yī-ge rén. */
  example1: TExample;
  /** Example: yī-ge dòngwù. */
  example2: TExample;
  /** Example: yī-ge gōngjù. */
  example3: TExample;
  /** Example: zhè-ge shuǐguǒ hěn hǎo. */
  example4: TExample;
  /** Example: nà-ge dōngxi shì shénme? */
  example5: TExample;

  /** Exercise 1: Say "one tool", using ge. */
  exercise1: TExercise;
  /** Exercise 2: Say "this animal", using ge. */
  exercise2: TExercise;
  /** Exercise 3: Ask "What is that fruit?", using ge. */
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

  proseMandarinMeasureWords: { type: "prose" },
  proseGeIsUniversal: { type: "prose" },
  infoUniversalClassifier: { type: "info", subtype: "grammar", tag: "nouns/universal-classifier", items: [{}] },

  example1: { type: "example", pinyin: "{{Word:yi1}}-ge {{word:ren2}}.", ttsText: "一个人。" },
  example2: { type: "example", pinyin: "{{Word:yi1}}-ge {{word:dong4wu4}}.", ttsText: "一个动物。" },
  example3: { type: "example", pinyin: "{{Word:yi1}}-ge {{word:gong1ju4}}.", ttsText: "一个工具。" },
  example4: { type: "example", pinyin: "{{Word:zhe4}}-ge {{word:shui3guo3}} {{word:hen3}} {{word:hao3}}.", ttsText: "这个水果很好。" },
  example5: { type: "example", pinyin: "{{Word:na4}}-ge {{word:dong1xi}} {{word:shi4}} {{word:shen2me}}?", ttsText: "那个东西是什么？" },

  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },

  answer1: { type: "answer", ttsText: "一个工具。" },
  answer2: { type: "answer", ttsText: "这个动物。" },
  answer3: { type: "answer", ttsText: "那个水果是什么？" },
};

export default shape;
