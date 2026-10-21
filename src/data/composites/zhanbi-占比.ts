import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8881,
  phase: 4,
  zh: "占比",
  py: "zhànbǐ",
  en: "proportion; share; percentage (of a whole)",
  ru: "доля; процент; удельный вес",
  pos: "noun",
  hsd: [
    "X {{word:you3}} {{word:duo1}} {{word:da4}}-{{word:de}} {{word:bu4}}-{{light:fen1}}",
    "X {{word:shi4}} {{word:da4}} {{word:bu4}}-{{light:fen1}}, {{word:hai2}}-{{word:shi4}} {{word:xiao3}} {{word:bu4}}-{{light:fen1}}",
  ],
  tts: ["X有多大的部分", "X是大部分，还是小部分"],
  literal: "how big a part X has / is X a big part or a small part",
  fit: "plain",
  topics: ["measures"],
  isA: ["amount-word"],
  proposed: true,
});
