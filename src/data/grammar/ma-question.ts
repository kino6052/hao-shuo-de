import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("ma-question", {
  meaning: {
    eng: "Asks a yes-or-no question: ma goes at the end of the sentence.",
    rus: "Задаёт вопрос «да или нет»: ma стоит в конце предложения.",
  },
  covers: ["grammar:yes-no"],
  tags: ["question", "cat:substance"],
  template: { hsd: "sentence {{word:ma}}", eng: "Is it so?" },
  rules: [
    { lhs: "Q", hsd: "S ma", eng: "a sentence with ma" },
    { lhs: "Q", hsd: "NP @adjective ma", eng: "a describing word with no hěn before ma" },
    { lhs: "Utt", hsd: "Q", eng: "a question" },
  ],
  taught: "questions/yes-no",
  examples: [
    ["Zhè shì rén ma?", "Is this a person?"],
    ["Shuǐ hěn hǎo ma?", "Is the water good?"],
    ["Gōng-jù xiǎo ma?", "Is the tool small?"],
  ],
});
