import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 978,
  phase: 2,
  zh: "人民",
  py: "rénmín",
  en: "the people",
  ru: "народ",
  pos: "noun",
  hsd: ["{{word:guo2}}-{{word:de}} {{word:ren2}}"],
  tts: ["国的人"],
  literal: "the country's people",
  fit: "plain",
  topics: ["government"],
  isA: ["group-of-people"],
  examples: [
    {
      pinyin: "{{Word:guo2}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "国的人很多。",
      en: "The people are many.",
      ru: "Народа много.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:guo2}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我爱国的人。",
      en: "I love the people.",
      ru: "Я люблю народ.",
    },
  ],
});
