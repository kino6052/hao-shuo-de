import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1130,
  phase: 3,
  zh: "正常",
  py: "zhèngcháng",
  en: "normal",
  ru: "нормальный",
  pos: "adjective",
  hsd: ["{{word:ping2}}-{{word:chang2}}"],
  tts: ["平常"],
  literal: "usual",
  fit: "natural",
  topics: ["state-of-things"],
  isA: ["condition-quality"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:hen3}} {{word:ping2}}-{{word:chang2}}.",
      hanzi: "这很平常。",
      en: "This is normal.",
      ru: "Это нормально.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:ping2}}-{{word:chang2}}.",
      hanzi: "他很平常。",
      en: "He is normal.",
      ru: "Он нормальный.",
    },
  ],
});
