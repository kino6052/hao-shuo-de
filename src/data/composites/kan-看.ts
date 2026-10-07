import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 13,
  phase: 1,
  zh: "看",
  py: "kàn",
  en: "look at",
  ru: "смотреть",
  pos: "verb",
  hsd: ["{{word:kan4}}"],
  tts: ["看"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:kan4}} {{word:shu1}}.",
      hanzi: "我在看书。",
      en: "I'm reading a book.",
      ru: "Я читаю книгу.",
    },
    { pinyin: "{{Word:ni3}} {{word:kan4}}!", hanzi: "你看！", en: "Look!", ru: "Смотри!" },
  ],
});
