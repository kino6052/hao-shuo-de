import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 822,
  phase: 2,
  zh: "商场",
  py: "shāngchǎng",
  en: "shopping mall",
  ru: "торговый центр",
  pos: "noun",
  hsd: [
    "{{word:da4}}-{{word:de}} {{word:mai3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["大的买东西的地方"],
  literal: "a big place to buy things",
  fit: "plain",
  topics: ["shops"],
  isA: ["building"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:da4}}-{{word:de}} {{word:mai3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我去大的买东西的地方。",
      en: "I'm going to the mall.",
      ru: "Я иду в торговый центр.",
    },
    {
      pinyin: "{{Word:da4}}-{{word:de}} {{word:mai3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "大的买东西的地方很好。",
      en: "The mall is nice.",
      ru: "Торговый центр хороший.",
    },
  ],
});
