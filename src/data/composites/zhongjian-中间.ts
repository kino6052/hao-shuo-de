import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 347,
  phase: 1,
  zh: "中间",
  py: "zhōngjiān",
  en: "middle, between",
  ru: "посередине",
  pos: "noun",
  hsd: ["{{word:zhong1}}-{{word:jian1}}"],
  tts: ["中间"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhong1}}-{{word:jian1}}-{{word:de}} {{word:na4}}-{{light:ge4}} {{word:shi4}} {{word:wo3}}.",
      hanzi: "中间的那个是我。",
      en: "The one in the middle is me.",
      ru: "Тот, что посередине, — это я.",
    },
    {
      pinyin: "{{Word:lu4}} {{word:zhong1}}-{{word:jian1}} {{word:you3}} {{word:yi1}}-{{light:ge4}} {{word:ren2}}.",
      hanzi: "路中间有一个人。",
      en: "There's someone in the middle of the road.",
      ru: "Посреди дороги стоит человек.",
    },
  ],
});
