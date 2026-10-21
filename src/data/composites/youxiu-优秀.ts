import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1025,
  phase: 3,
  zh: "优秀",
  py: "yōuxiù",
  en: "excellent",
  ru: "отличный",
  pos: "adjective",
  hsd: ["{{word:zhen1}} {{word:hao3}}"],
  tts: ["真好"],
  literal: "really good",
  fit: "plain",
  topics: ["how-good"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zhen1}} {{word:hao3}}.",
      hanzi: "他真好。",
      en: "He is excellent.",
      ru: "Он отличный.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhen1}} {{word:hao3}}.",
      hanzi: "你真好。",
      en: "You are excellent.",
      ru: "Ты отличный.",
    },
  ],
});
