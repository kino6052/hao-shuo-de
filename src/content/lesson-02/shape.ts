// Language-independent block sequence for lesson-02 ("Words and Sentences").
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
  /** Words and Sentences */
  title: TTitle;
  /** Chapter summary. [from old L02] */
  summary: TSummary;
  /** Vocabulary: "is, are, am". */
  vocabShi: TVocab;
  /** Vocabulary: "not". */
  vocabBu: TVocab;
  /** Vocabulary: "this". */
  vocabZhe: TVocab;
  /** Vocabulary: "thing, something". */
  vocabDongxi: TVocab;
  /** Vocabulary: "person, human". */
  vocabRen: TVocab;
  /** Vocabulary: "woman, female". */
  vocabNuren: TVocab;
  /** Vocabulary: "man". */
  vocabNanren: TVocab;
  /** Vocabulary: "animal". */
  vocabDongwu: TVocab;
  /** Vocabulary: "fruit, vegetable". */
  vocabShuiguo: TVocab;
  /** Grammar: what a noun is; NOUN + shì + NOUN; nouns carry no number by themselves. [from old L02] */
  proseNounShiNoun: TProse;
  /** Example: zhè shì rén. [from old L02] */
  example1: TExample;
  /** Example: zhè shì shuǐguǒ. [from old L02] */
  example2: TExample;
  /** Example: nánrén shì rén. [from old L02] */
  example3: TExample;
  /** Example: rén shì nǚrén. [from old L02] */
  example4: TExample;
  /** Example: dòngwù shì dōngxi. [from old L02] */
  example5: TExample;
  /** Example: nǚrén shì rén. [from old L02] */
  example6: TExample;
  /** Grammar: negation [from old L02] */
  proseNounBuShiNoun: TProse;
  /** Grammar box: NOUN + shì + NOUN, and NOUN + bù shì + NOUN. */
  infoIsAndIsNot: TInfo;
  /** Example: zhè bù shì dòngwù. [from old L02] */
  example7: TExample;
  /** Example: zhè bù shì shuǐguǒ. [from old L02] */
  example8: TExample;
  /** Example: nǚrén bù shì nánrén. [from old L02] */
  example9: TExample;
  /** Exercise 1: Something is something. [from old L02] */
  exercise1: TExercise;
  /** Exercise 2: This is an animal. [from old L02] */
  exercise2: TExercise;
  /** Exercise 3: The woman is a person. [from old L02] */
  exercise3: TExercise;
  /** Exercise 4: Humans are beings. [from old L02] */
  exercise4: TExercise;
  /** Exercise 5: The animal is female. [from old L02] */
  exercise5: TExercise;
  /** Exercise 6: Fruits are things. [from old L02] */
  exercise6: TExercise;
  /** Exercise 7: This is a man. [from old L02] */
  exercise7: TExercise;
  /** Answer 1. [from old L02] */
  answer1: TAnswer;
  /** Answer 2. [from old L02] */
  answer2: TAnswer;
  /** Answer 3. [from old L02] */
  answer3: TAnswer;
  /** Answer 4. [from old L02] */
  answer4: TAnswer;
  /** Answer 5. [from old L02] */
  answer5: TAnswer;
  /** Answer 6. [from old L02] */
  answer6: TAnswer;
  /** Answer 7. [from old L02] */
  answer7: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabShi: { type: "vocab", term: "{{word:shi4}}", ttsText: "是" },
  vocabBu: { type: "vocab", term: "{{word:bu4}}", ttsText: "不" },
  vocabZhe: { type: "vocab", term: "{{word:zhe4}}", ttsText: "这" },
  vocabDongxi: { type: "vocab", term: "{{word:dong1xi}}", ttsText: "东西" },
  vocabRen: { type: "vocab", term: "{{word:ren2}}", ttsText: "人" },
  vocabNuren: { type: "vocab", term: "{{word:nv3ren2}}", ttsText: "女人" },
  vocabNanren: {
    type: "vocab",
    term: "{{word:nan2ren2}}",
    ttsText: "男人",
  },
  vocabDongwu: {
    type: "vocab",
    term: "{{word:dong4wu4}}",
    ttsText: "动物",
  },
  vocabShuiguo: {
    type: "vocab",
    term: "{{word:shui3guo3}}",
    ttsText: "水果",
  },
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
    pinyin: "{{Word:nan2ren2}} {{word:shi4}} {{word:ren2}}.",
    ttsText: "男人是人。",
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
  proseNounBuShiNoun: { type: "prose" },
  infoIsAndIsNot: {
    type: "info",
    subtype: "grammar",
    tag: "sentences/is-and-is-not",
    items: [{}, {}],
  },
  example7: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:bu4}} {{word:shi4}} {{word:dong4wu4}}.",
    ttsText: "这不是动物。",
  },
  example8: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:bu4}} {{word:shi4}} {{word:shui3guo3}}.",
  },
  example9: {
    type: "example",
    pinyin: "{{Word:nv3ren2}} {{word:bu4}} {{word:shi4}} {{word:nan2ren2}}.",
    ttsText: "女人不是男人。",
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  answer1: { type: "answer", ttsText: "东西是东西。" },
  answer2: { type: "answer", ttsText: "这是动物。" },
  answer3: { type: "answer", ttsText: "女人是人。" },
  answer4: { type: "answer", ttsText: "人是东西。" },
  answer5: { type: "answer", ttsText: "动物是女人。" },
  answer6: { type: "answer", ttsText: "水果是东西。" },
  answer7: { type: "answer", ttsText: "这是男人。" },
};

export default shape;
