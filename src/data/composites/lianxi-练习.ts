import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 777,
  phase: 2,
  zh: "练习",
  py: "liànxí",
  en: "practice, exercise",
  ru: "упражнение",
  pos: "verb",
  hsd: ["{{word:hen3}} {{word:duo1}} {{word:ci4}} {{word:zuo4}}"],
  tts: ["很多次做"],
  literal: "do it many times",
  fit: "plain",
  topics: ["studying-and-practising"],
  isA: ["learning-and-teaching"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hen3}} {{word:duo1}} {{word:ci4}} {{word:zuo4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我很多次做这个。",
      en: "I practice this.",
      ru: "Я упражняюсь в этом.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:duo1}} {{word:ci4}} {{word:zuo4}}.",
      hanzi: "他很多次做。",
      en: "He practices.",
      ru: "Он упражняется.",
    },
  ],
});
