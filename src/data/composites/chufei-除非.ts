import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8182,
  phase: 4,
  zh: "除非",
  py: "chúfēi",
  en: "unless; only if",
  ru: "если не; только если",
  pos: "conjunction",
  hsd: [
    "{{word:zhi3}}-{{word:you3}} X",
    "{{word:ru2guo3}} {{word:bu4}} {{word:shi4}} X, {{word:jiu4}} {{word:mei2}}-{{word:you3}} Y",
  ],
  tts: ["只有X", "如果不是X，就没有Y"],
  literal: "only X / if it is not X, then there is no Y",
  fit: "plain",
  topics: ["joining-words"],
  isA: ["conjunction"],
  proposed: true,
});
