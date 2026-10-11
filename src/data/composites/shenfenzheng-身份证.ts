import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 786,
  phase: 2,
  zh: "身份证",
  py: "shēnfènzhèng",
  en: "ID card",
  ru: "удостоверение личности",
  pos: "noun",
  hsd: [
    "{{word:rang4}}-{{word:ren2}}-{{word:zhi1dao4}}-{{word:ni3}}-{{word:shi4}}-{{word:shei2}}-{{word:de}}-{{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["让人知道你是谁的写的东西"],
  literal: "a written thing that lets people know who you are",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:rang4}}-{{word:ren2}}-{{word:zhi1dao4}}-{{word:ni3}}-{{word:shi4}}-{{word:shei2}}-{{word:de}}-{{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有让人知道你是谁的写的东西。",
      en: "I have an ID card.",
      ru: "У меня есть удостоверение.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:rang4}}-{{word:ren2}}-{{word:zhi1dao4}}-{{word:ni3}}-{{word:shi4}}-{{word:shei2}}-{{word:de}}-{{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:ma}}?",
      hanzi: "你有让人知道你是谁的写的东西吗？",
      en: "Do you have an ID card?",
      ru: "У тебя есть удостоверение?",
    },
  ],
});
