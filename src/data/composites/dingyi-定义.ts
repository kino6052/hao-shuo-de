import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8984,
  phase: 4,
  zh: "定义",
  py: "dìngyì",
  en: "define; definition",
  ru: "определять; определение",
  pos: "verb",
  hsd: [
    "{{word:shuo1}} X {{word:shi4}} {{word:shen2me}}",
    "{{word:shuo1}} X {{word:shi4}} {{word:shen2me}}-{{word:de}} {{word:hua4}}",
  ],
  tts: ["说X是什么", "说X是什么的话"],
  literal: "say what X is / the words that say what X is",
  fit: "plain",
  topics: ["languages"],
  isA: ["speaking-action"],
  proposed: true,
});
