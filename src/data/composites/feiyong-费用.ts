import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1418,
  phase: 3,
  zh: "费用",
  py: "fèiyong",
  en: "cost, expense",
  ru: "расходы",
  pos: "noun",
  hsd: ["{{word:yao4}}-{{word:de}} {{word:jin1}}"],
  tts: ["要的金"],
  literal: "the money it takes",
  fit: "plain",
  topics: ["money-and-paying"],
  isA: ["money-thing"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:yao4}}-{{word:de}} {{word:jin1}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "这个要的金很多。",
      en: "The cost of this is high.",
      ru: "Это стоит дорого.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}}-{{word:de}} {{word:jin1}} {{word:shi4}} {{word:duo1}}-{{word:shao3}}?",
      hanzi: "你要的金是多少？",
      en: "How much do you ask?",
      ru: "Сколько ты просишь?",
    },
  ],
});
