import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("hui-will", {
  meaning: {
    eng: "Says something will happen: huì goes before the verb.",
    rus: "Говорит, что это произойдёт: huì стоит перед глаголом.",
  },
  covers: ["grammar:future"],
  tags: ["future", "cat:time", "cat:action"],
  template: { hsd: "Who + {{word:hui4}} + verb", eng: "Who will do the verb" },
  rules: [{ lhs: "VP", hsd: "=hui4 VP", eng: "huì, then the verb" }],
  taught: "when-it-happens/will",
  examples: [
    ["Wǒ huì chī.", "I will eat."],
    ["Nǐ huì shuìjiào ma?", "Will you sleep?"],
  ],
});
