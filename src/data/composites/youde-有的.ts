import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1514,
  phase: 3,
  zh: "有的",
  py: "yǒude",
  en: "some",
  ru: "некоторые",
  pos: "pronoun",
  hsd: ["{{word:you3}}-{{word:de}}"],
  tts: ["有的"],
  literal: "some",
  fit: "natural",
  topics: ["some-most-and-few"],
  isA: ["amount-word"],
  note: "Real Mandarin: 有的.",
  examples: [
    {
      pinyin: "{{Word:you3}}-{{word:de}} {{word:ren2}} {{word:lai2}} {{word:le}}.",
      hanzi: "有的人来了。",
      en: "Some people came.",
      ru: "Некоторые люди пришли.",
    },
    {
      pinyin: "{{Word:you3}}-{{word:de}} {{word:shu1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "有的书很好。",
      en: "Some books are good.",
      ru: "Некоторые книги хорошие.",
    },
  ],
});
