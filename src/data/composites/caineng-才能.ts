import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1098,
  phase: 3,
  zh: "才能",
  py: "cáinéng",
  en: "talent, ability",
  ru: "талант, способности",
  pos: "noun",
  hsd: ["{{word:neng2}}-{{word:li4}}"],
  tts: ["能力"],
  literal: "ability",
  fit: "natural",
  topics: ["clever-skilled-and-famous"],
  isA: ["character-quality"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:neng2}}-{{word:li4}}.",
      hanzi: "他有很多能力。",
      en: "He has a lot of talent.",
      ru: "У него много талантов.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:neng2}}-{{word:li4}}.",
      hanzi: "你有能力。",
      en: "You have talent.",
      ru: "У тебя есть талант.",
    },
  ],
});
