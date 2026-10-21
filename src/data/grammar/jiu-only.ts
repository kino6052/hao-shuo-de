import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("jiu-only", {
  meaning: {
    eng: "Jiù before a number and counting word means only: wǒ jiù yī-gè, I have only one.",
    rus: "Jiù перед числом и счётным словом значит «только»: wǒ jiù yī-gè — у меня только один.",
  },
  covers: [],
  tags: ["only-some", "count", "cat:quantity"],
  template: { hsd: "{{word:jiu4}} + number + counting word", eng: "Only that many" },
  rules: [
    { lhs: "VP", hsd: "=jiu4 NP", eng: "jiù and an amount: only one" },
    { lhs: "VP", hsd: "=jiu4 @adjective", eng: "jiù and a describing word: then it is fine" },
  ],
  taught: "linking-sentences/only",
  examples: [
    ["Wǒ jiù yī-gè.", "I have only one."],
  ],
});
