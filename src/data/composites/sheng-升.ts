import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1272,
  phase: 3,
  zh: "升",
  py: "shēng",
  en: "rise",
  ru: "подниматься",
  pos: "verb",
  hsd: ["{{word:shang4}}-{{word:qu4}}"],
  tts: ["上去"],
  literal: "go up",
  fit: "natural",
  topics: ["changing"],
  isA: ["becoming"],
  examples: [
    {
      pinyin: "{{Word:ri4}} {{word:shang4}}-{{word:qu4}} {{word:le}}.",
      hanzi: "日上去了。",
      en: "The sun has risen.",
      ru: "Солнце взошло.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:shang4}}-{{word:qu4}} {{word:le}}.",
      hanzi: "水上去了。",
      en: "The water has risen.",
      ru: "Вода поднялась.",
    },
  ],
});
