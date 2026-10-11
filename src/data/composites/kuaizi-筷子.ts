import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 952,
  phase: 2,
  zh: "筷子",
  py: "kuàizi",
  en: "chopsticks",
  ru: "палочки",
  pos: "noun",
  hsd: ["\"Zhōngguó\"-{{word:de}} {{word:chi1}}-{{word:de}} {{word:gong1}}-{{word:ju4}}"],
  tts: ["中国的吃的工具"],
  literal: "China's tool for eating",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} \"Zhōngguó\"-{{word:de}} {{word:chi1}}-{{word:de}} {{word:gong1}}-{{word:ju4}}.",
      hanzi: "我有中国的吃的工具。",
      en: "I have chopsticks.",
      ru: "У меня есть палочки.",
    },
    {
      pinyin: "\"Zhōngguó\"-{{word:de}} {{word:chi1}}-{{word:de}} {{word:gong1}}-{{word:ju4}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "中国的吃的工具在这里。",
      en: "The chopsticks are here.",
      ru: "Палочки здесь.",
    },
  ],
});
