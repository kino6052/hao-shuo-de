import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 422,
  phase: 1,
  zh: "有意思",
  py: "yǒu yìsi",
  en: "interesting, fun",
  ru: "интересный",
  pos: "phrase",
  hsd: ["{{word:hao3}} {{word:wan2r}}"],
  tts: ["好玩儿"],
  literal: "good to play",
  fit: "natural",
  note: "For \"fun\".",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:hen3}} {{word:hao3}} {{word:wan2r}}.",
      hanzi: "这个很好玩儿。",
      en: "This is fun.",
      ru: "Это интересно.",
    },
    {
      pinyin: "{{Word:xue2}} \"Zhōngguó\" {{word:hua4}} {{word:hen3}} {{word:hao3}} {{word:wan2r}}.",
      hanzi: "学中国话很好玩儿。",
      en: "Learning Chinese is fun.",
      ru: "Учить китайский интересно.",
    },
  ],
});
