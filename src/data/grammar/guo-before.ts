import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("guo-before", {
  meaning: {
    eng: "Says you have done something before: guò goes right after the verb.",
    rus: "Говорит, что вы уже делали это раньше: guò стоит сразу после глагола.",
  },
  covers: ["grammar:ever"],
  template: { hsd: "Who + verb-{{word:guo4}}", eng: "Who has done the verb before" },
  rules: [
    { lhs: "VerbP", hsd: "@verb guo4 NP", eng: "a verb, guò, and what it was done to" },
    { lhs: "VerbP", hsd: "@verb guo4", eng: "a verb and guò" },
  ],
  taught: "when-it-happens/before",
  examples: [
    ["Wǒ kàn guò zhè-ge dòng-wù.", "I've seen this animal before."],
    ["Tā shuō guò.", "He has said it before."],
  ],
});
