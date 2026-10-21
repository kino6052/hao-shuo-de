import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("men-plural", {
  meaning: {
    eng: "Men after a noun makes it plural for people: hái-zi-men, the children. After wǒ, nǐ or tā it makes we, you all or they; a number and a counting word can follow: wǒ-men sān-ge rén, the three of us.",
    rus: "Men после существительного делает множественное число для людей: hái-zi-men — дети. После wǒ, nǐ, tā оно даёт «мы», «вы», «они»; дальше могут идти число и счётное слово: wǒ-men sān-ge rén — нас трое.",
  },
  covers: ["grammar:more-people"],
  tags: ["count", "cat:quantity"],
  template: { hsd: "noun + {{word:men}}", eng: "The people of that kind" },
  rules: [
    { lhs: "NP", hsd: "@noun =men", eng: "a noun and men: the children" },
    { lhs: "Person", hsd: "=wo3", eng: "wǒ, I" },
    { lhs: "Person", hsd: "=ni3", eng: "nǐ, you" },
    { lhs: "Person", hsd: "=ta1", eng: "tā, he or she" },
    { lhs: "Person", hsd: "=wo3 =men", eng: "wǒ-men, we" },
    { lhs: "Person", hsd: "=ni3 =men", eng: "nǐ-men, you all" },
    { lhs: "Person", hsd: "=ta1 =men", eng: "tā-men, they" },
    { lhs: "Person", hsd: "@noun =men", eng: "a noun and men: the children" },
    { lhs: "NP", hsd: "Person Num @measure_word @noun", eng: "we three people" },
  ],
  taught: "pointing/plural-pointers",
  examples: [
    ["Hái-zi-men zài xué-xiào.", "The children are at school."],
    ["Wǒ-men sān-ge rén yī-qǐ qù.", "The three of us go together."],
  ],
});
