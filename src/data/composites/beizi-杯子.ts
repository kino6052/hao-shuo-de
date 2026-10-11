import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 562,
  phase: 2,
  zh: "杯子",
  py: "bēizi",
  en: "cup",
  ru: "чашка",
  pos: "noun",
  hsd: ["{{word:he1}}-{{word:shui3}}-{{word:yong4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["喝水用的东西"],
  literal: "what you drink water from",
  fit: "plain",
  note: "bāo covers cups and bowls too.",
  examples: [
    {
      pinyin: "{{Word:he1}}-{{word:shui3}}-{{word:yong4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:shi4}} {{word:bai2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "喝水用的东西是白色的。",
      en: "The cup is white.",
      ru: "Чашка белая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:he1}}-{{word:shui3}}-{{word:yong4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我要喝水用的东西。",
      en: "I want a cup.",
      ru: "Мне нужна чашка.",
    },
  ],
});
