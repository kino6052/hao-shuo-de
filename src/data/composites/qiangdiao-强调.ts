import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6213,
  phase: 4,
  zh: "强调",
  py: "qiángdiào",
  en: "emphasize",
  ru: "подчёркивать",
  pos: "verb",
  hsd: [
    "{{word:shuo1}} X {{word:hen3}} {{word:zhong4}}-{{word:yao4}}",
    "{{word:hen3}} {{word:duo1}} {{word:ci4}} {{word:shuo1}} X",
  ],
  tts: ["说X很重要", "很多次说X"],
  literal: "say X is very important / say X many times",
  fit: "plain",
  topics: ["explaining-and-describing"],
  isA: ["speaking-action"],
  proposed: true,
});
