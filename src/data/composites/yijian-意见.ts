import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 652,
  phase: 2,
  zh: "意见",
  py: "yìjiàn",
  en: "opinion",
  ru: "мнение",
  pos: "noun",
  hsd: ["{{word:xiang3}}-{{word:fa3}}"],
  tts: ["想法"],
  literal: "thought-way",
  fit: "plain",
  topics: ["opinions-and-views"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:xiang3}}-{{word:fa3}}.",
      hanzi: "我有想法。",
      en: "I have an opinion.",
      ru: "У меня есть мнение.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:xiang3}}-{{word:fa3}} {{word:ma}}?",
      hanzi: "你有想法吗？",
      en: "Do you have an opinion?",
      ru: "У тебя есть мнение?",
    },
  ],
});
