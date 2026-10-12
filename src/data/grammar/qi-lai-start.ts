import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("qi-lai-start", {
  meaning: {
    eng: "Says something starts to get that way: qǐ-lái goes after the describing word.",
    rus: "Говорит, что что-то начинает становиться таким: qǐ-lái стоит после описывающего слова.",
  },
  covers: [],
  template: { hsd: "Thing + adjective-{{word:qi3}}-{{word:lai2}}", eng: "The thing starts to get that way" },
  rules: [{ lhs: "VP", hsd: "@adjective =qi3 =lai2", eng: "a describing word and qǐ-lái: starting to be so" }],
  taught: "direction-and-result/seems",
  examples: [["Kōng-qì lěng-qǐ-lái le.", "It's getting cold."]],
});
