import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1478,
  phase: 3,
  zh: "地面",
  py: "dìmiàn",
  en: "ground, floor",
  ru: "земля, пол",
  pos: "noun",
  hsd: ["{{word:di4}}-{{word:mian4}}"],
  tts: ["地面"],
  literal: "ground surface",
  fit: "natural",
  topics: ["house-and-doors"],
  isA: ["building-part"],
  note: "Real Mandarin: 地面.",
  examples: [
    {
      pinyin: "{{Word:di4}}-{{word:mian4}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "地面很冷。",
      en: "The ground is cold.",
      ru: "Земля холодная.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shu1}} {{word:zai4}} {{word:di4}}-{{word:mian4}}.",
      hanzi: "我的书在地面。",
      en: "My book is on the ground.",
      ru: "Моя книга лежит на земле.",
    },
  ],
});
