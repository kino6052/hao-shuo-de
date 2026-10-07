import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 128,
  phase: 1,
  zh: "需要",
  py: "xūyào",
  en: "need",
  ru: "нуждаться",
  pos: "verb",
  hsd: ["{{word:yao4}}"],
  tts: ["要"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:ni3}} {{word:bang1}} {{word:wo3}}.",
      hanzi: "我要你帮我。",
      en: "I need you to help me.",
      ru: "Мне нужна твоя помощь.",
    },
    {
      pinyin: "{{Word:hai2}}-{{word:zi}} {{word:yao4}} {{word:shui4jiao4}}.",
      hanzi: "孩子要睡觉。",
      en: "The child needs to sleep.",
      ru: "Ребёнку надо спать.",
    },
  ],
});
