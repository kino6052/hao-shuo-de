import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1021,
  phase: 3,
  zh: "价格",
  py: "jiàgé",
  en: "price",
  ru: "цена",
  pos: "noun",
  hsd: ["{{word:duo1}}-{{word:shao3}} {{word:jin1}}"],
  tts: ["多少金"],
  literal: "how much money",
  fit: "plain",
  topics: ["money-and-paying"],
  isA: ["money-thing"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:duo1}}-{{word:shao3}} {{word:jin1}}?",
      hanzi: "这个多少金？",
      en: "What is the price?",
      ru: "Сколько это стоит?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:duo1}}-{{word:shao3}} {{word:jin1}}.",
      hanzi: "我不知道多少金。",
      en: "I don't know the price.",
      ru: "Я не знаю цену.",
    },
  ],
});
