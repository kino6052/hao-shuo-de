import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 758,
  phase: 2,
  zh: "收到",
  py: "shōudào",
  en: "receive",
  ru: "получить",
  pos: "verb",
  hsd: ["{{word:na2}}-{{word:dao4}}"],
  tts: ["拿到"],
  literal: "take and reach",
  fit: "natural",
  topics: ["giving-and-getting"],
  isA: ["receiving"],
  note: "Lesson {{lesson:direction-and-result}}: verb-result.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:na2}}-{{word:dao4}} {{word:shu1}} {{word:le}}.",
      hanzi: "我拿到书了。",
      en: "I received the book.",
      ru: "Я получил книгу.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:na2}}-{{word:dao4}} {{word:shui3}} {{word:le}}.",
      hanzi: "他拿到水了。",
      en: "He received the water.",
      ru: "Он получил воду.",
    },
  ],
});
