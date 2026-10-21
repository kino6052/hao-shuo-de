import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1110,
  phase: 3,
  zh: "教育",
  py: "jiàoyù",
  en: "education",
  ru: "образование",
  pos: "noun",
  hsd: ["{{word:bang1}} {{word:ren2}} {{word:xue2}}"],
  tts: ["帮人学"],
  literal: "helping people learn",
  fit: "plain",
  topics: ["teaching-homework-and-questions"],
  isA: ["abstract-thing"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:bang1}} {{word:ren2}} {{word:xue2}}.",
      hanzi: "他帮人学。",
      en: "He works in education.",
      ru: "Он работает в сфере образования.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:bang1}} {{word:ren2}} {{word:xue2}}.",
      hanzi: "我爱帮人学。",
      en: "I love education.",
      ru: "Я люблю образование.",
    },
  ],
});
