import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1280,
  phase: 3,
  zh: "取",
  py: "qǔ",
  en: "take, fetch",
  ru: "брать, получать",
  pos: "verb",
  hsd: ["{{word:na2}}"],
  tts: ["拿"],
  fit: "word",
  topics: ["taking-picking-up-and-using"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:na2}} {{word:shu1}}.",
      hanzi: "我去拿书。",
      en: "I go and fetch the book.",
      ru: "Я иду за книгой.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:lai2}} {{word:na2}}.",
      hanzi: "你来拿。",
      en: "Come and take it.",
      ru: "Приходи и забирай.",
    },
  ],
});
