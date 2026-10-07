import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 153,
  phase: 1,
  zh: "告诉",
  py: "gàosu",
  en: "tell",
  ru: "сказать",
  pos: "verb",
  hsd: ["{{word:dui4}} … {{word:shuo1}}"],
  tts: ["对…说"],
  literal: "say to",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:dui4}} {{word:ta1}} {{word:shuo1}} {{word:le}}.",
      hanzi: "我对他说了。",
      en: "I told him.",
      ru: "Я ему сказал.",
    },
    {
      pinyin: "{{Word:bie2}} {{word:dui4}} {{word:ta1}} {{word:shuo1}}!",
      hanzi: "别对他说！",
      en: "Don't tell him!",
      ru: "Не говори ему!",
    },
  ],
});
