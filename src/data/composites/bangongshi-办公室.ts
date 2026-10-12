import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1266,
  phase: 3,
  zh: "办公室",
  py: "bàngōngshì",
  en: "office",
  ru: "офис, кабинет",
  pos: "noun",
  hsd: ["{{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:fang2}}-{{word:jian1}}"],
  tts: ["工作的房间"],
  literal: "the room for work",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:fang2}}-{{word:jian1}}.",
      hanzi: "我在工作的房间。",
      en: "I'm in the office.",
      ru: "Я в офисе.",
    },
    {
      pinyin: "{{Word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:fang2}}-{{word:jian1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "工作的房间很大。",
      en: "The office is big.",
      ru: "Офис большой.",
    },
  ],
});
