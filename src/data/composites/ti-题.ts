import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 724,
  phase: 2,
  zh: "题",
  py: "tí",
  en: "question, problem",
  ru: "задача",
  pos: "noun",
  hsd: ["{{word:ti2}}", "{{word:wen4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["题", "问的东西"],
  literal: "something asked",
  fit: "word",
  topics: ["studying"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:ti2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个题很好。",
      en: "This question is good.",
      ru: "Этот вопрос хороший.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:ti2}} {{word:ma}}?",
      hanzi: "你有题吗？",
      en: "Do you have a question?",
      ru: "У тебя есть вопрос?",
    },
  ],
});
