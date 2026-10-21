import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1187,
  phase: 3,
  zh: "著名",
  py: "zhùmíng",
  en: "famous",
  ru: "знаменитый",
  pos: "adjective",
  hsd: ["{{word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:zhi1dao4}}-{{word:de}}"],
  tts: ["人人都知道的"],
  literal: "that everyone knows",
  fit: "plain",
  topics: ["describing-people"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:zhi1dao4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是人人都知道的人。",
      en: "He is a famous person.",
      ru: "Он знаменитый человек.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shu1}} {{word:shi4}} {{word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:zhi1dao4}}-{{word:de}}.",
      hanzi: "这书是人人都知道的。",
      en: "This book is famous.",
      ru: "Эта книга знаменита.",
    },
  ],
});
