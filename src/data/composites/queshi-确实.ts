import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1161,
  phase: 3,
  zh: "确实",
  py: "quèshí",
  en: "indeed",
  ru: "в самом деле",
  pos: "adverb",
  hsd: ["{{word:zhen1}}"],
  tts: ["真"],
  fit: "word",
  topics: ["true-real-and-fake"],
  isA: ["truth-or-ease"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zhen1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他真很好。",
      en: "He is indeed good.",
      ru: "Он и вправду хороший.",
    },
    {
      pinyin: "{{Word:na4}} {{word:zhen1}} {{word:shi4}} {{word:wo3}}-{{word:de}}.",
      hanzi: "那真是我的。",
      en: "That is indeed mine.",
      ru: "Это и вправду моё.",
    },
  ],
});
