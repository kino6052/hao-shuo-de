import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1411,
  phase: 3,
  zh: "词语",
  py: "cíyǔ",
  en: "word, phrase",
  ru: "слово, выражение",
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
      pinyin: "{{Word:wo3}} {{word:xue2}} {{word:zhe4}}-{{light:ge4}} {{word:ci2}}.",
      hanzi: "我学这个词。",
      en: "I learn this word.",
      ru: "Я учу это слово.",
    },
  ],
});
