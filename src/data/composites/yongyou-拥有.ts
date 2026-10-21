import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 656,
  phase: 2,
  zh: "拥有",
  py: "yōngyǒu",
  en: "possess",
  ru: "владеть",
  pos: "verb",
  hsd: ["{{word:you3}}"],
  tts: ["有"],
  fit: "word",
  topics: ["helping-words"],
  isA: ["owning"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:hen3}}-{{word:duo1}} {{word:shu1}}.",
      hanzi: "我有很多书。",
      en: "I own a lot of books.",
      ru: "У меня много книг.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:yi1}}-{{light:ge4}} {{word:da4}} {{word:jia1}}.",
      hanzi: "他有一个大家。",
      en: "He owns a big home.",
      ru: "У него большой дом.",
    },
  ],
});
