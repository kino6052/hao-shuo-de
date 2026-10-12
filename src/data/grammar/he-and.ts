import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("he-and", {
  meaning: {
    eng: "Hé joins two nouns: nǐ hé wǒ, you and me. It joins nouns only, not whole sentences.",
    rus: "Hé соединяет два существительных: nǐ hé wǒ — ты и я. Оно соединяет только существительные, а не целые предложения.",
  },
  covers: ["grammar:and"],
  template: { hsd: "A {{word:he2}} B", eng: "A and B" },
  rules: [{ lhs: "NP", hsd: "NP =he2 NP", eng: "two nouns joined by hé: you and me" }],
  taught: "inside-a-sentence/and-or",
  examples: [
    ["Nǐ hé wǒ.", "You and me."],
    ["Wǒ hé tā qù wài-miàn.", "He and I go outside."],
    ["Liù-ge nán-rén hé qī-ge nǚ-rén.", "Six men and seven women."],
  ],
});
