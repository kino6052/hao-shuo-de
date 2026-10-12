import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1166,
  phase: 3,
  zh: "程度",
  py: "chéngdù",
  en: "degree, extent",
  ru: "степень",
  pos: "noun",
  hsd: ["{{word:duo1}} {{word:da4}}"],
  tts: ["多大"],
  literal: "how big (it is)",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:duo1}} {{word:da4}}.",
      hanzi: "我知道多大。",
      en: "I know the degree.",
      ru: "Я знаю степень.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kan4}} {{word:duo1}} {{word:da4}}.",
      hanzi: "你看多大。",
      en: "See how far it goes.",
      ru: "Посмотри, насколько это велико.",
    },
  ],
});
