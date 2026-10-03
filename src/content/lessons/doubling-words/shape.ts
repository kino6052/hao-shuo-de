// Language-independent block sequence for doubling-words ("Doubling Words").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see sounds-and-symbols's
// shape.ts for the full explanation of the pattern.
//
// Added after Phase 2 (BOOK_PLAN.md D43): saying a word twice. A verb twice does it a little
// (kàn-kan), a describing word twice makes it stronger (yuán-yuán-de, hǎo-hǎo), and a few
// nouns and counting words twice mean every (rén-rén, gè-gè). No new words.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- doubling-words).
import type {
  TTitle,
  TSummary,
  TProse,
  TExample,
  TExercise,
  TAnswer,
  TInfo,
  TFaq,
} from "../../../lib/chapter-shape-types.ts";

export type LessonShape = {
  /** Doubling Words */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Say: To do something a little, or just try it, say the verb twice; the second one is light. Pattern: verb-verb */
  proseVerbs: TProse;
  /** Example: wǒ kàn-kan. */
  exampleVerbs1: TExample;
  /** Example: nǐ děng-deng! */
  exampleVerbs2: TExample;
  /** Example: nǐ tīng-ting zhè-ge shēngyīn. */
  exampleVerbs3: TExample;
  /** Example: tā xiào-xiao, bù shuō. */
  exampleVerbs4: TExample;
  /** Example: yīnwèi wǒ bù zhīdào, wǒ wèn-wen. */
  exampleVerbs5: TExample;
  /** Example: chóngzi sǐ le? wǒ kàn-kan. */
  exampleVerbs6: TExample;
  /** Example: rúguǒ nǐ yǒu shíjiān, wǒ-men wánr-wanr. */
  exampleVerbs7: TExample;
  /** Example: bù yào pà, nǐ mō-mo. */
  exampleVerbs8: TExample;
  /** Example: xiè-xie, wǒ kàn-kan. */
  exampleVerbs9: TExample;
  /** Example: nǐ jìn-lái kàn-kan! */
  exampleVerbs10: TExample;
  /** Example: wǒ-men chū-qù wánr-wanr. */
  exampleVerbs11: TExample;
  /** Example: nǐ kàn-kan, tā hěn kāi-xīn. */
  exampleVerbs12: TExample;
  /** Say: To make a describing word stronger and livelier, say it twice, then add -de. Pattern: adjective-adjective-de */
  proseDescribe: TProse;
  /** Example: yuè yuán-yuán-de. */
  exampleDescribe1: TExample;
  /** Example: wǒ yào rè-rè-de shuǐ. */
  exampleDescribe2: TExample;
  /** Example: shuǐguǒ xiǎo-xiǎo-de, dànshì tián-tián-de. */
  exampleDescribe3: TExample;
  /** Example: hǎo-hǎo xué! */
  exampleDescribe4: TExample;
  /** Example: wǒ juéde zhè-ge hǎo-hǎo-de. */
  exampleDescribe5: TExample;
  /** Example: wǒ yào yī-diǎn-diǎn yán. */
  exampleDescribe6: TExample;
  /** Example: zhíwù huó-de hǎo-hǎo-de. */
  exampleDescribe7: TExample;
  /** Say: To say every, say a counting word or a few nouns twice, with dōu before the verb. Pattern: gè-gè / rén-rén + dōu + verb */
  proseEvery: TProse;
  /** Example: rén-rén dōu yào shuǐ. */
  exampleEvery1: TExample;
  /** Example: gè-gè dōu hěn hǎo. */
  exampleEvery2: TExample;
  /** Example: jiā-jiā dōu yǒu huǒ. */
  exampleEvery3: TExample;
  /** Example: cì-cì dōu yīyàng. */
  exampleEvery4: TExample;
  /** Example: rén-rén dōu xiào le. */
  exampleEvery5: TExample;
  /** Example: tā jiào shénme? rén-rén dōu zhīdào. */
  exampleEvery6: TExample;
  /** Grammar box: verb-verb (a little), adjective-adjective-de (stronger), rén-rén / gè-gè + dōu (every). */
  infoDoubling: TInfo;
  /** Exercise 1: Let me have a listen. */
  exercise1: TExercise;
  /** Exercise 2: Let's talk a bit. */
  exercise2: TExercise;
  /** Exercise 3: The water is nice and cold. */
  exercise3: TExercise;
  /** Exercise 4: Sleep well! */
  exercise4: TExercise;
  /** Exercise 5: Everyone has money. */
  exercise5: TExercise;
  /** Exercise 6: It's different every time. */
  exercise6: TExercise;
  /** Answer 1: wǒ tīng-ting. */
  answer1: TAnswer;
  /** Answer 2: wǒ-men shuō-shuo. */
  answer2: TAnswer;
  /** Answer 3: shuǐ lěng-lěng-de. */
  answer3: TAnswer;
  /** Answer 4: hǎo-hǎo shuìjiào! */
  answer4: TAnswer;
  /** Answer 5: rén-rén dōu yǒu jīn. */
  answer5: TAnswer;
  /** Answer 6: cì-cì dōu bùtóng. */
  answer6: TAnswer;
  /** FAQ: is the second half always light? (verbs yes; describing words keep their tone) */
  faqLight: TFaq;
  /** FAQ: can I double any verb? (action verbs yes; not shì or yǒu) */
  faqWhichVerbs: TFaq;
  /** FAQ: does hǎo-hǎo kàn mean "look carefully"? (yes, or "really good-looking") */
  faqHaoHaoKan: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  proseVerbs: { type: "prose" },
  exampleVerbs1: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:kan4}}-kan.",
    ttsText: "我看看。",
  },
  exampleVerbs2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:deng3}}-deng!",
    ttsText: "你等等！",
  },
  exampleVerbs3: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:ting1}}-ting {{word:zhe4}}-ge {{word:sheng1yin1}}.",
    ttsText: "你听听这个声音。",
  },
  exampleVerbs4: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:xiao4}}-xiao, {{word:bu4}} {{word:shuo1}}.",
    ttsText: "他笑笑，不说。",
  },
  exampleVerbs5: {
    type: "example",
    pinyin: "{{Word:yin1wei4}} {{word:wo3}} {{word:bu4}} {{word:zhi1dao4}}, {{word:wo3}} {{word:wen4}}-wen.",
    ttsText: "因为我不知道，我问问。",
  },
  exampleVerbs6: {
    type: "example",
    pinyin: "{{Word:chong2zi}} {{word:si3}} {{word:le}}? {{Word:wo3}} {{word:kan4}}-kan.",
    ttsText: "虫子死了？我看看。",
  },
  exampleVerbs7: {
    type: "example",
    pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:you3}} {{word:shi2jian1}}, {{word:wo3}}-{{word:men}} {{word:wan2r}}-wanr.",
    ttsText: "如果你有时间，我们玩玩。",
  },
  exampleVerbs8: {
    type: "example",
    pinyin: "{{Word:bu4}} {{word:yao4}} {{word:pa4}}, {{word:ni3}} {{word:mo1}}-mo.",
    ttsText: "不要怕，你摸摸。",
  },
  exampleVerbs9: {
    type: "example",
    pinyin: "{{Word:xie4}}-xie, {{word:wo3}} {{word:kan4}}-kan.",
    ttsText: "谢谢，我看看。",
  },
  exampleVerbs10: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:jin4}}-{{word:lai2}} {{word:kan4}}-kan!",
    ttsText: "你进来看看！",
  },
  exampleVerbs11: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}} {{word:wan2r}}-wanr.",
    ttsText: "我们出去玩玩。",
  },
  exampleVerbs12: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:kan4}}-kan, {{word:ta1}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
    ttsText: "你看看，他很开心。",
  },
  proseDescribe: { type: "prose" },
  exampleDescribe1: {
    type: "example",
    pinyin: "{{Word:yue4}} {{word:yuan2}}-{{word:yuan2}}-{{word:de}}.",
    ttsText: "月圆圆的。",
  },
  exampleDescribe2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:re4}}-{{word:re4}}-{{word:de}} {{word:shui3}}.",
    ttsText: "我要热热的水。",
  },
  exampleDescribe3: {
    type: "example",
    pinyin: "{{Word:shui3guo3}} {{word:xiao3}}-{{word:xiao3}}-{{word:de}}, {{word:dan4shi4}} {{word:tian2}}-{{word:tian2}}-{{word:de}}.",
    ttsText: "水果小小的，但是甜甜的。",
  },
  exampleDescribe4: {
    type: "example",
    pinyin: "{{Word:hao3}}-{{word:hao3}} {{word:xue2}}!",
    ttsText: "好好学！",
  },
  exampleDescribe5: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:jue2de}} {{word:zhe4}}-ge {{word:hao3}}-{{word:hao3}}-{{word:de}}.",
    ttsText: "我觉得这个好好的。",
  },
  exampleDescribe6: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:yi1}}-{{word:dian3}}-{{word:dian3}} {{word:yan2}}.",
    ttsText: "我要一点点盐。",
  },
  exampleDescribe7: {
    type: "example",
    pinyin: "{{Word:zhi2wu4}} {{word:huo2}}-{{word:de}} {{word:hao3}}-{{word:hao3}}-{{word:de}}.",
    ttsText: "植物活得好好的。",
  },
  proseEvery: { type: "prose" },
  exampleEvery1: {
    type: "example",
    pinyin: "{{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:yao4}} {{word:shui3}}.",
    ttsText: "人人都要水。",
  },
  exampleEvery2: {
    type: "example",
    pinyin: "{{Word:ge4}}-{{word:ge4}} {{word:dou1}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "个个都很好。",
  },
  exampleEvery3: {
    type: "example",
    pinyin: "{{Word:jia1}}-{{word:jia1}} {{word:dou1}} {{word:you3}} {{word:huo3}}.",
    ttsText: "家家都有火。",
  },
  exampleEvery4: {
    type: "example",
    pinyin: "{{Word:ci4}}-{{word:ci4}} {{word:dou1}} {{word:yi1yang4}}.",
    ttsText: "次次都一样。",
  },
  exampleEvery5: {
    type: "example",
    pinyin: "{{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:xiao4}} {{word:le}}.",
    ttsText: "人人都笑了。",
  },
  exampleEvery6: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:jiao4}} {{word:shen2me}}? {{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:zhi1dao4}}.",
    ttsText: "他叫什么？人人都知道。",
  },
  infoDoubling: {
    type: "info",
    subtype: "grammar",
    tag: "words/doubling",
    items: [{}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  answer1: { type: "answer", ttsText: "我听听。" },
  answer2: { type: "answer", ttsText: "我们说说。" },
  answer3: { type: "answer", ttsText: "水冷冷的。" },
  answer4: { type: "answer", ttsText: "好好睡觉！" },
  answer5: { type: "answer", ttsText: "人人都有金。" },
  answer6: { type: "answer", ttsText: "次次都不同。" },
  faqLight: { type: "faq" },
  faqWhichVerbs: { type: "faq" },
  faqHaoHaoKan: { type: "faq" },
};

export default shape;
