import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 937,
  phase: 2,
  zh: "感冒",
  py: "gǎnmào",
  en: "cold (illness)",
  ru: "простуда",
  pos: "noun",
  hsd: ["{{word:bi2zi}} {{word:bu4}} {{word:hao3}}"],
  tts: ["鼻子不好"],
  literal: "a bad nose",
  fit: "plain",
  topics: ["fever-colds-and-diseases"],
  isA: ["state-name"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bi2zi}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "我鼻子不好。",
      en: "I have a cold.",
      ru: "Я простужен.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bi2zi}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "他鼻子不好。",
      en: "He has a cold.",
      ru: "Он простужен.",
    },
  ],
});
