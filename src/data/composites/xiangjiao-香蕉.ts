import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 964,
  phase: 2,
  zh: "香蕉",
  py: "xiāngjiāo",
  en: "banana",
  ru: "банан",
  pos: "noun",
  hsd: ["{{word:jin1}}-{{word:de}} {{word:yan2se4}}-{{word:de}} {{word:shui3}}-{{word:guo3}}"],
  tts: ["金的颜色的水果"],
  literal: "the fruit of the golden colour",
  fit: "plain",
  topics: ["fruit"],
  isA: ["fruit-item"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:chi1}} {{word:jin1}}-{{word:de}} {{word:yan2se4}}-{{word:de}} {{word:shui3}}-{{word:guo3}}.",
      hanzi: "我吃金的颜色的水果。",
      en: "I eat a banana.",
      ru: "Я ем банан.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yao4}} {{word:jin1}}-{{word:de}} {{word:yan2se4}}-{{word:de}} {{word:shui3}}-{{word:guo3}}.",
      hanzi: "他要金的颜色的水果。",
      en: "He wants a banana.",
      ru: "Он хочет банан.",
    },
  ],
});
