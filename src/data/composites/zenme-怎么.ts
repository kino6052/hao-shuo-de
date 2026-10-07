import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 175,
  phase: 1,
  zh: "怎么",
  py: "zěnme",
  en: "how",
  ru: "как",
  pos: "pronoun",
  hsd: ["{{word:zen3me}}"],
  tts: ["怎么"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:zen3me}} {{word:zuo4}}?",
      hanzi: "这个怎么做？",
      en: "How do you do this?",
      ru: "Как это делается?",
    },
    {
      pinyin: "{{Word:qu4}} {{word:xue2}}-{{word:xiao4}} {{word:zen3me}} {{word:zou3}}?",
      hanzi: "去学校怎么走？",
      en: "How do I get to the school?",
      ru: "Как пройти к школе?",
    },
  ],
});
