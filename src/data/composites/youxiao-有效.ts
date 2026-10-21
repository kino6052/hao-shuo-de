import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1126,
  phase: 3,
  zh: "有效",
  py: "yǒuxiào",
  en: "effective",
  ru: "действенный",
  pos: "verb",
  hsd: ["{{word:you3}}-{{word:yong4}}", "{{word:you3}} {{word:yong4}}"],
  tts: ["有用", "有用"],
  literal: "has use",
  fit: "natural",
  topics: ["how-good"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:hen3}} {{word:you3}}-{{word:yong4}}.",
      hanzi: "这很有用。",
      en: "This is effective.",
      ru: "Это эффективно.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:fang1}}-{{word:fa3}} {{word:hen3}} {{word:you3}}-{{word:yong4}}.",
      hanzi: "他的方法很有用。",
      en: "His method is effective.",
      ru: "Его метод эффективен.",
    },
  ],
});
