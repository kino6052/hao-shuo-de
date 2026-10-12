import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("wan-finished", {
  meaning: {
    eng: "Says you finished doing something: wán joins the verb, and le follows.",
    rus: "Говорит, что вы закончили что-то делать: wán присоединяется к глаголу, а затем идёт le.",
  },
  covers: [],
  template: { hsd: "Who + verb-{{word:wan2}} {{word:le}}", eng: "Who finished the verb" },
  rules: [{ lhs: "VerbP", hsd: "@verb =wan2 le", eng: "a verb, wán, and le" }],
  taught: "around-an-action/finished",
  examples: [
    ["Wǒ chī-wán le.", "I finished eating."],
    ["Nǐ xiě-wán le ma?", "Did you finish writing?"],
  ],
});
