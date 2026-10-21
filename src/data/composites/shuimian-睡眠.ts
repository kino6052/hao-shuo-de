import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1387,
  phase: 3,
  zh: "睡眠",
  py: "shuìmián",
  en: "sleep",
  ru: "сон",
  pos: "noun",
  hsd: ["{{word:shui4jiao4}}"],
  tts: ["睡觉"],
  fit: "word",
  topics: ["waking-and-sleeping"],
  isA: ["body-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:shui4jiao4}}.",
      hanzi: "我爱睡觉。",
      en: "I love sleep.",
      ru: "Я люблю спать.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yao4}} {{word:shui4jiao4}}.",
      hanzi: "他要睡觉。",
      en: "He needs sleep.",
      ru: "Ему нужен сон.",
    },
  ],
});
