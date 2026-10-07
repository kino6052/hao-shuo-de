import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 370,
  phase: 1,
  zh: "号",
  py: "hào",
  en: "sequence marker",
  ru: "показатель порядка",
  pos: "noun",
  hsd: ["{{word:hao4}}"],
  tts: ["号"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:shi2}} {{word:hao4}}.",
      hanzi: "今天十号。",
      en: "Today is the tenth.",
      ru: "Сегодня десятое.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jia1}} {{word:shi4}} {{word:er4}}-{{word:shi2}} {{word:hao4}}.",
      hanzi: "我家是二十号。",
      en: "My house is number twenty.",
      ru: "Мой дом — номер двадцать.",
    },
  ],
});
