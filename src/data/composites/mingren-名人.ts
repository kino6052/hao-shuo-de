import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 625,
  phase: 2,
  zh: "名人",
  py: "míngrén",
  en: "famous person",
  ru: "знаменитость",
  pos: "noun",
  hsd: ["{{word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:zhi1dao4}}-{{word:de}} {{word:ren2}}"],
  tts: ["人人都知道的人"],
  literal: "a person everyone knows",
  fit: "natural",
  topics: ["men-and-women"],
  isA: ["social-role"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:zhi1dao4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是人人都知道的人。",
      en: "He is a famous person.",
      ru: "Он знаменитость.",
    },
    {
      pinyin: "{{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:zhi1dao4}}-{{word:de}} {{word:ren2}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "人人都知道的人在这里。",
      en: "A famous person is here.",
      ru: "Здесь знаменитость.",
    },
  ],
});
