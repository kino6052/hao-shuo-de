import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 687,
  phase: 2,
  zh: "第",
  py: "dì",
  en: "(ordinal)",
  ru: "порядковый",
  pos: "prefix",
  hsd: ["{{word:di4}}-{{word:yi1}}"],
  tts: ["第一"],
  literal: "first",
  fit: "natural",
  topics: ["ordinals"],
  isA: ["ordinal"],
  note: "dì in front of a number puts it in order: dì-yī, first; dì-èr, second.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:di4}}-{{word:yi1}}.",
      hanzi: "他是第一。",
      en: "He is first.",
      ru: "Он первый.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shi4}} {{word:di4}}-{{word:yi1}}.",
      hanzi: "你是第一。",
      en: "You are first.",
      ru: "Ты первый.",
    },
  ],
});
