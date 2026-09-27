// Language-independent block sequence for lesson-03 ("Modifying Nouns").
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
  /** Modifying Nouns */
  title: TTitle;
  /** Chapter summary. [from old L03] */
  summary: TSummary;
  /** Vocabulary: "very (in this role, a required neutral connector, not an intensifier)". */
  vocabHen: TVocab;
  /** Vocabulary: "joins a describing word to a noun". */
  vocabDe: TVocab;
  /** Vocabulary: "many". */
  vocabDuo: TVocab;
  /** Vocabulary: "good, simple, friendly". */
  vocabHao: TVocab;
  /** Vocabulary: "big, important, tall". */
  vocabDa: TVocab;
  /** Vocabulary: "little, small". */
  vocabXiao: TVocab;
  /** Vocabulary: "water, liquid". */
  vocabShui: TVocab;
  /** Vocabulary: "a place (both in space or metaphorical to mean part of something)". */
  vocabDifang: TVocab;
  /** Vocabulary: "parents". */
  vocabFumu: TVocab;
  /** Grammar: hěn as the neutral predicate connector for adjectives (Subject + hěn + Adjective). [from old L03] */
  proseHenConnector: TProse;
  /** Example: shuǐ hěn hǎo. [from old L03] */
  example3: TExample;
  /** Grammar: -de required to bind an adjective onto a noun when it has a modifier or is multi-character. [from old L03] */
  proseDeRequired: TProse;
  /** Grammar box: NOUN + hěn + describing word, and describing word + -de + NOUN. */
  infoDescribing: TInfo;
  /** Example: zhè shì hěn-xiǎo-de dìfāng. [from old L03] */
  example4: TExample;
  /** Example: zhè shì hěn-dà-de dòngwù. [from old L03] */
  example5: TExample;
  /** Example: hǎo-de fùmǔ. */
  exampleGoodParents: TExample;
  /** Example: hěn-duō-de rén. */
  exampleManyPeople: TExample;
  /** Exercise 5: The place is small. [from old L03] */
  exercise5: TExercise;
  /** Exercise 6: The water is good. */
  exercise6: TExercise;
  /** Exercise 7: a big place */
  exercise7: TExercise;
  /** Exercise 8: good parents */
  exercise8: TExercise;
  /** Exercise 9: many people */
  exercise9: TExercise;
  /** Exercise 10: The animal is small. */
  exercise10: TExercise;
  /** Answer 5. [from old L03] */
  answer5: TAnswer;
  /** Answer 6. */
  answer6: TAnswer;
  /** Answer 7. */
  answer7: TAnswer;
  /** Answer 8. */
  answer8: TAnswer;
  /** Answer 9. */
  answer9: TAnswer;
  /** Answer 10. */
  answer10: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabHen: { type: "vocab", term: "{{word:hen3}}", ttsText: "很" },
  vocabDe: { type: "vocab", term: "{{word:de}}", ttsText: "的" },
  vocabDuo: { type: "vocab", term: "{{word:duo1}}", ttsText: "多" },
  vocabHao: { type: "vocab", term: "{{word:hao3}}", ttsText: "好" },
  vocabDa: { type: "vocab", term: "{{word:da4}}", ttsText: "大" },
  vocabXiao: { type: "vocab", term: "{{word:xiao3}}", ttsText: "小" },
  vocabShui: { type: "vocab", term: "{{word:shui3}}", ttsText: "水" },
  vocabDifang: {
    type: "vocab",
    term: "{{word:di4fang1}}",
    ttsText: "地方",
  },
  vocabFumu: { type: "vocab", term: "{{word:fu4mu3}}", ttsText: "父母" },
  proseHenConnector: { type: "prose" },
  example3: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "水很好。",
  },
  proseDeRequired: { type: "prose" },
  infoDescribing: {
    type: "info",
    subtype: "grammar",
    tag: "describing/hen-and-de",
    items: [{}, {}],
  },
  example4: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:hen3}}-{{word:xiao3}}-{{word:de}} {{word:di4fang1}}.",
    ttsText: "这是很小的地方。",
  },
  example5: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:hen3}}-{{word:da4}}-{{word:de}} {{word:dong4wu4}}.",
    ttsText: "这是很大的动物。",
  },
  exampleGoodParents: {
    type: "example",
    pinyin: "{{Word:hao3}}-{{word:de}} {{word:fu4mu3}}.",
    ttsText: "好的父母。",
  },
  exampleManyPeople: {
    type: "example",
    pinyin: "{{Word:hen3}}-{{word:duo1}}-{{word:de}} {{word:ren2}}.",
    ttsText: "很多的人。",
  },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  exercise8: { type: "exercise" },
  exercise9: { type: "exercise" },
  exercise10: { type: "exercise" },
  answer5: { type: "answer", ttsText: "地方很小。" },
  answer6: { type: "answer", ttsText: "水很好。" },
  answer7: { type: "answer", ttsText: "大的地方" },
  answer8: { type: "answer", ttsText: "好的父母" },
  answer9: { type: "answer", ttsText: "很多的人" },
  answer10: { type: "answer", ttsText: "动物很小。" },
};

export default shape;
