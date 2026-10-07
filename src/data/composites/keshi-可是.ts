import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 367,
  phase: 1,
  zh: "可是",
  py: "kěshì",
  en: "but",
  ru: "но",
  pos: "conjunction",
  hsd: ["{{word:ke3}}-{{word:shi4}}", "{{word:dan4}}-{{word:shi4}}"],
  tts: ["可是", "但是"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:qu4}}, {{word:ke3}}-{{word:shi4}} {{word:wo3}} {{word:bu4}} {{word:neng2}}.",
      hanzi: "我想去，可是我不能。",
      en: "I'd like to go, but I can't.",
      ru: "Я хочу пойти, но не могу.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:lao3}}, {{word:ke3}}-{{word:shi4}} {{word:hen3}} {{word:you3}} {{word:li4}}.",
      hanzi: "他很老，可是很有力。",
      en: "He's old but strong.",
      ru: "Он старый, но сильный.",
    },
  ],
});
