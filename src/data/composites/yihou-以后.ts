import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 140,
  phase: 1,
  zh: "以后",
  py: "yǐhòu",
  en: "after, later",
  ru: "после, потом",
  pos: "noun",
  hsd: ["{{word:yi3}}-{{word:hou4}}", "X {{word:hou4}}"],
  tts: ["以后", "…后"],
  literal: "after X",
  fit: "natural",
  note: "Lesson {{lesson:around-an-action}}.",
  examples: [
    {
      pinyin: "{{Word:yi3}}-{{word:hou4}} {{word:wo3}} {{word:xiang3}} {{word:qu4}} \"Zhōngguó\".",
      hanzi: "以后我想去中国。",
      en: "Later I'd like to go to China.",
      ru: "Потом я хочу поехать в Китай.",
    },
    {
      pinyin: "{{Word:xue2}}-{{word:wan2}} {{word:hou4}}, {{word:wo3}} {{word:hui2}} {{word:jia1}}.",
      hanzi: "学完后，我回家。",
      en: "After studying, I go home.",
      ru: "После учёбы я иду домой.",
    },
  ],
});
