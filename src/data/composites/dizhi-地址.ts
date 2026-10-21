import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 631,
  phase: 2,
  zh: "地址",
  py: "dìzhǐ",
  en: "address",
  ru: "адрес",
  pos: "noun",
  hsd: ["{{word:di4}}-{{light:fang1}}-{{word:de}} {{word:hao4}}"],
  tts: ["地方的号"],
  literal: "the place's number",
  fit: "plain",
  topics: ["bank-and-post"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:hao4}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "你的地方的号是什么？",
      en: "What is your address?",
      ru: "Какой у тебя адрес?",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:hao4}} {{word:shi4}} {{word:wu3}}-{{word:hao4}}.",
      hanzi: "我的地方的号是五号。",
      en: "My address is number five.",
      ru: "Мой адрес — номер пять.",
    },
  ],
});
