import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 791,
  phase: 2,
  zh: "鼠标",
  py: "shǔbiāo",
  en: "computer mouse",
  ru: "мышь (компьютерная)",
  pos: "noun",
  hsd: [
    "{{word:yong4}}-{{word:shou3}}-{{word:zuo4}}-{{word:suan4}}-{{word:de}}-{{word:gong1}}-{{word:ju4}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["用手做算的工具的小的东西"],
  literal: "the small thing your hand runs the computer with",
  fit: "plain",
  topics: ["phone-and-computer"],
  isA: ["computer-or-phone"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:yong4}}-{{word:shou3}}-{{word:zuo4}}-{{word:suan4}}-{{word:de}}-{{word:gong1}}-{{word:ju4}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有用手做算的工具的小的东西。",
      en: "I have a mouse.",
      ru: "У меня есть мышь.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:yong4}}-{{word:shou3}}-{{word:zuo4}}-{{word:suan4}}-{{word:de}}-{{word:gong1}}-{{word:ju4}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是用手做算的工具的小的东西。",
      en: "This is a mouse.",
      ru: "Это мышь.",
    },
  ],
});
