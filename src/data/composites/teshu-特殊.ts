import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1138,
  phase: 3,
  zh: "特殊",
  py: "tèshū",
  en: "special",
  ru: "особый",
  pos: "adjective",
  hsd: ["{{word:hen3}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}"],
  tts: ["很不一样"],
  literal: "very different",
  fit: "natural",
  topics: ["special-and-strange"],
  isA: ["condition-quality"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "他很不一样。",
      en: "He is special.",
      ru: "Он особенный.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:hen3}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "这个很不一样。",
      en: "This is special.",
      ru: "Это особенное.",
    },
  ],
});
