import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("hai-shi-or", {
  meaning: {
    eng: "Hái-shì gives a choice: A or B? It asks the other person to choose, so it comes in a question.",
    rus: "Hái-shì предлагает выбор: A или B? Оно просит собеседника выбрать, поэтому стоит в вопросе.",
  },
  covers: ["grammar:or"],
  tags: ["question", "link", "cat:relation"],
  template: { hsd: "A {{word:hai2}}-{{word:shi4}} B", eng: "A or B?" },
  rules: [{ lhs: "NP", hsd: "NP =hai2 =shi4 NP", eng: "two nouns with hái-shì between: A or B" }],
  taught: "inside-a-sentence/and-or",
  examples: [
    ["Nǐ yào zhè-ge hái-shì nà-ge?", "Do you want this one or that one?"],
    ["Nǐ yào hóng-sè-de hái-shì bái-sè-de?", "Do you want the red one or the white one?"],
  ],
});
