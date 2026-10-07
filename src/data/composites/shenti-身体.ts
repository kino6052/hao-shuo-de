import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 209,
  phase: 1,
  zh: "身体",
  py: "shēntǐ",
  en: "body",
  ru: "тело",
  pos: "noun",
  hsd: ["{{word:shen1ti3}}"],
  tts: ["身体"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:shen1ti3}} {{word:hao3}} {{word:ma}}?",
      hanzi: "你身体好吗？",
      en: "How's your health?",
      ru: "Как твоё здоровье?",
    },
    {
      pinyin: "{{Word:yao4}} {{word:duo1}} {{word:dong4}} {{word:shen1ti3}}.",
      hanzi: "要多动身体。",
      en: "You should move your body more.",
      ru: "Надо больше двигаться.",
    },
  ],
});
