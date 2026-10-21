import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("serial-verbs", {
  meaning: {
    eng: "Two actions can follow each other, in the order they happen: zǒu lù qù, walk and go there.",
    rus: "Два действия могут идти одно за другим, в том порядке, в каком происходят: zǒu lù qù — идти пешком туда.",
  },
  covers: [],
  tags: ["when", "basic", "cat:action"],
  template: { hsd: "Who + verb + verb", eng: "Who does one thing, then another" },
  rules: [{ lhs: "VP", hsd: "VerbP VP", eng: "an action, then another" }],
  taught: "moving/move",
  examples: [
    ["Tā zǒu lù qù.", "He walks there."],
    ["Dòng-wù tōng-guò zhè-ge kǒu chū-qù le.", "The animal went out through this opening."],
  ],
});
