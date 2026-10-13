import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("why-how-question", {
  meaning: {
    eng: "Asks \"why?\" or \"how?\": wèi-shénme or zěnme goes before the verb, and wèi-shénme also goes before bù.",
    rus: "Спрашивает «почему?» или «как?»: wèi-shénme или zěnme стоит перед глаголом, а wèi-shénme ещё и перед bù.",
  },
  covers: ["grammar:question-word"],
  template: { hsd: "Who + {{word:wei4}}-{{word:shen2me}} / {{word:zen3me}} + verb?", eng: "Why / how does who do it?" },
  rules: [
    { lhs: "AskP", hsd: "=wei4 =shen2me", eng: "wèi-shénme, why" },
    { lhs: "AskP", hsd: "=zen3me", eng: "zěnme, how" },
    { lhs: "VP", hsd: "AskP VP", eng: "the question word, then what is said" },
    { lhs: "Utt", hsd: "AskP", eng: "the question word alone: why?" },
    { lhs: "Utt", hsd: "S @comma AskP", eng: "a sentence, then the question word" },
  ],
  taught: "questions/why-how",
  examples: [
    ["Nǐ wèi-shénme bù chī?", "Why don't you eat?"],
    ["Zhè-ge zěnme xiě?", "How do you write this?"],
  ],
});
