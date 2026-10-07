import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 331,
  phase: 1,
  zh: "过",
  py: "guò",
  en: "placed right after a verb to say you have done it at least once before",
  ru: "ставится сразу после глагола и означает",
  pos: "verb",
  hsd: ["{{word:guo4}}"],
  tts: ["过"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}}-{{word:guo4}} \"Zhōngguó\".",
      hanzi: "我去过中国。",
      en: "I've been to China.",
      ru: "Я был в Китае.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:chi1}}-{{word:guo4}} {{word:zhe4}}-{{light:ge4}} {{word:ma}}?",
      hanzi: "你吃过这个吗？",
      en: "Have you ever eaten this?",
      ru: "Ты когда-нибудь это ел?",
    },
  ],
});
