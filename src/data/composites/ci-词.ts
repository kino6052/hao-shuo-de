import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 706,
  phase: 2,
  zh: "词",
  py: "cí",
  en: "word",
  ru: "слово",
  pos: "noun",
  hsd: ["{{word:ci2}}"],
  tts: ["词"],
  fit: "word",
  topics: ["writing"],
  isA: ["language-thing"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:ci2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个词很好。",
      en: "This word is good.",
      ru: "Это слово хорошее.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:zhe4}}-{{light:ge4}} {{word:ci2}} {{word:ma}}?",
      hanzi: "你知道这个词吗？",
      en: "Do you know this word?",
      ru: "Ты знаешь это слово?",
    },
  ],
});
