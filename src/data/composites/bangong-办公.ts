import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1265,
  phase: 3,
  zh: "办公",
  py: "bàngōng",
  en: "work (at an office)",
  ru: "работать (в офисе)",
  pos: "verb",
  hsd: ["{{word:zai4}} {{word:fang2}}-{{word:jian1}}-{{word:li3}} {{word:gong1}}-{{word:zuo4}}"],
  tts: ["在房间里工作"],
  literal: "work in a room",
  fit: "word",
  topics: ["office"],
  isA: ["working"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:fang2}}-{{word:jian1}}-{{word:li3}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "我在房间里工作。",
      en: "I work in the office.",
      ru: "Я работаю в офисе.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:fang2}}-{{word:jian1}}-{{word:li3}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "他在房间里工作。",
      en: "He works in an office.",
      ru: "Он работает в офисе.",
    },
  ],
});
