import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 609,
  phase: 2,
  zh: "位置",
  py: "wèizhì",
  en: "location",
  ru: "место",
  pos: "noun",
  hsd: ["{{word:di4}}-{{light:fang1}}"],
  tts: ["地方"],
  fit: "word",
  topics: ["place-location-and-space"],
  isA: ["place-word"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个地方很好。",
      en: "This position is good.",
      ru: "Это место хорошее.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:shu1}} {{word:zai4}} {{word:shen2me}} {{word:di4}}-{{light:fang1}}?",
      hanzi: "你的书在什么地方？",
      en: "Where is your book?",
      ru: "В каком месте твоя книга?",
    },
  ],
});
