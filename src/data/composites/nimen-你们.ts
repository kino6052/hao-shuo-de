import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 224,
  phase: 1,
  zh: "你们",
  py: "nǐmen",
  en: "you (more than one)",
  ru: "вы",
  pos: "pronoun",
  hsd: ["{{word:ni3}}-{{word:men}}"],
  tts: ["你们"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ni3}}-{{word:men}} {{word:qu4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "你们去哪里？",
      en: "Where are you all going?",
      ru: "Куда вы идёте?",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:men}} {{word:dou1}} {{word:shi4}} {{word:xue2}}-{{word:sheng1}} {{word:ma}}?",
      hanzi: "你们都是学生吗？",
      en: "Are you all students?",
      ru: "Вы все студенты?",
    },
  ],
});
