// Language-independent block sequence for lesson-08 ("Time 1 — When it happens").
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
  /** Time 1 — When it happens */
  title: TTitle;
  /** Chapter summary: what you'll be able to say (stub until the Phase 2 rewrite). */
  summary: TSummary;
  /** Vocabulary: "time, moment, occasion". */
  vocabShijian: TVocab;
  /** Vocabulary: "a small word placed right after a verb to mark that the action is finished". */
  vocabLe: TVocab;
  /** Vocabulary: "placed right before a verb to mark the action as something that will happen". */
  vocabHui: TVocab;
  /** Vocabulary: "to be at/in a place; placed right before a verb instead, it marks the action as happening right now". */
  vocabZai: TVocab;
  /** Vocabulary: "sun". */
  vocabRi: TVocab;
  /** Vocabulary: "moon". */
  vocabYue: TVocab;
  /** Vocabulary: "sleep". */
  vocabShuijiao: TVocab;
  /** Vocabulary: "have ever done". */
  vocabGuo: TVocab;
  /** Grammar: verbs carry no tense themselves, need other words; le is equivalent to simple past in English [from old L05] */
  proseLeCompletion: TProse;
  /** Grammar rule box: le. [from old L05] */
  infoCompletionMarker: TInfo;
  /** Example: wo3 chi1 le. [from old L05] */
  leExample1: TExample;
  /** prose: `guò` attaches right after a verb the same way `{{word:le}}` does, but… [from old L05] */
  proseGuo: TProse;
  /** Example: wo3 ting1-guo Hao3-shuo1-de. [from old L05] */
  guoExample1: TExample;
  /** prose: `{{word:zai4}}` works differently from `{{word:le}}` and `guò`: instea… [from old L05] */
  proseZai: TProse;
  /** Example: ta1 zai4 chi1 dong1xi. [from old L05] */
  zaiExample1: TExample;
  /** prose: `{{word:hui4}}` also goes right in front of a verb, and marks that the… [from old L05] */
  proseHui: TProse;
  /** Example: wo3 hui4 chi1 dong1xi. [from old L05] */
  huiExample1: TExample;
  /** Example: dà-de dòngwù zài chī nǐ. [from old L05] */
  example3: TExample;
  /** Example: nǐ zuò le xīn-de chī. [from old L05] */
  example5: TExample;
  /** Example: shénme shíjiān tā lái? [from old L08] */
  example1L08: TExample;
  /** Exercise 2: The woman obeyed the man. [from old L05] */
  exercise2: TExercise;
  /** Exercise 3: The friends ate meat. [from old L05] */
  exercise3: TExercise;
  /** Exercise 1: Ask "What time are you coming?" [from old L08] */
  exercise1L08: TExercise;
  /** Answer 2. [from old L05] */
  answer2: TAnswer;
  /** Answer 3. [from old L05] */
  answer3: TAnswer;
  /** Answer 1. [from old L08] */
  answer1L08: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabShijian: {
    type: "vocab",
    term: "{{word:shi2jian1}}",
    ttsText: "时间",
  },
  vocabLe: { type: "vocab", term: "{{word:le}}", ttsText: "了" },
  vocabHui: { type: "vocab", term: "{{word:hui4}}", ttsText: "会" },
  vocabZai: { type: "vocab", term: "{{word:zai4}}", ttsText: "在" },
  vocabRi: { type: "vocab", term: "{{word:ri4}}", ttsText: "日" },
  vocabYue: { type: "vocab", term: "{{word:yue4}}", ttsText: "月" },
  vocabShuijiao: {
    type: "vocab",
    term: "{{word:shui4jiao4}}",
    ttsText: "睡觉",
  },
  vocabGuo: { type: "vocab", term: "{{word:guo4}}", ttsText: "过" },
  proseLeCompletion: { type: "prose" },
  infoCompletionMarker: {
    type: "info",
    subtype: "grammar",
    tag: "verbs/aspect",
    items: [{}],
  },
  leExample1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:chi1}} {{word:le}}.",
    ttsText: "我吃了。",
  },
  proseGuo: { type: "prose" },
  guoExample1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ting1}}-guò Hǎo-shuō-de.",
    ttsText: "我听过好说的。",
  },
  proseZai: { type: "prose" },
  zaiExample1: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:zai4}} {{word:chi1}} {{word:dong1xi}}.",
    ttsText: "他在吃东西。",
  },
  proseHui: { type: "prose" },
  huiExample1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:hui4}} {{word:chi1}} {{word:dong1xi}}.",
    ttsText: "我会吃东西。",
  },
  example3: {
    type: "example",
    pinyin: "{{Word:da4}}-{{word:de}} {{word:dong4wu4}} {{word:zai4}} {{word:chi1}} {{word:ni3}}.",
    ttsText: "大的动物在吃你。",
  },
  example5: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:nong4}} {{word:le}} {{word:xin1}}-{{word:de}} {{word:chi1}}.",
    ttsText: "你做了新的吃。",
  },
  example1L08: {
    type: "example",
    pinyin: "{{Word:shen2me}} {{word:shi2jian1}} {{word:ta1}} {{word:lai2}}?",
    ttsText: "什么时间他来？",
  },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise1L08: { type: "exercise" },
  answer2: { type: "answer", ttsText: "女人听了男人。" },
  answer3: { type: "answer", ttsText: "好的人吃了动物。" },
  answer1L08: { type: "answer", ttsText: "什么时间你来？" },
};

export default shape;
