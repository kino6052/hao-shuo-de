import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 624,
  phase: 2,
  zh: "各",
  py: "gè",
  en: "each",
  ru: "каждый",
  pos: "pronoun",
  hsd: ["{{word:ge4}}-{{word:ge4}}"],
  tts: ["个个"],
  literal: "one-one",
  fit: "natural",
  topics: ["all-and-some"],
  isA: ["amount-word"],
  note: "Lesson {{lesson:doubling-words}}: gè-gè dōu.",
  examples: [
    {
      pinyin: "{{Word:ge4}}-{{word:ge4}} {{word:ren2}} {{word:dou1}} {{word:lai2}} {{word:le}}.",
      hanzi: "个个人都来了。",
      en: "Everyone came.",
      ru: "Пришёл каждый.",
    },
    {
      pinyin: "{{Word:ge4}}-{{word:ge4}} {{word:dou1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "个个都很好。",
      en: "Each one is good.",
      ru: "Каждый хорош.",
    },
  ],
});
