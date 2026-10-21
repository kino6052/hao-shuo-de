import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 721,
  phase: 2,
  zh: "重",
  py: "zhòng",
  en: "heavy",
  ru: "тяжёлый",
  pos: "noun",
  hsd: ["{{word:zhong4}}", "{{word:da4}}"],
  tts: ["重", "大"],
  literal: "big",
  fit: "word",
  topics: ["hard-soft-heavy-light"],
  isA: ["touch-quality"],
  note: "ná-bù-dòng: too heavy to lift.",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:hen3}} {{word:zhong4}}.",
      hanzi: "这个很重。",
      en: "This is heavy.",
      ru: "Это тяжёлое.",
    },
    {
      pinyin: "{{Word:shu1}} {{word:bu4}} {{word:zhong4}}.",
      hanzi: "书不重。",
      en: "The book isn't heavy.",
      ru: "Книга нетяжёлая.",
    },
  ],
});
