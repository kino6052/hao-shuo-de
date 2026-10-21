import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1140,
  phase: 3,
  zh: "特色",
  py: "tèsè",
  en: "special feature",
  ru: "отличительная черта",
  pos: "noun",
  hsd: [
    "{{word:zhen1}} {{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:yin1wei4}} X {{word:ren2}} {{word:zhi1dao4}} {{word:zhe4}}-{{light:ge4}}",
  ],
  tts: ["真好的地方", "因为X人知道这个"],
  literal: "a really good place / people know this because of X",
  fit: "plain",
  topics: ["strong-and-weak-points"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:jia1}} {{word:you3}} {{word:zhen1}} {{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "这个家有真好的地方。",
      en: "This home has its own special feature.",
      ru: "У этого дома есть своя изюминка.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shu1}} {{word:you3}} {{word:zhen1}} {{word:hao3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "这书有真好的地方。",
      en: "This book has its own special feature.",
      ru: "У этой книги есть своя изюминка.",
    },
  ],
});
