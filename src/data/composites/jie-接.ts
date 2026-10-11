import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 410,
  phase: 1,
  zh: "接",
  py: "jiē",
  en: "pick up, receive",
  ru: "встречать, получать",
  pos: "verb",
  hsd: ["{{word:na2}}-{{word:dao4}}"],
  tts: ["拿到"],
  literal: "take-reach",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:na2}}-{{word:dao4}} {{word:le}} {{word:ni3}}-{{word:de}} {{word:shu1}}.",
      hanzi: "我拿到了你的书。",
      en: "I got your book.",
      ru: "Я получил твою книгу.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:na2}}-{{word:dao4}} {{word:le}} {{word:ma}}?",
      hanzi: "你拿到了吗？",
      en: "Did you get it?",
      ru: "Ты получил?",
    },
  ],
});
