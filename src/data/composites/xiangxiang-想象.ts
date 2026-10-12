import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1094,
  phase: 3,
  zh: "想象",
  py: "xiǎngxiàng",
  en: "imagine",
  ru: "представлять, воображать",
  pos: "verb",
  hsd: ["{{word:zai4}} {{word:xin1}}-{{word:li3}} {{word:kan4}}"],
  tts: ["在心里看"],
  literal: "see it in your heart",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:xin1}}-{{word:li3}} {{word:kan4}}.",
      hanzi: "我在心里看。",
      en: "I imagine it.",
      ru: "Я представляю это.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zai4}} {{word:xin1}}-{{word:li3}} {{word:kan4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "你在心里看这个。",
      en: "Imagine this.",
      ru: "Представь это.",
    },
  ],
});
