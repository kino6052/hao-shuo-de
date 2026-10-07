import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 262,
  phase: 1,
  zh: "主要",
  py: "zhǔyào",
  en: "main",
  ru: "главный",
  pos: "adjective",
  hsd: ["{{word:da4}} {{word:bu4}}-{{light:fen1}}", "{{word:zui4}} {{word:zhong4}}-{{word:yao4}}"],
  tts: ["大部分", "最重要"],
  literal: "most / most important",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zui4}} {{word:zhong4}}-{{word:yao4}}-{{word:de}} {{word:shi4}} {{word:shen1ti3}}.",
      hanzi: "最重要的是身体。",
      en: "The main thing is health.",
      ru: "Главное — здоровье.",
    },
    {
      pinyin: "{{Word:da4}} {{word:bu4}}-{{light:fen1}} {{word:xue2}}-{{word:sheng1}} {{word:dou1}} {{word:lai2}} {{word:le}}.",
      hanzi: "大部分学生都来了。",
      en: "Most of the students came.",
      ru: "Пришло большинство студентов.",
    },
  ],
});
