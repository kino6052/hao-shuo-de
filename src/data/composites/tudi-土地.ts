import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1064,
  phase: 3,
  zh: "土地",
  py: "tǔdì",
  en: "land",
  ru: "земля",
  pos: "noun",
  hsd: ["{{word:di4}}"],
  tts: ["地"],
  fit: "word",
  topics: ["land-and-water"],
  isA: ["landform"],
  examples: [
    {
      pinyin: "{{Word:di4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "地很大。",
      en: "The land is big.",
      ru: "Земля большая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:di4}}.",
      hanzi: "我有地。",
      en: "I have land.",
      ru: "У меня есть земля.",
    },
  ],
});
