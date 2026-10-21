import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1067,
  phase: 3,
  zh: "增加",
  py: "zēngjiā",
  en: "increase",
  ru: "увеличивать(ся)",
  pos: "verb",
  hsd: ["{{word:bian4}} {{word:duo1}}"],
  tts: ["变多"],
  literal: "become more",
  fit: "plain",
  topics: ["changing"],
  isA: ["becoming"],
  examples: [
    {
      pinyin: "{{Word:ren2}} {{word:bian4}} {{word:duo1}} {{word:le}}.",
      hanzi: "人变多了。",
      en: "There are more people.",
      ru: "Людей стало больше.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:bian4}} {{word:duo1}} {{word:le}}.",
      hanzi: "水变多了。",
      en: "There is more water.",
      ru: "Воды стало больше.",
    },
  ],
});
