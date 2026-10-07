import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 312,
  phase: 1,
  zh: "教",
  py: "jiāo",
  en: "teach",
  ru: "учить (кого-то)",
  pos: "verb",
  hsd: ["{{word:bang1}} X {{word:xue2}}"],
  tts: ["帮X学"],
  literal: "help X learn",
  fit: "plain",
  note: "Lesson {{lesson:everyday-patterns}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bang1}} {{word:ta1}} {{word:xue2}} \"Zhōngguó\" {{word:hua4}}.",
      hanzi: "我帮他学中国话。",
      en: "I teach him Chinese.",
      ru: "Я учу его китайскому.",
    },
    {
      pinyin: "{{Word:ma1ma}} {{word:bang1}} {{word:hai2}}-{{word:zi}} {{word:xue2}} {{word:xie3}} {{word:zi4}}.",
      hanzi: "妈妈帮孩子学写字。",
      en: "Mom teaches the child to write.",
      ru: "Мама учит ребёнка писать.",
    },
  ],
});
