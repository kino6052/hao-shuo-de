import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 921,
  phase: 2,
  zh: "黑色",
  py: "hēisè",
  en: "black",
  ru: "чёрный",
  pos: "noun",
  hsd: ["{{word:hei1}}-{{word:se4}}"],
  tts: ["黑色"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:yi1fu}} {{word:shi4}} {{word:hei1}}-{{word:se4}}.",
      hanzi: "我的衣服是黑色。",
      en: "My clothes are black.",
      ru: "Моя одежда чёрная.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:hei1}}-{{word:se4}}.",
      hanzi: "我爱黑色。",
      en: "I love black.",
      ru: "Я люблю чёрный цвет.",
    },
  ],
});
