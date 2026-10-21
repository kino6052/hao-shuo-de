import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("svo", {
  meaning: {
    eng: "Who does what to what: the doer, then the action, then what it is done to.",
    rus: "Кто что делает: сначала тот, кто делает, потом действие, потом то, на что оно направлено.",
  },
  covers: [],
  tags: ["basic", "cat:action", "cat:affection"],
  template: { hsd: "Subject + verb + Object", eng: "Subject does the verb to the object" },
  rules: [
    { lhs: "VerbP", hsd: "@verb NP", eng: "a verb and what it is done to" },
    { lhs: "VerbP", hsd: "@verb", eng: "a verb on its own" },
    { lhs: "VP", hsd: "VerbP", eng: "a verb phrase is what is said" },
  ],
  taught: "who-does-what/do",
  examples: [
    ["Wǒ ài nǐ.", "I love you."],
    ["Tā xiào.", "He laughs."],
  ],
});
