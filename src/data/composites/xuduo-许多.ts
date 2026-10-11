import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 705,
  phase: 2,
  zh: "许多",
  py: "xǔduō",
  en: "many",
  ru: "многие",
  pos: "number",
  hsd: ["{{word:hen3}} {{word:duo1}}"],
  tts: ["很多"],
  literal: "very many",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:shu1}}.",
      hanzi: "我有很多书。",
      en: "I have many books.",
      ru: "У меня много книг.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:ren2}}.",
      hanzi: "这里有很多人。",
      en: "There are many people here.",
      ru: "Здесь много людей.",
    },
  ],
});
