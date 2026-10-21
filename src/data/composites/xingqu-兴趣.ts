import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 740,
  phase: 2,
  zh: "兴趣",
  py: "xìngqù",
  en: "interest",
  ru: "интерес",
  pos: "noun",
  hsd: ["{{word:ai4}}"],
  tts: ["爱"],
  literal: "love",
  fit: "plain",
  topics: ["interest-and-enjoying"],
  isA: ["feeling-name"],
  note: "wǒ ài kàn: I'm interested in looking.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:shu1}}.",
      hanzi: "我爱书。",
      en: "I'm interested in books.",
      ru: "Я интересуюсь книгами.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ai4}} {{word:shen2me}}?",
      hanzi: "他爱什么？",
      en: "What is he interested in?",
      ru: "Чем он интересуется?",
    },
  ],
});
