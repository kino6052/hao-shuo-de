import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 321,
  phase: 1,
  zh: "父母",
  py: "fùmǔ",
  en: "parent",
  ru: "родитель",
  pos: "noun",
  hsd: ["{{word:ba4ba}}-{{word:ma1ma}}"],
  tts: ["爸爸妈妈"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:ba4ba}}-{{word:ma1ma}} {{word:zai4}} \"Zhōngguó\".",
      hanzi: "我的爸爸妈妈在中国。",
      en: "My parents are in China.",
      ru: "Мои родители в Китае.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:wo3}}-{{word:de}} {{word:ba4ba}}-{{word:ma1ma}}.",
      hanzi: "我爱我的爸爸妈妈。",
      en: "I love my parents.",
      ru: "Я люблю своих родителей.",
    },
  ],
});
