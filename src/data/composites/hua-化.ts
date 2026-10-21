import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 619,
  phase: 2,
  zh: "化",
  py: "huà",
  en: "change into, -ize",
  ru: "превращаться",
  pos: "suffix",
  hsd: ["{{word:bian4}}"],
  tts: ["变"],
  fit: "word",
  topics: ["changing"],
  isA: ["becoming"],
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:bian4}} {{word:re4}} {{word:le}}.",
      hanzi: "水变热了。",
      en: "The water got hot.",
      ru: "Вода стала горячей.",
    },
    {
      pinyin: "{{Word:tian1}} {{word:bian4}} {{word:leng3}} {{word:le}}.",
      hanzi: "天变冷了。",
      en: "It's turned cold.",
      ru: "Стало холодно.",
    },
  ],
});
