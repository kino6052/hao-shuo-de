import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("count-aloud", {
  meaning: {
    eng: "Numbers can be said in a row, with commas, and can stand as things themselves: sān bǐ èr duō, three is more than two.",
    rus: "Числа можно называть подряд, через запятую, и они могут быть самостоятельными вещами: sān bǐ èr duō — три больше двух.",
  },
  covers: [],
  template: { hsd: "number, number, number …", eng: "Counting out loud" },
  rules: [
    { lhs: "Tally", hsd: "Num @comma Num", eng: "two numbers with a comma between" },
    { lhs: "Tally", hsd: "Tally @comma Num", eng: "a list of numbers, then one more" },
    { lhs: "NP", hsd: "Tally", eng: "a list of numbers as one thing: three and four" },
    { lhs: "NP", hsd: "Num", eng: "a number as a thing: three, ten" },
  ],
  taught: "numbers/aloud",
  examples: [
    ["Yī, èr, sān!", "One, two, three!"],
    ["Sān bǐ èr duō.", "Three is more than two."],
    ["Shí zuì dà.", "Ten is the biggest."],
  ],
});
