import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 472,
  phase: 1,
  zh: "超市",
  py: "chāoshì",
  en: "supermarket",
  ru: "супермаркет",
  pos: "noun",
  hsd: ["{{word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["买东西的地方"],
  literal: "a place to buy things",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:mai3}} {{word:shui3}}-{{word:guo3}}.",
      hanzi: "我去买东西的地方买水果。",
      en: "I'm going to the supermarket to buy fruit.",
      ru: "Я иду в супермаркет за фруктами.",
    },
    {
      pinyin: "{{Word:mai3}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:shi2}} {{word:dian3}} {{word:kai1}}.",
      hanzi: "买东西的地方十点开。",
      en: "The supermarket opens at ten.",
      ru: "Супермаркет открывается в десять.",
    },
  ],
});
