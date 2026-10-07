import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 124,
  phase: 1,
  zh: "新",
  py: "xīn",
  en: "new",
  ru: "новый",
  pos: "adjective",
  hsd: ["{{word:xin1#new}}"],
  tts: ["新"],
  fit: "word",
  note: "xīn on its own: the heart as a thing, new when it describes one.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:mai3}} {{word:le}} {{word:xin1#new}} {{word:yi1fu}}.",
      hanzi: "我买了新衣服。",
      en: "I bought new clothes.",
      ru: "Я купил новую одежду.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shou3}}-{{word:ji1}} {{word:shi4}} {{word:xin1#new}}-{{word:de}}.",
      hanzi: "这个手机是新的。",
      en: "This phone is new.",
      ru: "Этот телефон новый.",
    },
  ],
});
