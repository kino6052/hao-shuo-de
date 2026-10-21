import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 819,
  phase: 2,
  zh: "味",
  py: "wèi",
  en: "taste, flavor",
  ru: "вкус",
  pos: "noun",
  hsd: ["{{word:wei4}}-{{word:dao4}}"],
  tts: ["味道"],
  fit: "word",
  topics: ["tastes"],
  isA: ["taste-quality"],
  examples: [
    {
      pinyin: "{{Word:shui3}}-{{word:de}} {{word:wei4}}-{{word:dao4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "水的味道很好。",
      en: "The water tastes good.",
      ru: "У воды хороший вкус.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:wei4}}-{{word:dao4}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "这个味道不好。",
      en: "This taste is bad.",
      ru: "Этот вкус плохой.",
    },
  ],
});
