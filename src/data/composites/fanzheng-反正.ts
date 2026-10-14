import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1278,
  phase: 3,
  zh: "反正",
  py: "fǎnzhèng",
  en: "anyway",
  ru: "всё равно",
  pos: "adverb",
  hsd: ["{{word:zen3me}} {{word:dou1}} …"],
  tts: ["怎么都"],
  literal: "whichever way",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zen3me}} {{word:dou1}} {{word:hao3}}.",
      hanzi: "怎么都好。",
      en: "Anyway, it's fine.",
      ru: "В любом случае всё хорошо.",
    },
    {
      pinyin: "{{Word:zen3me}} {{word:dou1}} {{word:shi4}} {{word:wo3}} {{word:qu4}}.",
      hanzi: "怎么都是我去。",
      en: "Anyway, I'm going.",
      ru: "В любом случае пойду я.",
    },
  ],
});
