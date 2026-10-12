import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("le-new-situation", {
  meaning: {
    eng: "Says something has now happened: le goes at the end of what is said.",
    rus: "Говорит, что это уже случилось: le стоит в конце сказанного.",
  },
  covers: [],
  template: { hsd: "Who + verb + place + {{word:le}}", eng: "Who has now done the verb at the place" },
  rules: [{ lhs: "VP", hsd: "VP le", eng: "what is said, and le: it has now happened" }],
  taught: "moving/arrive",
  examples: [
    ["Wǒ dào jiā le.", "I've arrived home."],
    ["Wǒ-men dào jiā le.", "We've arrived home."],
  ],
});
