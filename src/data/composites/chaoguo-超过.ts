import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 710,
  phase: 2,
  zh: "超过",
  py: "chāoguò",
  en: "exceed",
  ru: "превышать",
  pos: "verb",
  hsd: ["{{word:bi3}} X {{word:duo1}}"],
  tts: ["比X多"],
  literal: "more than X",
  fit: "natural",
  topics: ["same-and-different"],
  isA: ["comparison"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:bi3}} {{word:wo3}} {{word:duo1}}.",
      hanzi: "他比我多。",
      en: "He has more than I do.",
      ru: "У него больше, чем у меня.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:bi3}} {{word:ta1}} {{word:duo1}} {{word:ma}}?",
      hanzi: "你比他多吗？",
      en: "Do you have more than he does?",
      ru: "У тебя больше, чем у него?",
    },
  ],
});
