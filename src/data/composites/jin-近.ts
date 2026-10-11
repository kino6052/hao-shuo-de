import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 475,
  phase: 1,
  zh: "近",
  py: "jìn",
  en: "near",
  ru: "близкий",
  pos: "adjective",
  hsd: ["{{word:zai4}} {{word:fu4jin4}}"],
  tts: ["在附近"],
  literal: "be nearby",
  fit: "natural",
  note: "fùjìn is a place word: zài fùjìn, not hěn fùjìn (Lesson {{lesson:moving}}).",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jia1}} {{word:zai4}} {{word:fu4jin4}}.",
      hanzi: "我家在附近。",
      en: "My home is nearby.",
      ru: "Мой дом рядом.",
    },
    {
      pinyin: "{{Word:xue2}}-{{word:xiao4}} {{word:zai4}} {{word:fu4jin4}} {{word:ma}}?",
      hanzi: "学校在附近吗？",
      en: "Is the school near?",
      ru: "Школа близко?",
    },
  ],
});
