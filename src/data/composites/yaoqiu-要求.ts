import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 702,
  phase: 2,
  zh: "要求",
  py: "yāoqiú",
  en: "demand",
  ru: "требовать",
  pos: "verb",
  hsd: ["{{word:yao4}}"],
  tts: ["要"],
  fit: "word",
  topics: ["liking-and-wanting"],
  isA: ["feeling-and-wanting"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:shui3}}.",
      hanzi: "我要水。",
      en: "I ask for water.",
      ru: "Я прошу воды.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yao4}} {{word:wo3}} {{word:lai2}}.",
      hanzi: "他要我来。",
      en: "He asks me to come.",
      ru: "Он требует, чтобы я пришёл.",
    },
  ],
});
