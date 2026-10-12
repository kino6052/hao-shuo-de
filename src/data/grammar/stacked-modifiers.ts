import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("stacked-modifiers", {
  meaning: {
    eng: "Modifiers stack up before one noun, each with its own -de.",
    rus: "Несколько определений стоят подряд перед одним существительным, у каждого свой -de.",
  },
  covers: [],
  template: { hsd: "modifier-{{word:de}} modifier-{{word:de}} noun", eng: "the first modifier's second modifier's noun" },
  rules: [{ lhs: "ModNP", hsd: "Mod ModNP", eng: "another modifier before a modified noun" }],
  taught: "pointing/possession-de",
  examples: [
    ["Wǒ-de hǎo-de rén.", "My good person."],
    ["Zhè shì nǐ-de dà-de jiā.", "This is your big home."],
  ],
});
