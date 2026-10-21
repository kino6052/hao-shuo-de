import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 662,
  phase: 2,
  zh: "数",
  py: "shù",
  en: "number, figure",
  ru: "число",
  pos: "noun",
  hsd: ["{{word:shu4}}"],
  tts: ["数"],
  fit: "word",
  topics: ["number-words"],
  isA: ["number"],
  examples: [
    {
      pinyin: "{{Word:ren2}}-{{word:de}} {{word:shu4}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "人的数很多。",
      en: "The number of people is large.",
      ru: "Людей много.",
    },
    {
      pinyin: "{{Word:shu1}}-{{word:de}} {{word:shu4}} {{word:hen3}} {{word:shao3}}.",
      hanzi: "书的数很少。",
      en: "There are few books.",
      ru: "Книг мало.",
    },
  ],
});
