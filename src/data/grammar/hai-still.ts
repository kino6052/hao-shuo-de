import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("hai-still", {
  meaning: {
    eng: "Says something is still so, or there is more: hái goes before the verb.",
    rus: "Говорит, что это всё ещё так, или что есть ещё: hái стоит перед глаголом.",
  },
  covers: [],
  tags: ["all-also", "when", "cat:time"],
  template: { hsd: "Who + {{word:hai2}} + verb", eng: "Who still does the verb" },
  rules: [{ lhs: "VP", hsd: "=hai2 VP", eng: "hái, then what is said" }],
  taught: "also-and-all/also-is",
  examples: [
    ["Tā hái zài jiā.", "He's still at home."],
    ["Nǐ hái yào ma?", "Do you want more?"],
  ],
});
