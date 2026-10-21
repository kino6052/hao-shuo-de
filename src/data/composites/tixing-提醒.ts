import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1506,
  phase: 3,
  zh: "提醒",
  py: "tíxǐng",
  en: "remind",
  ru: "напоминать",
  pos: "verb",
  hsd: ["{{word:you4}} {{word:shuo1}}"],
  tts: ["又说"],
  literal: "say it again",
  fit: "plain",
  topics: ["agreeing-and-praising"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you4}} {{word:shuo1}}.",
      hanzi: "我又说。",
      en: "I remind you.",
      ru: "Я напоминаю.",
    },
    {
      pinyin: "{{Word:ba4ba}} {{word:you4}} {{word:shuo1}} {{word:le}}.",
      hanzi: "爸爸又说了。",
      en: "Dad reminded me once more.",
      ru: "Папа напомнил ещё раз.",
    },
  ],
});
