import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("you-again", {
  meaning: {
    eng: "Says something happens again: yòu goes before the verb, and le after it.",
    rus: "Говорит, что это происходит снова: yòu стоит перед глаголом, а le после него.",
  },
  covers: [],
  template: { hsd: "Who + {{word:you4}} + verb + {{word:le}}", eng: "Who did the verb again" },
  rules: [{ lhs: "VP", hsd: "=you4 VP", eng: "yòu, then the verb" }],
  taught: "around-an-action/again",
  examples: [
    ["Tā yòu chī le.", "He ate again."],
    ["Wǒ yòu yào chī le.", "I'm going to eat again."],
  ],
});
