import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 313,
  phase: 1,
  zh: "星期",
  py: "xīngqī",
  en: "week",
  ru: "неделя",
  pos: "noun",
  hsd: ["{{word:qi1}}-{{word:tian1}}"],
  tts: ["七天"],
  literal: "seven days",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} \"Zhōngguó\" {{word:qi1}}-{{word:tian1}}.",
      hanzi: "我去中国七天。",
      en: "I'm going to China for a week.",
      ru: "Я еду в Китай на неделю.",
    },
    {
      pinyin: "{{Word:qi1}}-{{word:tian1}} {{word:hou4}} {{word:jian4}}.",
      hanzi: "七天后见。",
      en: "See you in a week.",
      ru: "Увидимся через неделю.",
    },
  ],
});
