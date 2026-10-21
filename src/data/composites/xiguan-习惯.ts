import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 732,
  phase: 2,
  zh: "习惯",
  py: "xíguàn",
  en: "habit; be used to",
  ru: "привычка",
  pos: "verb",
  hsd: [
    "{{word:ci4}}-{{word:ci4}} {{word:dou1}} {{word:zuo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["次次都做的东西"],
  literal: "something you do every time",
  fit: "plain",
  topics: ["healthy-habits"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:ci4}}-{{word:ci4}} {{word:dou1}} {{word:zuo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是次次都做的东西。",
      en: "This is a habit.",
      ru: "Это привычка.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:ci4}}-{{word:ci4}} {{word:dou1}} {{word:zuo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有次次都做的东西。",
      en: "I have a habit.",
      ru: "У меня есть привычка.",
    },
  ],
});
