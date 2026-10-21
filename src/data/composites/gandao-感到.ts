import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1333,
  phase: 3,
  zh: "感到",
  py: "gǎndào",
  en: "feel",
  ru: "чувствовать",
  pos: "verb",
  hsd: ["{{word:jue2}}-{{light:de2}}"],
  tts: ["觉得"],
  fit: "word",
  topics: ["happy-feelings"],
  isA: ["feeling-and-wanting"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{word:de2}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "我觉得很冷。",
      en: "I feel cold.",
      ru: "Мне холодно.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:jue2}}-{{word:de2}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
      hanzi: "他觉得很开心。",
      en: "He feels happy.",
      ru: "Ему весело.",
    },
  ],
});
