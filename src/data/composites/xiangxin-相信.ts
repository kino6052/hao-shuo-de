import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 324,
  phase: 1,
  zh: "相信",
  py: "xiāngxìn",
  en: "believe",
  ru: "верить",
  pos: "verb",
  hsd: ["{{word:xiang3}} {{word:shi4}} {{word:zhen1}}-{{word:de}}"],
  tts: ["想是真的"],
  literal: "think it's true",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:shi4}} {{word:zhen1}}-{{word:de}}.",
      hanzi: "我想是真的。",
      en: "I believe it.",
      ru: "Я верю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xiang3}} {{word:ta1}} {{word:shuo1}}-{{word:de}} {{word:shi4}} {{word:zhen1}}-{{word:de}} {{word:ma}}?",
      hanzi: "你想他说的是真的吗？",
      en: "Do you believe what he said?",
      ru: "Ты веришь тому, что он сказал?",
    },
  ],
  proposed: true,
});
