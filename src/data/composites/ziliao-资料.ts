import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 998,
  phase: 2,
  zh: "资料",
  py: "zīliào",
  en: "materials, data",
  ru: "материалы",
  pos: "noun",
  hsd: ["{{word:zhi1dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["知道的东西"],
  literal: "things you know",
  fit: "plain",
  topics: ["books-and-paper"],
  isA: ["paper-thing"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:zhi1dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是知道的东西。",
      en: "These are the materials.",
      ru: "Это материалы.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:zhi1dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我看知道的东西。",
      en: "I look at the materials.",
      ru: "Я смотрю материалы.",
    },
  ],
});
