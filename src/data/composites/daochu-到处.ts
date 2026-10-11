import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 811,
  phase: 2,
  zh: "到处",
  py: "dàochù",
  en: "everywhere",
  ru: "везде",
  pos: "adverb",
  hsd: ["{{word:na3}}-{{word:li3}} {{word:dou1}}"],
  tts: ["哪里都"],
  literal: "wherever",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:na3}}-{{word:li3}} {{word:dou1}} {{word:you3}} {{word:shui3}}.",
      hanzi: "哪里都有水。",
      en: "There is water everywhere.",
      ru: "Вода везде.",
    },
    {
      pinyin: "{{Word:na3}}-{{word:li3}} {{word:dou1}} {{word:you3}} {{word:ren2}}.",
      hanzi: "哪里都有人。",
      en: "There are people everywhere.",
      ru: "Везде люди.",
    },
  ],
});
