import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1199,
  phase: 3,
  zh: "设备",
  py: "shèbèi",
  en: "equipment",
  ru: "оборудование",
  pos: "noun",
  hsd: ["{{word:gong1}}-{{word:ju4}}"],
  tts: ["工具"],
  fit: "word",
  topics: ["farms-and-factories"],
  isA: ["tool"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:mai3}} {{word:gong1}}-{{word:ju4}}.",
      hanzi: "我买工具。",
      en: "I buy equipment.",
      ru: "Я покупаю оборудование.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:ta1}}-{{word:de}} {{word:gong1}}-{{word:ju4}}.",
      hanzi: "这是他的工具。",
      en: "This is his equipment.",
      ru: "Это его оборудование.",
    },
  ],
});
