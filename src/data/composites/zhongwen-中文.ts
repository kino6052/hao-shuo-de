import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 259,
  phase: 1,
  zh: "中文",
  py: "Zhōngwén",
  en: "Chinese (language)",
  ru: "китайский язык",
  pos: "noun",
  hsd: ["\"Zhōngguó\" {{word:hua4}}"],
  tts: ["中国话"],
  literal: "China speech",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:hui4}} {{word:shuo1}} \"Zhōngguó\" {{word:hua4}} {{word:ma}}?",
      hanzi: "你会说中国话吗？",
      en: "Do you speak Chinese?",
      ru: "Ты говоришь по-китайски?",
    },
    {
      pinyin: "\"Zhōngguó\" {{word:hua4}} {{word:hen3}} {{word:hao3}}-{{word:ting1}}.",
      hanzi: "中国话很好听。",
      en: "Chinese sounds beautiful.",
      ru: "Китайский красиво звучит.",
    },
  ],
});
