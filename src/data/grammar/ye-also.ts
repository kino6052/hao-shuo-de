import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("ye-also", {
  meaning: {
    eng: "Says someone also does it: yě goes right before the verb, after the doer. It also goes before hěn.",
    rus: "Говорит, что кто-то тоже это делает: yě стоит прямо перед глаголом, после того, кто делает. Оно стоит и перед hěn.",
  },
  covers: ["grammar:also"],
  tags: ["all-also", "cat:quantity"],
  template: { hsd: "Who + {{word:ye3}} + verb", eng: "Who also does the verb" },
  rules: [{ lhs: "VP", hsd: "=ye3 VP", eng: "yě, then what is said" }],
  taught: "also-and-all/also-do",
  examples: [
    ["Wǒ yě chī.", "I eat too."],
    ["Kōng-qì yě hěn lěng.", "The air is cold too."],
  ],
});
