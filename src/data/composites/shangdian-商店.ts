import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 376,
  phase: 1,
  zh: "商店",
  py: "shāngdiàn",
  en: "shop",
  ru: "магазин",
  pos: "noun",
  hsd: ["{{word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["买东西的地方"],
  literal: "the place to buy things",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:kai1}} {{word:le}} {{word:ma}}?",
      hanzi: "买东西的地方开了吗？",
      en: "Is the shop open?",
      ru: "Магазин открыт?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我去买东西的地方。",
      en: "I'm going to the shop.",
      ru: "Я иду в магазин.",
    },
  ],
});
