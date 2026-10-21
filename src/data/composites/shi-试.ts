import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 893,
  phase: 2,
  zh: "试",
  py: "shì",
  en: "try",
  ru: "пробовать",
  pos: "verb",
  hsd: ["{{word:zuo4}} {{word:yi1}}-{{word:xia4}}"],
  tts: ["做一下"],
  literal: "do it for a moment",
  fit: "natural",
  topics: ["deciding"],
  isA: ["thinking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "我做一下。",
      en: "I'll try it.",
      ru: "Я попробую.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zuo4}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "你做一下。",
      en: "Give it a try.",
      ru: "Попробуй.",
    },
  ],
});
