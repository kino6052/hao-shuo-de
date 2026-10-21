import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1290,
  phase: 3,
  zh: "向",
  py: "xiàng",
  en: "toward",
  ru: "к, в сторону",
  pos: "verb",
  hsd: ["{{word:dui4}}"],
  tts: ["对"],
  fit: "word",
  topics: ["words-before-nouns"],
  isA: ["preposition"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:dui4}} {{word:wo3}} {{word:shuo1}}.",
      hanzi: "他对我说。",
      en: "He speaks to me.",
      ru: "Он говорит мне.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:dui4}} {{word:ta1}} {{word:zou3}}.",
      hanzi: "我对他走。",
      en: "I walk toward him.",
      ru: "Я иду к нему.",
    },
  ],
});
