// Language-independent block sequence for linking-sentences ("Relationships 2 — Linking sentences").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see sounds-and-symbols's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): because (yīnwèi), but (dànshì), and if (rúguǒ, D46), with yán, sǐ, and huó.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- linking-sentences).
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
  /** Relationships 2 — Linking sentences */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "because". */
  vocabYinwei: TVocab;
  /** Vocabulary: "die; dead". */
  vocabSi: TVocab;
  /** Vocabulary: "live; alive". */
  vocabHuo: TVocab;
  /** Say: To say why, put yīnwèi (because) before the reason. Pattern: yīnwèi + reason, result */
  proseBecause: TProse;
  /** Example: yīnwèi wǒ hěn lěng, wǒ bù qù wài-miàn. */
  exampleBecause1: TExample;
  /** Example: wǒ bù chī, yīnwèi wǒ chī-wán le. */
  exampleBecause2: TExample;
  /** Example: yīnwèi méi-yǒu shuǐ, zhíwù sǐ le. */
  exampleBecause3: TExample;
  /** Example: nǐ wèishénme bù chī? yīnwèi hěn rè. */
  exampleBecause4: TExample;
  /** Example: yīnwèi hěn rè, wǒ-de pífū biàn hóngsè le. */
  exampleBecause5: TExample;
  /** Example: yīnwèi tā mō le ní, tā-de shǒu shì hēisè-de. */
  exampleBecause6: TExample;
  /** Example: yīnwèi yǒu kōngqì, wǒ-men néng huó. */
  exampleBecause7: TExample;
  /** Example: yīnwèi hěn rè, wǒ guān le huǒ. */
  exampleBecause8: TExample;
  /** Example: yīnwèi kōngqì hěn lěng, wǒ bù chū-qù. */
  exampleBecause9: TExample;
  /** Example: yīnwèi lù hěn yuǎn, wǒ-men bù qù. */
  exampleBecause10: TExample;
  /** Example: yīnwèi jiā hěn luàn, wǒ-men chū-qù wánr. */
  exampleBecause11: TExample;
  /** Example: yīnwèi tā-de jiǎo huài le, tā zhàn-bù-qǐ-lái. */
  exampleBecause12: TExample;
  /** Vocabulary: "but". */
  vocabDanshi: TVocab;
  /** Vocabulary: "salt". */
  vocabYan: TVocab;
  /** Say: To say but, put dànshì at the start of the second part. Pattern: sentence, dànshì + sentence */
  proseBut: TProse;
  /** Example: zhè-ge hěn hǎo, dànshì méi-yǒu yán. */
  exampleBut1: TExample;
  /** Example: wǒ yào qù, dànshì wǒ méi-yǒu jīn. */
  exampleBut2: TExample;
  /** Example: tā hěn xiǎo, dànshì hěn yǒu lìliàng. */
  exampleBut3: TExample;
  /** Example: mǐfàn-lǐ yǒu yán. */
  exampleBut4: TExample;
  /** Example: zhè-ge shuǐguǒ shì huángsè-de, dànshì bù tián. */
  exampleBut5: TExample;
  /** Example: zhè-ge fāngfǎ hěn qíguài, dànshì hěn hǎo. */
  exampleBut6: TExample;
  /** Example: wǒ yǒu jiǔ-ge, dànshì tā yǒu èr-shí-ge. */
  exampleBut7: TExample;
  /** Example: zhíwù hěn xiǎo, dànshì huó le. */
  exampleBut8: TExample;
  /** Example: zhè-ge hěn hǎo, dànshì yǒu yī-diǎn dà. */
  exampleBut9: TExample;
  /** Example: tā hěn lǎo, dànshì tā hěn kuài. */
  exampleBut10: TExample;
  /** Vocabulary: "if". */
  vocabRuguo: TVocab;
  /** Say: To say "if", put rúguǒ at the start of the if-part, then a comma. Pattern: rúguǒ X, the rest */
  proseIf: TProse;
  /** Example: rúguǒ nǐ lái, wǒ děng nǐ. */
  exampleIf1: TExample;
  /** Example: rúguǒ nǐ lěng, wǒ gěi nǐ yīfu. */
  exampleIf2: TExample;
  /** Example: rúguǒ zhíwù méi-yǒu shuǐ, tā huì sǐ. */
  exampleIf3: TExample;
  /** Example: méi-yǒu shuǐ, zhíwù huì sǐ. */
  exampleIf4: TExample;
  /** Example: rúguǒ wǔ-hào bù zài, wǒ-men děng. */
  exampleIf5: TExample;
  /** Example: rúguǒ nǐ bù zhīdào zhè-ge cí, wèn wǒ. */
  exampleIf6: TExample;
  /** Example: rúguǒ nǐ yào, chī mǐfàn huòzhě shuǐguǒ. */
  exampleIf7: TExample;
  /** Example: rúguǒ yǒu shuǐ, zhíwù néng huó. */
  exampleIf8: TExample;
  /** Example: rúguǒ nà-ge dìfāng yuǎn, wǒ bù qù. */
  exampleIf9: TExample;
  /** Example: rúguǒ nǐ huí-lái, wǒ-men chī mǐfàn. */
  exampleIf10: TExample;
  /** Grammar box: yīnwèi, dànshì, rúguǒ (with huó). */
  infoLinkingSentences: TInfo;
  /** Exercise 1: Because I'm cold, I want clothes. */
  exercise1: TExercise;
  /** Exercise 2: I want to eat, but I have no money. */
  exercise2: TExercise;
  /** Exercise 3: If you want it, I'll give it to you. */
  exercise3: TExercise;
  /** Exercise 4: The plant died. */
  exercise4: TExercise;
  /** Exercise 5: I want salt. */
  exercise5: TExercise;
  /** Exercise 6: If you're cold, come inside. */
  exercise6: TExercise;
  /** Exercise 7: If there's air, we can live. */
  exercise7: TExercise;
  /** Answer 1: yīnwèi wǒ hěn lěng, wǒ yào yīfu. */
  answer1: TAnswer;
  /** Answer 2: wǒ yào chī, dànshì wǒ méi-yǒu jīn. */
  answer2: TAnswer;
  /** Answer 3: rúguǒ nǐ yào, wǒ gěi nǐ. */
  answer3: TAnswer;
  /** Answer 4: zhíwù sǐ le. */
  answer4: TAnswer;
  /** Answer 5: wǒ yào yán. */
  answer5: TAnswer;
  /** Answer 6: rúguǒ nǐ lěng, lái lǐ-miàn. */
  answer6: TAnswer;
  /** Answer 7: rúguǒ yǒu kōngqì, wǒ-men néng huó. */
  answer7: TAnswer;
  /** FAQ: do I need a word for "so" after yīnwèi? */
  faqSo: TFaq;
  /** FAQ: where does rúguǒ go? (at the start of the if-part, before or after the who) */
  faqIfWord: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabYinwei: {
    type: "vocab",
    term: "{{word:yin1wei4}}",
    ttsText: "因为",
  },
  vocabSi: { type: "vocab", term: "{{word:si3}}", ttsText: "死" },
  vocabHuo: { type: "vocab", term: "{{word:huo2}}", ttsText: "活" },
  proseBecause: { type: "prose" },
  exampleBecause1: {
    type: "example",
    pinyin: "{{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}} {{word:wai4}}-{{word:mian4}}.",
    ttsText: "因为我很冷，我不去外面。",
  },
  exampleBecause2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:bu4}} {{word:chi1}}, {{word:yin1wei4}} {{word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}.",
    ttsText: "我不吃，因为我吃完了。",
  },
  exampleBecause3: {
    type: "example",
    pinyin: "{{Word:yin1wei4}} {{word:mei2}}-{{word:you3}} {{word:shui3}}, {{word:zhi2wu4}} {{word:si3}} {{word:le}}.",
    ttsText: "因为没有水，植物死了。",
  },
  exampleBecause4: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:wei4shen2me}} {{word:bu4}} {{word:chi1}}? {{Word:yin1wei4}} {{word:hen3}} {{word:re4}}.",
    ttsText: "你为什么不吃？因为很热。",
  },
  exampleBecause5: {
    type: "example",
    pinyin: "{{Word:yin1wei4}} {{word:hen3}} {{word:re4}}, {{word:wo3}}-{{word:de}} {{word:pi2fu1}} {{word:bian4}} {{word:hong2se4}} {{word:le}}.",
    ttsText: "因为很热，我的皮肤变红色了。",
  },
  exampleBecause6: {
    type: "example",
    pinyin: "{{Word:yin1wei4}} {{word:ta1}} {{word:mo1}} {{word:le}} {{word:ni2}}, {{word:ta1}}-{{word:de}} {{word:shou3}} {{word:shi4}} {{word:hei1se4}}-{{word:de}}.",
    ttsText: "因为他摸了泥，他的手是黑色的。",
  },
  exampleBecause7: {
    type: "example",
    pinyin: "{{Word:yin1wei4}} {{word:you3}} {{word:kong1qi4}}, {{word:wo3}}-{{word:men}} {{word:neng2}} {{word:huo2}}.",
    ttsText: "因为有空气，我们能活。",
  },
  exampleBecause8: {
    type: "example",
    pinyin: "{{Word:yin1wei4}} {{word:hen3}} {{word:re4}}, {{word:wo3}} {{word:guan1}} {{word:le}} {{word:huo3}}.",
    ttsText: "因为很热，我关了火。",
  },
  exampleBecause9: {
    type: "example",
    pinyin: "{{Word:yin1wei4}} {{word:kong1qi4}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:chu1}}-{{word:qu4}}.",
    ttsText: "因为空气很冷，我不出去。",
  },
  exampleBecause10: {
    type: "example",
    pinyin: "{{Word:yin1wei4}} {{word:lu4}} {{word:hen3}} {{word:yuan3}}, {{word:wo3}}-{{word:men}} {{word:bu4}} {{word:qu4}}.",
    ttsText: "因为路很远，我们不去。",
  },
  exampleBecause11: {
    type: "example",
    pinyin: "{{Word:yin1wei4}} {{word:jia1}} {{word:hen3}} {{word:luan4}}, {{word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}} {{word:wan2r}}.",
    ttsText: "因为家很乱，我们出去玩儿。",
  },
  exampleBecause12: {
    type: "example",
    pinyin: "{{Word:yin1wei4}} {{word:ta1}}-{{word:de}} {{word:jiao3}} {{word:huai4}} {{word:le}}, {{word:ta1}} {{word:zhan4}}-{{word:bu4}}-{{word:qi3}}-{{word:lai2}}.",
    ttsText: "因为他的脚坏了，他站不起来。",
  },
  vocabDanshi: {
    type: "vocab",
    term: "{{word:dan4shi4}}",
    ttsText: "但是",
  },
  vocabYan: { type: "vocab", term: "{{word:yan2}}", ttsText: "盐" },
  proseBut: { type: "prose" },
  exampleBut1: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:hen3}} {{word:hao3}}, {{word:dan4shi4}} {{word:mei2}}-{{word:you3}} {{word:yan2}}.",
    ttsText: "这个很好，但是没有盐。",
  },
  exampleBut2: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:yao4}} {{word:qu4}}, {{word:dan4shi4}} {{word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
    ttsText: "我要去，但是我没有金。",
  },
  exampleBut3: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:hen3}} {{word:xiao3}}, {{word:dan4shi4}} {{word:hen3}} {{word:you3}} {{word:li4liang4}}.",
    ttsText: "他很小，但是很有力量。",
  },
  exampleBut4: {
    type: "example",
    pinyin: "{{Word:mi3fan4}}-{{word:li3}} {{word:you3}} {{word:yan2}}.",
    ttsText: "米饭里有盐。",
  },
  exampleBut5: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:shui3guo3}} {{word:shi4}} {{word:huang2se4}}-{{word:de}}, {{word:dan4shi4}} {{word:bu4}} {{word:tian2}}.",
    ttsText: "这个水果是黄色的，但是不甜。",
  },
  exampleBut6: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:fang1fa3}} {{word:hen3}} {{word:qi2guai4}}, {{word:dan4shi4}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "这个方法很奇怪，但是很好。",
  },
  exampleBut7: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:you3}} {{word:jiu3}}-ge, {{word:dan4shi4}} {{word:ta1}} {{word:you3}} {{word:er4}}-{{word:shi2}}-ge.",
    ttsText: "我有九个，但是他有二十个。",
  },
  exampleBut8: {
    type: "example",
    pinyin: "{{Word:zhi2wu4}} {{word:hen3}} {{word:xiao3}}, {{word:dan4shi4}} {{word:huo2}} {{word:le}}.",
    ttsText: "植物很小，但是活了。",
  },
  exampleBut9: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:hen3}} {{word:hao3}}, {{word:dan4shi4}} {{word:you3}} {{word:yi1}}-{{word:dian3}} {{word:da4}}.",
    ttsText: "这个很好，但是有一点大。",
  },
  exampleBut10: {
    type: "example",
    pinyin: "{{Word:ta1}} {{word:hen3}} {{word:lao3}}, {{word:dan4shi4}} {{word:ta1}} {{word:hen3}} {{word:kuai4}}.",
    ttsText: "他很老，但是他很快。",
  },
  vocabRuguo: { type: "vocab", term: "{{word:ru2guo3}}", ttsText: "如果" },
  proseIf: { type: "prose" },
  exampleIf1: {
    type: "example",
    pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:deng3}} {{word:ni3}}.",
    ttsText: "如果你来，我等你。",
  },
  exampleIf2: {
    type: "example",
    pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:leng3}}, {{word:wo3}} {{word:gei3}} {{word:ni3}} {{word:yi1fu}}.",
    ttsText: "如果你冷，我给你衣服。",
  },
  exampleIf3: {
    type: "example",
    pinyin: "{{Word:ru2guo3}} {{word:zhi2wu4}} {{word:mei2}}-{{word:you3}} {{word:shui3}}, {{word:ta1}} {{word:hui4}} {{word:si3}}.",
    ttsText: "如果植物没有水，它会死。",
  },
  exampleIf4: {
    type: "example",
    pinyin: "{{Word:mei2}}-{{word:you3}} {{word:shui3}}, {{word:zhi2wu4}} {{word:hui4}} {{word:si3}}.",
    ttsText: "没有水，植物会死。",
  },
  exampleIf5: {
    type: "example",
    pinyin: "{{Word:ru2guo3}} {{word:wu3}}-{{word:hao4}} {{word:bu4}} {{word:zai4}}, {{word:wo3}}-{{word:men}} {{word:deng3}}.",
    ttsText: "如果五号不在，我们等。",
  },
  exampleIf6: {
    type: "example",
    pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:bu4}} {{word:zhi1dao4}} {{word:zhe4}}-ge {{word:ci2}}, {{word:wen4}} {{word:wo3}}.",
    ttsText: "如果你不知道这个词，问我。",
  },
  exampleIf7: {
    type: "example",
    pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:yao4}}, {{word:chi1}} {{word:mi3fan4}} {{word:huo4zhe3}} {{word:shui3guo3}}.",
    ttsText: "如果你要，吃米饭或者水果。",
  },
  exampleIf8: {
    type: "example",
    pinyin: "{{Word:ru2guo3}} {{word:you3}} {{word:shui3}}, {{word:zhi2wu4}} {{word:neng2}} {{word:huo2}}.",
    ttsText: "如果有水，植物能活。",
  },
  exampleIf9: {
    type: "example",
    pinyin: "{{Word:ru2guo3}} {{word:na4}}-ge {{word:di4fang1}} {{word:yuan3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}}.",
    ttsText: "如果那个地方远，我不去。",
  },
  exampleIf10: {
    type: "example",
    pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:hui2}}-{{word:lai2}}, {{word:wo3}}-{{word:men}} {{word:chi1}} {{word:mi3fan4}}.",
    ttsText: "如果你回来，我们吃米饭。",
  },
  infoLinkingSentences: {
    type: "info",
    subtype: "grammar",
    tag: "relationships/linking-sentences",
    items: [{}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  exercise7: { type: "exercise" },
  answer1: { type: "answer", ttsText: "因为我很冷，我要衣服。" },
  answer2: { type: "answer", ttsText: "我要吃，但是我没有金。" },
  answer3: { type: "answer", ttsText: "如果你要，我给你。" },
  answer4: { type: "answer", ttsText: "植物死了。" },
  answer5: { type: "answer", ttsText: "我要盐。" },
  answer6: { type: "answer", ttsText: "如果你冷，来里面。" },
  answer7: { type: "answer", ttsText: "如果有空气，我们能活。" },
  faqSo: { type: "faq" },
  faqIfWord: { type: "faq" },
};

export default shape;
