import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 845,
  phase: 2,
  zh: "急",
  py: "jí",
  en: "urgent",
  ru: "срочный",
  pos: "adjective",
  hsd: ["{{word:yao4}} {{word:kuai4}}"],
  tts: ["要快"],
  literal: "needs to be fast",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:kuai4}}.",
      hanzi: "我要快。",
      en: "I'm in a hurry.",
      ru: "Я спешу.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yao4}} {{word:kuai4}}.",
      hanzi: "他要快。",
      en: "He is in a hurry.",
      ru: "Он спешит.",
    },
  ],
});
