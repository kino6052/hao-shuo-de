// Language-independent block sequence for lesson-20 ("Relationships 2 — Linking sentences").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): because (yīnwèi), but (dànshì), and if (X-de huà), with yán and sǐ.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- lesson-20).
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
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "because". */
  vocabYinwei: TVocab;
  /** Vocabulary: "but". */
  vocabDanshi: TVocab;
  /** Vocabulary: "salt". */
  vocabYan: TVocab;
  /** Vocabulary: "die; dead". */
  vocabSi: TVocab;
  /** Vocabulary: "X-de huà: "if X"". */
  vocabHua: TVocab;
  /** Say: To say why, put yīnwèi (because) before the reason. Pattern: yīnwèi + reason, result */
  proseBecause: TProse;
  /** Example: yīnwèi wǒ hěn lěng, wǒ bù qù wài-miàn. */
  exampleBecause1: TExample;
  /** Example: wǒ bù chī, yīnwèi wǒ chī-wán le. */
  exampleBecause2: TExample;
  /** Example: yīnwèi méi-yǒu shuǐ, zhíwù sǐ le. */
  exampleBecause3: TExample;
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
  /** Say: To say "if", put -de huà after the if-part, then a comma. Pattern: X-de huà, the rest */
  proseIf: TProse;
  /** Example: nǐ lái-de huà, wǒ děng nǐ. */
  exampleIf1: TExample;
  /** Example: nǐ lěng-de huà, wǒ gěi nǐ yīfu. */
  exampleIf2: TExample;
  /** Example: zhíwù méi-yǒu shuǐ-de huà, tā huì sǐ. */
  exampleIf3: TExample;
  /** Example: méi-yǒu shuǐ, zhíwù huì sǐ. */
  exampleIf4: TExample;
  /** Grammar box: yīnwèi, dànshì, X-de huà. */
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
  /** Answer 1: yīnwèi wǒ hěn lěng, wǒ yào yīfu. */
  answer1: TAnswer;
  /** Answer 2: wǒ yào chī, dànshì wǒ méi-yǒu jīn. */
  answer2: TAnswer;
  /** Answer 3: nǐ yào-de huà, wǒ gěi nǐ. */
  answer3: TAnswer;
  /** Answer 4: zhíwù sǐ le. */
  answer4: TAnswer;
  /** Answer 5: wǒ yào yán. */
  answer5: TAnswer;
  /** Answer 6: nǐ lěng-de huà, lái lǐ-miàn. */
  answer6: TAnswer;
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
  proseIf: { type: "prose" },
  exampleIf1: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:lai2}}-{{word:de}} {{word:hua4}}, {{word:wo3}} {{word:deng3}} {{word:ni3}}.",
    ttsText: "你来的话，我等你。",
  },
  exampleIf2: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:leng3}}-{{word:de}} {{word:hua4}}, {{word:wo3}} {{word:gei3}} {{word:ni3}} {{word:yi1fu}}.",
    ttsText: "你冷的话，我给你衣服。",
  },
  exampleIf3: {
    type: "example",
    pinyin: "{{Word:zhi2wu4}} {{word:mei2}}-{{word:you3}} {{word:shui3}}-{{word:de}} {{word:hua4}}, {{word:ta1}} {{word:hui4}} {{word:si3}}.",
    ttsText: "植物没有水的话，它会死。",
  },
  exampleIf4: {
    type: "example",
    pinyin: "{{Word:mei2}}-{{word:you3}} {{word:shui3}}, {{word:zhi2wu4}} {{word:hui4}} {{word:si3}}.",
    ttsText: "没有水，植物会死。",
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
  answer1: { type: "answer", ttsText: "因为我很冷，我要衣服。" },
  answer2: { type: "answer", ttsText: "我要吃，但是我没有金。" },
  answer3: { type: "answer", ttsText: "你要的话，我给你。" },
  answer4: { type: "answer", ttsText: "植物死了。" },
  answer5: { type: "answer", ttsText: "我要盐。" },
  answer6: { type: "answer", ttsText: "你冷的话，来里面。" },
};

export default shape;
