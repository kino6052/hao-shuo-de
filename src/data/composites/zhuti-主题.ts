import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1007,
  phase: 3,
  zh: "主题",
  py: "zhǔtí",
  en: "theme, topic",
  ru: "тема",
  pos: "noun",
  hsd: ["{{word:shi4}} {{word:shuo1}} X-{{word:de}}"],
  tts: ["是说X的"],
  literal: "what it is about",
  fit: "plain",
  topics: ["topics-and-examples"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:shuo1}} {{word:jia1}}-{{word:de}}.",
      hanzi: "这是说家的。",
      en: "The theme is home.",
      ru: "Тема — дом.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shu1}} {{word:shi4}} {{word:shuo1}} {{word:shui3}}-{{word:de}}.",
      hanzi: "这书是说水的。",
      en: "This book is about water.",
      ru: "Эта книга о воде.",
    },
  ],
});
