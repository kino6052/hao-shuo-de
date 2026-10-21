import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 722,
  phase: 2,
  zh: "零",
  py: "líng",
  en: "zero",
  ru: "ноль",
  pos: "number",
  hsd: ["{{word:ling2}}"],
  tts: ["零"],
  fit: "word",
  topics: ["number-words"],
  isA: ["counting-number"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:ling2}}-{{light:ge4}} {{word:shu1}}.",
      hanzi: "我有零个书。",
      en: "I have zero books.",
      ru: "У меня ноль книг.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:fen1}}-{{word:shu4}} {{word:shi4}} {{word:ling2}}.",
      hanzi: "我的分数是零。",
      en: "My score is zero.",
      ru: "Мой балл — ноль.",
    },
  ],
});
