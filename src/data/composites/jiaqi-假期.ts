import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 806,
  phase: 2,
  zh: "假期",
  py: "jiàqī",
  en: "vacation",
  ru: "отпуск",
  pos: "noun",
  hsd: ["{{word:bu4}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}"],
  tts: ["不工作的时间"],
  literal: "the time when one doesn't work",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:bu4}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}.",
      hanzi: "我有不工作的时间。",
      en: "I have a vacation.",
      ru: "У меня отпуск.",
    },
    {
      pinyin: "{{Word:bu4}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "不工作的时间很好。",
      en: "A vacation is nice.",
      ru: "Отпуск — это хорошо.",
    },
  ],
});
