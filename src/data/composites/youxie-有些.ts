import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 764,
  phase: 2,
  zh: "有些",
  py: "yǒuxiē",
  en: "some",
  ru: "некоторые",
  pos: "pronoun",
  hsd: ["{{word:you3}}-{{word:xie1}}", "{{word:yi1}}-{{word:bu4}}-{{light:fen1}}"],
  tts: ["有些", "一部分"],
  literal: "a part",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["all-and-some"],
  isA: ["amount-word"],
  note: "Lesson {{lesson:also-and-all}}.",
  examples: [
    {
      pinyin: "{{Word:you3}}-{{word:xie1}} {{word:ren2}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "有些人不来。",
      en: "Some people aren't coming.",
      ru: "Некоторые не придут.",
    },
    {
      pinyin: "{{Word:you3}}-{{word:xie1}} {{word:shu1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "有些书很好。",
      en: "Some books are good.",
      ru: "Некоторые книги хорошие.",
    },
  ],
});
