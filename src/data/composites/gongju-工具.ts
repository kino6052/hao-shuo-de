import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 641,
  phase: 2,
  zh: "工具",
  py: "gōngjù",
  en: "tool",
  ru: "инструмент",
  pos: "noun",
  hsd: ["{{word:gong1}}-{{word:ju4}}"],
  tts: ["工具"],
  fit: "natural",
  transparent: true,
  role: "noun",
  topics: ["repairs"],
  isA: ["tool"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:gong1}}-{{word:ju4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个工具很好。",
      en: "This tool is good.",
      ru: "Этот инструмент хороший.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:gong1}}-{{word:ju4}} {{word:ma}}?",
      hanzi: "你有工具吗？",
      en: "Do you have a tool?",
      ru: "У тебя есть инструмент?",
    },
  ],
});
