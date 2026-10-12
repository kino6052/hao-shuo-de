import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("dou-all", {
  meaning: {
    eng: "Says they all do it: dōu goes right before the verb, after the people or things. It never goes before a noun.",
    rus: "Говорит, что все это делают: dōu стоит прямо перед глаголом, после людей или вещей. Перед существительным оно не стоит.",
  },
  covers: ["grammar:all"],
  template: { hsd: "People or things + {{word:dou1}} + verb", eng: "All of them do the verb" },
  rules: [{ lhs: "VP", hsd: "=dou1 VP", eng: "dōu, then what is said" }],
  taught: "also-and-all/all",
  examples: [
    ["Wǒ-men dōu chī.", "We all eat."],
    ["Shuǐ dōu hē-wán le.", "The water is all gone."],
  ],
});
