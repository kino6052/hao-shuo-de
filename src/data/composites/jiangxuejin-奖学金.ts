import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6676,
  phase: 4,
  zh: "奖学金",
  py: "jiǎngxuéjīn",
  en: "scholarship",
  ru: "стипендия",
  pos: "noun",
  hsd: [
    "{{word:gei3}} {{word:xue2}}-{{word:hao3}}-{{word:de}} {{word:xue2}}-{{word:sheng1}}-{{word:de}} {{word:jin1}}",
    "{{word:xue2}}-{{word:xiao4}} {{word:gei3}} {{word:xue2}}-{{word:sheng1}}-{{word:de}} {{word:jin1}}",
  ],
  tts: ["给学好的学生的金", "学校给学生的金"],
  literal: "money given to students who learn well; money the school gives students",
  fit: "plain",
  topics: ["studying"],
  isA: ["money-thing"],
  proposed: true,
});
