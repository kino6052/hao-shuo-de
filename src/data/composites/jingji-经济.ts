import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 996,
  phase: 2,
  zh: "经济",
  py: "jīngjì",
  en: "economy",
  ru: "экономика",
  pos: "noun",
  hsd: ["{{word:jin1}}-{{word:de}} {{word:guan1xi}}"],
  tts: ["金的关系"],
  literal: "the relations of money",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:de}} {{word:guan1xi}} {{word:hen3}} {{word:da4}}.",
      hanzi: "金的关系很大。",
      en: "The economy is big.",
      ru: "Экономика большая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xue2}} {{word:jin1}}-{{word:de}} {{word:guan1xi}}.",
      hanzi: "我学金的关系。",
      en: "I study the economy.",
      ru: "Я изучаю экономику.",
    },
  ],
});
