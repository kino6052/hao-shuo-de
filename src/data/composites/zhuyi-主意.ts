import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 730,
  phase: 2,
  zh: "主意",
  py: "zhǔyi",
  en: "idea",
  ru: "идея",
  pos: "noun",
  hsd: ["{{word:xiang3}}-{{word:fa3}}", "{{word:fang1}}-{{word:fa3}}"],
  tts: ["想法", "方法"],
  literal: "way",
  fit: "plain",
  topics: ["deciding"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:hao3}} {{word:fang1}}-{{word:fa3}}.",
      hanzi: "我有好方法。",
      en: "I have a good idea.",
      ru: "У меня есть хорошая идея.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:fang1}}-{{word:fa3}} {{word:ma}}?",
      hanzi: "你有方法吗？",
      en: "Do you have an idea?",
      ru: "У тебя есть идея?",
    },
  ],
});
