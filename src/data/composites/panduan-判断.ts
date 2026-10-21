import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6402,
  phase: 4,
  zh: "判断",
  py: "pànduàn",
  en: "judge",
  ru: "судить, определять",
  pos: "verb",
  hsd: [
    "{{word:shuo1}} X {{word:dui4}} {{word:bu4}} {{word:dui4}}",
    "{{word:xiang3}} X {{word:shi4}} {{word:bu4}} {{word:shi4}} {{word:dui4}}",
  ],
  tts: ["说X对不对", "想X是不是对"],
  literal: "say whether X is right or not",
  fit: "plain",
  topics: ["reasons-and-logic"],
  isA: ["thinking-action"],
  proposed: true,
});
