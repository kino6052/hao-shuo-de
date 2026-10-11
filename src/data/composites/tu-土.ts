import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 825,
  phase: 2,
  zh: "土",
  py: "tǔ",
  en: "soil",
  ru: "почва",
  pos: "noun",
  hsd: ["{{word:di4}}"],
  tts: ["地"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:di4}} {{word:hen3}} {{word:ying4}}.",
      hanzi: "地很硬。",
      en: "The soil is hard.",
      ru: "Почва твёрдая.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:zai4}} {{word:di4}}-{{word:li3}}.",
      hanzi: "水在地里。",
      en: "The water is in the soil.",
      ru: "Вода в земле.",
    },
  ],
});
