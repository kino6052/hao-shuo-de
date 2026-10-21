import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 928,
  phase: 2,
  zh: "咖啡",
  py: "kāfēi",
  en: "coffee",
  ru: "кофе",
  pos: "noun",
  hsd: ["{{word:re4}}-{{word:de}} {{word:hei1}}-{{word:se4}}-{{word:de}} {{word:shui3}}"],
  tts: ["热的黑色的水"],
  literal: "black hot water",
  fit: "plain",
  topics: ["drinks"],
  isA: ["drink"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:he1}} {{word:re4}}-{{word:de}} {{word:hei1}}-{{word:se4}}-{{word:de}} {{word:shui3}}.",
      hanzi: "我喝热的黑色的水。",
      en: "I drink coffee.",
      ru: "Я пью кофе.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:re4}}-{{word:de}} {{word:hei1}}-{{word:se4}}-{{word:de}} {{word:shui3}} {{word:ma}}?",
      hanzi: "你要热的黑色的水吗？",
      en: "Do you want coffee?",
      ru: "Хочешь кофе?",
    },
  ],
});
