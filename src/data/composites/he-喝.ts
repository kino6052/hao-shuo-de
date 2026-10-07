import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 82,
  phase: 1,
  zh: "喝",
  py: "hē",
  en: "drink",
  ru: "пить",
  pos: "verb",
  hsd: ["{{word:he1}}"],
  tts: ["喝"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:he1}} {{word:shui3}} {{word:ma}}?",
      hanzi: "你喝水吗？",
      en: "Will you have some water?",
      ru: "Будешь воду?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:he1}} {{word:re4}}-{{word:de}}.",
      hanzi: "我不喝热的。",
      en: "I don't drink hot things.",
      ru: "Я не пью горячее.",
    },
  ],
});
