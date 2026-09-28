// Language-independent block sequence for lesson-09 ("Time 2 — Around an action").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): when (X-de shíjiān), finished (verb-wán), after (verb-wán hòu), start (kāishǐ), stay or keep (liú), and for a moment (yīxià).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- lesson-09).
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
  /** Vocabulary: "finish; after a verb: finished". */
  vocabWan: TVocab;
  /** Vocabulary: "start". */
  vocabKaishi: TVocab;
  /** Vocabulary: "after; behind". */
  vocabHou: TVocab;
  /** Vocabulary: "play". */
  vocabWanr: TVocab;
  /** Vocabulary: "stay, keep". */
  vocabLiu: TVocab;
  /** Vocabulary: "a moment; after a verb: for a moment". */
  vocabYixia: TVocab;
  /** Say: To say "when", say "the time of" it: put -de shíjiān after the action, then a comma. Pattern: Who + verb-de shíjiān, the rest */
  proseWhen: TProse;
  /** Example: wǒ chī-de shíjiān, wǒ bù shuō. */
  exampleWhen1: TExample;
  /** Example: nǐ shuō-de shíjiān, wǒ tīng. */
  exampleWhen2: TExample;
  /** Example: tā shuìjiào-de shíjiān, wǒ wánr. */
  exampleWhen3: TExample;
  /** Say: To say you finished doing something, join wán to the verb, and add le. Pattern: Who + verb-wán le */
  proseFinished: TProse;
  /** Example: wǒ chī-wán le. */
  exampleFinished1: TExample;
  /** Example: nǐ xiě-wán le ma? */
  exampleFinished2: TExample;
  /** Example: tā kàn-wán le. */
  exampleFinished3: TExample;
  /** Say: To say "after doing something", put hòu after the finished action, then a comma. Pattern: verb-wán hòu, the rest */
  proseAfter: TProse;
  /** Example: chī-wán hòu, wǒ shuìjiào. */
  exampleAfter1: TExample;
  /** Example: xiě-wán hòu, wǒ wánr. */
  exampleAfter2: TExample;
  /** Example: kàn-wán hòu, nǐ shuō. */
  exampleAfter3: TExample;
  /** Example: chī-wán hòu, fāshēng le shénme? */
  exampleAfter4: TExample;
  /** Say: To say something starts, put kāishǐ before the verb. Pattern: Who + kāishǐ + verb */
  proseStart: TProse;
  /** Example: wǒ kāishǐ wánr le. */
  exampleStart1: TExample;
  /** Example: tā kāishǐ chī. */
  exampleStart2: TExample;
  /** Example: nǐ kāishǐ xiě le ma? */
  exampleStart3: TExample;
  /** Example: wǒ xiànzài kāishǐ xiě. */
  exampleStart4: TExample;
  /** Say: To say you stay, or keep something, use liú. Pattern: Who + liú (+ thing) */
  proseStay: TProse;
  /** Example: wǒ liú zhè-ge. */
  exampleStay1: TExample;
  /** Example: nǐ yào liú ma? */
  exampleStay2: TExample;
  /** Example: chī-wán hòu, tā liú. */
  exampleStay3: TExample;
  /** Say: To do something just for a moment, put yīxià (a moment) after the verb. Pattern: Who + verb + yīxià */
  proseMoment: TProse;
  /** Example: děng yīxià! */
  exampleMoment1: TExample;
  /** Example: wǒ kàn yīxià. */
  exampleMoment2: TExample;
  /** Example: nǐ liú yīxià. */
  exampleMoment3: TExample;
  /** Example: wǒ-men wánr yīxià. */
  exampleMoment4: TExample;
  /** Grammar box: X-de shíjiān (when), verb-wán le (finished), verb-wán hòu (after), kāishǐ + verb (start), verb + yīxià (a moment). */
  infoAroundAnAction: TInfo;
  /** Exercise 1: When I write, I don't eat. */
  exercise1: TExercise;
  /** Exercise 2: I finished writing. */
  exercise2: TExercise;
  /** Exercise 3: After reading, I sleep. */
  exercise3: TExercise;
  /** Exercise 4: She started to eat. */
  exercise4: TExercise;
  /** Exercise 5: Do you want to play? */
  exercise5: TExercise;
  /** Exercise 6: I will stay. */
  exercise6: TExercise;
  /** Exercise 7: Wait a moment! */
  exercise7: TExercise;
  /** Answer 1: wǒ xiě-de shíjiān, wǒ bù chī. */
  answer1: TAnswer;
  /** Answer 2: wǒ xiě-wán le. */
  answer2: TAnswer;
  /** Answer 3: kàn-wán hòu, wǒ shuìjiào. */
  answer3: TAnswer;
  /** Answer 4: tā kāishǐ chī le. */
  answer4: TAnswer;
  /** Answer 5: nǐ yào wánr ma? */
  answer5: TAnswer;
  /** Answer 6: wǒ huì liú. */
  answer6: TAnswer;
  /** Answer 7: děng yīxià! */
  answer7: TAnswer;
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
  vocabYixia: { type: "vocab", term: "{{word:yi1xia4}}", ttsText: "一下" },
  proseWhen: { type: "prose" },
  exampleWhen1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:bu4}} {{word:shuo1}}.",
    ttsText: "我吃的时间，我不说。",
  },
  exampleWhen2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:ting1}}.",
    ttsText: "你说的时间，我听。",
  },
  exampleWhen3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shui4jiao4}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:wan2r}}.",
    ttsText: "他睡觉的时间，我玩儿。",
  },
  proseFinished: { type: "prose" },
  exampleFinished1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}.",
    ttsText: "我吃完了。",
  },
  exampleFinished2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:xie3}}-{{word:wan2}} {{word:le}} {{word:ma}}?",
    ttsText: "你写完了吗？",
  },
  exampleFinished3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:kan4}}-{{word:wan2}} {{word:le}}.",
    ttsText: "她看完了。",
  },
  proseAfter: { type: "prose" },
  exampleAfter1: {
    type: "example",
    pinyin: "{{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:shui4jiao4}}.",
    ttsText: "吃完后，我睡觉。",
  },
  exampleAfter2: {
    type: "example",
    pinyin: "{{Word:xie3}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:wan2r}}.",
    ttsText: "写完后，我玩儿。",
  },
  exampleAfter3: {
    type: "example",
    pinyin: "{{Word:kan4}}-{{word:wan2}} {{word:hou4}}, {{word:ni3}} {{word:shuo1}}.",
    ttsText: "看完后，你说。",
  },
  exampleAfter4: {
    type: "example",
    pinyin: "{{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:fa1sheng1}} {{word:le}} {{word:shen2me}}?",
    ttsText: "吃完后，发生了什么？",
  },
  proseStart: { type: "prose" },
  exampleStart1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:kai1shi3}} {{word:wan2r}} {{word:le}}.",
    ttsText: "我开始玩儿了。",
  },
  exampleStart2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:kai1shi3}} {{word:chi1}}.",
    ttsText: "他开始吃。",
  },
  exampleStart3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:kai1shi3}} {{word:xie3}} {{word:le}} {{word:ma}}?",
    ttsText: "你开始写了吗？",
  },
  exampleStart4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:xian4zai4}} {{word:kai1shi3}} {{word:xie3}}.",
    ttsText: "我现在开始写。",
  },
  proseStay: { type: "prose" },
  exampleStay1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:liu2}} {{word:zhe4}}-ge.",
    ttsText: "我留这个。",
  },
  exampleStay2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:yao4}} {{word:liu2}} {{word:ma}}?",
    ttsText: "你要留吗？",
  },
  exampleStay3: {
    type: "example",
    pinyin: "{{Word:chi1}}-{{word:wan2}} {{word:hou4}}, {{word:ta1}} {{word:liu2}}.",
    ttsText: "吃完后，她留。",
  },
  proseMoment: { type: "prose" },
  exampleMoment1: {
    type: "example",
    pinyin: "{{Word:deng3}} {{word:yi1xia4}}!",
    ttsText: "等一下！",
  },
  exampleMoment2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:kan4}} {{word:yi1xia4}}.",
    ttsText: "我看一下。",
  },
  exampleMoment3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:liu2}} {{word:yi1xia4}}.",
    ttsText: "你留一下。",
  },
  exampleMoment4: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:men}} {{word:wan2r}} {{word:yi1xia4}}.",
    ttsText: "我们玩儿一下。",
  },
  infoAroundAnAction: {
    type: "info",
    subtype: "grammar",
    tag: "time/when-finish-after-start",
    items: [{}, {}, {}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  answer1: { type: "answer", ttsText: "我写的时间，我不吃。" },
  answer2: { type: "answer", ttsText: "我写完了。" },
  answer3: { type: "answer", ttsText: "看完后，我睡觉。" },
  answer4: { type: "answer", ttsText: "她开始吃了。" },
  answer5: { type: "answer", ttsText: "你要玩儿吗？" },
  answer6: { type: "answer", ttsText: "我会留。" },
  answer7: { type: "answer", ttsText: "等一下！" },
};

export default shape;
