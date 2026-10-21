import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 813,
  phase: 2,
  zh: "包",
  py: "bāo",
  en: "bag; wrap",
  ru: "сумка; заворачивать",
  pos: "verb",
  hsd: ["{{word:bao1}}"],
  tts: ["包"],
  literal: "container",
  fit: "word",
  topics: ["household-things"],
  isA: ["container"],
  note: "bāo covers bags too.",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:bao1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "我的包很大。",
      en: "My bag is big.",
      ru: "Моя сумка большая.",
    },
    {
      pinyin: "{{Word:shu1}} {{word:zai4}} {{word:bao1}}-{{word:li3}}.",
      hanzi: "书在包里。",
      en: "The book is in the bag.",
      ru: "Книга в сумке.",
    },
  ],
});
