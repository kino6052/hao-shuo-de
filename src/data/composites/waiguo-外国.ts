import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 747,
  phase: 2,
  zh: "外国",
  py: "wàiguó",
  en: "foreign country",
  ru: "заграница",
  pos: "noun",
  hsd: ["{{word:wai4}}-{{word:guo2}}"],
  tts: ["外国"],
  literal: "outside country",
  fit: "natural",
  kinds: ["built"],
  topics: ["country-and-nation"],
  isA: ["place"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:wai4}}-{{word:guo2}}.",
      hanzi: "我去外国。",
      en: "I'm going abroad.",
      ru: "Я еду за границу.",
    },
    {
      pinyin: "{{Word:wai4}}-{{word:guo2}}-{{word:de}} {{word:shui3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "外国的水很好。",
      en: "Foreign water is good.",
      ru: "Вода за границей хорошая.",
    },
  ],
});
