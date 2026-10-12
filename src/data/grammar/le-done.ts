import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("le-done", {
  meaning: {
    eng: "Says something is done: le goes right after the verb. The verb itself never changes.",
    rus: "Говорит, что что-то сделано: le стоит сразу после глагола. Сам глагол не меняется.",
  },
  covers: ["grammar:happened"],
  template: { hsd: "Who + verb + {{word:le}}", eng: "Who did the verb" },
  rules: [
    { lhs: "VerbP", hsd: "@verb le NP", eng: "a verb, le, and what it was done to" },
    { lhs: "VerbP", hsd: "@verb le", eng: "a verb and le" },
  ],
  taught: "when-it-happens/done",
  examples: [
    ["Wǒ chī le.", "I ate."],
    ["Nǐ kàn le ma?", "Did you see it?"],
    ["Fā-shēng le shénme?", "What happened?"],
  ],
});
