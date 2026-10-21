import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("short-answer", {
  meaning: {
    eng: "An answer can be only what is said: the verb for yes, bù and the verb for no. A sentence can leave the doer out.",
    rus: "Ответ может быть только тем, что говорится: глагол — «да», bù и глагол — «нет». В предложении можно не называть того, кто делает.",
  },
  covers: [],
  tags: ["speech", "question", "cat:relation"],
  template: { hsd: "verb. / {{word:bu4}} + verb.", eng: "Yes. / No." },
  rules: [{ lhs: "Utt", hsd: "VP", eng: "what is said, with no one named" }],
  taught: "questions/answer",
  examples: [
    ["Tīng.", "Yes, I do."],
    ["Bù tīng.", "No, I don't."],
    ["Méi-yǒu wèn-tí.", "No problem."],
  ],
});
