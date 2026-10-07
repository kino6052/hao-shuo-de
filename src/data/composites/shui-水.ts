import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 11,
  phase: 1,
  zh: "水",
  py: "shuǐ",
  en: "water",
  ru: "вода",
  pos: "noun",
  hsd: ["{{word:shui3}}"],
  tts: ["水"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:he1}} {{word:shui3}}.",
      hanzi: "我要喝水。",
      en: "I want to drink some water.",
      ru: "Я хочу пить.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "水很冷。",
      en: "The water is cold.",
      ru: "Вода холодная.",
    },
  ],
});
