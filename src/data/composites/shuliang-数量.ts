import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1113,
  phase: 3,
  zh: "数量",
  py: "shùliàng",
  en: "quantity, amount",
  ru: "количество",
  pos: "noun",
  hsd: ["{{word:duo1}}-{{word:shao3}}"],
  tts: ["多少"],
  literal: "how many",
  fit: "plain",
  topics: ["much-and-little"],
  isA: ["amount-word"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:duo1}}-{{word:shao3}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这个多少很大。",
      en: "The quantity is large.",
      ru: "Количество большое.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:duo1}}-{{word:shao3}}.",
      hanzi: "我看多少。",
      en: "I look at the quantity.",
      ru: "Я смотрю на количество.",
    },
  ],
});
