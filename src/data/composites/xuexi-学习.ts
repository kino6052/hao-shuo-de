import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 104,
  phase: 1,
  zh: "学习",
  py: "xuéxí",
  en: "study",
  ru: "учиться",
  pos: "verb",
  hsd: ["{{word:xue2}}"],
  tts: ["学"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:tian1}}-{{word:tian1}} {{word:xue2}} \"Zhōngguó\" {{word:hua4}}.",
      hanzi: "我天天学中国话。",
      en: "I study Chinese every day.",
      ru: "Я каждый день учу китайский.",
    },
    {
      pinyin: "{{Word:xue2}}-{{word:sheng1}} {{word:yao4}} {{word:hao3}}-{{word:hao3}}-{{word:de}} {{word:xue2}}.",
      hanzi: "学生要好好地学。",
      en: "Students should study well.",
      ru: "Студенты должны хорошо учиться.",
    },
  ],
});
