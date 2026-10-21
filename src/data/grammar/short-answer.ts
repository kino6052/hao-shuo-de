import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("short-answer", {
  meaning: {
    eng: "An answer can be only what is said: the verb for yes, bù and the verb for no. A sentence can leave the doer out. Shì and bù shì answer alone too, with no complement: yes, it is / no, it isn't.",
    rus: "Ответ может быть только тем, что говорится: глагол — «да», bù и глагол — «нет». В предложении можно не называть того, кто делает. Shì и bù shì тоже отвечают одни, без дополнения: да, это так / нет, не так.",
  },
  covers: [],
  tags: ["speech", "question", "cat:relation"],
  template: { hsd: "verb. / {{word:bu4}} + verb.", eng: "Yes. / No." },
  rules: [
    { lhs: "Utt", hsd: "VP", eng: "what is said, with no one named" },
    { lhs: "Utt", hsd: "shi4", eng: "shì alone: yes, it is" },
    { lhs: "Utt", hsd: "bu4 shi4", eng: "bù shì alone: no, it isn't" },
  ],
  taught: "questions/answer",
  examples: [
    ["Tīng.", "Yes, I do."],
    ["Bù tīng.", "No, I don't."],
    ["Méi-yǒu wèn-tí.", "No problem."],
    ["Shì.", "Yes, it is."],
    ["Bù shì.", "No, it isn't."],
  ],
});
