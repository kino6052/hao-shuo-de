import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1300,
  phase: 3,
  zh: "基本上",
  py: "jīběnshàng",
  en: "basically",
  ru: "в основном",
  pos: "adverb",
  hsd: ["{{word:da4}} {{word:bu4}}-{{light:fen1}}"],
  tts: ["大部分"],
  literal: "the big part",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:da4}} {{word:bu4}}-{{light:fen1}} {{word:zhi1dao4}}.",
      hanzi: "我大部分知道。",
      en: "I basically know.",
      ru: "В основном я знаю.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:da4}} {{word:bu4}}-{{light:fen1}} {{word:shi4}} {{word:ni3}}-{{word:de}}.",
      hanzi: "这大部分是你的。",
      en: "This is mostly yours.",
      ru: "Это в основном твоё.",
    },
  ],
});
