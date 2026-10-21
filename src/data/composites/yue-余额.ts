import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8875,
  phase: 4,
  zh: "余额",
  py: "yú’é",
  en: "balance (of an account); remaining sum",
  ru: "остаток на счёте; остаток суммы",
  pos: "noun",
  hsd: [
    "{{word:yong4}} {{word:le}} {{word:yi3}}-{{word:hou4}} {{word:hai2}} {{word:you3}}-{{word:de}} {{word:jin1}}",
    "{{word:hai2}} {{word:you3}}-{{word:de}} {{word:jin1}}",
  ],
  tts: ["用了以后还有的金", "还有的金"],
  literal: "the money still there after using / the money that is still there",
  fit: "plain",
  topics: ["money-and-paying"],
  isA: ["money-thing"],
  proposed: true,
});
