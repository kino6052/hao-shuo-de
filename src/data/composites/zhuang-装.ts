import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1405,
  phase: 3,
  zh: "装",
  py: "zhuāng",
  en: "load, pack",
  ru: "грузить, упаковывать",
  pos: "verb",
  hsd: ["{{word:fang4}}-{{word:jin4}}-{{word:qu4}}"],
  tts: ["放进去"],
  literal: "put it in",
  fit: "plain",
  topics: ["putting-and-placing"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:shu1}} {{word:fang4}}-{{word:jin4}}-{{word:qu4}}.",
      hanzi: "我把书放进去。",
      en: "I pack the books.",
      ru: "Я укладываю книги.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ba3}} {{word:yi1fu}} {{word:fang4}}-{{word:jin4}}-{{word:qu4}} {{word:le}} {{word:ma}}?",
      hanzi: "你把衣服放进去了吗？",
      en: "Have you packed the clothes?",
      ru: "Ты уложил одежду?",
    },
  ],
});
