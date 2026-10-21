import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 808,
  phase: 2,
  zh: "冰箱",
  py: "bīngxiāng",
  en: "refrigerator",
  ru: "холодильник",
  pos: "noun",
  hsd: [
    "{{word:rang4}}-{{word:chi1}}-{{word:de}}-{{word:dong1}}-{{word:xi1}} {{word:leng3}}-{{word:de}} {{word:ji1}}",
  ],
  tts: ["让吃的东西冷的机"],
  literal: "the machine that makes food cold",
  fit: "plain",
  topics: ["cooking-and-utensils"],
  isA: ["electric-device"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:rang4}} {{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:leng3}}-{{word:de}} {{word:ji1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "我的让吃的东西冷的机很大。",
      en: "My fridge is big.",
      ru: "Мой холодильник большой.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:zai4}} {{word:rang4}} {{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:leng3}}-{{word:de}} {{word:ji1}}-{{word:li3}}.",
      hanzi: "水在让吃的东西冷的机里。",
      en: "The water is in the fridge.",
      ru: "Вода в холодильнике.",
    },
  ],
});
