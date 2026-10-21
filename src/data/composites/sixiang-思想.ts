import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 984,
  phase: 2,
  zh: "思想",
  py: "sīxiǎng",
  en: "thought, thinking",
  ru: "мысль",
  pos: "noun",
  hsd: ["{{word:xiang3}}-{{word:de}}"],
  tts: ["想的"],
  literal: "what you think",
  fit: "plain",
  topics: ["mind-and-imagination"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:xiang3}}-{{word:de}}.",
      hanzi: "我有想的。",
      en: "I have a thought.",
      ru: "У меня есть мысль.",
    },
    {
      pinyin: "{{Word:xiang3}}-{{word:de}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "想的很多。",
      en: "There are many thoughts.",
      ru: "Мыслей много.",
    },
  ],
});
