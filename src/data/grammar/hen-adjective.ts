import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("hen-adjective", {
  meaning: {
    eng: "Says what something is like: hěn goes before the describing word.",
    rus: "Говорит, каково что-то: hěn стоит перед описывающим словом.",
  },
  covers: ["grammar:degree"],
  template: { hsd: "Subject {{word:hen3}} adjective", eng: "Subject is (very) adjective" },
  rules: [{ lhs: "VP", hsd: "hen3 @adjective", eng: "hěn and a describing word" }],
  taught: "modifying-nouns/like",
  examples: [
    ["Shuǐ hěn hǎo.", "The water is good."],
    ["Dì-fang hěn dà.", "The place is big."],
  ],
});
