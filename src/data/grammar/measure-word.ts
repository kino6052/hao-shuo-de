import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("measure-word", {
  meaning: {
    eng: "A counting word goes after zhè, nà or a number: zhè-ge (this one), zhè-ge rén (this person), liǎng-ge rén (two people).",
    rus: "Счётное слово ставится после zhè, nà или числа: zhè-ge («вот этот»), zhè-ge rén («этот человек»), liǎng-ge rén («два человека»).",
  },
  covers: [],
  template: {
    hsd: "{{word:zhe4}} / {{word:na4}} / number + measure word (+ noun)",
    eng: "this / that / a number + counting word (+ noun)",
  },
  rules: [
    { lhs: "Pointer", hsd: "=zhe4", eng: "zhè, this" },
    { lhs: "Pointer", hsd: "=na4", eng: "nà, that" },
    { lhs: "Count", hsd: "Pointer", eng: "a pointer says which" },
    { lhs: "Count", hsd: "@number", eng: "a number says how many" },
    { lhs: "NP", hsd: "Count @measure_word", eng: "a pointer or number and a counting word: this one, two of them" },
    { lhs: "NP", hsd: "Count @measure_word @noun", eng: "a pointer or number, a counting word, and its noun" },
  ],
  taught: "pointing/ge-is-universal",
  examples: [
    ["Zhè-ge shì dòng-wù.", "This one is an animal."],
    ["Zhè-ge rén.", "This person."],
    ["Nà-xiē rén hěn hǎo.", "Those people are good."],
    ["Liǎng-ge rén.", "Two people."],
  ],
});
