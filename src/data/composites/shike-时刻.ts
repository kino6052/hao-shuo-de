import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1121,
  phase: 3,
  zh: "时刻",
  py: "shíkè",
  en: "moment",
  ru: "момент",
  pos: "noun",
  hsd: ["{{word:yi1}}-{{word:xia4}}"],
  tts: ["一下"],
  fit: "word",
  topics: ["moments-and-stages"],
  isA: ["time-point"],
  examples: [
    {
      pinyin: "{{Word:deng3}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "等一下。",
      en: "Wait a moment.",
      ru: "Подожди минутку.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "我看一下。",
      en: "I look for a moment.",
      ru: "Я смотрю мгновение.",
    },
  ],
});
