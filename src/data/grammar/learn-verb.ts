import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("learn-verb", {
  meaning: {
    eng: "Says someone is learning to do something: xué goes before the verb.",
    rus: "Говорит, что кто-то учится что-то делать: xué стоит перед глаголом.",
  },
  covers: [],
  tags: ["ability", "cat:action"],
  template: { hsd: "Who + {{word:xue2}} + verb", eng: "Who learns to do the verb" },
  rules: [{ lhs: "VP", hsd: "=xue2 VP", eng: "xué, then the verb" }],
  taught: "pre-verbs/learn",
  examples: [
    ["Wǒ xué xiě.", "I'm learning to write."],
    ["Nǐ yào xué xiě ma?", "Do you want to learn to write?"],
  ],
});
