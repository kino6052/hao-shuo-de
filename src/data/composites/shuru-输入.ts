import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1210,
  phase: 3,
  zh: "输入",
  py: "shūrù",
  en: "input, type in",
  ru: "вводить",
  pos: "verb",
  hsd: ["{{word:fang4}}-{{word:jin4}} {{word:suan4}}-{{word:de}} {{word:gong1}}-{{word:ju4}}"],
  tts: ["放进算的工具"],
  literal: "put it into the computer",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:zi4}} {{word:fang4}}-{{word:jin4}} {{word:suan4}}-{{word:de}} {{word:gong1}}-{{word:ju4}}.",
      hanzi: "我把字放进算的工具。",
      en: "I type the words in.",
      ru: "Я ввожу слова.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:ci2}} {{word:fang4}}-{{word:jin4}} {{word:suan4}}-{{word:de}} {{word:gong1}}-{{word:ju4}} {{word:le}}.",
      hanzi: "他把词放进算的工具了。",
      en: "He typed the word in.",
      ru: "Он ввёл слово.",
    },
  ],
});
