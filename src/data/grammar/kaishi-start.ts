import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("kaishi-start", {
  meaning: {
    eng: "Says something starts: kāishǐ goes before the verb.",
    rus: "Говорит, что что-то начинается: kāishǐ стоит перед глаголом.",
  },
  covers: [],
  template: { hsd: "Who + {{word:kai1shi3}} + verb", eng: "Who starts to do the verb" },
  rules: [{ lhs: "VP", hsd: "=kai1shi3 VP", eng: "kāishǐ, then the verb" }],
  taught: "around-an-action/start",
  examples: [
    ["Wǒ kāishǐ wánr le.", "I started to play."],
    ["Nǐ kāishǐ xiě le ma?", "Have you started writing?"],
  ],
});
