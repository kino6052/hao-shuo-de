import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1378,
  phase: 3,
  zh: "现金",
  py: "xiànjīn",
  en: "cash",
  ru: "наличные",
  pos: "noun",
  hsd: ["{{word:jin1}}"],
  tts: ["金"],
  fit: "word",
  topics: ["money-and-cards"],
  isA: ["money-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:jin1}}.",
      hanzi: "我有金。",
      en: "I have cash.",
      ru: "У меня есть наличные.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:jin1}} {{word:ma}}?",
      hanzi: "你要金吗？",
      en: "Do you want cash?",
      ru: "Тебе нужны наличные?",
    },
  ],
});
