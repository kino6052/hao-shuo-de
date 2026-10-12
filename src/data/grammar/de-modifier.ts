import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("de-modifier", {
  meaning: {
    eng: "A describing word, or an owner, goes before the noun and takes -de.",
    rus: "Описывающее слово или владелец стоит перед существительным и получает -de.",
  },
  covers: ["grammar:describe", "grammar:owner"],
  template: { hsd: "modifier-{{word:de}} noun", eng: "the modifier's noun" },
  rules: [
    { lhs: "AdjP", hsd: "@adjective", eng: "a describing word" },
    { lhs: "AdjP", hsd: "hen3 @adjective", eng: "hěn and a describing word" },
    { lhs: "Mod", hsd: "AdjP de", eng: "a describing word with -de" },
    { lhs: "Mod", hsd: "NP de", eng: "an owner with -de" },
    { lhs: "ModNP", hsd: "Mod @noun", eng: "a modifier and its noun" },
    { lhs: "NP", hsd: "ModNP", eng: "a modified noun is a noun phrase" },
    { lhs: "NP", hsd: "NP de", eng: "an owner with -de, the noun left out: mine" },
    { lhs: "NP", hsd: "AdjP de", eng: "a describing word with -de, the noun left out: the empty one" },
  ],
  taught: "modifying-nouns/before",
  examples: [
    ["Dà-de dì-fang.", "A big place."],
    ["Wǒ-de jiā.", "My home."],
    ["Zhè shì wǒ-de.", "This is mine."],
    ["Zhè-ge bāo shì kōng-de.", "This bag is empty."],
  ],
});
