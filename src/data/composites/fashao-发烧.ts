import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 925,
  phase: 2,
  zh: "发烧",
  py: "fāshāo",
  en: "have a fever",
  ru: "температура",
  pos: "verb",
  hsd: ["{{word:shen1ti3}} {{word:hen3}} {{word:re4}}"],
  tts: ["身体很热"],
  literal: "the body is very hot",
  fit: "natural",
  topics: ["fever-colds-and-diseases"],
  isA: ["state-name"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shen1ti3}} {{word:hen3}} {{word:re4}}.",
      hanzi: "我身体很热。",
      en: "I have a fever.",
      ru: "У меня жар.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shen1ti3}} {{word:hen3}} {{word:re4}}.",
      hanzi: "他身体很热。",
      en: "He has a fever.",
      ru: "У него жар.",
    },
  ],
});
