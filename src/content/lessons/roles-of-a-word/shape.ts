// Language-independent block sequence for roles-of-a-word ("Changing the Role of a Word").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see sounds-and-symbols's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): the jobs of -de: verb-de (the thing), verb-de rén (the one who), verb-de + adjective (how), and naming things with a description.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- roles-of-a-word).
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
  /** Changing the Role of a Word */
  title: TTitle;
  /** Chapter summary: what you'll be able to say (stub until the Phase 2 rewrite). */
  summary: TSummary;
  /** Vocabulary: "word". */
  vocabCi: TVocab;
  /** Say: To name the thing an action is about, put -de after the verb. Pattern: verb-de */
  proseThing: TProse;
  /** Example: wǒ yào chī-de. */
  exampleThing1: TExample;
  /** Example: zhè shì wǒ xiě-de. */
  exampleThing2: TExample;
  /** Example: zhè-ge cí shì shénme? */
  exampleThing3: TExample;
  /** Example: zhè-ge cí zěnme shuō? */
  exampleThing4: TExample;
  /** Example: wǒ zhīdào zhè-ge cí. */
  exampleThing5: TExample;
  /** Example: shí-ge chī-de dōngxi dōu huài le. */
  exampleThing6: TExample;
  /** Example: tā chī-de shì huángsè-de shuǐguǒ. */
  exampleThing7: TExample;
  /** Say: To name the one who does something, put -de rén after the verb. Pattern: verb-de rén */
  prosePerson: TProse;
  /** Example: xiě-de rén. */
  examplePerson1: TExample;
  /** Example: nà-ge shuō-de rén shì wǒ-de fùmǔ. */
  examplePerson2: TExample;
  /** Example: zhīdào-de rén bù shuō. */
  examplePerson3: TExample;
  /** Say: To say how someone does something, put -de after the verb, then the adjective. Pattern: Who + verb-de + adjective */
  proseHow: TProse;
  /** Example: tā shuō-de hǎo. */
  exampleHow1: TExample;
  /** Example: nǐ xiě-de hěn hǎo. */
  exampleHow2: TExample;
  /** Example: tā chī-de hěn duō. */
  exampleHow3: TExample;
  /** Example: tā shuō-de bǐ wǒ hǎo. */
  exampleHow4: TExample;
  /** Vocabulary: "way, method". */
  vocabFangfa: TVocab;
  /** Vocabulary: "nose". */
  vocabBizi: TVocab;
  /** Vocabulary: "skin". */
  vocabPifu: TVocab;
  /** Vocabulary: "hair, fur". */
  vocabMao: TVocab;
  /** Say: To name something there's no word for, describe it, then add -de and the noun. Pattern: description-de + noun */
  proseName: TProse;
  /** Example: zài-shuǐ-lǐ-de dòngwù. */
  exampleName1: TExample;
  /** Example: yǒu-lìliàng-de rén. */
  exampleName2: TExample;
  /** Example: xiě-de fāngfǎ. */
  exampleName3: TExample;
  /** Example: nǐ yǒu hǎo-de fāngfǎ ma? */
  exampleName4: TExample;
  /** Example: zhè-ge fāngfǎ hěn hǎo. */
  exampleName5: TExample;
  /** Example: wǒ-de bízi hěn dà. */
  exampleName6: TExample;
  /** Example: nǐ-de bízi shì hóngsè-de. */
  exampleName7: TExample;
  /** Example: dòngwù-de bízi hěn xiǎo. */
  exampleName8: TExample;
  /** Example: dòngwù-de pífū hěn yìng. */
  exampleName9: TExample;
  /** Example: wǒ-de pífū hěn rè. */
  exampleName10: TExample;
  /** Example: tā-de pífū hěn hǎo. */
  exampleName11: TExample;
  /** Example: zhè-ge dòngwù-de máo shì báisè-de. */
  exampleHair1: TExample;
  /** Example: tā tóu-shàng-de máo shì hēisè-de. */
  exampleHair2: TExample;
  /** Example: dòngwù-de máo hěn yìng. */
  exampleHair3: TExample;
  /** Example: wǒ ài-de yánsè shì lánsè. */
  exampleName12: TExample;
  /** Example: zhè shì yǒu jiàzhí-de dōngxi. */
  exampleName13: TExample;
  /** Grammar box: every job of -de -- the thing, the one who, how, describing, whose, and longer descriptions. */
  infoJobsOfDe: TInfo;
  /** Exercise 1: Do you have anything to eat? */
  exercise1: TExercise;
  /** Exercise 2: the one who speaks */
  exercise2: TExercise;
  /** Exercise 3: You write well. */
  exercise3: TExercise;
  /** Exercise 4: How do you write this word? */
  exercise4: TExercise;
  /** Exercise 5: I have a way. */
  exercise5: TExercise;
  /** Exercise 6: My nose is small. */
  exercise6: TExercise;
  /** Exercise 7: Her skin is white. */
  exercise7: TExercise;
  /** Exercise 8: This animal's fur is white. */
  exercise8: TExercise;
  /** Answer 1: nǐ yǒu chī-de ma? */
  answer1: TAnswer;
  /** Answer 2: shuō-de rén. */
  answer2: TAnswer;
  /** Answer 3: nǐ xiě-de hǎo. */
  answer3: TAnswer;
  /** Answer 4: zhè-ge cí zěnme xiě? */
  answer4: TAnswer;
  /** Answer 5: wǒ yǒu fāngfǎ. */
  answer5: TAnswer;
  /** Answer 6: wǒ-de bízi hěn xiǎo. */
  answer6: TAnswer;
  /** Answer 7: tā-de pífū shì báisè-de. */
  answer7: TAnswer;
  /** Answer 8: zhè-ge dòngwù-de máo shì báisè-de. */
  answer8: TAnswer;
  /** FAQ: how do I know which job -de is doing? */
  faqWhichDe: TFaq;
  /** FAQ: are all these -de the same word? (same sound; the "how" one is a different character) */
  faqDeSameWord: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabCi: { type: "vocab", term: "{{word:ci2}}", ttsText: "词" },
  proseThing: { type: "prose" },
  exampleThing1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:chi1}}-{{word:de}}.",
    ttsText: "我要吃的。",
  },
  exampleThing2: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:wo3}} {{word:xie3}}-{{word:de}}.",
    ttsText: "这是我写的。",
  },
  exampleThing3: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:ci2}} {{word:shi4}} {{word:shen2me}}?",
    ttsText: "这个词是什么？",
  },
  exampleThing4: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:ci2}} {{word:zen3me}} {{word:shuo1}}?",
    ttsText: "这个词怎么说？",
  },
  exampleThing5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:zhe4}}-ge {{word:ci2}}.",
    ttsText: "我知道这个词。",
  },
  exampleThing6: {
    type: "example",
    pinyin: "{{Word:shi2}}-ge {{word:chi1}}-{{word:de}} {{word:dong1xi}} {{word:dou1}} {{word:huai4}} {{word:le}}.",
    ttsText: "十个吃的东西都坏了。",
  },
  exampleThing7: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:chi1}}-{{word:de}} {{word:shi4}} {{word:huang2se4}}-{{word:de}} {{word:shui3guo3}}.",
    ttsText: "他吃的是黄色的水果。",
  },
  prosePerson: { type: "prose" },
  examplePerson1: {
    type: "example",
    pinyin: "{{Word:xie3}}-{{word:de}} {{word:ren2}}.",
    ttsText: "写的人。",
  },
  examplePerson2: {
    type: "example",
    pinyin: "{{Word:na4}}-ge {{word:shuo1}}-{{word:de}} {{word:ren2}} {{word:shi4}} {{word:wo3}}-{{word:de}} {{word:fu4mu3}}.",
    ttsText: "那个说的人是我的父母。",
  },
  examplePerson3: {
    type: "example",
    pinyin: "{{Word:zhi1dao4}}-{{word:de}} {{word:ren2}} {{word:bu4}} {{word:shuo1}}.",
    ttsText: "知道的人不说。",
  },
  proseHow: { type: "prose" },
  exampleHow1: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:de}} {{word:hao3}}.",
    ttsText: "她说得好。",
  },
  exampleHow2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:xie3}}-{{word:de}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "你写得很好。",
  },
  exampleHow3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:chi1}}-{{word:de}} {{word:hen3}} {{word:duo1}}.",
    ttsText: "他吃得很多。",
  },
  exampleHow4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:de}} {{word:bi3}} {{word:wo3}} {{word:hao3}}.",
    ttsText: "他说得比我好。",
  },
  vocabFangfa: {
    type: "vocab",
    term: "{{word:fang1fa3}}",
    ttsText: "方法",
  },
  vocabBizi: { type: "vocab", term: "{{word:bi2zi}}", ttsText: "鼻子" },
  vocabPifu: { type: "vocab", term: "{{word:pi2fu1}}", ttsText: "皮肤" },
  vocabMao: { type: "vocab", term: "{{word:mao2}}", ttsText: "毛" },
  proseName: { type: "prose" },
  exampleName1: {
    type: "example",
    pinyin: "{{Word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4wu4}}.",
    ttsText: "在水里的动物。",
  },
  exampleName2: {
    type: "example",
    pinyin: "{{Word:you3}}-{{word:li4liang4}}-{{word:de}} {{word:ren2}}.",
    ttsText: "有力量的人。",
  },
  exampleName3: {
    type: "example",
    pinyin: "{{Word:xie3}}-{{word:de}} {{word:fang1fa3}}.",
    ttsText: "写的方法。",
  },
  exampleName4: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:you3}} {{word:hao3}}-{{word:de}} {{word:fang1fa3}} {{word:ma}}?",
    ttsText: "你有好的方法吗？",
  },
  exampleName5: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:fang1fa3}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "这个方法很好。",
  },
  exampleName6: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:bi2zi}} {{word:hen3}} {{word:da4}}.",
    ttsText: "我的鼻子很大。",
  },
  exampleName7: {
    type: "example",
    pinyin: "{{Word:ni3}}-{{word:de}} {{word:bi2zi}} {{word:shi4}} {{word:hong2se4}}-{{word:de}}.",
    ttsText: "你的鼻子是红色的。",
  },
  exampleName8: {
    type: "example",
    pinyin: "{{Word:dong4wu4}}-{{word:de}} {{word:bi2zi}} {{word:hen3}} {{word:xiao3}}.",
    ttsText: "动物的鼻子很小。",
  },
  exampleName9: {
    type: "example",
    pinyin: "{{Word:dong4wu4}}-{{word:de}} {{word:pi2fu1}} {{word:hen3}} {{word:ying4}}.",
    ttsText: "动物的皮肤很硬。",
  },
  exampleName10: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:pi2fu1}} {{word:hen3}} {{word:re4}}.",
    ttsText: "我的皮肤很热。",
  },
  exampleName11: {
    type: "example",
    pinyin: "{{Word:ta1}}-{{word:de}} {{word:pi2fu1}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "她的皮肤很好。",
  },
  exampleHair1: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:dong4wu4}}-{{word:de}} {{word:mao2}} {{word:shi4}} {{word:bai2se4}}-{{word:de}}.",
    ttsText: "这个动物的毛是白色的。",
  },
  exampleHair2: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:tou2}}-{{word:shang4}}-{{word:de}} {{word:mao2}} {{word:shi4}} {{word:hei1se4}}-{{word:de}}.",
    ttsText: "他头上的毛是黑色的。",
  },
  exampleHair3: {
    type: "example",
    pinyin: "{{Word:dong4wu4}}-{{word:de}} {{word:mao2}} {{word:hen3}} {{word:ying4}}.",
    ttsText: "动物的毛很硬。",
  },
  exampleName12: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ai4}}-{{word:de}} {{word:yan2se4}} {{word:shi4}} {{word:lan2se4}}.",
    ttsText: "我爱的颜色是蓝色。",
  },
  exampleName13: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:you3}} {{word:jia4zhi2}}-{{word:de}} {{word:dong1xi}}.",
    ttsText: "这是有价值的东西。",
  },
  infoJobsOfDe: {
    type: "info",
    subtype: "grammar",
    tag: "de/making-words",
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
  answer1: { type: "answer", ttsText: "你有吃的吗？" },
  answer2: { type: "answer", ttsText: "说的人。" },
  answer3: { type: "answer", ttsText: "你写得好。" },
  answer4: { type: "answer", ttsText: "这个词怎么写？" },
  answer5: { type: "answer", ttsText: "我有方法。" },
  answer6: { type: "answer", ttsText: "我的鼻子很小。" },
  answer7: { type: "answer", ttsText: "她的皮肤是白色的。" },
  answer8: { type: "answer", ttsText: "这个动物的毛是白色的。" },
  faqWhichDe: { type: "faq" },
  faqDeSameWord: { type: "faq" },
};

export default shape;
