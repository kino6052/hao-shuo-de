// Language-independent block sequence for lesson-02 ("Words and Sentences").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
import type {
  TTitle,
  TSummary,
  TVocab,
  TProse,
  TExample,
  TExercise,
  TAnswer,
} from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Words and Sentences */
  title: TTitle;
  /** Chapter summary. */
  summary: TSummary;

  /** Vocabulary: "thing, something, being". */
  vocabDongxi: TVocab;
  /** Vocabulary: "person, human". */
  vocabRen: TVocab;
  /** Vocabulary: "fruit, vegetable". */
  vocabShuiguo: TVocab;
  /** Vocabulary: "document, written thing". */
  vocabXiedeDongxi: TVocab;
  /** Vocabulary: "woman, female". */
  vocabNvren: TVocab;
  /** Vocabulary: "this". */
  vocabZhe: TVocab;
  /** Vocabulary: "animal, land mammal". */
  vocabDongwu: TVocab;

  /** Grammar: what a noun is; NOUN + shì + NOUN; nouns carry no number by themselves. */
  proseNounShiNoun: TProse;

  /** Example: zhè shì rén. */
  example1: TExample;
  /** Example: zhè shì shuǐguǒ. */
  example2: TExample;
  /** Example: xiě-de dōngxi shì dōngxi. */
  example3: TExample;
  /** Example: rén shì nǚrén. */
  example4: TExample;
  /** Example: dòngwù shì dōngxi. */
  example5: TExample;
  /** Example: nǚrén shì rén. */
  example6: TExample;

  /** Exercise 1: Something is something. */
  exercise1: TExercise;
  /** Exercise 2: This is a document. */
  exercise2: TExercise;
  /** Exercise 3: The woman is a person. */
  exercise3: TExercise;
  /** Exercise 4: Humans are beings. */
  exercise4: TExercise;
  /** Exercise 5: The animal is female. */
  exercise5: TExercise;
  /** Exercise 6: Fruits are things. */
  exercise6: TExercise;
  /** Exercise 7: This is a piece of paper. */
  exercise7: TExercise;

  /** Answer 1. */
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
  /** Answer 7. */
  answer7: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },

  vocabDongxi: { type: "vocab", term: "{{word:dong1xi}}", ttsText: "东西" },
  vocabRen: { type: "vocab", term: "{{word:ren2}}", ttsText: "人" },
  vocabShuiguo: { type: "vocab", term: "{{word:shui3guo3}}", ttsText: "水果" },
  vocabXiedeDongxi: {
    type: "vocab",
    term: "{{word:xie3}}-{{word:de}} {{word:dong1xi}}",
    ttsText: "写的东西",
  },
  vocabNvren: { type: "vocab", term: "{{word:nv3ren2}}", ttsText: "女人" },
  vocabZhe: { type: "vocab", term: "{{word:zhe4}}", ttsText: "这" },
  vocabDongwu: { type: "vocab", term: "{{word:dong4wu4}}", ttsText: "动物" },

  proseNounShiNoun: { type: "prose" },

  example1: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:ren2}}.",
    ttsText: "这是人。",
  },
  example2: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:shui3guo3}}.",
    ttsText: "这是水果。",
  },
  example3: {
    type: "example",
    pinyin:
      "{{Word:xie3}}-{{word:de}} {{word:dong1xi}} {{word:shi4}} {{word:dong1xi}}.",
    ttsText: "写的东西是东西。",
  },
  example4: {
    type: "example",
    pinyin: "{{Word:ren2}} {{word:shi4}} {{word:nv3ren2}}.",
    ttsText: "人是女人。",
  },
  example5: {
    type: "example",
    pinyin: "{{Word:dong4wu4}} {{word:shi4}} {{word:dong1xi}}.",
    ttsText: "动物是东西。",
  },
  example6: {
    type: "example",
    pinyin: "{{Word:nv3ren2}} {{word:shi4}} {{word:ren2}}.",
    ttsText: "女人是人。",
  },

  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },

  answer1: { type: "answer", ttsText: "东西是东西。" },
  answer2: { type: "answer", ttsText: "这是写的东西。" },
  answer3: { type: "answer", ttsText: "女人是人。" },
  answer4: { type: "answer", ttsText: "人是东西。" },
  answer5: { type: "answer", ttsText: "动物是女人。" },
  answer6: { type: "answer", ttsText: "水果是东西。" },
  answer7: { type: "answer", ttsText: "这是写的东西。" },
};

export default shape;
