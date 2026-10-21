import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 707,
  phase: 2,
  zh: "语文",
  py: "yǔwén",
  en: "Chinese (school subject)",
  ru: "китайский язык",
  pos: "noun",
  hsd: ["\"Zhōngguó\" {{word:hua4}}"],
  tts: ["中国话"],
  literal: "China speech",
  fit: "natural",
  topics: ["studying"],
  isA: ["language-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:xue2}} \"Zhōngguó\" {{word:hua4}}.",
      hanzi: "我们学中国话。",
      en: "We study Chinese (the subject).",
      ru: "Мы учим китайский (предмет).",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} \"Zhōngguó\" {{word:hua4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "你的中国话很好。",
      en: "Your Chinese is good.",
      ru: "Твой китайский хороший.",
    },
  ],
});
