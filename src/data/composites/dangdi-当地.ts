import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1327,
  phase: 3,
  zh: "当地",
  py: "dāngdì",
  en: "local",
  ru: "местный",
  pos: "noun",
  hsd: ["{{word:zhe4}}-{{word:li3}}"],
  tts: ["这里"],
  literal: "here",
  fit: "natural",
  topics: ["near-and-far"],
  isA: ["place-word"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这里的人很好。",
      en: "The local people are kind.",
      ru: "Местные люди добрые.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}}-{{word:de}} {{word:shui3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这里的水很好。",
      en: "The local water is good.",
      ru: "Местная вода хорошая.",
    },
  ],
});
