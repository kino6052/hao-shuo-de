import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 894,
  phase: 2,
  zh: "贵",
  py: "guì",
  en: "expensive",
  ru: "дорогой",
  pos: "adjective",
  hsd: ["{{word:yao4}} {{word:hen3}} {{word:duo1}} {{word:jin1}}"],
  tts: ["要很多金"],
  literal: "needs a lot of money",
  fit: "plain",
  topics: ["shopping"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:hen3}} {{word:duo1}} {{word:jin1}}.",
      hanzi: "这个要很多金。",
      en: "This is expensive.",
      ru: "Это дорого.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:bao1}} {{word:yao4}} {{word:hen3}} {{word:duo1}} {{word:jin1}}.",
      hanzi: "那个包要很多金。",
      en: "That bag is expensive.",
      ru: "Та сумка дорогая.",
    },
  ],
});
