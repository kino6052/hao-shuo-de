import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7204,
  phase: 4,
  zh: "压岁钱",
  py: "yāsuìqián",
  en: "New Year money given to children; lucky money",
  ru: "новогодние деньги, подарок детям",
  pos: "noun",
  hsd: [
    "{{word:xin1}}-{{word:nian2}} {{word:gei3}} {{word:hai2}}-{{word:zi}}-{{word:de}} {{word:jin1}}",
    "{{word:xin1}}-{{word:nian2}}-{{word:de}} {{word:shi2}}-{{light:hou4}} {{word:gei3}} {{word:hai2}}-{{word:zi}}-{{word:de}} {{word:jin1}}",
  ],
  tts: ["新年给孩子的金", "新年的时候给孩子的金"],
  literal: "money given to children at New Year / money given to children at the time of New Year",
  fit: "plain",
  topics: ["holidays-and-festivals"],
  isA: ["money-thing"],
  proposed: true,
});
