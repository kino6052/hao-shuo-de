import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("can-alone", {
  meaning: {
    eng: "Néng on its own, or with bù, answers whether something can be done: bù néng, no, you can't.",
    rus: "Néng само по себе, или с bù, отвечает, можно ли это сделать: bù néng — нет, нельзя.",
  },
  covers: ["grammar:can"],
  tags: ["ability", "cat:action"],
  template: { hsd: "{{word:neng2}} / {{word:bu4}} {{word:neng2}}", eng: "Can / cannot" },
  rules: [
    { lhs: "VP", hsd: "Can", eng: "can on its own" },
  ],
  taught: "pre-verbs/can",
  examples: [
    ["Bù néng, nǐ bù néng qù.", "No, you can't go."],
  ],
});
