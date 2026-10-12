import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1119,
  phase: 3,
  zh: "时",
  py: "shí",
  en: "time",
  ru: "время",
  pos: "noun",
  hsd: ["{{word:shi2}}-{{word:jian1}}"],
  tts: ["时间"],
  fit: "word",
  note: "Same as 时间.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:shi2}}-{{word:jian1}}.",
      hanzi: "我有时间。",
      en: "I have time.",
      ru: "У меня есть время.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:shi2}}-{{word:jian1}} {{word:ma}}?",
      hanzi: "你有时间吗？",
      en: "Do you have time?",
      ru: "У тебя есть время?",
    },
  ],
});
