import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6525,
  phase: 4,
  zh: "完整",
  py: "wánzhěng",
  en: "complete; intact",
  ru: "целый; полный",
  pos: "adjective",
  hsd: [
    "{{word:dou1}} {{word:zai4}}, {{word:mei2}} {{word:you3}} {{word:shao3}} {{word:shen2me}}",
    "{{word:mei2}} {{word:you3}} {{word:huai4}}, {{word:ye3}} {{word:mei2}} {{word:you3}} {{word:shao3}}",
  ],
  tts: ["都在，没有少什么", "没有坏，也没有少"],
  literal: "all there, nothing missing",
  fit: "plain",
  topics: ["state-of-things"],
  isA: ["condition-quality"],
  proposed: true,
});
