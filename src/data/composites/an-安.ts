import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1309,
  phase: 3,
  zh: "安",
  py: "ān",
  en: "peaceful",
  ru: "спокойный",
  pos: "adjective",
  hsd: ["{{word:hao3}}"],
  tts: ["好"],
  fit: "word",
  topics: ["how-good"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这里很好。",
      en: "It is peaceful here.",
      ru: "Здесь спокойно.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jia1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我家很好。",
      en: "My home is peaceful.",
      ru: "В моём доме спокойно.",
    },
  ],
});
