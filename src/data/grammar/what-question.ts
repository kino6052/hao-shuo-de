import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("what-question", {
  meaning: {
    eng: "Asks \"what?\": shénme goes where the answer would go. Before a noun it asks which kind.",
    rus: "Спрашивает «что?»: shénme стоит там, где был бы ответ. Перед существительным оно спрашивает, какой именно.",
  },
  covers: ["grammar:question-word"],
  template: { hsd: "Who + verb + {{word:shen2me}}?", eng: "Who does the verb to what?" },
  rules: [{ lhs: "NP", hsd: "=shen2me @noun", eng: "shénme before a noun: what kind of" }],
  taught: "questions/what",
  examples: [
    ["Nǐ yǒu shénme gōng-jù?", "What tools do you have?"],
    ["Tā mǎi shénme gōng-jù?", "What tool does he buy?"],
  ],
});
