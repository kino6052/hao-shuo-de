import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1222,
  phase: 3,
  zh: "需",
  py: "xū",
  en: "need",
  ru: "нуждаться",
  pos: "verb",
  hsd: ["{{word:yao4}}"],
  tts: ["要"],
  fit: "word",
  topics: ["wanting-needing-and-should"],
  isA: ["feeling-and-wanting"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:ni3}}-{{word:de}} {{word:bang1}}.",
      hanzi: "我要你的帮。",
      en: "I need your help.",
      ru: "Мне нужна твоя помощь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yao4}} {{word:he1}} {{word:shui3}}.",
      hanzi: "他要喝水。",
      en: "He needs water.",
      ru: "Ему нужна вода.",
    },
  ],
});
