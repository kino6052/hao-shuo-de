import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1435,
  phase: 3,
  zh: "银行卡",
  py: "yínhángkǎ",
  en: "bank card",
  ru: "банковская карта",
  pos: "noun",
  hsd: [
    "{{word:na2}}-{{word:jin1}}-{{word:yong4}}-{{word:de}} {{word:xiao3}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["拿金用的小东西"],
  literal: "a small thing for taking out money",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:na2}}-{{word:jin1}}-{{word:yong4}}-{{word:de}} {{word:xiao3}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有拿金用的小东西。",
      en: "I have a bank card.",
      ru: "У меня есть банковская карта.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:na2}}-{{word:jin1}}-{{word:yong4}}-{{word:de}} {{word:xiao3}} {{word:dong1}}-{{light:xi1}} {{word:ma}}?",
      hanzi: "你有拿金用的小东西吗？",
      en: "Do you have a bank card?",
      ru: "У тебя есть банковская карта?",
    },
  ],
});
