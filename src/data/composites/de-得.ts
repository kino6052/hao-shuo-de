import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 649,
  phase: 2,
  zh: "得",
  py: "dé",
  en: "get",
  ru: "получать",
  pos: "verb",
  hsd: ["{{word:de2}}"],
  tts: ["得"],
  fit: "word",
  topics: ["getting-and-receiving"],
  isA: ["receiving"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:de2}}-{{word:dao4}} {{word:le}}.",
      hanzi: "我得到了。",
      en: "I got it.",
      ru: "Я получил.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:de2}}-{{word:dao4}} {{word:le}} {{word:ma}}?",
      hanzi: "你得到了吗？",
      en: "Did you get it?",
      ru: "Ты получил?",
    },
  ],
});
