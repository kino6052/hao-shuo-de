import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 977,
  phase: 2,
  zh: "产品",
  py: "chǎnpǐn",
  en: "product",
  ru: "продукт",
  pos: "noun",
  hsd: ["{{word:dong1}}-{{light:xi1}}"],
  tts: ["东西"],
  literal: "a thing",
  fit: "word",
  topics: ["business-and-economy"],
  isA: ["made-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:mai3}} {{word:zhe4}}-{{light:ge4}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我买这个东西。",
      en: "I buy this product.",
      ru: "Я покупаю этот товар.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个东西很好。",
      en: "This product is good.",
      ru: "Этот товар хороший.",
    },
  ],
});
