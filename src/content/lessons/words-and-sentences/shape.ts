// Language-independent block sequence for words-and-sentences ("Words and Sentences").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see sounds-and-symbols's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): NOUN + shì + NOUN, pointing with zhè, and NOUN + bù shì + NOUN.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- words-and-sentences).
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
  /** Words and Sentences */
  title: TTitle;
  /** Chapter summary. [from old L02] */
  summary: TSummary;
  /** Vocabulary: "be, is". */
  vocabShi: TVocab;
  /** Vocabulary: "thing". */
  vocabDongxi: TVocab;
  /** Vocabulary: "person". */
  vocabRen: TVocab;
  /** Vocabulary: "woman". */
  vocabNuren: TVocab;
  /** Vocabulary: "man". */
  vocabNanren: TVocab;
  /** Vocabulary: "animal". */
  vocabDongwu: TVocab;
  /** Vocabulary: "fruit". */
  vocabShuiguo: TVocab;
  /** Say: To say what something is, put shì between two nouns. Pattern: NOUN + shì + NOUN */
  proseIs: TProse;
  /** Example: nǚrén shì rén. */
  exampleIs1: TExample;
  /** Example: nánrén shì rén. */
  exampleIs2: TExample;
  /** Example: shuǐguǒ shì dōngxi. */
  exampleIs3: TExample;
  /** Example: dòngwù bu shì dōngxi. */
  exampleIs4: TExample;
  /** Vocabulary: "this". */
  vocabZhe: TVocab;
  /** Say: To point at something, say zhè (this). Pattern: zhè shì + NOUN */
  proseThis: TProse;
  /** Example: zhè shì rén. */
  exampleThis1: TExample;
  /** Example: zhè shì shuǐguǒ. */
  exampleThis2: TExample;
  /** Example: zhè shì dòngwù. */
  exampleThis3: TExample;
  /** Example: zhè shì nánrén. */
  exampleThis4: TExample;
  /** Vocabulary: "not". */
  vocabBu: TVocab;
  /** Say: To say something is not something, put bù before shì. Pattern: NOUN + bù shì + NOUN */
  proseNot: TProse;
  /** Example: dòngwù bù shì shuǐguǒ. */
  exampleNot1: TExample;
  /** Example: zhè bù shì dòngwù. */
  exampleNot2: TExample;
  /** Example: nǚrén bù shì nánrén. */
  exampleNot3: TExample;
  /** Example: shuǐguǒ bù shì rén. */
  exampleNot4: TExample;
  /** Grammar box: NOUN + shì + NOUN, and NOUN + bù shì + NOUN. */
  infoIsAndIsNot: TInfo;
  /** Exercise 1: Something is something. */
  exercise1: TExercise;
  /** Exercise 2: This is an animal. */
  exercise2: TExercise;
  /** Exercise 3: The woman is a person. */
  exercise3: TExercise;
  /** Exercise 4: This is a woman. */
  exercise4: TExercise;
  /** Exercise 5: Fruits are things. */
  exercise5: TExercise;
  /** Exercise 6: This is a man. */
  exercise6: TExercise;
  /** Exercise 7: This is not a fruit. */
  exercise7: TExercise;
  /** Exercise 8: An animal is not a person. */
  exercise8: TExercise;
  /** Answer 1: dōngxi shì dōngxi. */
  answer1: TAnswer;
  /** Answer 2: zhè shì dòngwù. */
  answer2: TAnswer;
  /** Answer 3: nǚrén shì rén. */
  answer3: TAnswer;
  /** Answer 4: zhè shì nǚrén. */
  answer4: TAnswer;
  /** Answer 5: shuǐguǒ shì dōngxi. */
  answer5: TAnswer;
  /** Answer 6: zhè shì nánrén. */
  answer6: TAnswer;
  /** Answer 7: zhè bù shì shuǐguǒ. */
  answer7: TAnswer;
  /** Answer 8: dòngwù bù shì rén. */
  answer8: TAnswer;
  /** FAQ: why is there no word for "a" or "the"? */
  faqAOrThe: TFaq;
  /** FAQ: does shì change like am / is / are? (no) */
  faqShiNeverChanges: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabShi: { type: "vocab", term: "{{word:shi4}}", ttsText: "是" },
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
  proseIs: { type: "prose" },
  exampleIs1: {
    type: "example",
    pinyin: "{{Word:nv3ren2}} {{word:shi4}} {{word:ren2}}.",
    ttsText: "女人是人。",
  },
  exampleIs2: {
    type: "example",
    pinyin: "{{Word:nan2ren2}} {{word:shi4}} {{word:ren2}}.",
    ttsText: "男人是人。",
  },
  exampleIs3: {
    type: "example",
    pinyin: "{{Word:shui3guo3}} {{word:shi4}} {{word:dong1xi}}.",
    ttsText: "水果是东西。",
  },
  exampleIs4: {
    type: "example",
    pinyin: "{{Word:dong4wu4}} {{word:bu4}} {{word:shi4}} {{word:dong1xi}}.",
    ttsText: "动物不是东西。",
  },
  vocabZhe: { type: "vocab", term: "{{word:zhe4}}", ttsText: "这" },
  proseThis: { type: "prose" },
  exampleThis1: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:ren2}}.",
    ttsText: "这是人。",
  },
  exampleThis2: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:shui3guo3}}.",
    ttsText: "这是水果。",
  },
  exampleThis3: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:dong4wu4}}.",
    ttsText: "这是动物。",
  },
  exampleThis4: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:nan2ren2}}.",
    ttsText: "这是男人。",
  },
  vocabBu: { type: "vocab", term: "{{word:bu4}}", ttsText: "不" },
  proseNot: { type: "prose" },
  exampleNot1: {
    type: "example",
    pinyin: "{{Word:dong4wu4}} {{word:bu4}} {{word:shi4}} {{word:shui3guo3}}.",
    ttsText: "动物不是水果。",
  },
  exampleNot2: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:bu4}} {{word:shi4}} {{word:dong4wu4}}.",
    ttsText: "这不是动物。",
  },
  exampleNot3: {
    type: "example",
    pinyin: "{{Word:nv3ren2}} {{word:bu4}} {{word:shi4}} {{word:nan2ren2}}.",
    ttsText: "女人不是男人。",
  },
  exampleNot4: {
    type: "example",
    pinyin: "{{Word:shui3guo3}} {{word:bu4}} {{word:shi4}} {{word:ren2}}.",
    ttsText: "水果不是人。",
  },
  infoIsAndIsNot: {
    type: "info",
    subtype: "grammar",
    tag: "sentences/is-and-is-not",
    items: [{}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  exercise8: { type: "exercise" },
  answer1: { type: "answer", ttsText: "东西是东西。" },
  answer2: { type: "answer", ttsText: "这是动物。" },
  answer3: { type: "answer", ttsText: "女人是人。" },
  answer4: { type: "answer", ttsText: "这是女人。" },
  answer5: { type: "answer", ttsText: "水果是东西。" },
  answer6: { type: "answer", ttsText: "这是男人。" },
  answer7: { type: "answer", ttsText: "这不是水果。" },
  answer8: { type: "answer", ttsText: "动物不是人。" },
  faqAOrThe: { type: "faq" },
  faqShiNeverChanges: { type: "faq" },
};

export default shape;
