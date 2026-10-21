import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("which-na", {
  meaning: {
    eng: "Nǎ asks which: nǎ-ge rén, which person; nǎ guó rén, from which country; nǎ tiān, which day.",
    rus: "Nǎ спрашивает «который»: nǎ-ge rén — какой человек; nǎ guó rén — из какой страны; nǎ tiān — какой день.",
  },
  covers: ["grammar:question-word"],
  tags: ["question", "cat:substance"],
  template: { hsd: "{{word:na3}} + (counting word) + noun?", eng: "Which one?" },
  rules: [
    { lhs: "Pointer", hsd: "=na3", eng: "nǎ, which" },
    { lhs: "NP", hsd: "=na3 @noun", eng: "nǎ and a noun: which day" },
    { lhs: "NP", hsd: "=na3 @noun @noun", eng: "nǎ and two nouns: which country person" },
  ],
  taught: "questions/what",
  examples: [
    ["Nǐ ài nǎ yī gè?", "Which one do you love?"],
    ["Nǐ shì nǎ guó rén?", "Which country are you from?"],
    ["Nǐ de shēng-rì shì nǎ tiān?", "When is your birthday?"],
  ],
});
