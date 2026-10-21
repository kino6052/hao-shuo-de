import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 965,
  phase: 2,
  zh: "嘴巴",
  py: "zuǐba",
  en: "mouth",
  ru: "рот",
  pos: "noun",
  hsd: ["{{word:kou3}}"],
  tts: ["口"],
  fit: "natural",
  topics: ["head-and-face"],
  isA: ["body-part"],
  note: "Real Mandarin: 口.",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:kou3}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "我的口很小。",
      en: "My mouth is small.",
      ru: "У меня маленький рот.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:kou3}} {{word:hen3}} {{word:da4}}.",
      hanzi: "他的口很大。",
      en: "His mouth is big.",
      ru: "У него большой рот.",
    },
  ],
});
