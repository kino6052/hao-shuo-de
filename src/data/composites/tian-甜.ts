import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 950,
  phase: 2,
  zh: "甜",
  py: "tián",
  en: "sweet",
  ru: "сладкий",
  pos: "adjective",
  hsd: ["{{word:tian2}}"],
  tts: ["甜"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:hen3}} {{word:tian2}}.",
      hanzi: "这个很甜。",
      en: "This is very sweet.",
      ru: "Это очень сладкое.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:hen3}} {{word:tian2}}.",
      hanzi: "水很甜。",
      en: "The water is sweet.",
      ru: "Вода сладкая.",
    },
  ],
});
