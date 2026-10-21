import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 829,
  phase: 2,
  zh: "够",
  py: "gòu",
  en: "enough",
  ru: "достаточно",
  pos: "verb",
  hsd: ["{{word:hao3}} {{word:le}}", "{{word:bu4}} {{word:yao4}} {{word:le}}"],
  tts: ["好了", "不要了"],
  literal: "that's good / no more needed",
  fit: "natural",
  topics: ["enough-and-lacking"],
  isA: ["amount-word"],
  examples: [
    { pinyin: "{{Word:hao3}} {{word:le}}.", hanzi: "好了。", en: "That's enough.", ru: "Хватит." },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:yao4}} {{word:le}}.",
      hanzi: "我不要了。",
      en: "I've had enough.",
      ru: "С меня хватит.",
    },
  ],
});
