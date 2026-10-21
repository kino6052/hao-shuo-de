import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 683,
  phase: 2,
  zh: "真实",
  py: "zhēnshí",
  en: "true, real",
  ru: "настоящий",
  pos: "adjective",
  hsd: ["{{word:zhen1}}-{{word:de}}", "{{word:zhen1}}-{{word:shi2}}", "{{word:zhen1}}"],
  tts: ["真的", "真实", "真"],
  fit: "natural",
  kinds: ["built", "spelled", "built"],
  topics: ["true-real-and-fake"],
  isA: ["truth-or-ease"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:zhen1}}-{{word:de}}.",
      hanzi: "这是真的。",
      en: "This is real.",
      ru: "Это правда.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:hua4}} {{word:hen3}} {{word:zhen1}}.",
      hanzi: "他的话很真。",
      en: "His words are true.",
      ru: "Его слова правдивы.",
    },
  ],
});
