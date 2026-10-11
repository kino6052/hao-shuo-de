import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 488,
  phase: 1,
  zh: "飞机",
  py: "fēijī",
  en: "airplane",
  ru: "самолёт",
  pos: "noun",
  hsd: ["{{word:fei1}}-{{word:ji1}}"],
  tts: ["飞机"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:fei1}}-{{word:ji1}} {{word:shi2}} {{word:dian3}} {{word:fei1}}.",
      hanzi: "我的飞机十点飞。",
      en: "My plane leaves at ten.",
      ru: "Мой самолёт вылетает в десять.",
    },
    {
      pinyin: "{{Word:fei1}}-{{word:ji1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "飞机很大。",
      en: "The plane is big.",
      ru: "Самолёт большой.",
    },
  ],
});
