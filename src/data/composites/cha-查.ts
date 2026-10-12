import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 670,
  phase: 2,
  zh: "查",
  py: "chá",
  en: "check",
  ru: "проверить",
  pos: "verb",
  hsd: ["{{word:hao3}}-{{word:hao3}} {{word:kan4}}", "{{word:kan4}}-kan"],
  tts: ["好好看", "看看"],
  literal: "have a look",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:kan4}}-{{light:kan4}}.",
      hanzi: "你看看。",
      en: "Take a look.",
      ru: "Посмотри.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{light:kan4}} {{word:shu1}}.",
      hanzi: "我看看书。",
      en: "I'll look through the book.",
      ru: "Я посмотрю книгу.",
    },
  ],
});
