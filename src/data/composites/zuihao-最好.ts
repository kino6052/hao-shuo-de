import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 420,
  phase: 1,
  zh: "最好",
  py: "zuìhǎo",
  en: "best",
  ru: "лучший",
  pos: "adverb",
  hsd: [
    "{{word:zui4}}-{{word:hao3}}",
    "{{word:bi3}} {{word:bie2}}-{{word:de}} {{word:dou1}} {{word:hao3}}",
  ],
  tts: ["最好", "比别的都好"],
  literal: "most good / better than all the others",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:zui4}}-{{word:hao3}}.",
      hanzi: "这个最好。",
      en: "This one is the best.",
      ru: "Этот лучше всех.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zui4}}-{{word:hao3}} {{word:duo1}} {{word:he1}} {{word:shui3}}.",
      hanzi: "你最好多喝水。",
      en: "You'd best drink more water.",
      ru: "Тебе лучше пить больше воды.",
    },
  ],
});
