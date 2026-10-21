import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1009,
  phase: 3,
  zh: "之间",
  py: "zhījiān",
  en: "between",
  ru: "между",
  pos: "noun",
  hsd: ["{{word:zai4}} A {{word:he2}} B {{word:zhong1}}-{{word:jian1}}"],
  tts: ["在A和B中间"],
  literal: "in the middle of A and B",
  fit: "natural",
  topics: ["inside-outside-front-back"],
  isA: ["place-word"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:wo3}} {{word:he2}} {{word:ni3}} {{word:zhong1}}-{{word:jian1}}.",
      hanzi: "他在我和你中间。",
      en: "He is between me and you.",
      ru: "Он между мной и тобой.",
    },
    {
      pinyin: "{{Word:jia1}} {{word:zai4}} {{word:lu4}} {{word:he2}} {{word:shui3}} {{word:zhong1}}-{{word:jian1}}.",
      hanzi: "家在路和水中间。",
      en: "The house is between the road and the water.",
      ru: "Дом между дорогой и водой.",
    },
  ],
});
