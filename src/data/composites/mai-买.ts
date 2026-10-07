import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 135,
  phase: 1,
  zh: "买",
  py: "mǎi",
  en: "buy",
  ru: "покупать",
  pos: "verb",
  hsd: ["{{word:mai3}}"],
  tts: ["买"],
  fit: "word",
  note: "Lesson {{lesson:questions}}.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:mai3}} {{word:le}} {{word:shen2me}}?",
      hanzi: "你买了什么？",
      en: "What did you buy?",
      ru: "Что ты купил?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:mai3}} {{word:yi1}}-{{light:ge4}} {{word:bao1}}.",
      hanzi: "我想买一个包。",
      en: "I'd like to buy a bag.",
      ru: "Я хочу купить сумку.",
    },
  ],
});
