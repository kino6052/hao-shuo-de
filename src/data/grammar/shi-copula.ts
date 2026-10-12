import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("shi-copula", {
  meaning: {
    eng: "Says that one thing is another: shì goes between the two.",
    rus: "Говорит, что одно есть другое: shì стоит между ними.",
  },
  covers: [],
  template: { hsd: "A {{word:shi4}} B", eng: "A is B" },
  rules: [{ lhs: "VP", hsd: "shi4 NP", eng: "shì and what it is" }],
  taught: "words-and-sentences/is",
  examples: [
    ["Zhè shì rén.", "This is a person."],
    ["Wǒ shì hǎo-de rén.", "I am a good person."],
  ],
});
