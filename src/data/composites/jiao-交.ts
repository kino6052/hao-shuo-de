import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 734,
  phase: 2,
  zh: "交",
  py: "jiāo",
  en: "hand in",
  ru: "сдавать",
  pos: "verb",
  hsd: ["{{word:gei3}}"],
  tts: ["给"],
  literal: "give",
  fit: "plain",
  topics: ["spending-trading-and-returning"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:ta1}} {{word:shu1}}.",
      hanzi: "我给他书。",
      en: "I hand him the book.",
      ru: "Я передаю ему книгу.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:gei3}} {{word:wo3}} {{word:ma}}?",
      hanzi: "你给我吗？",
      en: "Will you hand it in to me?",
      ru: "Ты сдашь это мне?",
    },
  ],
});
