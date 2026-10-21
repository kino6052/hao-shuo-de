import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 617,
  phase: 2,
  zh: "力量",
  py: "lìliàng",
  en: "strength",
  ru: "сила",
  pos: "noun",
  hsd: ["{{word:li4}}"],
  tts: ["力"],
  fit: "word",
  topics: ["speed-and-strength"],
  isA: ["state-name"],
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:li4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "他的力很大。",
      en: "His strength is great.",
      ru: "У него большая сила.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:li4}} {{word:hen3}} {{word:da4}} {{word:ma}}?",
      hanzi: "你的力很大吗？",
      en: "Are you strong?",
      ru: "Ты сильный?",
    },
  ],
});
