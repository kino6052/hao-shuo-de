// Language-independent block sequence for lesson-09 ("Time 2 — Around an action").
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
  /** Time 2 — Around an action */
  title: TTitle;
  /** Chapter summary: what you'll be able to say (stub until the Phase 2 rewrite). */
  summary: TSummary;
  /** Vocabulary: "finish". */
  vocabWan: TVocab;
  /** Vocabulary: "to begin to, start to, manage to". */
  vocabKaishi: TVocab;
  /** Vocabulary: "after, behind". */
  vocabHou: TVocab;
  /** Vocabulary: "play". */
  vocabWanr: TVocab;
  /** Vocabulary: "stay, keep". */
  vocabLiu: TVocab;
  /** Grammar: "when X" is built compositionally as X-de + shíjiān ("the time of X"), reusing -de. [from old L08] */
  proseDeShijian: TProse;
  /** Example: wǒ chī-de shíjiān, wǒ hěn hǎo. [from old L08] */
  example3: TExample;
  /** Grammar: 完，到，好 [from old L05] */
  completionMarkers: TProse;
  /** info: … [from old L05] */
  infoCompletionMarkers: TInfo;
  /** Example: wǒ chī-wán le. [from old L05] */
  exampleCompletionMarker1: TExample;
  /** Example: wǒ tīng-dào le. [from old L05] */
  exampleCompletionMarker2: TExample;
  /** Example: wǒ nòng-hǎo le. [from old L05] */
  exampleCompletionMarker3: TExample;
  /** Example: wǒ kāishǐ zhīdào Hǎo-shuō-de. [from old L09] */
  example2L09: TExample;
  /** Example: zhíwù kāishǐ yǒu shuǐ. [from old L09] */
  example6L09: TExample;
  /** Exercise 2: Say "When you speak, I listen." [from old L08] */
  exercise2: TExercise;
  /** Answer 2. [from old L08] */
  answer2: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabWan: { type: "vocab", term: "{{word:wan2}}", ttsText: "完" },
  vocabKaishi: {
    type: "vocab",
    term: "{{word:kai1shi3}}",
    ttsText: "开始",
  },
  vocabHou: { type: "vocab", term: "{{word:hou4}}", ttsText: "后" },
  vocabWanr: { type: "vocab", term: "{{word:wan2r}}", ttsText: "玩儿" },
  vocabLiu: { type: "vocab", term: "{{word:liu2}}", ttsText: "留" },
  proseDeShijian: { type: "prose" },
  example3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "我吃的时间，我很好。",
  },
  completionMarkers: { type: "prose" },
  infoCompletionMarkers: {
    type: "info",
    subtype: "grammar",
    tag: "verbs/resultative-complements",
    items: [{}, {}, {}],
  },
  exampleCompletionMarker1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}.",
    ttsText: "我吃完了。",
  },
  exampleCompletionMarker2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ting1}}-dào {{word:le}}.",
    ttsText: "我听到了。",
  },
  exampleCompletionMarker3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:nong4}}-{{word:hao3}} {{word:le}}.",
    ttsText: "我弄好了。",
  },
  example2L09: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:kai1shi3}} {{word:zhi1dao4}} Hǎo-shuō-de.",
  },
  example6L09: {
    type: "example",
    pinyin: "{{Word:zhi2wu4}} {{word:kai1shi3}} {{word:you3}} {{word:shui3}}.",
  },
  exercise2: { type: "exercise" },
  answer2: { type: "answer", ttsText: "你说的时间，我听。" },
};

export default shape;
