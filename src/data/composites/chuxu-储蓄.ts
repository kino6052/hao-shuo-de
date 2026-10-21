import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8134,
  phase: 4,
  zh: "储蓄",
  py: "chǔxù",
  en: "save (money); savings",
  ru: "копить деньги; сбережения",
  pos: "verb",
  hsd: [
    "{{word:ba3}} {{word:jin1}} {{word:liu2}}-{{word:xia4}}-{{word:lai2}}, {{word:yi3}}-{{word:hou4}} {{word:yong4}}",
    "{{word:liu2}}-{{word:xia4}}-{{word:lai2}}-{{word:de}} {{word:jin1}}",
  ],
  tts: ["把金留下来，以后用", "留下来的金"],
  literal: "keep the money, use it later / money that has been kept",
  fit: "plain",
  topics: ["bank-and-post"],
  isA: ["trade-action"],
  proposed: true,
});
