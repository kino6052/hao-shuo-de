import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 547,
  phase: 2,
  zh: "这边",
  py: "zhèbiān",
  en: "here, this side",
  ru: "здесь",
  pos: "pronoun",
  hsd: ["{{word:zhe4}}-{{word:bian1}}"],
  tts: ["这边"],
  literal: "this side",
  fit: "natural",
  note: "Real Mandarin: 这边.",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:bian1}} {{word:you3}} {{word:ren2}}.",
      hanzi: "这边有人。",
      en: "There's someone over here.",
      ru: "С этой стороны кто-то есть.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:lai2}} {{word:zhe4}}-{{word:bian1}}.",
      hanzi: "你来这边。",
      en: "Come over here.",
      ru: "Иди сюда.",
    },
  ],
});
