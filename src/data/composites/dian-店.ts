import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 393,
  phase: 1,
  zh: "店",
  py: "diàn",
  en: "shop",
  ru: "магазин",
  pos: "noun",
  hsd: ["{{word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["买东西的地方"],
  literal: "the place to buy things",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "这个买东西的地方很小。",
      en: "This shop is small.",
      ru: "Этот магазин маленький.",
    },
    {
      pinyin: "{{Word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}-{{word:li3}} {{word:you3}} {{word:shui3}}-{{word:guo3}}.",
      hanzi: "买东西的地方里有水果。",
      en: "There's fruit in the shop.",
      ru: "В магазине есть фрукты.",
    },
  ],
});
