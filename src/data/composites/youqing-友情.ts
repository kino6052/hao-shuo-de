import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6780,
  phase: 4,
  zh: "友情",
  py: "yǒuqíng",
  en: "friendship",
  ru: "дружба",
  pos: "noun",
  hsd: [
    "{{word:ren2}} {{word:he2}} {{word:ren2}} {{word:zhong1}}-{{word:jian1}}-{{word:de}} {{word:hao3}} {{word:guan1xi}}",
    "{{word:hao3}}-{{word:guan1xi}}-{{word:de}} {{word:ren2}} {{word:zhong1}}-{{word:jian1}}-{{word:de}} {{word:ai4}}",
  ],
  tts: ["人和人中间的好关系", "好关系的人中间的爱"],
  literal: "the good relationship between people / the love between people with a good relationship",
  fit: "plain",
  topics: ["friends-and-neighbours"],
  isA: ["social-tie"],
  proposed: true,
});
