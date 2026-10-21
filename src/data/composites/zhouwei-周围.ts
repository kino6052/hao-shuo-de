import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1292,
  phase: 3,
  zh: "周围",
  py: "zhōuwéi",
  en: "surroundings",
  ru: "вокруг, окрестности",
  pos: "noun",
  hsd: ["{{word:fu4jin4}}"],
  tts: ["附近"],
  fit: "word",
  topics: ["beside-and-around"],
  isA: ["place-relation"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jia1}} {{word:fu4jin4}} {{word:you3}} {{word:shu1}}.",
      hanzi: "我家附近有书。",
      en: "There are books around my home.",
      ru: "Вокруг моего дома есть книги.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:jia1}} {{word:fu4jin4}} {{word:you3}} {{word:shui3}}.",
      hanzi: "他家附近有水。",
      en: "There is water around his home.",
      ru: "Рядом с его домом есть вода.",
    },
  ],
});
