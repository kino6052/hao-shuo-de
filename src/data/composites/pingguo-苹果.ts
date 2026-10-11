import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 538,
  phase: 2,
  zh: "苹果",
  py: "píngguǒ",
  en: "apple",
  ru: "яблоко",
  pos: "noun",
  hsd: [
    "{{word:yuan2}}-{{word:de}} {{word:hong2}}-{{word:se4}}-{{word:de}} {{word:shui3}}-{{word:guo3}}",
  ],
  tts: ["圆的红色的水果"],
  literal: "a round red fruit",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:yuan2}}-{{word:de}} {{word:hong2}}-{{word:se4}}-{{word:de}} {{word:shui3}}-{{word:guo3}}.",
      hanzi: "我要圆的红色的水果。",
      en: "I want an apple.",
      ru: "Я хочу яблоко.",
    },
    {
      pinyin: "{{Word:yuan2}}-{{word:de}} {{word:hong2}}-{{word:se4}}-{{word:de}} {{word:shui3}}-{{word:guo3}} {{word:hen3}} {{word:tian2}}.",
      hanzi: "圆的红色的水果很甜。",
      en: "The apple is sweet.",
      ru: "Яблоко сладкое.",
    },
  ],
});
