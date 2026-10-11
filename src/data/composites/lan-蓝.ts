import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 888,
  phase: 2,
  zh: "蓝",
  py: "lán",
  en: "blue",
  ru: "синий",
  pos: "adjective",
  hsd: ["{{word:tian1}}-{{word:de}} {{word:yan2se4}}"],
  tts: ["天的颜色"],
  literal: "the colour of the sky",
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:shui3}} {{word:shi4}} {{word:tian1}}-{{word:de}} {{word:yan2se4}}.",
      hanzi: "水是天的颜色。",
      en: "The water is blue.",
      ru: "Вода синяя.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:bao1}} {{word:shi4}} {{word:tian1}}-{{word:de}} {{word:yan2se4}}.",
      hanzi: "我的包是天的颜色。",
      en: "My bag is blue.",
      ru: "Моя сумка синяя.",
    },
  ],
});
