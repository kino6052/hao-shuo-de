import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 302,
  phase: 1,
  zh: "回答",
  py: "huídá",
  en: "answer",
  ru: "отвечать",
  pos: "verb",
  hsd: [
    "{{word:hui2}}-{{word:hua4}}",
    "{{word:dui4}} {{word:wen4}}-{{word:de}} {{word:ren2}} {{word:shuo1}}",
  ],
  tts: ["回话", "对问的人说"],
  literal: "talk back / say to the one who asked",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:wei4}}-{{word:shen2me}} {{word:bu4}} {{word:hui2}}-{{word:hua4}}?",
      hanzi: "你为什么不回话？",
      en: "Why don't you answer?",
      ru: "Почему ты не отвечаешь?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:dui4}} {{word:wen4}}-{{word:de}} {{word:ren2}} {{word:shuo1}}.",
      hanzi: "你对问的人说。",
      en: "Answer the person who asked.",
      ru: "Ответь тому, кто спросил.",
    },
  ],
});
