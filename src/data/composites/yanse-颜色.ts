import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 335,
  phase: 1,
  zh: "颜色",
  py: "yánsè",
  en: "color",
  ru: "цвет",
  pos: "noun",
  hsd: ["{{word:yan2se4}}"],
  tts: ["颜色"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:ai4}} {{word:shen2me}} {{word:yan2se4}}?",
      hanzi: "你爱什么颜色？",
      en: "What color do you love?",
      ru: "Какой цвет ты любишь?",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:yan2se4}} {{word:hen3}} {{word:hao3}}-{{word:kan4}}.",
      hanzi: "这个颜色很好看。",
      en: "This color is pretty.",
      ru: "Этот цвет красивый.",
    },
  ],
});
