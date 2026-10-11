import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 485,
  phase: 1,
  zh: "雨",
  py: "yǔ",
  en: "rain",
  ru: "дождь",
  pos: "noun",
  hsd: ["{{word:cong2}}-{{word:tian1}}-{{word:xia4}}-{{word:lai2}}-{{word:de}} {{word:shui3}}"],
  tts: ["从天下来的水"],
  literal: "water that comes down from the sky",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:cong2}}-{{word:tian1}}-{{word:xia4}}-{{word:lai2}}-{{word:de}} {{word:shui3}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "从天下来的水很冷。",
      en: "The rain is cold.",
      ru: "Дождь холодный.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:cong2}}-{{word:tian1}}-{{word:xia4}}-{{word:lai2}}-{{word:de}} {{word:shui3}}.",
      hanzi: "我爱从天下来的水。",
      en: "I love the rain.",
      ru: "Я люблю дождь.",
    },
  ],
});
