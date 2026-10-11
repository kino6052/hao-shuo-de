import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 799,
  phase: 2,
  zh: "不够",
  py: "búgòu",
  en: "not enough",
  ru: "недостаточно",
  pos: "verb",
  hsd: ["{{word:shao3}} {{word:le}}"],
  tts: ["少了"],
  literal: "it's short",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:shao3}} {{word:le}}.",
      hanzi: "水少了。",
      en: "There isn't enough water.",
      ru: "Воды не хватает.",
    },
    {
      pinyin: "{{Word:shu1}} {{word:shao3}} {{word:le}}.",
      hanzi: "书少了。",
      en: "There aren't enough books.",
      ru: "Книг не хватает.",
    },
  ],
});
