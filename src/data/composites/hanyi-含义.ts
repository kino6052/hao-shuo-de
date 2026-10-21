import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8150,
  phase: 4,
  zh: "含义",
  py: "hányì",
  en: "meaning; implication; what is meant",
  ru: "значение; смысл",
  pos: "noun",
  hsd: [
    "X {{word:shi4}} {{word:shen2me}}",
    "X {{word:shuo1}}-{{word:de}} {{word:shi4}} {{word:shen2me}}",
  ],
  tts: ["X是什么", "X说的是什么"],
  literal: "what X is / what X says",
  fit: "plain",
  topics: ["languages"],
  isA: ["language-thing"],
  proposed: true,
});
