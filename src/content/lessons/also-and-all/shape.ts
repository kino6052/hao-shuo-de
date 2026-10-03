// Language-independent block sequence for also-and-all ("Modifiers 3 — Also and all").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see sounds-and-symbols's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): also (yě) with verbs and with adjectives, all (dōu), everything (shénme-dōu), and part (bùfen). kāi and guān (open, close, D41) are theme words in the examples.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- also-and-all).
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
} from "../../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Modifiers 3 — Also and all */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "also, too". */
  vocabYe: TVocab;
  /** Vocabulary: "plant". */
  vocabZhiwu: TVocab;
  /** Vocabulary: "fire". */
  vocabHuo: TVocab;
  /** Vocabulary: "air". */
  vocabKongqi: TVocab;
  /** Vocabulary: "open; turn on". */
  vocabKai: TVocab;
  /** Vocabulary: "close; turn off". */
  vocabGuan: TVocab;
  /** Say: To say someone also does something, put yě (also) right before the verb. Pattern: Who + yě + verb */
  proseAlsoDo: TProse;
  /** Example: wǒ yě chī. */
  exampleAlsoDo1: TExample;
  /** Example: nǐ yě yào ma? */
  exampleAlsoDo2: TExample;
  /** Example: zhíwù yě yào kōngqì. */
  exampleAlsoDo3: TExample;
  /** Example: wǒ yě zài tā-de páng-biān. */
  exampleAlsoDo6: TExample;
  /** Example: tā yě bù dòng. */
  exampleAlsoDo7: TExample;
  /** Example: biéde rén yě lái le. */
  exampleAlsoDo8: TExample;
  /** Example: hézi kāi le, kǒu yě kāi le. */
  exampleAlsoDo9: TExample;
  /** Example: wǒ guān le huǒ, tā yě guān le. */
  exampleAlsoDo10: TExample;
  /** Say: To say something is also like that, put yě before hěn and the adjective. Pattern: Thing + yě + hěn + adjective */
  proseAlsoIs: TProse;
  /** Example: wǒ hěn lěng, tā yě hěn lěng. */
  exampleAlsoIs1: TExample;
  /** Example: kōngqì yě hěn lěng. */
  exampleAlsoIs2: TExample;
  /** Example: huǒ hěn rè, rì yě hěn rè. */
  exampleAlsoIs3: TExample;
  /** Example: rì hěn yuán, yuè yě hěn yuán. */
  exampleAlsoIs4: TExample;
  /** Example: nǐ-de jiā yě hěn yuǎn. */
  exampleAlsoIs5: TExample;
  /** Vocabulary: "all; shénme-dōu: everything". */
  vocabDou: TVocab;
  /** Say: To say they all do something, put dōu (all) right before the verb, after the people or things. Pattern: People or things + dōu + verb */
  proseAll: TProse;
  /** Example: wǒ-men dōu chī. */
  exampleAll1: TExample;
  /** Example: zhíwù dōu yào shuǐ. */
  exampleAll2: TExample;
  /** Example: tā-men dōu hěn hǎo. */
  exampleAll3: TExample;
  /** Example: shuǐguǒ dōu chī-wán le. */
  exampleAll4: TExample;
  /** Example: wài-miàn-de kōngqì hěn hǎo. */
  exampleAll5: TExample;
  /** Example: huǒ zài nǎlǐ? */
  exampleAll6: TExample;
  /** Example: kǒu dōu kāi le. */
  exampleAll7: TExample;
  /** Example: huǒ dōu guān le. */
  exampleAll8: TExample;
  /** Say: To say everything, put shénme-dōu before the verb. Pattern: Who + shénme-dōu + verb */
  proseEverything: TProse;
  /** Example: wǒ shénme-dōu chī. */
  exampleEverything1: TExample;
  /** Example: tā shénme-dōu zhīdào. */
  exampleEverything2: TExample;
  /** Example: wǒ shénme-dōu bù yào. */
  exampleEverything3: TExample;
  /** Example: tā shénme-dōu méi kàn-dào. */
  exampleEverything4: TExample;
  /** Example: nǎlǐ-dōu yǒu kōngqì. */
  exampleEverything5: TExample;
  /** Vocabulary: "part". */
  vocabBufen: TVocab;
  /** Say: To say part of something, use bùfen (part). Pattern: zhè / nà / dà + bùfen */
  prosePart: TProse;
  /** Example: zhè bùfen hěn hǎo. */
  examplePart1: TExample;
  /** Example: nà bùfen hěn rè. */
  examplePart2: TExample;
  /** Example: dà bùfen rén chī mǐfàn. */
  examplePart3: TExample;
  /** Example: dà bùfen zhíwù hěn xiǎo. */
  examplePart4: TExample;
  /** Grammar box: yě + verb, yě hěn + adjective, dōu, shénme-dōu, bùfen. */
  infoAlsoAndAll: TInfo;
  /** Exercise 1: I want some too. */
  exercise1: TExercise;
  /** Exercise 2: The water is hot too. */
  exercise2: TExercise;
  /** Exercise 3: We all want fruit. */
  exercise3: TExercise;
  /** Exercise 4: I eat everything. */
  exercise4: TExercise;
  /** Exercise 5: Most people eat rice. */
  exercise5: TExercise;
  /** Exercise 6: The plant is small. */
  exercise6: TExercise;
  /** Exercise 7: The fire is really hot. */
  exercise7: TExercise;
  /** Exercise 8: The air here is cold. */
  exercise8: TExercise;
  /** Exercise 9: Is the box open? */
  exercise9: TExercise;
  /** Exercise 10: Turn off the fire! */
  exercise10: TExercise;
  /** Answer 1: wǒ yě yào. */
  answer1: TAnswer;
  /** Answer 2: shuǐ yě hěn rè. */
  answer2: TAnswer;
  /** Answer 3: wǒ-men dōu yào shuǐguǒ. */
  answer3: TAnswer;
  /** Answer 4: wǒ shénme-dōu chī. */
  answer4: TAnswer;
  /** Answer 5: dà bùfen rén chī mǐfàn. */
  answer5: TAnswer;
  /** Answer 6: zhíwù hěn xiǎo. */
  answer6: TAnswer;
  /** Answer 7: huǒ zhēn rè. */
  answer7: TAnswer;
  /** Answer 8: zhè-lǐ-de kōngqì hěn lěng. */
  answer8: TAnswer;
  /** Answer 9: hézi kāi le ma? */
  answer9: TAnswer;
  /** Answer 10: guān huǒ! */
  answer10: TAnswer;
  /** FAQ: how do I say "me too"? (wǒ yě shì, or repeat the verb) */
  faqMeToo: TFaq;
  /** FAQ: méi before a verb means "didn't" */
  faqMeiDidnt: TFaq;
  /** FAQ: how do I say "all people" if dōu can't go before a noun? */
  faqAllPeople: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabYe: { type: "vocab", term: "{{word:ye3}}", ttsText: "也" },
  vocabZhiwu: { type: "vocab", term: "{{word:zhi2wu4}}", ttsText: "植物" },
  vocabHuo: { type: "vocab", term: "{{word:huo3}}", ttsText: "火" },
  vocabKongqi: {
    type: "vocab",
    term: "{{word:kong1qi4}}",
    ttsText: "空气",
  },
  vocabKai: { type: "vocab", term: "{{word:kai1}}", ttsText: "开" },
  vocabGuan: { type: "vocab", term: "{{word:guan1}}", ttsText: "关" },
  proseAlsoDo: { type: "prose" },
  exampleAlsoDo1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ye3}} {{word:chi1}}.",
    ttsText: "我也吃。",
  },
  exampleAlsoDo2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:ye3}} {{word:yao4}} {{word:ma}}?",
    ttsText: "你也要吗？",
  },
  exampleAlsoDo3: {
    type: "example",
    pinyin: "{{Word:zhi2wu4}} {{word:ye3}} {{word:yao4}} {{word:kong1qi4}}.",
    ttsText: "植物也要空气。",
  },
  exampleAlsoDo6: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ye3}} {{word:zai4}} {{word:ta1}}-{{word:de}} {{word:pang2}}-{{word:bian1}}.",
    ttsText: "我也在他的旁边。",
  },
  exampleAlsoDo7: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:ye3}} {{word:bu4}} {{word:dong4}}.",
    ttsText: "他也不动。",
  },
  exampleAlsoDo8: {
    type: "example",
    pinyin: "{{Word:bie2de}} {{word:ren2}} {{word:ye3}} {{word:lai2}} {{word:le}}.",
    ttsText: "别的人也来了。",
  },
  exampleAlsoDo9: {
    type: "example",
    pinyin: "{{Word:he2zi}} {{word:kai1}} {{word:le}}, {{word:kou3}} {{word:ye3}} {{word:kai1}} {{word:le}}.",
    ttsText: "盒子开了，口也开了。",
  },
  exampleAlsoDo10: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:guan1}} {{word:le}} {{word:huo3}}, {{word:ta1}} {{word:ye3}} {{word:guan1}} {{word:le}}.",
    ttsText: "我关了火，他也关了。",
  },
  proseAlsoIs: { type: "prose" },
  exampleAlsoIs1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}}.",
    ttsText: "我很冷，他也很冷。",
  },
  exampleAlsoIs2: {
    type: "example",
    pinyin: "{{Word:kong1qi4}} {{word:ye3}} {{word:hen3}} {{word:leng3}}.",
    ttsText: "空气也很冷。",
  },
  exampleAlsoIs3: {
    type: "example",
    pinyin: "{{Word:huo3}} {{word:hen3}} {{word:re4}}, {{word:ri4}} {{word:ye3}} {{word:hen3}} {{word:re4}}.",
    ttsText: "火很热，日也很热。",
  },
  exampleAlsoIs4: {
    type: "example",
    pinyin: "{{Word:ri4}} {{word:hen3}} {{word:yuan2}}, {{word:yue4}} {{word:ye3}} {{word:hen3}} {{word:yuan2}}.",
    ttsText: "日很圆，月也很圆。",
  },
  exampleAlsoIs5: {
    type: "example",
    pinyin: "{{Word:ni3}}-{{word:de}} {{word:jia1}} {{word:ye3}} {{word:hen3}} {{word:yuan3}}.",
    ttsText: "你的家也很远。",
  },
  vocabDou: { type: "vocab", term: "{{word:dou1}}", ttsText: "都" },
  proseAll: { type: "prose" },
  exampleAll1: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:chi1}}.",
    ttsText: "我们都吃。",
  },
  exampleAll2: {
    type: "example",
    pinyin: "{{Word:zhi2wu4}} {{word:dou1}} {{word:yao4}} {{word:shui3}}.",
    ttsText: "植物都要水。",
  },
  exampleAll3: {
    type: "example",
    pinyin: "{{Word:ta1}}-{{word:men}} {{word:dou1}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "他们都很好。",
  },
  exampleAll4: {
    type: "example",
    pinyin: "{{Word:shui3guo3}} {{word:dou1}} {{word:chi1}}-{{word:wan2}} {{word:le}}.",
    ttsText: "水果都吃完了。",
  },
  exampleAll5: {
    type: "example",
    pinyin: "{{Word:wai4}}-{{word:mian4}}-{{word:de}} {{word:kong1qi4}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "外面的空气很好。",
  },
  exampleAll6: {
    type: "example",
    pinyin: "{{Word:huo3}} {{word:zai4}} {{word:na3li3}}?",
    ttsText: "火在哪里？",
  },
  exampleAll7: {
    type: "example",
    pinyin: "{{Word:kou3}} {{word:dou1}} {{word:kai1}} {{word:le}}.",
    ttsText: "口都开了。",
  },
  exampleAll8: {
    type: "example",
    pinyin: "{{Word:huo3}} {{word:dou1}} {{word:guan1}} {{word:le}}.",
    ttsText: "火都关了。",
  },
  proseEverything: { type: "prose" },
  exampleEverything1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:chi1}}.",
    ttsText: "我什么都吃。",
  },
  exampleEverything2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shen2me}}-{{word:dou1}} {{word:zhi1dao4}}.",
    ttsText: "他什么都知道。",
  },
  exampleEverything3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:bu4}} {{word:yao4}}.",
    ttsText: "我什么都不要。",
  },
  exampleEverything4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shen2me}}-{{word:dou1}} {{word:mei2}} {{word:kan4}}-{{word:dao4}}.",
    ttsText: "他什么都没看到。",
  },
  exampleEverything5: {
    type: "example",
    pinyin: "{{Word:na3li3}}-{{word:dou1}} {{word:you3}} {{word:kong1qi4}}.",
    ttsText: "哪里都有空气。",
  },
  vocabBufen: { type: "vocab", term: "{{word:bu4fen}}", ttsText: "部分" },
  prosePart: { type: "prose" },
  examplePart1: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:bu4fen}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "这部分很好。",
  },
  examplePart2: {
    type: "example",
    pinyin: "{{Word:na4}} {{word:bu4fen}} {{word:hen3}} {{word:re4}}.",
    ttsText: "那部分很热。",
  },
  examplePart3: {
    type: "example",
    pinyin: "{{Word:da4}} {{word:bu4fen}} {{word:ren2}} {{word:chi1}} {{word:mi3fan4}}.",
    ttsText: "大部分人吃米饭。",
  },
  examplePart4: {
    type: "example",
    pinyin: "{{Word:da4}} {{word:bu4fen}} {{word:zhi2wu4}} {{word:hen3}} {{word:xiao3}}.",
    ttsText: "大部分植物很小。",
  },
  infoAlsoAndAll: {
    type: "info",
    subtype: "grammar",
    tag: "describing/also-and-all",
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
  exercise9: { type: "exercise" },
  exercise10: { type: "exercise" },
  answer1: { type: "answer", ttsText: "我也要。" },
  answer2: { type: "answer", ttsText: "水也很热。" },
  answer3: { type: "answer", ttsText: "我们都要水果。" },
  answer4: { type: "answer", ttsText: "我什么都吃。" },
  answer5: { type: "answer", ttsText: "大部分人吃米饭。" },
  answer6: { type: "answer", ttsText: "植物很小。" },
  answer7: { type: "answer", ttsText: "火真热。" },
  answer8: { type: "answer", ttsText: "这里的空气很冷。" },
  answer9: { type: "answer", ttsText: "盒子开了吗？" },
  answer10: { type: "answer", ttsText: "关火！" },
  faqMeToo: { type: "faq" },
  faqMeiDidnt: { type: "faq" },
  faqAllPeople: { type: "faq" },
};

export default shape;
