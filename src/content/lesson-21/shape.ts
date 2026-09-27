// Language-independent block sequence for lesson-21 ("Greetings and Feelings").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): hello (nǐ hǎo), names (jiào), orders (a bare verb, bù yào), feelings (juéde, pà), and hearing sounds (shēngyīn).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- lesson-21).
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
  /** Greetings and Feelings */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "feel, think". */
  vocabJuede: TVocab;
  /** Vocabulary: "be scared (of)". */
  vocabPa: TVocab;
  /** Vocabulary: "be called; call, make an animal sound". */
  vocabJiao: TVocab;
  /** Vocabulary: "sound, voice". */
  vocabShengyin: TVocab;
  /** Vocabulary: "bug". */
  vocabChongzi: TVocab;
  /** Vocabulary: "sex". */
  vocabXing: TVocab;
  /** Say: To say hello, say nǐ hǎo. Pattern: nǐ hǎo! / nǐ hǎo ma? */
  proseHello: TProse;
  /** Example: nǐ hǎo! */
  exampleHello1: TExample;
  /** Example: nǐ hǎo ma? */
  exampleHello2: TExample;
  /** Example: wǒ hěn hǎo. */
  exampleHello3: TExample;
  /** Example: wǒ qù le. */
  exampleHello4: TExample;
  /** Say: To say your name, use jiào (be called), with the name in quotes. Pattern: Who + jiào + "name" */
  proseName: TProse;
  /** Example: wǒ jiào "Lisa". */
  exampleName1: TExample;
  /** Example: nǐ jiào shénme? */
  exampleName2: TExample;
  /** Example: nà-ge dòngwù jiào "wang-wang". */
  exampleName3: TExample;
  /** Say: To tell someone to do something, just say the verb. For don't, put bù yào first. Pattern: Verb! / bù yào + verb! */
  proseOrder: TProse;
  /** Example: chī! */
  exampleOrder1: TExample;
  /** Example: děng! */
  exampleOrder2: TExample;
  /** Example: bù yào shuō! */
  exampleOrder3: TExample;
  /** Example: bù yào pà. */
  exampleOrder4: TExample;
  /** Say: To say how you feel, put juéde (feel) before the describing word. Pattern: Who + juéde + describing word */
  proseFeel: TProse;
  /** Example: wǒ juéde hěn hǎo. */
  exampleFeel1: TExample;
  /** Example: wǒ juéde lěng. */
  exampleFeel2: TExample;
  /** Example: nǐ juéde hǎo ma? */
  exampleFeel3: TExample;
  /** Example: wǒ pà chóngzi. */
  exampleFeel4: TExample;
  /** Example: tā pà huǒ. */
  exampleFeel5: TExample;
  /** Example: xìng hé ài bùtóng. */
  exampleFeel6: TExample;
  /** Example: tā-men bù shuō xìng. */
  exampleFeel7: TExample;
  /** Say: To say you hear a sound, say tīng-dào (hear) and shēngyīn (sound). Pattern: Who + tīng-dào + shēngyīn */
  proseHear: TProse;
  /** Example: wǒ tīng-dào qíguài-de shēngyīn. */
  exampleHear1: TExample;
  /** Example: nǐ-de shēngyīn hěn hǎo. */
  exampleHear2: TExample;
  /** Example: chóngzi-de shēngyīn hěn xiǎo. */
  exampleHear3: TExample;
  /** Example: yǒu chóngzi! */
  exampleHear4: TExample;
  /** Grammar box: nǐ hǎo, jiào + name, bare-verb orders and bù yào, juéde, pà. */
  infoGreetingsAndFeelings: TInfo;
  /** Exercise 1: His name is "Tom". */
  exercise1: TExercise;
  /** Exercise 2: Hello, everyone! */
  exercise2: TExercise;
  /** Exercise 3: Don't wait! */
  exercise3: TExercise;
  /** Exercise 4: Do you feel cold? */
  exercise4: TExercise;
  /** Exercise 5: I'm not scared. */
  exercise5: TExercise;
  /** Exercise 6: I hear a sound. */
  exercise6: TExercise;
  /** Exercise 7: There's a bug on my hand. */
  exercise7: TExercise;
  /** Exercise 8: Sex is not love. */
  exercise8: TExercise;
  /** Answer 1: tā jiào "Tom". */
  answer1: TAnswer;
  /** Answer 2: nǐ-men hǎo! */
  answer2: TAnswer;
  /** Answer 3: bù yào děng! */
  answer3: TAnswer;
  /** Answer 4: nǐ juéde lěng ma? */
  answer4: TAnswer;
  /** Answer 5: wǒ bù pà. */
  answer5: TAnswer;
  /** Answer 6: wǒ tīng-dào shēngyīn. */
  answer6: TAnswer;
  /** Answer 7: wǒ-de shǒu-shàng yǒu chóngzi. */
  answer7: TAnswer;
  /** Answer 8: xìng bù shì ài. */
  answer8: TAnswer;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabJuede: { type: "vocab", term: "{{word:jue2de}}", ttsText: "觉得" },
  vocabPa: { type: "vocab", term: "{{word:pa4}}", ttsText: "怕" },
  vocabJiao: { type: "vocab", term: "{{word:jiao4}}", ttsText: "叫" },
  vocabShengyin: {
    type: "vocab",
    term: "{{word:sheng1yin1}}",
    ttsText: "声音",
  },
  vocabChongzi: {
    type: "vocab",
    term: "{{word:chong2zi}}",
    ttsText: "虫子",
  },
  vocabXing: { type: "vocab", term: "{{word:xing4}}", ttsText: "性" },
  proseHello: { type: "prose" },
  exampleHello1: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:hao3}}!",
    ttsText: "你好！",
  },
  exampleHello2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:hao3}} {{word:ma}}?",
    ttsText: "你好吗？",
  },
  exampleHello3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "我很好。",
  },
  exampleHello4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:qu4}} {{word:le}}.",
    ttsText: "我去了。",
  },
  proseName: { type: "prose" },
  exampleName1: {
    type: "example",
    pinyin: '{{Word:wo3}} {{word:jiao4}} "Lisa".',
    ttsText: "我叫丽莎。",
  },
  exampleName2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:jiao4}} {{word:shen2me}}?",
    ttsText: "你叫什么？",
  },
  exampleName3: {
    type: "example",
    pinyin: '{{Word:na4}}-ge {{word:dong4wu4}} {{word:jiao4}} "wang-wang".',
    ttsText: "那个动物叫汪汪。",
  },
  proseOrder: { type: "prose" },
  exampleOrder1: {
    type: "example",
    pinyin: "{{Word:chi1}}!",
    ttsText: "吃！",
  },
  exampleOrder2: {
    type: "example",
    pinyin: "{{Word:deng3}}!",
    ttsText: "等！",
  },
  exampleOrder3: {
    type: "example",
    pinyin: "{{Word:bu4}} {{word:yao4}} {{word:shuo1}}!",
    ttsText: "不要说！",
  },
  exampleOrder4: {
    type: "example",
    pinyin: "{{Word:bu4}} {{word:yao4}} {{word:pa4}}.",
    ttsText: "不要怕。",
  },
  proseFeel: { type: "prose" },
  exampleFeel1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:jue2de}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "我觉得很好。",
  },
  exampleFeel2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:jue2de}} {{word:leng3}}.",
    ttsText: "我觉得冷。",
  },
  exampleFeel3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:jue2de}} {{word:hao3}} {{word:ma}}?",
    ttsText: "你觉得好吗？",
  },
  exampleFeel4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:pa4}} {{word:chong2zi}}.",
    ttsText: "我怕虫子。",
  },
  exampleFeel5: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:pa4}} {{word:huo3}}.",
    ttsText: "她怕火。",
  },
  exampleFeel6: {
    type: "example",
    pinyin: "{{Word:xing4}} {{word:he2}} {{word:ai4}} {{word:bu4tong2}}.",
    ttsText: "性和爱不同。",
  },
  exampleFeel7: {
    type: "example",
    pinyin: "{{Word:ta1}}-{{word:men}} {{word:bu4}} {{word:shuo1}} {{word:xing4}}.",
    ttsText: "他们不说性。",
  },
  proseHear: { type: "prose" },
  exampleHear1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ting1}}-{{word:dao4}} {{word:qi2guai4}}-{{word:de}} {{word:sheng1yin1}}.",
    ttsText: "我听到奇怪的声音。",
  },
  exampleHear2: {
    type: "example",
    pinyin: "{{Word:ni3}}-{{word:de}} {{word:sheng1yin1}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "你的声音很好。",
  },
  exampleHear3: {
    type: "example",
    pinyin: "{{Word:chong2zi}}-{{word:de}} {{word:sheng1yin1}} {{word:hen3}} {{word:xiao3}}.",
    ttsText: "虫子的声音很小。",
  },
  exampleHear4: {
    type: "example",
    pinyin: "{{Word:you3}} {{word:chong2zi}}!",
    ttsText: "有虫子！",
  },
  infoGreetingsAndFeelings: {
    type: "info",
    subtype: "grammar",
    tag: "expressions/greetings-and-feelings",
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
  answer1: { type: "answer", ttsText: "他叫汤姆。" },
  answer2: { type: "answer", ttsText: "你们好！" },
  answer3: { type: "answer", ttsText: "不要等！" },
  answer4: { type: "answer", ttsText: "你觉得冷吗？" },
  answer5: { type: "answer", ttsText: "我不怕。" },
  answer6: { type: "answer", ttsText: "我听到声音。" },
  answer7: { type: "answer", ttsText: "我的手上有虫子。" },
  answer8: { type: "answer", ttsText: "性不是爱。" },
};

export default shape;
