import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 852,
  phase: 2,
  zh: "放心",
  py: "fàngxīn",
  en: "don't worry, feel at ease",
  ru: "не волноваться",
  pos: "verb",
  hsd: ["{{word:fang4}}-{{word:xin1}}"],
  tts: ["放心"],
  literal: "put the heart down",
  fit: "natural",
  kinds: ["built"],
  note: "Lesson {{lesson:feelings}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:fang4}}-{{word:xin1}} {{word:le}}.",
      hanzi: "我放心了。",
      en: "I feel at ease.",
      ru: "Я спокоен.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:fang4}}-{{word:xin1}}.",
      hanzi: "你放心。",
      en: "Don't worry.",
      ru: "Не волнуйся.",
    },
  ],
});
