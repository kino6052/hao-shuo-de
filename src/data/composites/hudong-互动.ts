import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6397,
  phase: 4,
  zh: "互动",
  py: "hùdòng",
  en: "interact",
  ru: "взаимодействовать",
  pos: "verb",
  hsd: [
    "X {{word:dui4}} Y {{word:zuo4}}, Y {{word:ye3}} {{word:dui4}} X {{word:zuo4}}",
    "{{word:yi1}}-{{word:qi3}} {{word:shuo1}}, {{word:yi1}}-{{word:qi3}} {{word:zuo4}}",
  ],
  tts: ["X对Y做，Y也对X做", "一起说，一起做"],
  literal: "X does to Y, Y also does to X",
  fit: "plain",
  topics: ["together-and-cooperating"],
  isA: ["social-action"],
  proposed: true,
});
