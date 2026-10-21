import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1158,
  phase: 3,
  zh: "知名",
  py: "zhīmíng",
  en: "well-known",
  ru: "известный",
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
      en: "He is a well-known person.",
      ru: "Он известный человек.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:shi4}} {{word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:zhi1dao4}}-{{word:de}}.",
      hanzi: "这个地方是人人都知道的。",
      en: "This place is well known.",
      ru: "Это место известно всем.",
    },
  ],
});
