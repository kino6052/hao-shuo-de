import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1095,
  phase: 3,
  zh: "意识",
  py: "yìshí",
  en: "realize; awareness",
  ru: "осознавать; сознание",
  pos: "verb",
  hsd: ["{{word:zhi1dao4}}"],
  tts: ["知道"],
  fit: "word",
  topics: ["knowing-and-grasping"],
  isA: ["thinking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}}.",
      hanzi: "我知道。",
      en: "I realize.",
      ru: "Я осознаю.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhi1dao4}} {{word:le}}.",
      hanzi: "他知道了。",
      en: "He has realized.",
      ru: "Он осознал.",
    },
  ],
});
