import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("comma-clauses", {
  meaning: {
    eng: "Two sentences can be joined with a comma: this one is cold, and that one too.",
    rus: "Два предложения можно соединить запятой: это холодное, и то тоже.",
  },
  covers: [],
  template: { hsd: "Sentence, sentence", eng: "One thing, and another" },
  rules: [{ lhs: "S", hsd: "S @comma S", eng: "two sentences with a comma between" }],
  taught: "also-and-all/also-do",
  examples: [["Wǒ hěn lěng, tā yě hěn lěng.", "I'm cold, and he's cold too."]],
});
