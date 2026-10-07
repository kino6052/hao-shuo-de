import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 95,
  phase: 1,
  zh: "饭",
  py: "fàn",
  en: "meal, rice",
  ru: "еда, рис",
  pos: "noun",
  hsd: ["{{word:fan4}}", "{{word:chi1}}-{{word:de}}"],
  tts: ["饭", "吃的"],
  literal: "what you eat",
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ma1ma}} {{word:zuo4}} {{word:fan4}}.",
      hanzi: "妈妈做饭。",
      en: "Mom cooks.",
      ru: "Мама готовит.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:fan4}} {{word:hen3}} {{word:hao3}} {{word:chi1}}.",
      hanzi: "这个饭很好吃。",
      en: "This food is tasty.",
      ru: "Эта еда вкусная.",
    },
  ],
});
