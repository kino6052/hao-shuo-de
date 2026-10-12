import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1100,
  phase: 3,
  zh: "报告",
  py: "bàogào",
  en: "report",
  ru: "доклад, отчёт",
  pos: "verb",
  hsd: ["{{word:shuo1}} {{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["说发生的东西"],
  literal: "tell what happened",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}} {{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我说发生的东西。",
      en: "I give a report.",
      ru: "Я делаю доклад.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yao4}} {{word:shuo1}} {{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "他要说发生的东西。",
      en: "He wants to give a report.",
      ru: "Он хочет сделать доклад.",
    },
  ],
});
