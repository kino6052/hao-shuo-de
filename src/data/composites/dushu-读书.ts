import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 784,
  phase: 2,
  zh: "读书",
  py: "dúshū",
  en: "read, study",
  ru: "читать, учиться",
  pos: "verb",
  hsd: ["{{word:kan4}} {{word:shu1}}"],
  tts: ["看书"],
  literal: "look at books",
  fit: "natural",
  transparent: true,
  topics: ["studying"],
  isA: ["learning-and-teaching"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:shu1}}.",
      hanzi: "我看书。",
      en: "I read.",
      ru: "Я читаю.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:kan4}} {{word:shu1}}.",
      hanzi: "他在看书。",
      en: "He is reading.",
      ru: "Он читает.",
    },
  ],
});
