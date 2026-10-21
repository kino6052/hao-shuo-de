import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9078,
  phase: 4,
  zh: "分级",
  py: "fēnjí",
  en: "grade; sort into levels",
  ru: "делить на уровни; классифицировать по степеням",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:fen1}}-{{word:kai1}}, {{word:gei3}} {{word:di4}}-{{word:yi1}}, {{word:di4}}-{{word:er4}}, {{word:di4}}-{{word:san1}}",
    "{{word:yong4}} {{word:hao3}}-{{word:huai4}} {{word:ba3}} X {{word:fen1}}-{{word:kai1}}",
  ],
  tts: ["把X分开，给第一，第二，第三", "用好坏把X分开"],
  literal: "divide X, give first, second, third / use good and bad to divide X",
  fit: "plain",
  topics: ["ordinals"],
  isA: ["handling-action"],
  proposed: true,
});
