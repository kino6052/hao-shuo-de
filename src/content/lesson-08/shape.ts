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
  TFaq,
} from "../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Time 1 — When it happens */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "after a verb: it's done". */
  vocabLe: TVocab;
  /** Vocabulary: "sleep". */
  vocabShuijiao: TVocab;
  /** Vocabulary: "happen". */
  vocabFasheng: TVocab;
  /** Say: To say something is done, put le after the verb. Pattern: Who + verb + le */
  proseDone: TProse;
  /** Example: wǒ chī le. */
  exampleDone1: TExample;
  /** Example: tā shuìjiào le. */
  exampleDone2: TExample;
  /** Example: nǐ kàn le ma? */
  exampleDone3: TExample;
  /** Example: fāshēng le shénme? */
  exampleDone4: TExample;
  /** Example: nǐ zhīdào fāshēng le shénme ma? */
  exampleDone5: TExample;
  /** Vocabulary: "before a verb: right now". */
  vocabZai: TVocab;
  /** Vocabulary: "now". */
  vocabXianzai: TVocab;
  /** Say: To say something is happening right now, put zài before the verb. Pattern: Who + zài + verb */
  proseNow: TProse;
  /** Example: wǒ zài chī. */
  exampleNow1: TExample;
  /** Example: tā zài shuìjiào. */
  exampleNow2: TExample;
  /** Example: nǐ zài kàn shénme? */
  exampleNow3: TExample;
  /** Example: nǐ wèishénme zài shuìjiào? */
  exampleNow4: TExample;
  /** Example: tā xiànzài zài shuìjiào. */
  exampleNow5: TExample;
  /** Example: tā kěnéng zài shuìjiào. */
  exampleNow6: TExample;
  /** Example: wǒ zài xué xiě. */
  exampleNow7: TExample;
  /** Vocabulary: "will". */
  vocabHui: TVocab;
  /** Say: To say something will happen, put huì before the verb. Pattern: Who + huì + verb */
  proseWill: TProse;
  /** Example: wǒ huì chī. */
  exampleWill1: TExample;
  /** Example: tā huì děng. */
  exampleWill2: TExample;
  /** Example: nǐ huì shuìjiào ma? */
  exampleWill3: TExample;
  /** Vocabulary: "moon, night". */
  vocabYue: TVocab;
  /** Vocabulary: "after a verb: have done before". */
  vocabGuo: TVocab;
  /** Say: To say you have done something before, put guò after the verb. Pattern: Who + verb-guò */
  proseBefore: TProse;
  /** Example: wǒ chī-guò mǐfàn. */
  exampleBefore1: TExample;
  /** Example: nǐ kàn-guò yuè ma? */
  exampleBefore2: TExample;
  /** Example: tā shuō-guò. */
  exampleBefore3: TExample;
  /** Example: zhè fāshēng-guò. */
  exampleBefore4: TExample;
  /** Vocabulary: "time". */
  vocabShijian: TVocab;
  /** Vocabulary: "sun, day". */
  vocabRi: TVocab;
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
  /** Example: xiànzài, wǒ yào shuìjiào. */
  exampleTime6: TExample;
  /** Example: xiànzài shì shénme shíjiān? */
  exampleTime7: TExample;
  /** Grammar box: le, zài, huì, guò, putting the time first (xiànzài), and fāshēng. */
  infoWhenItHappens: TInfo;
  /** Exercise 1: What happened? */
  exercise1: TExercise;
  /** Exercise 2: Now I'm eating. */
  exercise2: TExercise;
  /** Exercise 3: I slept. */
  exercise3: TExercise;
  /** Exercise 4: He is waiting right now. */
  exercise4: TExercise;
  /** Exercise 5: Will you write? */
  exercise5: TExercise;
  /** Exercise 6: I've heard it before. */
  exercise6: TExercise;
  /** Exercise 7: What are you eating? */
  exercise7: TExercise;
  /** Exercise 8: When do you sleep? */
  exercise8: TExercise;
  /** Exercise 9: The sun is big. */
  exercise9: TExercise;
  /** Exercise 10: The moon is small. */
  exercise10: TExercise;
  /** Answer 1: fāshēng le shénme? */
  answer1: TAnswer;
  /** Answer 2: xiànzài, wǒ zài chī. */
  answer2: TAnswer;
  /** Answer 3: wǒ shuìjiào le. */
  answer3: TAnswer;
  /** Answer 4: tā zài děng. */
  answer4: TAnswer;
  /** Answer 5: nǐ huì xiě ma? */
  answer5: TAnswer;
  /** Answer 6: wǒ tīng-guò. */
  answer6: TAnswer;
  /** Answer 7: nǐ zài chī shénme? */
  answer7: TAnswer;
  /** Answer 8: shénme shíjiān nǐ shuìjiào? */
  answer8: TAnswer;
  /** Answer 9: rì hěn dà. */
  answer9: TAnswer;
  /** Answer 10: yuè hěn xiǎo. */
  answer10: TAnswer;
  /** FAQ: does le mean the past? (no -- it says the action is done) */
  faqLePast: TFaq;
  /** FAQ: le vs guò */
  faqLeOrGuo: TFaq;
  /** FAQ: huì also means "know how to" in full Mandarin */
  faqHuiKnowHow: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabLe: { type: "vocab", term: "{{word:le}}", ttsText: "了" },
  vocabShuijiao: {
    type: "vocab",
    term: "{{word:shui4jiao4}}",
    ttsText: "睡觉",
  },
  vocabFasheng: {
    type: "vocab",
    term: "{{word:fa1sheng1}}",
    ttsText: "发生",
  },
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
  exampleDone4: {
    type: "example",
    pinyin: "{{Word:fa1sheng1}} {{word:le}} {{word:shen2me}}?",
    ttsText: "发生了什么？",
  },
  exampleDone5: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:fa1sheng1}} {{word:le}} {{word:shen2me}} {{word:ma}}?",
    ttsText: "你知道发生了什么吗？",
  },
  vocabZai: { type: "vocab", term: "{{word:zai4}}", ttsText: "在" },
  vocabXianzai: {
    type: "vocab",
    term: "{{word:xian4zai4}}",
    ttsText: "现在",
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
  exampleNow4: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:wei4shen2me}} {{word:zai4}} {{word:shui4jiao4}}?",
    ttsText: "你为什么在睡觉？",
  },
  exampleNow5: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:xian4zai4}} {{word:zai4}} {{word:shui4jiao4}}.",
    ttsText: "他现在在睡觉。",
  },
  exampleNow6: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:ke3neng2}} {{word:zai4}} {{word:shui4jiao4}}.",
    ttsText: "他可能在睡觉。",
  },
  exampleNow7: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zai4}} {{word:xue2}} {{word:xie3}}.",
    ttsText: "我在学写。",
  },
  vocabHui: { type: "vocab", term: "{{word:hui4}}", ttsText: "会" },
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
  vocabYue: { type: "vocab", term: "{{word:yue4}}", ttsText: "月" },
  vocabGuo: { type: "vocab", term: "{{word:guo4}}", ttsText: "过" },
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
  exampleBefore4: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:fa1sheng1}}-{{word:guo4}}.",
    ttsText: "这发生过。",
  },
  vocabShijian: {
    type: "vocab",
    term: "{{word:shi2jian1}}",
    ttsText: "时间",
  },
  vocabRi: { type: "vocab", term: "{{word:ri4}}", ttsText: "日" },
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
  exampleTime6: {
    type: "example",
    pinyin: "{{Word:xian4zai4}}, {{word:wo3}} {{word:yao4}} {{word:shui4jiao4}}.",
    ttsText: "现在，我要睡觉。",
  },
  exampleTime7: {
    type: "example",
    pinyin: "{{Word:xian4zai4}} {{word:shi4}} {{word:shen2me}} {{word:shi2jian1}}?",
    ttsText: "现在是什么时间？",
  },
  infoWhenItHappens: {
    type: "info",
    subtype: "grammar",
    tag: "time/done-now-will-before",
    items: [{}, {}, {}, {}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  exercise8: { type: "exercise" },
  exercise9: { type: "exercise" },
  exercise10: { type: "exercise" },
  answer1: { type: "answer", ttsText: "发生了什么？" },
  answer2: { type: "answer", ttsText: "现在，我在吃。" },
  answer3: { type: "answer", ttsText: "我睡觉了。" },
  answer4: { type: "answer", ttsText: "他在等。" },
  answer5: { type: "answer", ttsText: "你会写吗？" },
  answer6: { type: "answer", ttsText: "我听过。" },
  answer7: { type: "answer", ttsText: "你在吃什么？" },
  answer8: { type: "answer", ttsText: "什么时间你睡觉？" },
  answer9: { type: "answer", ttsText: "日很大。" },
  answer10: { type: "answer", ttsText: "月很小。" },
  faqLePast: { type: "faq" },
  faqLeOrGuo: { type: "faq" },
  faqHuiKnowHow: { type: "faq" },
};

export default shape;
