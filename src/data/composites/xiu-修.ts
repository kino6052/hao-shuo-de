import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1459,
  phase: 3,
  zh: "修",
  py: "xiū",
  en: "repair",
  ru: "чинить",
  pos: "verb",
  hsd: ["{{word:zuo4}} {{word:hao3}}"],
  tts: ["做好"],
  literal: "make it good",
  fit: "plain",
  topics: ["repairs"],
  isA: ["making"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:neng2}} {{word:zuo4}} {{word:hao3}}.",
      hanzi: "我能做好。",
      en: "I can repair it.",
      ru: "Я могу это починить.",
    },
    {
      pinyin: "{{Word:ba4ba}} {{word:ba3}} {{word:che1}} {{word:zuo4}} {{word:hao3}} {{word:le}}.",
      hanzi: "爸爸把车做好了。",
      en: "Dad repaired the car.",
      ru: "Папа починил машину.",
    },
  ],
});
