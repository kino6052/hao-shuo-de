import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 733,
  phase: 2,
  zh: "书店",
  py: "shūdiàn",
  en: "bookstore",
  ru: "книжный магазин",
  pos: "noun",
  hsd: ["{{word:mai3}}-{{word:shu1}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["买书的地方"],
  literal: "the place where one buys books",
  fit: "plain",
  topics: ["shops"],
  isA: ["building"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:mai3}}-{{word:shu1}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我去买书的地方。",
      en: "I'm going to the bookstore.",
      ru: "Я иду в книжный магазин.",
    },
    {
      pinyin: "{{Word:mai3}}-{{word:shu1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "买书的地方很大。",
      en: "The bookstore is big.",
      ru: "Книжный магазин большой.",
    },
  ],
});
