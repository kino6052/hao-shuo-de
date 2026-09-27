// Language-independent block sequence for lesson-11 ("Space 2 — Moving").
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
  /** Space 2 — Moving */
  title: TTitle;
  /** Chapter summary: what you'll be able to say (stub until the Phase 2 rewrite). */
  summary: TSummary;
  /** Vocabulary: "from". */
  vocabCong: TVocab;
  /** Vocabulary: "to come, arrive". */
  vocabLai: TVocab;
  /** Vocabulary: "to walk, move, travel". */
  vocabQu: TVocab;
  /** Vocabulary: "to rise, get up; begin". */
  vocabQi: TVocab;
  /** Vocabulary: "out, outside". */
  vocabWai: TVocab;
  /** Vocabulary: "market". */
  vocabShichang: TVocab;
  /** Vocabulary: "opening, door". */
  vocabKou: TVocab;
  /** Vocabulary: "arrive, to". */
  vocabDao: TVocab;
  /** Grammar: directional complements qǐ/xià/shàng bind onto lái (or other verbs) via a hyphen. [from old L05] */
  proseDirectionalComplements: TProse;
  /** Grammar rule box: Directional Complements (qǐ-lái, xià-lái, shàng-lái). [from old L05] */
  infoDirectionalComplements: TInfo;
  /** Example: ta1 shuo1-qi3 Hao3-shuo1-de. [from old L05] */
  directionalExample1: TExample;
  /** Example: wo3 xia4-lai2 le. [from old L05] */
  directionalExample2: TExample;
  /** Example: ta1 shang4-lai2 le. [from old L05] */
  directionalExample3: TExample;
  /** Example: dà-de gōngjù zài-qù-dào shàngmiàn-de dìfāng. [from old L15] */
  example3L15: TExample;
  /** Example: wǒ qù nǐ-de pángbiān. [from old L07] */
  example4L07: TExample;
  /** Example: wǒ-de fùmǔ qù kàn hěn-dà-de shuǐ. [from old L07] */
  example5L07: TExample;
  /** Exercise 4: She mentions the community. [from old L05] */
  exercise4: TExercise;
  /** Exercise 1: Water is coming from the sky. [from old L15] */
  exercise1L15: TExercise;
  /** Exercise 3: What did you put the red clock next to? [from old L15] */
  exercise3L15: TExercise;
  /** Answer 4. [from old L05] */
  answer4: TAnswer;
  /** Answer 1. [from old L15] */
  answer1L15: TAnswer;
  /** Answer 3. [from old L15] */
  answer3L15: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabCong: { type: "vocab", term: "{{word:cong2}}", ttsText: "从" },
  vocabLai: { type: "vocab", term: "{{word:lai2}}", ttsText: "来" },
  vocabQu: { type: "vocab", term: "{{word:qu4}}", ttsText: "去" },
  vocabQi: { type: "vocab", term: "{{word:qi3}}", ttsText: "起" },
  vocabWai: { type: "vocab", term: "{{word:wai4}}", ttsText: "外" },
  vocabShichang: {
    type: "vocab",
    term: "{{word:shi4chang3}}",
    ttsText: "市场",
  },
  vocabKou: { type: "vocab", term: "{{word:kou3}}", ttsText: "口" },
  vocabDao: { type: "vocab", term: "{{word:dao4}}", ttsText: "到" },
  proseDirectionalComplements: { type: "prose" },
  infoDirectionalComplements: {
    type: "info",
    subtype: "grammar",
    tag: "verbs/directional-complements",
    items: [{}, {}, {}],
  },
  directionalExample1: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:qi3}} Hǎo-shuō-de.",
    ttsText: "他说起好说的。",
  },
  directionalExample2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:xia4}}-{{word:lai2}} {{word:le}}.",
    ttsText: "我下来了。",
  },
  directionalExample3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shang4}}-{{word:lai2}} {{word:le}}.",
    ttsText: "他上来了。",
  },
  example3L15: {
    type: "example",
    pinyin: "{{Word:da4}}-{{word:de}} {{word:gong1ju4}} {{word:zai4}}-{{word:qu4}}-dào {{word:shang4}}-{{word:de}} {{word:di4fang1}}.",
  },
  example4L07: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:qu4}} {{word:ni3}}-{{word:de}} {{word:pang2bian1}}.",
  },
  example5L07: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:fu4mu3}} {{word:qu4}} {{word:kan4}} {{word:hen3}}-{{word:da4}}-{{word:de}} {{word:shui3}}.",
  },
  exercise4: { type: "exercise" },
  exercise1L15: { type: "exercise" },
  exercise3L15: { type: "exercise" },
  answer4: { type: "answer", ttsText: "她说起群。" },
  answer1L15: { type: "answer" },
  answer3L15: { type: "answer" },
};

export default shape;
