import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1090,
  phase: 3,
  zh: "心理",
  py: "xīnlǐ",
  en: "psychology, mind",
  ru: "психика, психология",
  pos: "noun",
  hsd: ["{{word:xin1}}-{{word:li3}}"],
  tts: ["心里"],
  literal: "in the heart",
  fit: "natural",
  topics: ["mind-and-imagination"],
  isA: ["idea"],
  note: "Real Mandarin: 心理.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:xin1}}-{{word:li3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他心里很好。",
      en: "His mind is healthy.",
      ru: "У него здоровая психика.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xin1}}-{{word:li3}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "我心里很冷。",
      en: "I feel cold inside.",
      ru: "Мне холодно внутри.",
    },
  ],
});
