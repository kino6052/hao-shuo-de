import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 763,
  phase: 2,
  zh: "明星",
  py: "míngxīng",
  en: "star (celebrity)",
  ru: "звезда",
  pos: "noun",
  hsd: ["{{word:you3}}-{{word:ming2}}-{{word:de}} {{word:ren2}}"],
  tts: ["有名的人"],
  literal: "a person with a name (a famous person)",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:you3}}-{{word:ming2}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是有名的人。",
      en: "He is a star.",
      ru: "Он звезда.",
    },
    {
      pinyin: "{{Word:you3}}-{{word:ming2}}-{{word:de}} {{word:ren2}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "有名的人在这里。",
      en: "The star is here.",
      ru: "Звезда здесь.",
    },
  ],
});
