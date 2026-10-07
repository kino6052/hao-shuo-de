import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 99,
  phase: 1,
  zh: "世界",
  py: "shìjiè",
  en: "world",
  ru: "мир",
  pos: "noun",
  hsd: [
    "{{word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:zai4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["人人都在的地方"],
  literal: "the place where everyone is",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:kan4}} {{word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:zai4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我想看人人都在的地方。",
      en: "I'd like to see the world.",
      ru: "Я хочу увидеть мир.",
    },
    {
      pinyin: "{{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:zai4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "人人都在的地方很大。",
      en: "The world is big.",
      ru: "Мир большой.",
    },
  ],
});
