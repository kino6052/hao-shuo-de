import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 712,
  phase: 2,
  zh: "软件",
  py: "ruǎnjiàn",
  en: "software",
  ru: "программа",
  pos: "noun",
  hsd: [
    "{{word:suan4}}-{{word:de}}-{{word:gong1}}-{{word:ju4}}-{{word:li3}}-{{word:de}} {{word:gong1}}-{{word:ju4}}",
  ],
  tts: ["算的工具里的工具"],
  literal: "the tool inside the computer",
  fit: "plain",
  topics: ["software-files-and-accounts"],
  isA: ["computer-or-phone"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:suan4}}-{{word:de}}-{{word:gong1}}-{{word:ju4}}-{{word:li3}}-{{word:de}} {{word:gong1}}-{{word:ju4}}.",
      hanzi: "我有算的工具里的工具。",
      en: "I have software.",
      ru: "У меня есть программа.",
    },
    {
      pinyin: "{{Word:suan4}}-{{word:de}}-{{word:gong1}}-{{word:ju4}}-{{word:li3}}-{{word:de}} {{word:gong1}}-{{word:ju4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "算的工具里的工具很好。",
      en: "The software is good.",
      ru: "Программа хорошая.",
    },
  ],
});
