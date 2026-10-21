import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7485,
  phase: 4,
  zh: "售价",
  py: "shòujià",
  en: "selling price",
  ru: "продажная цена",
  pos: "noun",
  hsd: [
    "{{word:duo1}}-{{word:shao3}} {{word:jin1}}",
    "{{word:mai3}} X {{word:yao4}} {{word:gei3}}-{{word:de}} {{word:jin1}}",
  ],
  tts: ["多少金", "买X要给的金"],
  literal: "how much money / the money you must give to buy X",
  fit: "plain",
  topics: ["money-and-paying"],
  isA: ["money-thing"],
  proposed: true,
});
