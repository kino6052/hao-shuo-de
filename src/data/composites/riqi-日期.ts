import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1353,
  phase: 3,
  zh: "日期",
  py: "rìqī",
  en: "date",
  ru: "дата",
  pos: "noun",
  hsd: ["{{word:shen2me}} {{word:ri4}}"],
  tts: ["什么日"],
  literal: "which day",
  fit: "plain",
  topics: ["days-and-dates"],
  isA: ["time-point"],
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:shi4}} {{word:shen2me}} {{word:ri4}}?",
      hanzi: "今天是什么日？",
      en: "What is today's date?",
      ru: "Какое сегодня число?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:sheng1}}-{{word:ri4}} {{word:shi4}} {{word:shen2me}} {{word:ri4}}?",
      hanzi: "你生日是什么日？",
      en: "What date is your birthday?",
      ru: "Какого числа твой день рождения?",
    },
  ],
});
