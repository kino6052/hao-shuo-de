import { pattern } from "../../lib/grammar-pattern.ts";

// The frame every sentence here has: something, then what is said about it.
// Also the plainest noun phrases (a noun or a pronoun) and a lone one as an answer.
export default pattern("subject-predicate", {
  meaning: {
    eng: "A sentence names someone or something, then says something about it.",
    rus: "Предложение называет кого-то или что-то и говорит об этом.",
  },
  covers: [],
  tags: ["basic", "cat:substance"],
  template: { hsd: "Subject + Predicate", eng: "Who or what, then what is said about it" },
  rules: [
    { lhs: "Utt", hsd: "S", eng: "a sentence" },
    { lhs: "Utt", hsd: "NP", eng: "a lone noun phrase, like an answer" },
    { lhs: "S", hsd: "NP VP", eng: "a noun phrase, then what is said about it" },
    { lhs: "NP", hsd: "@noun", eng: "a noun" },
    { lhs: "NP", hsd: "@pronoun", eng: "a pronoun" },
  ],
  taught: "words-and-sentences/is",
  examples: [
    ["Wǒ shì rén.", "I am a person."],
    ["Zhè.", "This."],
  ],
});
