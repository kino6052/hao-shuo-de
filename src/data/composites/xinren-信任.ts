import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1252,
  phase: 3,
  zh: "信任",
  py: "xìnrèn",
  en: "trust",
  ru: "доверять",
  pos: "verb",
  hsd: [
    "{{word:xiang3}} {{word:shi4}} {{word:zhen1}}-{{word:de}}",
    "{{word:xiang3}} X {{word:shuo1}}-{{word:de}} {{word:shi4}} {{word:zhen1}}-{{word:de}}",
  ],
  tts: ["想是真的", "想X说的是真的"],
  literal: "think it is true / think what X says is true",
  fit: "plain",
  topics: ["respect-and-cherishing"],
  isA: ["feeling-and-wanting"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:ta1}} {{word:shuo1}}-{{word:de}} {{word:shi4}} {{word:zhen1}}-{{word:de}}.",
      hanzi: "我想他说的是真的。",
      en: "I trust him.",
      ru: "Я ему доверяю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xiang3}} {{word:wo3}} {{word:shuo1}}-{{word:de}} {{word:shi4}} {{word:zhen1}}-{{word:de}} {{word:ma}}?",
      hanzi: "你想我说的是真的吗？",
      en: "Do you trust me?",
      ru: "Ты мне доверяешь?",
    },
  ],
});
