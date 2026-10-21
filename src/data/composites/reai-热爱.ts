import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1374,
  phase: 3,
  zh: "热爱",
  py: "rè’ài",
  en: "love deeply",
  ru: "горячо любить",
  pos: "verb",
  hsd: ["{{word:re4}}-{{word:ai4}}", "{{word:hen3}} {{word:ai4}}"],
  tts: ["热爱", "很爱"],
  literal: "hot love / love very much",
  fit: "natural",
  topics: ["liking-and-wanting"],
  isA: ["feeling-and-wanting"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:re4}}-{{word:ai4}} {{word:wo3}}-{{word:de}} {{word:jia1}}.",
      hanzi: "我热爱我的家。",
      en: "I love my home deeply.",
      ru: "Я горячо люблю свой дом.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:hen3}} {{word:ai4}} {{word:ta1}}.",
      hanzi: "我很爱他。",
      en: "I love him very much.",
      ru: "Я очень его люблю.",
    },
  ],
});
