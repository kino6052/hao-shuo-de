import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 105,
  phase: 1,
  zh: "开始",
  py: "kāishǐ",
  en: "begin",
  ru: "начинать",
  pos: "verb",
  hsd: ["{{word:kai1shi3}}"],
  tts: ["开始"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:kai1shi3}} {{word:le}}.",
      hanzi: "我们开始了。",
      en: "We've started.",
      ru: "Мы начали.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:kai1shi3}} {{word:xue2}} \"Zhōngguó\" {{word:hua4}} {{word:le}}.",
      hanzi: "他开始学中国话了。",
      en: "He's started learning Chinese.",
      ru: "Он начал учить китайский.",
    },
  ],
});
