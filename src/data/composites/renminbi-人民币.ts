import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 605,
  phase: 2,
  zh: "人民币",
  py: "rénmínbì",
  en: "renminbi (yuan)",
  ru: "юань",
  pos: "noun",
  hsd: ["\"Zhōngguó\"-{{word:de}} {{word:jin1}}"],
  tts: ["中国的金"],
  literal: "China's money",
  fit: "name",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} \"Zhōngguó\"-{{word:de}} {{word:jin1}}.",
      hanzi: "我有“中国”的金。",
      en: "I have renminbi.",
      ru: "У меня есть юани.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} \"Zhōngguó\"-{{word:de}} {{word:jin1}} {{word:ma}}?",
      hanzi: "你要“中国”的金吗？",
      en: "Do you want renminbi?",
      ru: "Тебе нужны юани?",
    },
  ],
});
