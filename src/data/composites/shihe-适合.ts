import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1426,
  phase: 3,
  zh: "适合",
  py: "shìhé",
  en: "suit, fit",
  ru: "подходить",
  pos: "verb",
  hsd: ["{{word:dui4}} X {{word:hao3}}"],
  tts: ["对X好"],
  literal: "good for X",
  fit: "plain",
  topics: ["how-good"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:dui4}} {{word:wo3}} {{word:hao3}}.",
      hanzi: "这个对我好。",
      en: "This suits me.",
      ru: "Это мне подходит.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:dui4}} {{word:ta1}} {{word:hao3}}.",
      hanzi: "那个对他好。",
      en: "That suits him.",
      ru: "То ему подходит.",
    },
  ],
});
