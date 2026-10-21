import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1460,
  phase: 3,
  zh: "假",
  py: "jiǎ",
  en: "fake, false",
  ru: "поддельный, ложный",
  pos: "adjective",
  hsd: ["{{word:bu4}} {{word:zhen1}}"],
  tts: ["不真"],
  literal: "not real",
  fit: "plain",
  topics: ["true-real-and-fake"],
  isA: ["truth-or-ease"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:bu4}} {{word:zhen1}}.",
      hanzi: "这不真。",
      en: "This is fake.",
      ru: "Это подделка.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:bu4}} {{word:zhen1}}.",
      hanzi: "那个不真。",
      en: "That one is false.",
      ru: "То неправда.",
    },
  ],
});
