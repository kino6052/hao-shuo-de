import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("bi-than", {
  meaning: {
    eng: "Says one thing is more than another: bǐ (than) goes between them, then the describing word, with no hěn.",
    rus: "Говорит, что одно больше другого: bǐ («чем») стоит между ними, потом описывающее слово, без hěn.",
  },
  covers: ["grammar:compare"],
  template: { hsd: "A + {{word:bi3}} + B + adjective", eng: "A is more than B" },
  rules: [
    { lhs: "VP", hsd: "=bi3 NP @adjective", eng: "bǐ, what it is set against, and a describing word" },
    { lhs: "VP", hsd: "=bi3 NP VerbP", eng: "bǐ, what it is set against, and a verb: worth more" },
    { lhs: "VP", hsd: "=bi3 NP VP", eng: "bǐ, what it is set against, and what is said" },
    { lhs: "VP", hsd: "=bi3 NP =hai2 @adjective", eng: "bǐ, the other, hái and a describing word: even better" },
  ],
  taught: "comparing/than",
  examples: [
    ["Wǒ bǐ nǐ dà.", "I'm bigger than you."],
    ["Rén bǐ jīn yǒu jiàzhí.", "People are worth more than money."],
  ],
});
