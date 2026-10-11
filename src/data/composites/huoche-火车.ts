import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 437,
  phase: 1,
  zh: "火车",
  py: "huǒchē",
  en: "train",
  ru: "поезд",
  pos: "noun",
  hsd: ["{{word:huo3}}-{{word:che1}}"],
  tts: ["火车"],
  literal: "fire car",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:huo3}}-{{word:che1}} {{word:lai2}} {{word:le}}.",
      hanzi: "火车来了。",
      en: "The train is coming.",
      ru: "Поезд идёт.",
    },
    {
      pinyin: "{{Word:huo3}}-{{word:che1}} {{word:hen3}} {{word:kuai4}}.",
      hanzi: "火车很快。",
      en: "The train is fast.",
      ru: "Поезд быстрый.",
    },
  ],
});
