import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("big-numbers", {
  meaning: {
    eng: "Numbers above ten: shí goes before the other number for 11 to 19 (shí-èr) and after it for 20, 30 … (èr-shí). Past ninety-nine, say the digits one by one (yī-líng-líng, 100).",
    rus: "Числа больше десяти: shí стоит перед другим числом для 11–19 (shí-èr) и после него для 20, 30 … (èr-shí). После 99 называют цифры по одной (yī-líng-líng — 100).",
  },
  covers: [],
  template: {
    hsd: "{{word:shi2}} + number (11-19) / number + {{word:shi2}} (20, 30 …)",
    eng: "A number above ten",
  },
  rules: [
    { lhs: "Num", hsd: "=shi2 @number", eng: "shí and a digit: eleven to nineteen" },
    { lhs: "Num", hsd: "@number =shi2", eng: "a digit and shí: twenty, thirty …" },
    { lhs: "Num", hsd: "@number @number @number", eng: "three digits, one by one: a hundred" },
    { lhs: "Num", hsd: "@number @number @number @number", eng: "four digits, one by one: a year" },
  ],
  taught: "numbers/teens",
  examples: [
    ["Shí-yī-ge rén.", "Eleven people."],
    ["Èr-shí-ge rén.", "Twenty people."],
    ["Èr-líng-líng.", "Two hundred."],
  ],
});
