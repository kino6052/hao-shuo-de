import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 158,
  phase: 1,
  zh: "地",
  py: "dì",
  en: "floor",
  ru: "пол",
  pos: "noun",
  hsd: ["{{word:di4}}"],
  tts: ["地"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
      hanzi: "水在地上。",
      en: "There's water on the floor.",
      ru: "На полу вода.",
    },
    {
      pinyin: "{{Word:bao1}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
      hanzi: "包在地上。",
      en: "The bag is on the floor.",
      ru: "Сумка на полу.",
    },
  ],
});
