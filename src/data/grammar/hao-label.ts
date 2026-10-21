import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("hao-label", {
  meaning: {
    eng: "A number followed by hào names something by its number: èr-hào, number two. Dì before a number makes it an order: dì-yī, first.",
    rus: "Число и hào называют вещь по номеру: èr-hào — номер два. Dì перед числом задаёт порядок: dì-yī — первый.",
  },
  covers: [],
  tags: ["count", "cat:quantity"],
  template: { hsd: "number + {{word:hao4}}", eng: "Number … (a thing named by its number)" },
  rules: [
    { lhs: "NP", hsd: "Num =hao4", eng: "a number and hào: number two" },
    { lhs: "NP", hsd: "Num =hao4 @noun", eng: "a number, hào, and its noun: road number six" },
    { lhs: "NP", hsd: "Num =hao4 ModNP", eng: "a number, hào, and a modified noun: number one small animal" },
    { lhs: "ModNP", hsd: "Mod =hao4", eng: "a possessor and hào: your number" },
  ],
  taught: "numbers/label",
  examples: [
    ["Wǒ de jiā shì wǔ hào.", "My home is number five."],
    ["Liù hào lù tōng dào wǒ de jiā.", "Road number six leads to my home."],
  ],
});
