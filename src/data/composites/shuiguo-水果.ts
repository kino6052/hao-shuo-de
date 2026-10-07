import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 184,
  phase: 1,
  zh: "水果",
  py: "shuǐguǒ",
  en: "fruit",
  ru: "фрукт",
  pos: "noun",
  hsd: ["{{word:shui3}}-{{word:guo3}}"],
  tts: ["水果"],
  literal: "water fruit",
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:chi1}} {{word:shui3}}-{{word:guo3}}.",
      hanzi: "我爱吃水果。",
      en: "I love eating fruit.",
      ru: "Я люблю фрукты.",
    },
    {
      pinyin: "{{Word:shui3}}-{{word:guo3}} {{word:hen3}} {{word:tian2}}.",
      hanzi: "水果很甜。",
      en: "The fruit is sweet.",
      ru: "Фрукты сладкие.",
    },
  ],
});
