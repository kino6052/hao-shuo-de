// Language-independent block sequence for lesson-17 ("Colors").
// See src/lib/chapter-shape-types.ts / assemble-chapter.js.
// LessonShape is this lesson's exact, hand-written type -- see lesson-01's
// shape.ts for the full explanation of the pattern.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): color-de + noun, thing + shì + color-de, and asking shénme yánsè.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- lesson-17).
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
  /** Colors */
  title: TTitle;
  /** Chapter summary: why you'd want this, then what you'll be able to say. */
  summary: TSummary;
  /** Vocabulary: "white". */
  vocabBaise: TVocab;
  /** Vocabulary: "black". */
  vocabHeise: TVocab;
  /** Vocabulary: "red". */
  vocabHongse: TVocab;
  /** Vocabulary: "yellow". */
  vocabHuangse: TVocab;
  /** Say: To say a thing's color, put the color and -de before it. Pattern: color-de + noun */
  proseColorThing: TProse;
  /** Example: hóngsè-de hézi. */
  exampleColorThing1: TExample;
  /** Example: báisè-de yīfu. */
  exampleColorThing2: TExample;
  /** Example: hēisè-de dòngwù. */
  exampleColorThing3: TExample;
  /** Example: huángsè-de shuǐguǒ. */
  exampleColorThing4: TExample;
  /** Example: bǎ hóngsè-de yīfu fàng zài zhè-lǐ. */
  exampleColorThing5: TExample;
  /** Vocabulary: "blue, green". */
  vocabLanse: TVocab;
  /** Say: To say what color something is, put shì before the color, and -de after it. Pattern: Thing + shì + color-de */
  proseIsColor: TProse;
  /** Example: hézi shì hóngsè-de. */
  exampleIsColor1: TExample;
  /** Example: shuǐ shì lánsè-de. */
  exampleIsColor2: TExample;
  /** Example: wǒ-de yīfu shì báisè-de. */
  exampleIsColor3: TExample;
  /** Example: yuè shì huángsè-de. */
  exampleIsColor4: TExample;
  /** Example: dì-shàng-de ní shì hēisè-de. */
  exampleIsColor5: TExample;
  /** Example: huǒ shì hóngsè-de. */
  exampleIsColor6: TExample;
  /** Example: zhè-ge dòngwù-de shēntǐ shì huángsè-de. */
  exampleIsColor7: TExample;
  /** Example: yuè shì yuán-de, yě shì báisè-de. */
  exampleIsColor8: TExample;
  /** Example: sì-ge dòngwù shì báisè-de, wǔ-ge shì hēisè-de. */
  exampleIsColor9: TExample;
  /** Example: qī-ge hézi shì hóngsè-de, bā-ge shì lánsè-de. */
  exampleIsColor10: TExample;
  /** Example: tā-de yīfu dōu shì hēisè-de. */
  exampleIsColor11: TExample;
  /** Vocabulary: "color". */
  vocabYanse: TVocab;
  /** Say: To ask "what color?", say shénme yánsè where the color would go. Pattern: Thing + shì shénme yánsè? */
  proseWhatColor: TProse;
  /** Example: nǐ-de yīfu shì shénme yánsè? */
  exampleWhatColor1: TExample;
  /** Example: zhè-ge shuǐguǒ shì shénme yánsè? */
  exampleWhatColor2: TExample;
  /** Example: wǒ ài lánsè. */
  exampleWhatColor3: TExample;
  /** Example: zhè-ge yánsè hěn hǎo. */
  exampleWhatColor4: TExample;
  /** Example: zhè liǎng-ge hézi-de yánsè yīyàng. */
  exampleWhatColor5: TExample;
  /** Example: liù-hào shì shénme yánsè? */
  exampleWhatColor6: TExample;
  /** Example: nǐ yǒu biéde yánsè ma? */
  exampleWhatColor7: TExample;
  /** Example: zhè-zhǒng yánsè hěn hǎo. */
  exampleWhatColor8: TExample;
  /** Grammar box: color-de + noun, shì + color-de, shénme yánsè. */
  infoColors: TInfo;
  /** Exercise 1: a white box */
  exercise1: TExercise;
  /** Exercise 2: The fruit is yellow. */
  exercise2: TExercise;
  /** Exercise 3: What color is the plant? */
  exercise3: TExercise;
  /** Exercise 4: I want red clothes. */
  exercise4: TExercise;
  /** Exercise 5: The animal is black. */
  exercise5: TExercise;
  /** Exercise 6: The box is blue. */
  exercise6: TExercise;
  /** Answer 1: báisè-de hézi. */
  answer1: TAnswer;
  /** Answer 2: shuǐguǒ shì huángsè-de. */
  answer2: TAnswer;
  /** Answer 3: zhíwù shì shénme yánsè? */
  answer3: TAnswer;
  /** Answer 4: wǒ yào hóngsè-de yīfu. */
  answer4: TAnswer;
  /** Answer 5: dòngwù shì hēisè-de. */
  answer5: TAnswer;
  /** Answer 6: hézi shì lánsè-de. */
  answer6: TAnswer;
  /** FAQ: why does lánsè mean blue and green? (Hao-shuo-de choice; describe green) */
  faqLanBlueGreen: TFaq;
  /** FAQ: why shì hóngsè-de and not hěn hóngsè? */
  faqColorNoHen: TFaq;
};

const shape: LessonShape = {
  title: { type: "title" },
  summary: { type: "summary" },
  vocabBaise: { type: "vocab", term: "{{word:bai2se4}}", ttsText: "白色" },
  vocabHeise: { type: "vocab", term: "{{word:hei1se4}}", ttsText: "黑色" },
  vocabHongse: {
    type: "vocab",
    term: "{{word:hong2se4}}",
    ttsText: "红色",
  },
  vocabHuangse: {
    type: "vocab",
    term: "{{word:huang2se4}}",
    ttsText: "黄色",
  },
  proseColorThing: { type: "prose" },
  exampleColorThing1: {
    type: "example",
    pinyin: "{{Word:hong2se4}}-{{word:de}} {{word:he2zi}}.",
    ttsText: "红色的盒子。",
  },
  exampleColorThing2: {
    type: "example",
    pinyin: "{{Word:bai2se4}}-{{word:de}} {{word:yi1fu}}.",
    ttsText: "白色的衣服。",
  },
  exampleColorThing3: {
    type: "example",
    pinyin: "{{Word:hei1se4}}-{{word:de}} {{word:dong4wu4}}.",
    ttsText: "黑色的动物。",
  },
  exampleColorThing4: {
    type: "example",
    pinyin: "{{Word:huang2se4}}-{{word:de}} {{word:shui3guo3}}.",
    ttsText: "黄色的水果。",
  },
  exampleColorThing5: {
    type: "example",
    pinyin: "{{Word:ba3}} {{word:hong2se4}}-{{word:de}} {{word:yi1fu}} {{word:fang4}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
    ttsText: "把红色的衣服放在这里。",
  },
  vocabLanse: { type: "vocab", term: "{{word:lan2se4}}", ttsText: "蓝色" },
  proseIsColor: { type: "prose" },
  exampleIsColor1: {
    type: "example",
    pinyin: "{{Word:he2zi}} {{word:shi4}} {{word:hong2se4}}-{{word:de}}.",
    ttsText: "盒子是红色的。",
  },
  exampleIsColor2: {
    type: "example",
    pinyin: "{{Word:shui3}} {{word:shi4}} {{word:lan2se4}}-{{word:de}}.",
    ttsText: "水是蓝色的。",
  },
  exampleIsColor3: {
    type: "example",
    pinyin: "{{Word:wo3}}-{{word:de}} {{word:yi1fu}} {{word:shi4}} {{word:bai2se4}}-{{word:de}}.",
    ttsText: "我的衣服是白色的。",
  },
  exampleIsColor4: {
    type: "example",
    pinyin: "{{Word:yue4}} {{word:shi4}} {{word:huang2se4}}-{{word:de}}.",
    ttsText: "月是黄色的。",
  },
  exampleIsColor5: {
    type: "example",
    pinyin: "{{Word:di4}}-{{word:shang4}}-{{word:de}} {{word:ni2}} {{word:shi4}} {{word:hei1se4}}-{{word:de}}.",
    ttsText: "地上的泥是黑色的。",
  },
  exampleIsColor6: {
    type: "example",
    pinyin: "{{Word:huo3}} {{word:shi4}} {{word:hong2se4}}-{{word:de}}.",
    ttsText: "火是红色的。",
  },
  exampleIsColor7: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:dong4wu4}}-{{word:de}} {{word:shen1ti3}} {{word:shi4}} {{word:huang2se4}}-{{word:de}}.",
    ttsText: "这个动物的身体是黄色的。",
  },
  exampleIsColor8: {
    type: "example",
    pinyin: "{{Word:yue4}} {{word:shi4}} {{word:yuan2}}-{{word:de}}, {{word:ye3}} {{word:shi4}} {{word:bai2se4}}-{{word:de}}.",
    ttsText: "月是圆的，也是白色的。",
  },
  exampleIsColor9: {
    type: "example",
    pinyin: "{{Word:si4}}-ge {{word:dong4wu4}} {{word:shi4}} {{word:bai2se4}}-{{word:de}}, {{word:wu3}}-ge {{word:shi4}} {{word:hei1se4}}-{{word:de}}.",
    ttsText: "四个动物是白色的，五个是黑色的。",
  },
  exampleIsColor10: {
    type: "example",
    pinyin: "{{Word:qi1}}-ge {{word:he2zi}} {{word:shi4}} {{word:hong2se4}}-{{word:de}}, {{word:ba1}}-ge {{word:shi4}} {{word:lan2se4}}-{{word:de}}.",
    ttsText: "七个盒子是红色的，八个是蓝色的。",
  },
  exampleIsColor11: {
    type: "example",
    pinyin: "{{Word:ta1}}-{{word:de}} {{word:yi1fu}} {{word:dou1}} {{word:shi4}} {{word:hei1se4}}-{{word:de}}.",
    ttsText: "她的衣服都是黑色的。",
  },
  vocabYanse: { type: "vocab", term: "{{word:yan2se4}}", ttsText: "颜色" },
  proseWhatColor: { type: "prose" },
  exampleWhatColor1: {
    type: "example",
    pinyin: "{{Word:ni3}}-{{word:de}} {{word:yi1fu}} {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}?",
    ttsText: "你的衣服是什么颜色？",
  },
  exampleWhatColor2: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:shui3guo3}} {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}?",
    ttsText: "这个水果是什么颜色？",
  },
  exampleWhatColor3: {
    type: "example",
    pinyin: "{{Word:wo3}} {{word:ai4}} {{word:lan2se4}}.",
    ttsText: "我爱蓝色。",
  },
  exampleWhatColor4: {
    type: "example",
    pinyin: "{{Word:zhe4}}-ge {{word:yan2se4}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "这个颜色很好。",
  },
  exampleWhatColor5: {
    type: "example",
    pinyin: "{{Word:zhe4}} {{word:liang3}}-ge {{word:he2zi}}-{{word:de}} {{word:yan2se4}} {{word:yi1yang4}}.",
    ttsText: "这两个盒子的颜色一样。",
  },
  exampleWhatColor6: {
    type: "example",
    pinyin: "{{Word:liu4}}-{{word:hao4}} {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}?",
    ttsText: "六号是什么颜色？",
  },
  exampleWhatColor7: {
    type: "example",
    pinyin: "{{Word:ni3}} {{word:you3}} {{word:bie2de}} {{word:yan2se4}} {{word:ma}}?",
    ttsText: "你有别的颜色吗？",
  },
  exampleWhatColor8: {
    type: "example",
    pinyin: "{{Word:zhe4}}-{{word:zhong3}} {{word:yan2se4}} {{word:hen3}} {{word:hao3}}.",
    ttsText: "这种颜色很好。",
  },
  infoColors: {
    type: "info",
    subtype: "grammar",
    tag: "describing/colors",
    items: [{}, {}, {}],
  },
  exercise1: { type: "exercise" },
  exercise2: { type: "exercise" },
  exercise3: { type: "exercise" },
  exercise4: { type: "exercise" },
  exercise5: { type: "exercise" },
  exercise6: { type: "exercise" },
  answer1: { type: "answer", ttsText: "白色的盒子。" },
  answer2: { type: "answer", ttsText: "水果是黄色的。" },
  answer3: { type: "answer", ttsText: "植物是什么颜色？" },
  answer4: { type: "answer", ttsText: "我要红色的衣服。" },
  answer5: { type: "answer", ttsText: "动物是黑色的。" },
  answer6: { type: "answer", ttsText: "盒子是蓝色的。" },
  faqLanBlueGreen: { type: "faq" },
  faqColorNoHen: { type: "faq" },
};

export default shape;
