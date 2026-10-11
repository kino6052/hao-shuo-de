import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 933,
  phase: 2,
  zh: "客气",
  py: "kèqi",
  en: "polite",
  ru: "вежливый",
  pos: "adjective",
  hsd: ["{{word:dui4}} {{word:ren2}} {{word:hen3}} {{word:hao3}}"],
  tts: ["对人很好"],
  literal: "good to people",
  fit: "plain",
  note: "不客气 is bù yòng xiè.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:dui4}} {{word:ren2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他对人很好。",
      en: "He is polite.",
      ru: "Он вежлив.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:dui4}} {{word:ren2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "你对人很好。",
      en: "You are polite.",
      ru: "Ты вежлив.",
    },
  ],
});
