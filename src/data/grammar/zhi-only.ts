import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("zhi-only", {
  meaning: {
    eng: "Says only: zhǐ goes before the verb.",
    rus: "Говорит «только»: zhǐ стоит перед глаголом.",
  },
  covers: [],
  template: { hsd: "Who + {{word:zhi3}} + verb", eng: "Who only does the verb" },
  rules: [{ lhs: "VP", hsd: "=zhi3 VP", eng: "zhǐ, then the verb" }],
  taught: "how-much/really",
  examples: [
    ["Wǒ zhǐ yào shuǐ.", "I only want water."],
    ["Tā zhǐ yǒu yī-ge.", "He only has one."],
  ],
});
