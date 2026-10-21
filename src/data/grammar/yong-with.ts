import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("yong-with", {
  meaning: {
    eng: "Yòng and a thing before a verb says what you do it with: wǒ yòng gōng-jù xiě, I write with a tool.",
    rus: "Yòng и вещь перед глаголом говорят, чем это делают: wǒ yòng gōng-jù xiě — я пишу инструментом.",
  },
  covers: ["grammar:with"],
  tags: ["with-for", "cat:relation"],
  template: { hsd: "Who + {{word:yong4}} + thing + verb", eng: "Who does the verb with the thing" },
  rules: [{ lhs: "VP", hsd: "=yong4 NP VP", eng: "yòng, the thing, then the verb: does it with that" }],
  taught: "inside-a-sentence/with",
  examples: [["Wǒ yòng gōng-jù xiě.", "I write with a tool."]],
});
