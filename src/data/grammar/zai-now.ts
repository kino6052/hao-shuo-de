import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("zai-now", {
  meaning: {
    eng: "Says something is happening right now: zài goes before the verb, like -ing in English.",
    rus: "Говорит, что это происходит прямо сейчас: zài стоит перед глаголом, как -ing в английском.",
  },
  covers: ["grammar:ongoing"],
  template: { hsd: "Who + {{word:zai4}} + verb", eng: "Who is doing the verb" },
  rules: [{ lhs: "VP", hsd: "=zai4 VP", eng: "zài, then the verb" }],
  taught: "when-it-happens/now",
  examples: [
    ["Tā zài shuìjiào.", "She's sleeping."],
    ["Nǐ zài kàn shénme?", "What are you looking at?"],
  ],
});
