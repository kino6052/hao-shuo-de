import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 26,
  phase: 1,
  zh: "中国",
  py: "Zhōngguó",
  en: "China",
  ru: "Китай",
  pos: "noun",
  hsd: ["\"Zhōngguó\""],
  tts: ["中国"],
  fit: "name",
  note: "Names go in quotes.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} \"Zhōngguó\".",
      hanzi: "她在中国。",
      en: "She's in China.",
      ru: "Она в Китае.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:qu4}} \"Zhōngguó\".",
      hanzi: "我想去中国。",
      en: "I'd like to go to China.",
      ru: "Я хочу поехать в Китай.",
    },
  ],
});
