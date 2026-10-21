import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8601,
  phase: 4,
  zh: "充实",
  py: "chōngshí",
  en: "full; substantial; enrich",
  ru: "насыщенный; содержательный",
  pos: "adjective",
  hsd: [
    "{{word:li3}}-{{word:mian4}} {{word:bu4}} {{word:kong1}}, {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:dong1}}-{{light:xi1}}",
    "{{word:you3}} {{word:hen3}} {{word:duo1}} {{word:dong1}}-{{light:xi1}} {{word:yao4}} {{word:zuo4}}, {{word:hen3}} {{word:hao3}}",
  ],
  tts: ["里面不空，有很多东西", "有很多东西要做，很好"],
  literal: "not empty inside, there are many things / there are many things to be done, which is good",
  fit: "plain",
  topics: ["empty-messy-clear"],
  isA: ["condition-quality"],
  proposed: true,
});
