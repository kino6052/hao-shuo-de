import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("middle-of", {
  meaning: {
    eng: "Says between or in the middle: zhōng-jiān goes after the places or people.",
    rus: "Говорит «между» или «посередине»: zhōng-jiān стоит после мест или людей.",
  },
  covers: [],
  tags: ["where", "cat:place", "cat:position"],
  template: { hsd: "Thing + {{word:zai4}} + X {{word:zhong1}}-{{word:jian1}}", eng: "The thing is between X" },
  rules: [{ lhs: "NP", hsd: "NP =zhong1 =jian1", eng: "a place or people and zhōng-jiān: between them" }],
  taught: "where-it-is/middle",
  examples: [["Tā zài wǒ-men zhōng-jiān.", "He's between us."]],
});
