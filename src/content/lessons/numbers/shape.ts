// Language-independent block sequence for numbers ("Numbers").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see sounds-and-symbols's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): counting aloud (yī, èr, sān), number + gè + noun (liǎng for two things), above ten (shí-èr, èr-shí), number labels (hào), o'clock (diǎn), a little (yī-diǎn, D41), and sums: add with fàng zài yī-qǐ, take away with ná, multiply and divide with cì (D42).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- numbers).
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
  /** Numbers */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "one". */
  vocabYi: TVocab;
  /** Vocabulary: "two (counting, number two, 12, 20)". */
  vocabEr: TVocab;
  /** Vocabulary: "three". */
  vocabSan: TVocab;
  /** Vocabulary: "four". */
  vocabSi: TVocab;
  /** Vocabulary: "five". */
  vocabWu: TVocab;
  /** Vocabulary: "six". */
  vocabLiu: TVocab;
  /** Vocabulary: "seven". */
  vocabQi: TVocab;
  /** Vocabulary: "eight". */
  vocabBa: TVocab;
  /** Vocabulary: "nine". */
  vocabJiu: TVocab;
  /** Vocabulary: "ten". */
  vocabShi: TVocab;
  /** Say: To count out loud, say the numbers in order. Pattern: yī, èr, sān, sì, wǔ … */
  proseAloud: TProse;
  /** Example: yī, èr, sān! */
  exampleAloud1: TExample;
  /** Example: sì, wǔ, liù. */
  exampleAloud2: TExample;
  /** Example: qī, bā, jiǔ, shí. */
  exampleAloud3: TExample;
  /** Example: sān bǐ èr duō. */
  exampleAloud4: TExample;
  /** Example: shí zuì dà. */
  exampleAloud5: TExample;
  /** Vocabulary: "two (before gè)". */
  vocabLiang: TVocab;
  /** Say: To count things, put the number, then gè, then the thing. Pattern: number + gè + noun */
  proseCount: TProse;
  /** Example: yī-ge rén. */
  exampleCount1: TExample;
  /** Example: liǎng-ge dòngwù. */
  exampleCount2: TExample;
  /** Example: sān-ge hézi. */
  exampleCount3: TExample;
  /** Example: wǒ yǒu sì-ge shuǐguǒ. */
  exampleCount4: TExample;
  /** Example: qī-ge gùnzi zài dì-shàng. */
  exampleCount7: TExample;
  /** Example: jiǔ-ge rén chī mǐfàn. */
  exampleCount9: TExample;
  /** Example: shí-ge zhíwù. */
  exampleCount10: TExample;
  /** Example: wǒ mǎi sān-ge shuǐguǒ. */
  exampleCount24: TExample;
  /** Say: To leave the noun out when it is clear, say just the number and gè. Pattern: number-gè */
  proseCountAlone: TProse;
  /** Example: tā yào liù-ge. */
  exampleCount6: TExample;
  /** Example: wǒ yào qī-ge. */
  exampleCount12: TExample;
  /** Example: wǒ yǒu sān-ge, tā yǒu wǔ-ge. */
  exampleCount25: TExample;
  /** Say: To count kinds, times, or parts, put the number before zhǒng, cì, or bùfen instead of gè. Pattern: number-zhǒng / number-cì / number-bùfen */
  proseCountKinds: TProse;
  /** Example: wǒ yǒu sān-zhǒng shuǐguǒ. */
  exampleCount20: TExample;
  /** Example: yī-bùfen rén qù le. */
  exampleCount21: TExample;
  /** Example: wǒ qù-guò sān-cì. */
  exampleCount23: TExample;
  /** Say: To say numbers above ten, put shí (ten) before or after the other number. Pattern: shí + number (11-19) / number + shí (20, 30 …) */
  proseTeens: TProse;
  /** Example: shí-yī-ge rén. */
  exampleTeens1: TExample;
  /** Example: wǒ yǒu shí-sān-ge gōngjù. */
  exampleTeens2: TExample;
  /** Example: shí-wǔ-ge dòngwù zài zhè-lǐ. */
  exampleTeens3: TExample;
  /** Example: shí-èr-ge shuǐguǒ. */
  exampleTeens4: TExample;
  /** Example: èr-shí-ge rén. */
  exampleTeens5: TExample;
  /** Example: sān-shí-ge hézi. */
  exampleTeens6: TExample;
  /** Vocabulary: "number (as in number two)". */
  vocabHao: TVocab;
  /** Say: To say number one, number two, put hào after the number. Pattern: number + hào */
  proseLabel: TProse;
  /** Example: wǒ-de jiā shì wǔ-hào. */
  exampleLabel1: TExample;
  /** Example: èr-hào zài nǎlǐ? */
  exampleLabel2: TExample;
  /** Example: sān-hào zài nǎlǐ? */
  exampleLabel3: TExample;
  /** Example: nǐ shì yī-hào! */
  exampleLabel4: TExample;
  /** Example: wǔ-hào zài wǒ-de qián-miàn. */
  exampleLabel5: TExample;
  /** Vocabulary: "o'clock; yī-diǎn: a little". */
  vocabDian: TVocab;
  /** Say: To say what time it is, put diǎn after the number. Pattern: number + diǎn */
  proseClock: TProse;
  /** Example: xiànzài shì sān-diǎn. */
  exampleClock1: TExample;
  /** Example: wǒ shí-èr-diǎn chī mǐfàn. */
  exampleClock2: TExample;
  /** Example: tā shí-diǎn shuìjiào. */
  exampleClock3: TExample;
  /** Example: wǒ sān-diǎn huí jiā. */
  exampleClock4: TExample;
  /** Example: tā shí-diǎn tǎng-xià. */
  exampleClock5: TExample;
  /** Say: To say a little, say yī-diǎn: before a noun, or after an adjective for a bit more. Pattern: yī-diǎn + noun / adjective + yī-diǎn */
  proseLittle: TProse;
  /** Example: wǒ yào yī-diǎn shuǐ. */
  exampleLittle1: TExample;
  /** Example: wǒ yǒu yī-diǎn jīn. */
  exampleLittle2: TExample;
  /** Example: zhè-ge dà yī-diǎn. */
  exampleLittle3: TExample;
  /** Example: shuǐ yǒu yī-diǎn lěng. */
  exampleLittle4: TExample;
  /** Example: duō chī yī-diǎn! */
  exampleLittle5: TExample;
  /** Vocabulary: "calculate, work out". */
  vocabSuan: TVocab;
  /** Say: To add, put the numbers together (fàng zài yī-qǐ). To take away, use ná. Pattern: A, B fàng zài yī-qǐ, shì C / cóng A lǐ-miàn ná B, shì C */
  proseAddTake: TProse;
  /** Example: sān, sì fàng zài yī-qǐ, shì qī. */
  exampleAddTake1: TExample;
  /** Example: wǔ, wǔ fàng zài yī-qǐ, shì shí. */
  exampleAddTake2: TExample;
  /** Example: cóng qī lǐ-miàn ná sān, shì sì. */
  exampleAddTake3: TExample;
  /** Example: cóng shí lǐ-miàn ná liù, shì duō-shǎo? */
  exampleAddTake4: TExample;
  /** Example: ná yī-ge! */
  exampleAddTake5: TExample;
  /** Example: wǒ suàn yīxià. */
  exampleAddTake6: TExample;
  /** Example: nǐ néng suàn ma? */
  exampleAddTake7: TExample;
  /** Example: wǒ suàn le, shì qī. */
  exampleAddTake8: TExample;
  /** Say: To multiply, put a number together many times. To divide, see how many times you can take it away. Pattern: bǎ A fàng zài yī-qǐ B-cì / cóng C lǐ-miàn ná A, néng ná B-cì */
  proseTimesShare: TProse;
  /** Example: bǎ sì fàng zài yī-qǐ sān-cì, shì shí-èr. */
  exampleTimesShare1: TExample;
  /** Example: bǎ wǔ fàng zài yī-qǐ liǎng-cì, shì shí. */
  exampleTimesShare2: TExample;
  /** Example: cóng shí-èr lǐ-miàn ná sì, néng ná sān-cì. */
  exampleTimesShare3: TExample;
  /** Example: cóng shí lǐ-miàn ná wǔ, néng ná duō-shǎo cì? */
  exampleTimesShare4: TExample;
  /** Grammar box: 1-10 with èr, number + gè + noun (liǎng for two), shí-èr / èr-shí, number + hào. */
  infoCounting: TInfo;
  /** Exercise 1: one box */
  exercise1: TExercise;
  /** Exercise 2: two people */
  exercise2: TExercise;
  /** Exercise 3: I have three tools. */
  exercise3: TExercise;
  /** Exercise 4: four plants */
  exercise4: TExercise;
  /** Exercise 5: Five people eat. */
  exercise5: TExercise;
  /** Exercise 6: I want six. */
  exercise6: TExercise;
  /** Exercise 7: seven animals */
  exercise7: TExercise;
  /** Exercise 8: eight sticks */
  exercise8: TExercise;
  /** Exercise 9: nine pieces of fruit */
  exercise9: TExercise;
  /** Exercise 10: ten people */
  exercise10: TExercise;
  /** Exercise 11: Where is number four? */
  exercise11: TExercise;
  /** Exercise 12: twelve people */
  exercise12: TExercise;
  /** Exercise 13: Count from one to three. */
  exercise13: TExercise;
  /** Exercise 14: It's five o'clock now. */
  exercise14: TExercise;
  /** Exercise 15: This one is a bit smaller. */
  exercise15: TExercise;
  /** Exercise 16: Two and six together is eight. */
  exercise16: TExercise;
  /** Exercise 17: Take two from nine: it's seven. */
  exercise17: TExercise;
  /** Exercise 18: Three put together three times is nine. */
  exercise18: TExercise;
  /** Exercise 19: Take a little! */
  exercise19: TExercise;
  /** Exercise 20: Let me work it out. */
  exercise20: TExercise;
  /** Answer 1: yī-ge hézi. */
  answer1: TAnswer;
  /** Answer 2: liǎng-ge rén. */
  answer2: TAnswer;
  /** Answer 3: wǒ yǒu sān-ge gōngjù. */
  answer3: TAnswer;
  /** Answer 4: sì-ge zhíwù. */
  answer4: TAnswer;
  /** Answer 5: wǔ-ge rén chī. */
  answer5: TAnswer;
  /** Answer 6: wǒ yào liù-ge. */
  answer6: TAnswer;
  /** Answer 7: qī-ge dòngwù. */
  answer7: TAnswer;
  /** Answer 8: bā-ge gùnzi. */
  answer8: TAnswer;
  /** Answer 9: jiǔ-ge shuǐguǒ. */
  answer9: TAnswer;
  /** Answer 10: shí-ge rén. */
  answer10: TAnswer;
  /** Answer 11: sì-hào zài nǎlǐ? */
  answer11: TAnswer;
  /** Answer 12: shí-èr-ge rén. */
  answer12: TAnswer;
  /** Answer 13: yī, èr, sān. */
  answer13: TAnswer;
  /** Answer 14: xiànzài shì wǔ-diǎn. */
  answer14: TAnswer;
  /** Answer 15: zhè-ge xiǎo yī-diǎn. */
  answer15: TAnswer;
  /** Answer 16: èr, liù fàng zài yī-qǐ, shì bā. */
  answer16: TAnswer;
  /** Answer 17: cóng jiǔ lǐ-miàn ná èr, shì qī. */
  answer17: TAnswer;
  /** Answer 18: bǎ sān fàng zài yī-qǐ sān-cì, shì jiǔ. */
  answer18: TAnswer;
  /** Answer 19: ná yī-diǎn! */
  answer19: TAnswer;
  /** Answer 20: wǒ suàn yīxià. */
  answer20: TAnswer;
  /** FAQ: èr in 12 and 20, even with things */
  faqErInBigNumbers: TFaq;
  /** FAQ: hào also numbers days of the month */
  faqHaoDays: TFaq;
  /** FAQ: yī changes tone before gè */
  faqYiTone: TFaq;
  /** FAQ: is there a word for "plus"? (no -- fàng zài yī-qǐ and ná) */
  faqPlusWords: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabYi: { type: "vocab", term: "{{word:yi1}}", ttsText: "一" },
  vocabEr: { type: "vocab", term: "{{word:er4}}", ttsText: "二" },
  vocabSan: { type: "vocab", term: "{{word:san1}}", ttsText: "三" },
  vocabSi: { type: "vocab", term: "{{word:si4}}", ttsText: "四" },
  vocabWu: { type: "vocab", term: "{{word:wu3}}", ttsText: "五" },
  vocabLiu: { type: "vocab", term: "{{word:liu4}}", ttsText: "六" },
  vocabQi: { type: "vocab", term: "{{word:qi1}}", ttsText: "七" },
  vocabBa: { type: "vocab", term: "{{word:ba1}}", ttsText: "八" },
  vocabJiu: { type: "vocab", term: "{{word:jiu3}}", ttsText: "九" },
  vocabShi: { type: "vocab", term: "{{word:shi2}}", ttsText: "十" },
  proseAloud: { type: "prose" },
  exampleAloud1: {
    type: "example",
    pinyin: "{{Word:yi1}}, {{word:er4}}, {{word:san1}}!",
    ttsText: "一，二，三！",
  },
  exampleAloud2: {
    type: "example",
    pinyin: "{{Word:si4}}, {{word:wu3}}, {{word:liu4}}.",
    ttsText: "四，五，六。",
  },
  exampleAloud3: {
    type: "example",
    pinyin: "{{Word:qi1}}, {{word:ba1}}, {{word:jiu3}}, {{word:shi2}}.",
    ttsText: "七，八，九，十。",
  },
  exampleAloud4: {
    type: "example",
    pinyin: "{{Word:san1}} {{word:bi3}} {{word:er4}} {{word:duo1}}.",
    ttsText: "三比二多。",
  },
  exampleAloud5: {
    type: "example",
    pinyin: "{{Word:shi2}} {{word:zui4}} {{word:da4}}.",
    ttsText: "十最大。",
  },
  vocabLiang: { type: "vocab", term: "{{word:liang3}}", ttsText: "两" },
  proseCount: { type: "prose" },
  exampleCount1: {
    type: "example",
    pinyin: "{{Word:yi1}}-ge {{word:ren2}}.",
    ttsText: "一个人。",
  },
  exampleCount2: {
    type: "example",
    pinyin: "{{Word:liang3}}-ge {{word:dong4wu4}}.",
    ttsText: "两个动物。",
  },
  exampleCount3: {
    type: "example",
    pinyin: "{{Word:san1}}-ge {{word:he2zi}}.",
    ttsText: "三个盒子。",
  },
  exampleCount4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:you3}} {{word:si4}}-ge {{word:shui3guo3}}.",
    ttsText: "我有四个水果。",
  },
  exampleCount7: {
    type: "example",
    pinyin: "{{Word:qi1}}-ge {{word:gun4zi}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
    ttsText: "七个棍子在地上。",
  },
  exampleCount9: {
    type: "example",
    pinyin: "{{Word:jiu3}}-ge {{word:ren2}} {{word:chi1}} {{word:mi3fan4}}.",
    ttsText: "九个人吃米饭。",
  },
  exampleCount10: {
    type: "example",
    pinyin: "{{Word:shi2}}-ge {{word:zhi2wu4}}.",
    ttsText: "十个植物。",
  },
  exampleCount24: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:mai3}} {{word:san1}}-ge {{word:shui3guo3}}.",
    ttsText: "我买三个水果。",
  },
  proseCountAlone: { type: "prose" },
  exampleCount6: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:yao4}} {{word:liu4}}-ge.",
    ttsText: "他要六个。",
  },
  exampleCount12: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:qi1}}-ge.",
    ttsText: "我要七个。",
  },
  exampleCount25: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:you3}} {{word:san1}}-ge, {{word:ta1}} {{word:you3}} {{word:wu3}}-ge.",
    ttsText: "我有三个，他有五个。",
  },
  proseCountKinds: { type: "prose" },
  exampleCount20: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:you3}} {{word:san1}}-{{word:zhong3}} {{word:shui3guo3}}.",
    ttsText: "我有三种水果。",
  },
  exampleCount21: {
    type: "example",
    pinyin: "{{Word:yi1}}-{{word:bu4fen}} {{word:ren2}} {{word:qu4}} {{word:le}}.",
    ttsText: "一部分人去了。",
  },
  exampleCount23: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:qu4}}-{{word:guo4}} {{word:san1}}-{{word:ci4}}.",
    ttsText: "我去过三次。",
  },
  proseTeens: { type: "prose" },
  exampleTeens1: {
    type: "example",
    pinyin: "{{Word:shi2}}-{{word:yi1}}-ge {{word:ren2}}.",
    ttsText: "十一个人。",
  },
  exampleTeens2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:you3}} {{word:shi2}}-{{word:san1}}-ge {{word:gong1ju4}}.",
    ttsText: "我有十三个工具。",
  },
  exampleTeens3: {
    type: "example",
    pinyin: "{{Word:shi2}}-{{word:wu3}}-ge {{word:dong4wu4}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
    ttsText: "十五个动物在这里。",
  },
  exampleTeens4: {
    type: "example",
    pinyin: "{{Word:shi2}}-{{word:er4}}-ge {{word:shui3guo3}}.",
    ttsText: "十二个水果。",
  },
  exampleTeens5: {
    type: "example",
    pinyin: "{{Word:er4}}-{{word:shi2}}-ge {{word:ren2}}.",
    ttsText: "二十个人。",
  },
  exampleTeens6: {
    type: "example",
    pinyin: "{{Word:san1}}-{{word:shi2}}-ge {{word:he2zi}}.",
    ttsText: "三十个盒子。",
  },
  vocabHao: { type: "vocab", term: "{{word:hao4}}", ttsText: "号" },
  proseLabel: { type: "prose" },
  exampleLabel1: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:shi4}} {{word:wu3}}-{{word:hao4}}.",
    ttsText: "我的家是五号。",
  },
  exampleLabel2: {
    type: "example",
    pinyin: "{{Word:er4}}-{{word:hao4}} {{word:zai4}} {{word:na3li3}}?",
    ttsText: "二号在哪里？",
  },
  exampleLabel3: {
    type: "example",
    pinyin: "{{Word:san1}}-{{word:hao4}} {{word:zai4}} {{word:na3li3}}?",
    ttsText: "三号在哪里？",
  },
  exampleLabel4: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:shi4}} {{word:yi1}}-{{word:hao4}}!",
    ttsText: "你是一号！",
  },
  exampleLabel5: {
    type: "example",
    pinyin: "{{Word:wu3}}-{{word:hao4}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:qian2}}-{{word:mian4}}.",
    ttsText: "五号在我的前面。",
  },
  vocabDian: { type: "vocab", term: "{{word:dian3}}", ttsText: "点" },
  proseClock: { type: "prose" },
  exampleClock1: {
    type: "example",
    pinyin: "{{Word:xian4zai4}} {{word:shi4}} {{word:san1}}-{{word:dian3}}.",
    ttsText: "现在是三点。",
  },
  exampleClock2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:shi2}}-{{word:er4}}-{{word:dian3}} {{word:chi1}} {{word:mi3fan4}}.",
    ttsText: "我十二点吃米饭。",
  },
  exampleClock3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shi2}}-{{word:dian3}} {{word:shui4jiao4}}.",
    ttsText: "他十点睡觉。",
  },
  exampleClock4: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:san1}}-{{word:dian3}} {{word:hui2}} {{word:jia1}}.",
    ttsText: "我三点回家。",
  },
  exampleClock5: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:shi2}}-{{word:dian3}} {{word:tang3}}-{{word:xia4}}.",
    ttsText: "他十点躺下。",
  },
  proseLittle: { type: "prose" },
  exampleLittle1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:yi1}}-{{word:dian3}} {{word:shui3}}.",
    ttsText: "我要一点水。",
  },
  exampleLittle2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:you3}} {{word:yi1}}-{{word:dian3}} {{word:jin1}}.",
    ttsText: "我有一点金。",
  },
  exampleLittle3: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:da4}} {{word:yi1}}-{{word:dian3}}.",
    ttsText: "这个大一点。",
  },
  exampleLittle4: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:you3}} {{word:yi1}}-{{word:dian3}} {{word:leng3}}.",
    ttsText: "水有一点冷。",
  },
  exampleLittle5: {
    type: "example",
    pinyin: "{{Word:duo1}} {{word:chi1}} {{word:yi1}}-{{word:dian3}}!",
    ttsText: "多吃一点！",
  },
  vocabSuan: { type: "vocab", term: "{{word:suan4}}", ttsText: "算" },
  proseAddTake: { type: "prose" },
  exampleAddTake1: {
    type: "example",
    pinyin: "{{Word:san1}}, {{word:si4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} {{word:qi1}}.",
    ttsText: "三、四放在一起，是七。",
  },
  exampleAddTake2: {
    type: "example",
    pinyin: "{{Word:wu3}}, {{word:wu3}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} {{word:shi2}}.",
    ttsText: "五、五放在一起，是十。",
  },
  exampleAddTake3: {
    type: "example",
    pinyin: "{{Word:cong2}} {{word:qi1}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:san1}}, {{word:shi4}} {{word:si4}}.",
    ttsText: "从七里面拿三，是四。",
  },
  exampleAddTake4: {
    type: "example",
    pinyin: "{{Word:cong2}} {{word:shi2}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:liu4}}, {{word:shi4}} {{word:duo1}}-{{word:shao3}}?",
    ttsText: "从十里面拿六，是多少？",
  },
  exampleAddTake5: {
    type: "example",
    pinyin: "{{Word:na2}} {{word:yi1}}-ge!",
    ttsText: "拿一个！",
  },
  exampleAddTake6: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:suan4}} {{word:yi1xia4}}.",
    ttsText: "我算一下。",
  },
  exampleAddTake7: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:neng2}} {{word:suan4}} {{word:ma}}?",
    ttsText: "你能算吗？",
  },
  exampleAddTake8: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:suan4}} {{word:le}}, {{word:shi4}} {{word:qi1}}.",
    ttsText: "我算了，是七。",
  },
  proseTimesShare: { type: "prose" },
  exampleTimesShare1: {
    type: "example",
    pinyin: "{{Word:ba3}} {{word:si4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:san1}}-{{word:ci4}}, {{word:shi4}} {{word:shi2}}-{{word:er4}}.",
    ttsText: "把四放在一起三次，是十二。",
  },
  exampleTimesShare2: {
    type: "example",
    pinyin: "{{Word:ba3}} {{word:wu3}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:liang3}}-{{word:ci4}}, {{word:shi4}} {{word:shi2}}.",
    ttsText: "把五放在一起两次，是十。",
  },
  exampleTimesShare3: {
    type: "example",
    pinyin: "{{Word:cong2}} {{word:shi2}}-{{word:er4}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:si4}}, {{word:neng2}} {{word:na2}} {{word:san1}}-{{word:ci4}}.",
    ttsText: "从十二里面拿四，能拿三次。",
  },
  exampleTimesShare4: {
    type: "example",
    pinyin: "{{Word:cong2}} {{word:shi2}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:wu3}}, {{word:neng2}} {{word:na2}} {{word:duo1}}-{{word:shao3}} {{word:ci4}}?",
    ttsText: "从十里面拿五，能拿多少次？",
  },
  infoCounting: {
    type: "info",
    subtype: "grammar",
    tag: "numbers/counting",
    items: [{}, {}, {}, {}, {}, {}, {}, {}],
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
  exercise11: { type: "exercise" },
  exercise12: { type: "exercise" },
  exercise13: { type: "exercise" },
  exercise14: { type: "exercise" },
  exercise15: { type: "exercise" },
  exercise16: { type: "exercise" },
  exercise17: { type: "exercise" },
  exercise18: { type: "exercise" },
  exercise19: { type: "exercise" },
  exercise20: { type: "exercise" },
  answer1: { type: "answer", ttsText: "一个盒子。" },
  answer2: { type: "answer", ttsText: "两个人。" },
  answer3: { type: "answer", ttsText: "我有三个工具。" },
  answer4: { type: "answer", ttsText: "四个植物。" },
  answer5: { type: "answer", ttsText: "五个人吃。" },
  answer6: { type: "answer", ttsText: "我要六个。" },
  answer7: { type: "answer", ttsText: "七个动物。" },
  answer8: { type: "answer", ttsText: "八个棍子。" },
  answer9: { type: "answer", ttsText: "九个水果。" },
  answer10: { type: "answer", ttsText: "十个人。" },
  answer11: { type: "answer", ttsText: "四号在哪里？" },
  answer12: { type: "answer", ttsText: "十二个人。" },
  answer13: { type: "answer", ttsText: "一，二，三。" },
  answer14: { type: "answer", ttsText: "现在是五点。" },
  answer15: { type: "answer", ttsText: "这个小一点。" },
  answer16: { type: "answer", ttsText: "二、六放在一起，是八。" },
  answer17: { type: "answer", ttsText: "从九里面拿二，是七。" },
  answer18: { type: "answer", ttsText: "把三放在一起三次，是九。" },
  answer19: { type: "answer", ttsText: "拿一点！" },
  answer20: { type: "answer", ttsText: "我算一下。" },
  faqErInBigNumbers: { type: "faq" },
  faqHaoDays: { type: "faq" },
  faqYiTone: { type: "faq" },
  faqPlusWords: { type: "faq" },
};

export default shape;
