import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 946,
  phase: 2,
  zh: "比如",
  py: "bǐrú",
  en: "for example",
  ru: "например",
  pos: "verb",
  hsd: ["{{word:ni3}} {{word:kan4}}, X"],
  tts: ["你看，X"],
  literal: "look, X",
  fit: "plain",
  topics: ["then-for-example-in-short"],
  isA: ["conjunction"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:kan4}}, X.",
      hanzi: "你看，X。",
      en: "For example, X.",
      ru: "Например, X.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kan4}}, X, {{word:wo3}} {{word:you3}}.",
      hanzi: "你看，X，我有。",
      en: "For example, X, I have it.",
      ru: "Например, X, у меня есть.",
    },
  ],
});
