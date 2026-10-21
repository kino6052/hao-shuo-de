import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("fujin-near", {
  meaning: {
    eng: "Says something is near: fùjìn goes after zài, or after zài and a place.",
    rus: "Говорит, что это рядом: fùjìn стоит после zài или после zài и места.",
  },
  covers: [],
  tags: ["where", "cat:place"],
  template: { hsd: "Thing + {{word:zai4}} (+ place) + {{word:fu4jin4}}", eng: "The thing is near (the place)" },
  rules: [{ lhs: "NP", hsd: "NP =fu4jin4", eng: "a place and fùjìn: near it" }],
  taught: "moving/far",
  examples: [["Shuǐ zài jiā fùjìn.", "The water is near home."]],
});
