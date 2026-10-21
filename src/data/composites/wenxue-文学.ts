import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 987,
  phase: 2,
  zh: "文学",
  py: "wénxué",
  en: "literature",
  ru: "литература",
  pos: "noun",
  hsd: ["\"wén\"-{{word:xue2}}"],
  tts: ["文学"],
  literal: "literature",
  fit: "name",
  topics: ["stories-poems-and-essays"],
  isA: ["work-of-art"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} \"wén\"-{{word:xue2}}.",
      hanzi: "我看文学。",
      en: "I read literature.",
      ru: "Я читаю литературу.",
    },
    {
      pinyin: "\"Wén\"-{{word:xue2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "文学很好。",
      en: "Literature is good.",
      ru: "Литература хороша.",
    },
  ],
});
