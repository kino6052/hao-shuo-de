import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1367,
  phase: 3,
  zh: "流",
  py: "liú",
  en: "flow",
  ru: "течь",
  pos: "verb",
  hsd: ["{{word:dong4}}"],
  tts: ["动"],
  fit: "word",
  topics: ["walking-and-running"],
  isA: ["moving-action"],
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:zai4}} {{word:dong4}}.",
      hanzi: "水在动。",
      en: "The water is flowing.",
      ru: "Вода течёт.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:dong4}} {{word:le}}.",
      hanzi: "水动了。",
      en: "The water has started to flow.",
      ru: "Вода потекла.",
    },
  ],
});
