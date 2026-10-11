import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 789,
  phase: 2,
  zh: "酒店",
  py: "jiǔdiàn",
  en: "hotel",
  ru: "гостиница",
  pos: "noun",
  hsd: ["{{word:gei3}} {{word:jin1}} {{word:shui4jiao4}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["给金睡觉的地方"],
  literal: "a place you pay to sleep",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:gei3}} {{word:jin1}} {{word:shui4jiao4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我去给金睡觉的地方。",
      en: "I'm going to the hotel.",
      ru: "Я иду в гостиницу.",
    },
    {
      pinyin: "{{Word:gei3}} {{word:jin1}} {{word:shui4jiao4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "给金睡觉的地方很大。",
      en: "The hotel is big.",
      ru: "Гостиница большая.",
    },
  ],
});
