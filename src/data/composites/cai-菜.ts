import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 245,
  phase: 1,
  zh: "菜",
  py: "cài",
  en: "vegetable; dish",
  ru: "овощи; блюдо",
  pos: "noun",
  hsd: ["{{word:chi1}}-{{word:de}} {{word:zhi2wu4}}"],
  tts: ["吃的植物"],
  literal: "plants you eat",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ma1ma}} {{word:mai3}} {{word:le}} {{word:chi1}}-{{word:de}} {{word:zhi2wu4}}.",
      hanzi: "妈妈买了吃的植物。",
      en: "Mom bought vegetables.",
      ru: "Мама купила овощи.",
    },
    {
      pinyin: "{{Word:chi1}}-{{word:de}} {{word:zhi2wu4}} {{word:dui4}} {{word:shen1ti3}} {{word:hao3}}.",
      hanzi: "吃的植物对身体好。",
      en: "Vegetables are good for you.",
      ru: "Овощи полезны для здоровья.",
    },
  ],
});
