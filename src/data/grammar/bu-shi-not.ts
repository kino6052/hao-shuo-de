import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("bu-shi-not", {
  meaning: {
    eng: "Bù before shì says one thing is not another: dòng-wù bù shì zhíwù, an animal is not a plant.",
    rus: "Bù перед shì говорит, что одно не есть другое: dòng-wù bù shì zhíwù — животное не растение.",
  },
  covers: ["grammar:not"],
  template: { hsd: "A {{word:bu4}} {{word:shi4}} B", eng: "A is not B" },
  rules: [
    { lhs: "VP", hsd: "bu4 shi4 NP", eng: "bù shì and what it is not" },
  ],
  taught: "words-and-sentences/not",
  examples: [
    ["Dòng-wù bù shì zhíwù.", "An animal is not a plant."],
    ["Zhè bù shì rén.", "This is not a person."],
  ],
});
