import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 693,
  phase: 2,
  zh: "考",
  py: "kǎo",
  en: "take an exam",
  ru: "сдавать экзамен",
  pos: "verb",
  hsd: ["{{word:kan4}} {{word:ni3}} {{word:xue2}}-{{word:le}} {{word:shen2me}}"],
  tts: ["看你学了什么"],
  literal: "see what you learned",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:kan4}} {{word:ni3}} {{word:xue2}}-{{word:le}} {{word:shen2me}}.",
      hanzi: "看你学了什么。",
      en: "Let's see what you've learned.",
      ru: "Посмотрим, что ты выучил.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:kan4}} {{word:ni3}} {{word:xue2}}-{{word:le}} {{word:shen2me}}.",
      hanzi: "我要看你学了什么。",
      en: "I'm going to test what you've learned.",
      ru: "Я проверю, что ты выучил.",
    },
  ],
});
