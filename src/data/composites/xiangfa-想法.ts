import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 754,
  phase: 2,
  zh: "想法",
  py: "xiǎngfǎ",
  en: "idea, thought",
  ru: "мысль",
  pos: "noun",
  hsd: ["{{word:xiang3}}-{{word:fa3}}", "{{word:xiang3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["想法", "想的东西"],
  literal: "what you think",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["ideas-and-opinions"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:xiang3}}-{{word:fa3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "你的想法很好。",
      en: "Your idea is good.",
      ru: "Твоя идея хорошая.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:hao3}} {{word:xiang3}}-{{word:fa3}}.",
      hanzi: "他有好想法。",
      en: "He has a good thought.",
      ru: "У него хорошая мысль.",
    },
  ],
});
