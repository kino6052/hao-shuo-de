// Language-independent block sequence for lesson-10 ("Space 1 — Where it is").
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
  /** Space 1 — Where it is */
  title: TTitle;
  /** Chapter summary: what you'll be able to say (stub until the Phase 2 rewrite). */
  summary: TSummary;
  /** Vocabulary: "inside, between, internal organ". */
  vocabLi: TVocab;
  /** Vocabulary: "area above, highest part, sky". */
  vocabShang: TVocab;
  /** Vocabulary: "area below, under, lower part, leg". */
  vocabXia: TVocab;
  /** Vocabulary: "beside". */
  vocabPang: TVocab;
  /** Vocabulary: "side". */
  vocabBian: TVocab;
  /** Vocabulary: "side, area beside, vicinity". */
  vocabPangbian: TVocab;
  /** Vocabulary: "side, face (as in lǐ-miàn, shàng-miàn)". */
  vocabMian: TVocab;
  /** Vocabulary: "where". */
  vocabNali: TVocab;
  /** Vocabulary: "table top, floor". */
  vocabTai: TVocab;
  /** Grammar: zai4 marks static location, dào marks movement toward a destination. [from old L15] */
  proseZaiVsDao: TProse;
  /** Grammar rule box: Spatial Location -- Subject + zai4/dào + Target + Spatial Noun, plus the zai4-qu4-dào compound and standalone spatial nouns. [from old L15] */
  infoSpatialLocation: TInfo;
  /** Example: wǒ zài nǐ-de pángbiān. [from old L15] */
  example1: TExample;
  /** Example: xiàmiàn-de dìfāng hěn yǒu lìliàng. [from old L15] */
  example2: TExample;
  /** Example: xiě-de dōngxi zài dòngwù-de xiàmiàn. [from old L15] */
  example4: TExample;
  /** Example: wǒ kàn-jiàn hēisè-de nǚrén zài dìfāng-de qiánmiàn. [from old L15] */
  example5: TExample;
  /** Example: yánsè dōngxi zài hēisè-de pángbiān. [from old L15] */
  example6: TExample;
  /** Grammar: with no other action verb, the relationship word itself becomes the main predicate. [from old L10] */
  proseWordAsPredicate: TProse;
  /** Example: wǒ zài dìfāng gěi tā zài-shuǐ-lǐ-de dòngwù. [from old L07] */
  example2L07: TExample;
  /** Example: wǒ zài dìfāng. [from old L07] */
  example3L07: TExample;
  /** Exercise 2: Protect your back. [from old L15] */
  exercise2: TExercise;
  /** Answer 2. [from old L15] */
  answer2: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabLi: { type: "vocab", term: "{{word:li3}}", ttsText: "里面" },
  vocabShang: { type: "vocab", term: "{{word:shang4}}", ttsText: "上面" },
  vocabXia: { type: "vocab", term: "{{word:xia4}}", ttsText: "下面" },
  vocabPang: { type: "vocab", term: "{{word:pang2}}", ttsText: "旁" },
  vocabBian: { type: "vocab", term: "{{word:bian1}}", ttsText: "边" },
  vocabPangbian: {
    type: "vocab",
    term: "{{word:pang2bian1}}",
    ttsText: "旁边",
  },
  vocabMian: { type: "vocab", term: "{{word:mian4}}", ttsText: "面" },
  vocabNali: { type: "vocab", term: "{{word:na3li3}}", ttsText: "哪里" },
  vocabTai: { type: "vocab", term: "{{word:di4}}", ttsText: "台" },
  proseZaiVsDao: { type: "prose" },
  infoSpatialLocation: {
    type: "info",
    subtype: "grammar",
    tag: "nouns/spatial",
    items: [{}, {}, {}],
  },
  example1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zai4}} {{word:ni3}}-{{word:de}} {{word:pang2bian1}}.",
  },
  example2: {
    type: "example",
    pinyin: "{{Word:xia4}}-{{word:de}} {{word:di4fang1}} {{word:hen3}} {{word:you3}} {{word:li4liang4}}.",
  },
  example4: {
    type: "example",
    pinyin: "{{Word:xie3}}-{{word:de}} {{word:dong1xi}} {{word:zai4}} {{word:dong4wu4}}-{{word:de}} {{word:xia4}}.",
  },
  example5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:kan4}}-jiàn {{word:hei1se4}}-{{word:de}} {{word:nv3ren2}} {{word:zai4}} {{word:di4fang1}}-{{word:de}} {{word:qian2}}.",
  },
  example6: {
    type: "example",
    pinyin: "{{Word:yan2}}-sè {{word:dong1xi}} {{word:zai4}} {{word:hei1se4}}-{{word:de}} {{word:pang2bian1}}.",
  },
  proseWordAsPredicate: { type: "prose" },
  example2L07: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zai4}} {{word:di4fang1}} {{word:gei3}} {{word:ta1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}}.",
  },
  example3L07: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zai4}} {{word:di4fang1}}.",
  },
  exercise2: { type: "exercise" },
  answer2: { type: "answer" },
};

export default shape;
