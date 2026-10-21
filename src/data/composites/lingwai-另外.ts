import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1282,
  phase: 3,
  zh: "另外",
  py: "lìngwài",
  en: "other; besides; additional",
  ru: "другой; кроме того",
  pos: "pronoun",
  hsd: ["{{word:bie2}}-{{word:de}}"],
  tts: ["别的"],
  fit: "word",
  topics: ["and-or-and-also"],
  isA: ["conjunction"],
  note: "Besides is yě.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:bie2}}-{{word:de}}.",
      hanzi: "我要别的。",
      en: "I want another one.",
      ru: "Я хочу другой.",
    },
    {
      pinyin: "{{Word:hai2}} {{word:you3}} {{word:bie2}}-{{word:de}} {{word:ren2}}.",
      hanzi: "还有别的人。",
      en: "There are other people too.",
      ru: "Есть и другие люди.",
    },
  ],
});
