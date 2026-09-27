// Language-independent block sequence for lesson-08 ("Time 1 — When it happens").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): done (le), right now (zài), will (huì), done before (guò), and saying the time first.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- lesson-08).
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
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "time". */
  vocabShijian: TVocab;
  /** Vocabulary: "after a verb: it's done". */
  vocabLe: TVocab;
  /** Vocabulary: "will". */
  vocabHui: TVocab;
  /** Vocabulary: "before a verb: right now". */
  vocabZai: TVocab;
  /** Vocabulary: "sun, day". */
  vocabRi: TVocab;
  /** Vocabulary: "moon, night". */
  vocabYue: TVocab;
  /** Vocabulary: "sleep". */
  vocabShuijiao: TVocab;
  /** Vocabulary: "after a verb: have done before". */
  vocabGuo: TVocab;
  /** Say: To say something is done, put le after the verb. Pattern: Who + verb + le */
  proseDone: TProse;
  /** Example: wǒ chī le. */
  exampleDone1: TExample;
  /** Example: tā shuìjiào le. */
  exampleDone2: TExample;
  /** Example: nǐ kàn le ma? */
  exampleDone3: TExample;
  /** Say: To say something is happening right now, put zài before the verb. Pattern: Who + zài + verb */
  proseNow: TProse;
  /** Example: wǒ zài chī. */
  exampleNow1: TExample;
  /** Example: tā zài shuìjiào. */
  exampleNow2: TExample;
  /** Example: nǐ zài kàn shénme? */
  exampleNow3: TExample;
  /** Say: To say something will happen, put huì before the verb. Pattern: Who + huì + verb */
  proseWill: TProse;
  /** Example: wǒ huì chī. */
  exampleWill1: TExample;
  /** Example: tā huì děng. */
  exampleWill2: TExample;
  /** Example: nǐ huì shuìjiào ma? */
  exampleWill3: TExample;
  /** Say: To say you have done something before, put guò after the verb. Pattern: Who + verb-guò */
  proseBefore: TProse;
  /** Example: wǒ chī-guò mǐfàn. */
  exampleBefore1: TExample;
  /** Example: nǐ kàn-guò yuè ma? */
  exampleBefore2: TExample;
  /** Example: tā shuō-guò. */
  exampleBefore3: TExample;
  /** Say: To say when, put the time first, then a comma, then the rest. Pattern: Time, who + verb */
  proseTime: TProse;
  /** Example: yuè-de shíjiān, wǒ shuìjiào. */
  exampleTime1: TExample;
  /** Example: rì-de shíjiān, wǒ chī. */
  exampleTime2: TExample;
  /** Example: shénme shíjiān nǐ chī? */
  exampleTime3: TExample;
  /** Example: wǒ kàn rì. */
  exampleTime4: TExample;
  /** Example: wǒ kàn yuè. */
  exampleTime5: TExample;
  /** Grammar box: le, zài, huì, guò, and putting the time first. */
  infoWhenItHappens: TInfo;
  /** Exercise 1: I slept. */
  exercise1: TExercise;
  /** Exercise 2: He is waiting right now. */
  exercise2: TExercise;
  /** Exercise 3: Will you write? */
  exercise3: TExercise;
  /** Exercise 4: I've heard it before. */
  exercise4: TExercise;
  /** Exercise 5: What are you eating? */
  exercise5: TExercise;
  /** Exercise 6: When do you sleep? */
  exercise6: TExercise;
  /** Exercise 7: The sun is big. */
  exercise7: TExercise;
  /** Exercise 8: The moon is small. */
  exercise8: TExercise;
  /** Answer 1: wǒ shuìjiào le. */
  answer1: TAnswer;
  /** Answer 2: tā zài děng. */
  answer2: TAnswer;
  /** Answer 3: nǐ huì xiě ma? */
  answer3: TAnswer;
  /** Answer 4: wǒ tīng-guò. */
  answer4: TAnswer;
  /** Answer 5: nǐ zài chī shénme? */
  answer5: TAnswer;
  /** Answer 6: shénme shíjiān nǐ shuìjiào? */
  answer6: TAnswer;
  /** Answer 7: rì hěn dà. */
  answer7: TAnswer;
  /** Answer 8: yuè hěn xiǎo. */
  answer8: TAnswer;
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
  proseDone: { type: "prose" },
  exampleDone1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:chi1}} {{word:le}}.",
    ttsText: "我吃了。",
  },
  exampleDone2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shui4jiao4}} {{word:le}}.",
    ttsText: "他睡觉了。",
  },
  exampleDone3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:kan4}} {{word:le}} {{word:ma}}?",
    ttsText: "你看了吗？",
  },
  proseNow: { type: "prose" },
  exampleNow1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zai4}} {{word:chi1}}.",
    ttsText: "我在吃。",
  },
  exampleNow2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:zai4}} {{word:shui4jiao4}}.",
    ttsText: "她在睡觉。",
  },
  exampleNow3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:zai4}} {{word:kan4}} {{word:shen2me}}?",
    ttsText: "你在看什么？",
  },
  proseWill: { type: "prose" },
  exampleWill1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:hui4}} {{word:chi1}}.",
    ttsText: "我会吃。",
  },
  exampleWill2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:hui4}} {{word:deng3}}.",
    ttsText: "他会等。",
  },
  exampleWill3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:hui4}} {{word:shui4jiao4}} {{word:ma}}?",
    ttsText: "你会睡觉吗？",
  },
  proseBefore: { type: "prose" },
  exampleBefore1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:chi1}}-{{word:guo4}} {{word:mi3fan4}}.",
    ttsText: "我吃过米饭。",
  },
  exampleBefore2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:kan4}}-{{word:guo4}} {{word:yue4}} {{word:ma}}?",
    ttsText: "你看过月吗？",
  },
  exampleBefore3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:guo4}}.",
    ttsText: "他说过。",
  },
  proseTime: { type: "prose" },
  exampleTime1: {
    type: "example",
    pinyin: "{{Word:yue4}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:shui4jiao4}}.",
    ttsText: "月的时间，我睡觉。",
  },
  exampleTime2: {
    type: "example",
    pinyin: "{{Word:ri4}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:chi1}}.",
    ttsText: "日的时间，我吃。",
  },
  exampleTime3: {
    type: "example",
    pinyin: "{{Word:shen2me}} {{word:shi2jian1}} {{word:ni3}} {{word:chi1}}?",
    ttsText: "什么时间你吃？",
  },
  exampleTime4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:kan4}} {{word:ri4}}.",
    ttsText: "我看日。",
  },
  exampleTime5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:kan4}} {{word:yue4}}.",
    ttsText: "我看月。",
  },
  infoWhenItHappens: {
    type: "info",
    subtype: "grammar",
    tag: "time/done-now-will-before",
    items: [{}, {}, {}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  exercise8: { type: "exercise" },
  answer1: { type: "answer", ttsText: "我睡觉了。" },
  answer2: { type: "answer", ttsText: "他在等。" },
  answer3: { type: "answer", ttsText: "你会写吗？" },
  answer4: { type: "answer", ttsText: "我听过。" },
  answer5: { type: "answer", ttsText: "你在吃什么？" },
  answer6: { type: "answer", ttsText: "什么时间你睡觉？" },
  answer7: { type: "answer", ttsText: "日很大。" },
  answer8: { type: "answer", ttsText: "月很小。" },
};

export default shape;
