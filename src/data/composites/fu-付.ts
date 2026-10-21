import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 735,
  phase: 2,
  zh: "付",
  py: "fù",
  en: "pay",
  ru: "платить",
  pos: "verb",
  hsd: ["{{word:gei3}} {{word:jin1}}"],
  tts: ["给金"],
  literal: "give money",
  fit: "natural",
  topics: ["paying-and-spending"],
  isA: ["trade-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:jin1}}.",
      hanzi: "我给金。",
      en: "I pay.",
      ru: "Я плачу.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:gei3}} {{word:ta1}} {{word:jin1}} {{word:ma}}?",
      hanzi: "你给他金吗？",
      en: "Are you paying him?",
      ru: "Ты платишь ему?",
    },
  ],
});
