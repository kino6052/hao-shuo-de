import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 71,
  phase: 1,
  zh: "要",
  py: "yào",
  en: "want",
  ru: "хотеть",
  pos: "verb",
  hsd: ["{{word:yao4}}"],
  tts: ["要"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:yi1}}-{{light:ge4}} {{word:bao1}}.",
      hanzi: "我要一个包。",
      en: "I want a bag.",
      ru: "Я хочу сумку.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:he1}} {{word:shen2me}}?",
      hanzi: "你要喝什么？",
      en: "What would you like to drink?",
      ru: "Что ты будешь пить?",
    },
  ],
});
