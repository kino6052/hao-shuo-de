import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1329,
  phase: 3,
  zh: "心态",
  py: "xīntài",
  en: "mindset",
  ru: "настрой",
  pos: "noun",
  hsd: ["{{word:xin1}}-{{word:li3}} {{word:zen3me}} {{word:jue2}}-{{light:de2}}"],
  tts: ["心里怎么觉得"],
  literal: "how you feel inside",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:xin1}}-{{word:li3}} {{word:zen3me}} {{word:jue2}}-{{word:de2}}?",
      hanzi: "你心里怎么觉得？",
      en: "What is your mindset?",
      ru: "Какой у тебя настрой?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:ta1}} {{word:xin1}}-{{word:li3}} {{word:zen3me}} {{word:jue2}}-{{word:de2}}.",
      hanzi: "我知道他心里怎么觉得。",
      en: "I know his mindset.",
      ru: "Я знаю его настрой.",
    },
  ],
});
