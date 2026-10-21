import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("maybe-verb", {
  meaning: {
    eng: "Says it might be so: kěnéng goes before the verb.",
    rus: "Говорит, что, возможно, это так: kěnéng стоит перед глаголом.",
  },
  covers: [],
  tags: ["maybe", "cat:state"],
  template: { hsd: "Who + {{word:ke3}}-{{word:neng2}} + verb", eng: "Who might do the verb" },
  rules: [{ lhs: "VP", hsd: "=ke3 =neng2 VP", eng: "kěnéng, then the verb" }],
  taught: "pre-verbs/maybe",
  examples: [
    ["Tā kě-néng zhīdào.", "He might know."],
    ["Wǒ kě-néng bù néng děng.", "I might not be able to wait."],
  ],
});
