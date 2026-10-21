import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 920,
  phase: 2,
  zh: "黄色",
  py: "huángsè",
  en: "yellow",
  ru: "жёлтый",
  pos: "noun",
  hsd: ["{{word:jin1}}-{{word:de}} {{word:yan2se4}}"],
  tts: ["金的颜色"],
  literal: "the colour of gold",
  fit: "natural",
  transparent: true,
  topics: ["colours-and-patterns"],
  isA: ["colour-quality"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:bao1}} {{word:shi4}} {{word:jin1}}-{{word:de}} {{word:yan2se4}}.",
      hanzi: "我的包是金的颜色。",
      en: "My bag is yellow.",
      ru: "Моя сумка жёлтая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:jin1}}-{{word:de}} {{word:yan2se4}}.",
      hanzi: "我爱金的颜色。",
      en: "I love yellow.",
      ru: "Я люблю жёлтый цвет.",
    },
  ],
});
