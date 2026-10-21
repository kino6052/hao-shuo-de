import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1322,
  phase: 3,
  zh: "工资",
  py: "gōngzī",
  en: "wages, salary",
  ru: "зарплата",
  pos: "noun",
  hsd: ["{{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:jin1}}"],
  tts: ["工作的金"],
  literal: "the money of work",
  fit: "plain",
  topics: ["money-and-paying"],
  isA: ["money-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:jin1}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "我的工作的金很多。",
      en: "My wages are high.",
      ru: "У меня большая зарплата.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yao4}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:jin1}}.",
      hanzi: "他要工作的金。",
      en: "He wants his wages.",
      ru: "Он хочет свою зарплату.",
    },
  ],
});
