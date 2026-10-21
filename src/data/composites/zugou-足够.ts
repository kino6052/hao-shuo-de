import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1207,
  phase: 3,
  zh: "足够",
  py: "zúgòu",
  en: "enough",
  ru: "достаточно",
  pos: "verb",
  hsd: [
    "{{word:hao3}} {{word:le}}",
    "{{word:you3}} {{word:le}}, {{word:bu4}} {{word:yao4}} {{word:duo1}}-{{word:de}} {{word:le}}",
  ],
  tts: ["好了", "有了，不要多的了"],
  literal: "it is fine / I have it, I don't need more",
  fit: "plain",
  topics: ["much-and-little"],
  isA: ["amount-word"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:le}}, {{word:bu4}} {{word:yao4}} {{word:duo1}}-{{word:de}} {{word:le}}.",
      hanzi: "我有了，不要多的了。",
      en: "I have enough.",
      ru: "У меня достаточно.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:le}}, {{word:wo3}} {{word:bu4}} {{word:yao4}} {{word:duo1}}-{{word:de}} {{word:le}}.",
      hanzi: "我有了，我不要多的了。",
      en: "That's enough for me.",
      ru: "Мне достаточно.",
    },
  ],
});
