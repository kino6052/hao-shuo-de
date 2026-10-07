import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 10,
  phase: 1,
  zh: "有",
  py: "yǒu",
  en: "have",
  ru: "иметь",
  pos: "verb",
  hsd: ["{{word:you3}}"],
  tts: ["有"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:liang3}}-{{light:ge4}} {{word:hai2}}-{{word:zi}}.",
      hanzi: "我有两个孩子。",
      en: "I have two children.",
      ru: "У меня двое детей.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:you3}} {{word:shui3}} {{word:ma}}?",
      hanzi: "这里有水吗？",
      en: "Is there water here?",
      ru: "Здесь есть вода?",
    },
  ],
});
