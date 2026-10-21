import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1358,
  phase: 3,
  zh: "来自",
  py: "láizì",
  en: "come from",
  ru: "происходить из",
  pos: "verb",
  hsd: ["{{word:cong2}} X {{word:lai2}}"],
  tts: ["从X来"],
  literal: "come from X",
  fit: "natural",
  topics: ["countries-and-cities"],
  isA: ["place-relation"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:cong2}} {{word:zhong1}}-{{word:guo2}} {{word:lai2}}.",
      hanzi: "我从中国来。",
      en: "I come from China.",
      ru: "Я родом из Китая.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:cong2}} {{word:wai4}}-{{word:guo2}} {{word:lai2}}.",
      hanzi: "他从外国来。",
      en: "He comes from abroad.",
      ru: "Он приехал из-за границы.",
    },
  ],
});
