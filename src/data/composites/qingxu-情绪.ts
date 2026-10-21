import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1331,
  phase: 3,
  zh: "情绪",
  py: "qíngxù",
  en: "mood",
  ru: "настроение",
  pos: "noun",
  hsd: [
    "{{word:xin1}}-{{word:li3}}-{{word:de}} {{word:yang4}}-{{light:zi}}",
    "{{word:xin1}}-{{word:li3}}",
  ],
  tts: ["心里的样子", "心里"],
  literal: "in the heart",
  fit: "natural",
  topics: ["happy-feelings"],
  isA: ["feeling-name"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:xin1}}-{{word:li3}}-{{word:de}} {{word:yang4}}-{{word:zi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他心里的样子很好。",
      en: "He is in a good mood.",
      ru: "У него хорошее настроение.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xin1}}-{{word:li3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我心里很好。",
      en: "My mood is good.",
      ru: "У меня хорошее настроение.",
    },
  ],
});
