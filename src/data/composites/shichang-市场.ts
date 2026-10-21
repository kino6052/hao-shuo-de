import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1080,
  phase: 3,
  zh: "市场",
  py: "shìchǎng",
  en: "market",
  ru: "рынок",
  pos: "noun",
  hsd: ["{{word:mai3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["买东西的地方"],
  literal: "the place to buy things",
  fit: "natural",
  topics: ["business-and-economy"],
  isA: ["place"],
  note: "Lesson {{lesson:inside-a-sentence}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:mai3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我去买东西的地方。",
      en: "I'm going to the market.",
      ru: "Я иду на рынок.",
    },
    {
      pinyin: "{{Word:mai3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "买东西的地方很大。",
      en: "The market is big.",
      ru: "Рынок большой.",
    },
  ],
});
