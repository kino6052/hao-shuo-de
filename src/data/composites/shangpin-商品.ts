import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1061,
  phase: 3,
  zh: "商品",
  py: "shāngpǐn",
  en: "product, goods",
  ru: "товар",
  pos: "noun",
  hsd: ["{{word:mai3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["买的东西"],
  literal: "things to buy",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:mai3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有买的东西。",
      en: "I have goods.",
      ru: "У меня есть товары.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:mai3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是买的东西。",
      en: "These are goods.",
      ru: "Это товары.",
    },
  ],
});
