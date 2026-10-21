import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1261,
  phase: 3,
  zh: "减少",
  py: "jiǎnshǎo",
  en: "reduce",
  ru: "уменьшать(ся)",
  pos: "verb",
  hsd: ["{{word:bian4}} {{word:shao3}}"],
  tts: ["变少"],
  literal: "become less",
  fit: "plain",
  topics: ["changing"],
  isA: ["becoming"],
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:bian4}} {{word:shao3}} {{word:le}}.",
      hanzi: "水变少了。",
      en: "The water has decreased.",
      ru: "Воды стало меньше.",
    },
    {
      pinyin: "{{Word:ren2}} {{word:bian4}} {{word:shao3}} {{word:le}}.",
      hanzi: "人变少了。",
      en: "There are fewer people.",
      ru: "Людей стало меньше.",
    },
  ],
});
