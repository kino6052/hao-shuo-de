import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1475,
  phase: 3,
  zh: "受伤",
  py: "shòushāng",
  en: "get hurt; injured",
  ru: "получить травму",
  pos: "verb",
  hsd: ["{{word:shen1ti3}} {{word:huai4}} {{word:le}}"],
  tts: ["身体坏了"],
  literal: "the body got hurt",
  fit: "plain",
  topics: ["injuries"],
  isA: ["being-affected"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shen1ti3}} {{word:huai4}} {{word:le}}.",
      hanzi: "我身体坏了。",
      en: "I got hurt.",
      ru: "Я получил травму.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:shen1ti3}} {{word:huai4}} {{word:le}}.",
      hanzi: "他的身体坏了。",
      en: "He got hurt.",
      ru: "Он получил травму.",
    },
  ],
});
