import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 990,
  phase: 2,
  zh: "法",
  py: "fǎ",
  en: "law",
  ru: "закон",
  pos: "noun",
  hsd: ["{{word:fa3}}"],
  tts: ["法"],
  literal: "law",
  fit: "word",
  topics: ["ideas-and-opinions"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:fa3}}.",
      hanzi: "我知道法。",
      en: "I know the law.",
      ru: "Я знаю закон.",
    },
    {
      pinyin: "{{Word:fa3}} {{word:hen3}} {{word:zhong4}}.",
      hanzi: "法很重。",
      en: "The law is heavy.",
      ru: "Закон строгий.",
    },
  ],
});
