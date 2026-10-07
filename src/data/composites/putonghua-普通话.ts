import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 314,
  phase: 1,
  zh: "普通话",
  py: "pǔtōnghuà",
  en: "Mandarin",
  ru: "путунхуа, китайский",
  pos: "noun",
  hsd: ["\"Zhōngguó\" {{word:hua4}}"],
  tts: ["中国话"],
  literal: "China speech",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} \"Zhōngguó\" {{word:hua4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他的中国话很好。",
      en: "His Mandarin is good.",
      ru: "У него хороший китайский.",
    },
    {
      pinyin: "{{Word:zai4}} {{word:xue2}}-{{word:xiao4}} {{word:wo3}}-{{word:men}} {{word:shuo1}} \"Zhōngguó\" {{word:hua4}}.",
      hanzi: "在学校我们说中国话。",
      en: "At school we speak Mandarin.",
      ru: "В школе мы говорим на путунхуа.",
    },
  ],
});
