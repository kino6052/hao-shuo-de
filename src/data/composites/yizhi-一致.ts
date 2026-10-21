import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1002,
  phase: 3,
  zh: "一致",
  py: "yízhì",
  en: "consistent, the same",
  ru: "единый",
  pos: "adjective",
  hsd: ["{{word:yi1}}-{{word:yang4}}"],
  tts: ["一样"],
  literal: "same",
  fit: "natural",
  topics: ["same-and-different"],
  isA: ["comparison"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "我们一样。",
      en: "We are the same.",
      ru: "Мы одинаковые.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:liang3}}-{{light:ge4}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "这两个一样。",
      en: "These two are the same.",
      ru: "Эти двое одинаковые.",
    },
  ],
});
