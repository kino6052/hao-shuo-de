import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 749,
  phase: 2,
  zh: "季节",
  py: "jìjié",
  en: "season",
  ru: "время года",
  pos: "noun",
  hsd: ["{{word:nian2}}-{{word:de}} {{word:yi1}}-{{word:bu4}}-{{light:fen1}}"],
  tts: ["年的一部分"],
  literal: "a part of the year",
  fit: "plain",
  topics: ["seasons"],
  isA: ["time-span"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:nian2}}-{{word:de}} {{word:yi1}} {{word:bu4}}-{{light:fen1}}.",
      hanzi: "我爱年的一部分。",
      en: "I love this season.",
      ru: "Я люблю это время года.",
    },
    {
      pinyin: "{{Word:nian2}}-{{word:de}} {{word:yi1}} {{word:bu4}}-{{light:fen1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "年的一部分很好。",
      en: "The season is nice.",
      ru: "Это время года хорошее.",
    },
  ],
});
