import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1239,
  phase: 3,
  zh: "亲自",
  py: "qīnzì",
  en: "personally",
  ru: "лично",
  pos: "adverb",
  hsd: ["X {{word:lai2}} {{word:zuo4}}"],
  tts: ["X来做"],
  literal: "X does it",
  fit: "plain",
  topics: ["degree-words"],
  isA: ["adverb-word"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:lai2}} {{word:zuo4}}.",
      hanzi: "我来做。",
      en: "I'll do it myself.",
      ru: "Я сделаю это сам.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:ba4ba}} {{word:lai2}} {{word:zuo4}}.",
      hanzi: "你的爸爸来做。",
      en: "Your father will do it himself.",
      ru: "Твой отец сделает это сам.",
    },
  ],
});
