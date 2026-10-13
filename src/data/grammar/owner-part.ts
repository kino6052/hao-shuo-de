import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("owner-part", {
  meaning: {
    eng: "An owner right before its part says whose part it is, with or without -de: dòng-wù shēntǐ, the animal's body; tā shēntǐ-de wài-miàn, the outside of his body.",
    rus: "Владелец прямо перед своей частью показывает, чья это часть, с -de или без него: dòng-wù shēntǐ — тело животного; tā shēntǐ-de wài-miàn — наружная сторона его тела.",
  },
  covers: [],
  template: { hsd: "owner-{{word:de}} + part", eng: "The owner's part" },
  rules: [
    { lhs: "ModNP", hsd: "@noun @noun", eng: "two nouns, the owner first: the animal's body" },
    { lhs: "ModNP", hsd: "Person @noun", eng: "wǒ, nǐ, tā (or with men) and a noun: my part, your part, their part" },
    { lhs: "ModNP", hsd: "@noun ModNP", eng: "an owner and a modified part: the animal's outside parts" },
    { lhs: "ModNP", hsd: "Person ModNP", eng: "an owner and a modified part: my mother's body" },
  ],
  taught: "roles-of-a-word/parts",
  examples: [
    ["Dòng-wù shēntǐ de wài-miàn hěn yìng.", "The animal's skin is hard."],
    ["Tā shēntǐ de wài-miàn shì bái-sè de.", "The outside of his body is white."],
  ],
});
