import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1403,
  phase: 3,
  zh: "获得",
  py: "huòdé",
  en: "obtain",
  ru: "получать",
  pos: "verb",
  hsd: ["{{word:de2}}"],
  tts: ["得"],
  fit: "word",
  topics: ["getting-and-receiving"],
  isA: ["receiving"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:de2}} {{word:le}} {{word:yi1}}-{{light:ge4}} {{word:hao3}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "我得了一个好工作。",
      en: "I got a good job.",
      ru: "Я получил хорошую работу.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:de2}} {{word:le}} {{word:hen3}} {{word:duo1}} {{word:jin1}}.",
      hanzi: "他得了很多金。",
      en: "He obtained a lot of money.",
      ru: "Он получил много денег.",
    },
  ],
});
