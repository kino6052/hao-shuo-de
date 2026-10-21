import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7344,
  phase: 4,
  zh: "比重",
  py: "bǐzhòng",
  en: "proportion; share; specific gravity",
  ru: "доля, удельный вес",
  pos: "noun",
  hsd: [
    "{{word:bi3}}-{{word:zhong4}}",
    "X {{word:zai4}} Y {{word:li3}}-{{word:mian4}}-{{word:de}} {{word:duo1}}-{{word:shao3}}",
    "X {{word:shi4}} Y-{{word:de}} {{word:duo1}}-{{word:shao3}} {{word:bu4}}-{{light:fen1}}",
  ],
  tts: ["比重", "X在Y里面的多少", "X是Y的多少部分"],
  literal: "how much of X is inside Y / X is how many parts of Y",
  fit: "plain",
  topics: ["totals-and-parts"],
  isA: ["amount-word"],
  proposed: true,
});
