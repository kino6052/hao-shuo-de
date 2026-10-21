import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1127,
  phase: 3,
  zh: "服装",
  py: "fúzhuāng",
  en: "clothing",
  ru: "одежда",
  pos: "noun",
  hsd: ["{{word:yi1fu}}"],
  tts: ["衣服"],
  fit: "word",
  topics: ["everyday-clothes"],
  isA: ["garment"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:mai3}} {{word:yi1fu}}.",
      hanzi: "我买衣服。",
      en: "I buy clothing.",
      ru: "Я покупаю одежду.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:yi1fu}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他的衣服很好。",
      en: "His clothing is nice.",
      ru: "Его одежда хорошая.",
    },
  ],
});
