import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("adjective-noun", {
  meaning: {
    eng: "A describing word right before a noun, with no de, goes with it: lǎo nǚ-rén, an old woman; dà huài dòng-wù, a big bad animal; bié rén, other people.",
    rus: "Описание прямо перед существительным, без de, относится к нему: lǎo nǚ-rén — старая женщина; dà huài dòng-wù — большой злой зверь; bié rén — другие люди.",
  },
  covers: ["grammar:describe"],
  template: { hsd: "describing word + noun", eng: "The noun that is so" },
  rules: [
    { lhs: "ModNP", hsd: "@adjective-zhe4-na4 @noun", eng: "a describing word (not zhè or nà) and a noun: an old woman" },
    { lhs: "ModNP", hsd: "@adjective-zhe4-na4 ModNP", eng: "a describing word and a modified noun: a big bad animal" },
  ],
  taught: "modifying-nouns/before",
  examples: [
    ["Wǒ yǒu yī-ge hǎo rén.", "I have a good person."],
    ["Dà huài dòng-wù lái le.", "The big bad animal came."],
  ],
});
