import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 442,
  phase: 1,
  zh: "生病",
  py: "shēngbìng",
  en: "get sick",
  ru: "заболеть",
  pos: "verb",
  hsd: ["{{word:shen1ti3}} {{word:bu4}} {{word:hao3}}"],
  tts: ["身体不好"],
  literal: "body not good",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shen1ti3}} {{word:bu4}} {{word:hao3}}, {{word:mei2}} {{word:lai2}}.",
      hanzi: "他身体不好，没来。",
      en: "He's sick, so he didn't come.",
      ru: "Он заболел и не пришёл.",
    },
    {
      pinyin: "{{Word:hai2}}-{{word:zi}} {{word:shen1ti3}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "孩子身体不好。",
      en: "The child is sick.",
      ru: "Ребёнок болеет.",
    },
  ],
});
