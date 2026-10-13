import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("know-that", {
  meaning: {
    eng: "Zhīdào can be followed by a whole sentence: what you know is what happened, or who did it.",
    rus: "После zhīdào может идти целое предложение: то, что вы знаете, — это то, что случилось, или кто это сделал.",
  },
  covers: [],
  template: { hsd: "Who + {{word:zhi1dao4}} + sentence", eng: "Who knows what the sentence says" },
  rules: [
    { lhs: "VerbP", hsd: "=zhi1dao4 S", eng: "zhīdào and a whole sentence" },
    { lhs: "VerbP", hsd: "=zhi1dao4 VP", eng: "zhīdào and what happened, with no one named" },
  ],
  examples: [
    ["Wǒ zhīdào tā qù.", "I know he went."],
    ["Nǐ zhīdào fā-shēng le shénme ma?", "Do you know what happened?"],
  ],
});
