import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1072,
  phase: 3,
  zh: "实际",
  py: "shíjì",
  en: "actual, reality",
  ru: "реальный, на деле",
  pos: "noun",
  hsd: ["{{word:zhen1}}-{{word:de}}"],
  tts: ["真的"],
  literal: "real",
  fit: "plain",
  topics: ["true-real-and-fake"],
  isA: ["truth-or-ease"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:zhen1}}-{{word:de}}.",
      hanzi: "这是真的。",
      en: "This is real.",
      ru: "Это реально.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}} {{word:zhen1}}-{{word:de}}.",
      hanzi: "他说真的。",
      en: "He tells what is real.",
      ru: "Он говорит как есть.",
    },
  ],
});
