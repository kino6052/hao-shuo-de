import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 354,
  phase: 1,
  zh: "健康",
  py: "jiànkāng",
  en: "healthy",
  ru: "здоровый",
  pos: "adjective",
  hsd: ["{{word:shen1ti3}} {{word:hao3}}"],
  tts: ["身体好"],
  literal: "body good",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}} {{word:shen1ti3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我爸爸身体很好。",
      en: "My dad is healthy.",
      ru: "Мой папа здоров.",
    },
    {
      pinyin: "{{Word:chi1}} {{word:shui3}}-{{word:guo3}}, {{word:shen1ti3}} {{word:hao3}}.",
      hanzi: "吃水果，身体好。",
      en: "Eat fruit and stay healthy.",
      ru: "Ешь фрукты — будешь здоров.",
    },
  ],
});
