import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("verb-de-person", {
  meaning: {
    eng: "A verb with -de before a noun names the one or the thing that does it: xiě-de rén, the one who writes; wǒ xiě de shū, the book I wrote.",
    rus: "Глагол с -de перед существительным называет того или то, что это делает: xiě-de rén — пишущий; wǒ xiě de shū — книга, которую я написал.",
  },
  covers: [],
  template: { hsd: "verb-{{word:de}} {{word:ren2}}", eng: "The one who does the verb" },
  rules: [
    { lhs: "Mod", hsd: "VP de", eng: "an action and de: describes the noun after it" },
    { lhs: "Mod", hsd: "S de", eng: "who does what, and de: describes the noun after it" },
  ],
  taught: "roles-of-a-word/person",
  examples: [
    ["Xiě de rén hěn hǎo.", "The one who writes is good."],
    ["Wǒ ài tā xiě de shū.", "I love the book he wrote."],
  ],
});
