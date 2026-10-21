import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1316,
  phase: 3,
  zh: "对象",
  py: "duìxiàng",
  en: "partner; target",
  ru: "партнёр; объект",
  pos: "noun",
  hsd: ["{{word:ai4}}-{{word:de}} {{word:ren2}}"],
  tts: ["爱的人"],
  literal: "the person you love",
  fit: "plain",
  topics: ["love-and-marriage"],
  isA: ["social-tie"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:wo3}} {{word:ai4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是我爱的人。",
      en: "He is my partner.",
      ru: "Он мой любимый человек.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:ai4}}-{{word:de}} {{word:ren2}} {{word:ma}}?",
      hanzi: "你有爱的人吗？",
      en: "Do you have a partner?",
      ru: "У тебя есть любимый человек?",
    },
  ],
});
