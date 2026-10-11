import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 781,
  phase: 2,
  zh: "蔬菜",
  py: "shūcài",
  en: "vegetable",
  ru: "овощи",
  pos: "noun",
  hsd: ["{{word:chi1}}-{{word:de}} {{word:zhi2wu4}}"],
  tts: ["吃的植物"],
  literal: "plants you eat",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:chi1}}-{{word:de}} {{word:zhi2wu4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "吃的植物很好。",
      en: "The vegetables are good.",
      ru: "Овощи хорошие.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:chi1}}-{{word:de}} {{word:zhi2wu4}}.",
      hanzi: "我要吃的植物。",
      en: "I want vegetables.",
      ru: "Я хочу овощей.",
    },
  ],
});
