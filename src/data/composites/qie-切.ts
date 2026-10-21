import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1466,
  phase: 3,
  zh: "切",
  py: "qiē",
  en: "cut",
  ru: "резать",
  pos: "verb",
  hsd: ["{{word:ba3}} X {{word:bian4}} {{word:xiao3}} \"kuài\""],
  tts: ["把X变小块"],
  literal: "make X into small pieces",
  fit: "plain",
  topics: ["cooking-and-utensils"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:zhe4}}-{{light:ge4}} {{word:bian4}} {{word:xiao3}} \"kuài\".",
      hanzi: "我把这个变小块。",
      en: "I cut this into small pieces.",
      ru: "Я режу это на маленькие кусочки.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ba3}} {{word:na4}}-{{light:ge4}} {{word:bian4}} {{word:xiao3}} \"kuài\".",
      hanzi: "你把那个变小块。",
      en: "You cut that into small pieces.",
      ru: "Ты режешь то на маленькие кусочки.",
    },
  ],
});
