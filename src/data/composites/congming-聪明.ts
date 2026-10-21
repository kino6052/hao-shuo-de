import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 886,
  phase: 2,
  zh: "聪明",
  py: "cōngmíng",
  en: "smart",
  ru: "умный",
  pos: "adjective",
  hsd: ["{{word:gao1}}-{{word:ming2}}", "{{word:tou2}} {{word:hen3}} {{word:hao3}}"],
  tts: ["高明", "头很好"],
  literal: "a good head",
  fit: "natural",
  topics: ["describing-people"],
  isA: ["character-quality"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:tou2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他头很好。",
      en: "He is smart.",
      ru: "Он умный.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:hai2}}-{{word:zi}} {{word:tou2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我的孩子头很好。",
      en: "My child is smart.",
      ru: "Мой ребёнок умный.",
    },
  ],
});
