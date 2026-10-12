import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1244,
  phase: 3,
  zh: "价钱",
  py: "jiàqián",
  en: "price",
  ru: "цена",
  pos: "noun",
  hsd: ["{{word:duo1}}-{{word:shao3}} {{word:jin1}}"],
  tts: ["多少金"],
  literal: "how much money",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:duo1}}-{{word:shao3}} {{word:jin1}}?",
      hanzi: "这个多少金？",
      en: "What's the price of this?",
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
