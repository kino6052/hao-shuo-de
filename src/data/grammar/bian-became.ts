import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("bian-became", {
  meaning: {
    eng: "Says something became different: biàn goes before the describing word, and le after it.",
    rus: "Говорит, что что-то стало другим: biàn стоит перед описывающим словом, а le после него.",
  },
  covers: ["grammar:change"],
  tags: ["change", "cat:quality"],
  template: { hsd: "Thing + {{word:bian4}} + adjective + {{word:le}}", eng: "The thing turned that" },
  rules: [{ lhs: "VP", hsd: "=bian4 @adjective", eng: "biàn and a describing word" }],
  taught: "becoming-and-making/became",
  examples: [
    ["Shuǐ biàn lěng le.", "The water turned cold."],
    ["Tā biàn hǎo le.", "He got better."],
  ],
});
