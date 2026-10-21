import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1359,
  phase: 3,
  zh: "查看",
  py: "chákàn",
  en: "check, look over",
  ru: "проверять, просматривать",
  pos: "verb",
  hsd: ["{{word:hao3}}-{{word:hao3}} {{word:kan4}}", "{{word:kan4}}"],
  tts: ["好好看", "看"],
  fit: "word",
  topics: ["checking-and-testing"],
  isA: ["perceiving"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:hao3}}-{{word:hao3}} {{word:kan4}}.",
      hanzi: "你好好看。",
      en: "Check it carefully.",
      ru: "Посмотри внимательно.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "我看一下。",
      en: "I'll take a look.",
      ru: "Я посмотрю.",
    },
  ],
});
