// Language-independent block sequence for lesson-20 ("Relationships 2 — Linking sentences").
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
  /** Relationships 2 — Linking sentences */
  title: TTitle;
  /** Chapter summary: what you'll be able to say (stub until the Phase 2 rewrite). */
  summary: TSummary;
  /** Vocabulary: "from, because of". */
  vocabYinwei: TVocab;
  /** Vocabulary: "but, however". */
  vocabDanshi: TVocab;
  /** Vocabulary: "salt". */
  vocabYan: TVocab;
  /** Vocabulary: "die, dead". */
  vocabSi: TVocab;
  /** Vocabulary: "(X-de huà, "if X")". */
  vocabHua: TVocab;
  /** Grammar: no dedicated "if" word -- context/condition is a fronted clause followed by a comma. [from old L08] */
  proseFrontedContext: TProse;
  /** Grammar rule box: Fronted Context Clause. [from old L08] */
  infoFrontedContext: TInfo;
  /** Example: hěn-duō-rén-de dìfāng, wǒ hěn hǎo. [from old L08] */
  example2: TExample;
  /** Example: méi-yǒu shuǐ, dòngwù bù hǎo. [from old L08] */
  example4: TExample;
  /** Example: yīnwèi zhè-ge, wǒ zuò le hěn duō. [from old L07] */
  example6L07: TExample;
  /** Example: dànshì nánrén hé nǚrén zài zuò dōngxi, yě juéde hěn hǎo. [from old L16] */
  example4L16: TExample;
  /** Exercise 3: Say "If the tool isn't good, don't use it." [from old L08] */
  exercise3: TExercise;
  /** Answer 3. [from old L08] */
  answer3: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabYinwei: {
    type: "vocab",
    term: "{{word:yin1wei4}}",
    ttsText: "因为",
  },
  vocabDanshi: {
    type: "vocab",
    term: "{{word:dan4shi4}}",
    ttsText: "但是",
  },
  vocabYan: { type: "vocab", term: "{{word:yan2}}", ttsText: "盐" },
  vocabSi: { type: "vocab", term: "{{word:si3}}", ttsText: "死" },
  vocabHua: { type: "vocab", term: "{{word:hua4}}", ttsText: "话" },
  proseFrontedContext: { type: "prose" },
  infoFrontedContext: {
    type: "info",
    subtype: "grammar",
    tag: "sentences/fronted-context",
    items: [{}],
  },
  example2: {
    type: "example",
    pinyin: "{{Word:hen3}}-{{word:duo1}}-{{word:ren2}}-{{word:de}} {{word:di4fang1}}, {{word:wo3}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "很多人的地方，我很好。",
  },
  example4: {
    type: "example",
    pinyin: "{{Word:mei2}}-{{word:you3}} {{word:shui3}}, {{word:dong4wu4}} {{word:bu4}} {{word:hao3}}.",
    ttsText: "没有水，动物不好。",
  },
  example6L07: {
    type: "example",
    pinyin: "{{Word:yin1wei4}} {{word:zhe4}}-ge, {{word:wo3}} {{word:nong4}} {{word:le}} {{word:hen3}} {{word:duo1}}.",
  },
  example4L16: {
    type: "example",
    pinyin: "{{Word:dan4shi4}} {{word:nan2ren2}} {{word:he2}} {{word:nv3ren2}} {{word:zai4}} {{word:nong4}} {{word:dong1xi}}, {{word:ye3}} {{word:jue2de}} {{word:hen3}} {{word:hao3}}.",
  },
  exercise3: { type: "exercise" },
  answer3: { type: "answer", ttsText: "工具不好，不用它。" },
};

export default shape;
