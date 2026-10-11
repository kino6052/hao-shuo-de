import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 914,
  phase: 2,
  zh: "饭馆",
  py: "fànguǎn",
  en: "restaurant",
  ru: "ресторан",
  pos: "noun",
  hsd: ["{{word:chi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["吃的地方"],
  literal: "a place to eat",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:chi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我去吃的地方。",
      en: "I'm going to a restaurant.",
      ru: "Я иду в ресторан.",
    },
    {
      pinyin: "{{Word:chi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:zai4}} {{word:na4}}-{{word:li3}}.",
      hanzi: "吃的地方在那里。",
      en: "The restaurant is over there.",
      ru: "Ресторан вон там.",
    },
  ],
});
