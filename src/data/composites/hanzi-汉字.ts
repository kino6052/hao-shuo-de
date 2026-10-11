import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 592,
  phase: 2,
  zh: "汉字",
  py: "Hànzì",
  en: "Chinese character",
  ru: "иероглиф",
  pos: "noun",
  hsd: ["\"Zhōngguó\"-{{word:de}} {{word:zi4}}"],
  tts: ["中国的字"],
  literal: "China's characters",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} \"Zhōngguó\"-{{word:de}} {{word:zi4}}.",
      hanzi: "我爱“中国”的字。",
      en: "I love Chinese characters.",
      ru: "Я люблю китайские иероглифы.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:xie3}} \"Zhōngguó\"-{{word:de}} {{word:zi4}} {{word:ma}}?",
      hanzi: "你能写“中国”的字吗？",
      en: "Can you write Chinese characters?",
      ru: "Ты умеешь писать китайские иероглифы?",
    },
  ],
});
