import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7555,
  phase: 4,
  zh: "分为",
  py: "fēnwéi",
  en: "be divided into",
  ru: "делиться на",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:fen1}}-{{word:kai1}}, {{word:you3}} {{word:hen3}} {{word:duo1}} Y",
    "{{word:ba3}} X {{word:fen1}}-{{word:kai1}}, {{word:bian4}} Y",
  ],
  tts: ["把X分开，有很多Y", "把X分开，变Y"],
  literal: "split X apart, there are very many Y / split X apart, it becomes Y",
  fit: "plain",
  topics: ["sums"],
  isA: ["handling-action"],
  proposed: true,
});
