import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 884,
  phase: 2,
  zh: "练",
  py: "liàn",
  en: "practice",
  ru: "тренировать",
  pos: "verb",
  hsd: ["{{word:hen3}} {{word:duo1}} {{word:ci4}} {{word:zuo4}}"],
  tts: ["很多次做"],
  literal: "do it many times",
  fit: "plain",
  topics: ["studying-and-practising"],
  isA: ["learning-and-teaching"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:duo1}} {{word:ci4}} {{word:zuo4}} {{word:na4}}-{{light:ge4}}.",
      hanzi: "他很多次做那个。",
      en: "He practices that.",
      ru: "Он тренируется в этом.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:hen3}} {{word:duo1}} {{word:ci4}} {{word:zuo4}} {{word:ma}}?",
      hanzi: "你很多次做吗？",
      en: "Do you practice a lot?",
      ru: "Ты много тренируешься?",
    },
  ],
});
