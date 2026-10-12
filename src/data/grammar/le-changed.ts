import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("le-changed", {
  meaning: {
    eng: "Says something changed: le goes after the describing word, with no hěn.",
    rus: "Говорит, что что-то изменилось: le стоит после описывающего слова, без hěn.",
  },
  covers: [],
  template: { hsd: "Thing + adjective + {{word:le}}", eng: "The thing became that" },
  rules: [{ lhs: "VP", hsd: "@adjective le", eng: "a describing word and le: it changed" }],
  taught: "becoming-and-making/changed",
  examples: [
    ["Shuǐ rè le.", "The water got hot."],
    ["Hǎo le.", "It's better now."],
  ],
});
