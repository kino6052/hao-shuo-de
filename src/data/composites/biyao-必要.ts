import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1091,
  phase: 3,
  zh: "必要",
  py: "bìyào",
  en: "necessary",
  ru: "необходимый",
  pos: "adjective",
  hsd: ["{{word:yao4}}-{{word:de}}"],
  tts: ["要的"],
  literal: "needed",
  fit: "plain",
  topics: ["state-of-things"],
  isA: ["condition-quality"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:yao4}}-{{word:de}}.",
      hanzi: "这是要的。",
      en: "This is necessary.",
      ru: "Это необходимо.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:shi4}} {{word:yao4}}-{{word:de}}.",
      hanzi: "水是要的。",
      en: "Water is necessary.",
      ru: "Вода необходима.",
    },
  ],
});
