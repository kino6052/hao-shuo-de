import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("price-jin", {
  meaning: {
    eng: "A number and jīn says how much money: shí jīn, ten; hěn shǎo jīn, very little money.",
    rus: "Число и jīn говорят, сколько денег: shí jīn — десять; hěn shǎo jīn — очень мало денег.",
  },
  covers: [],
  template: { hsd: "number + {{word:jin1}}", eng: "That much money" },
  rules: [
    { lhs: "NP", hsd: "Num =jin1", eng: "a number and jīn: ten jīn" },
    { lhs: "NP", hsd: "hen3 =shao3 @noun", eng: "hěn shǎo and a noun: very little money" },
  ],
  taught: "time-and-sums/price",
  examples: [
    ["Zhè-ge yào yī líng líng jīn.", "This costs a hundred."],
    ["Zhè-ge yào hěn shǎo jīn.", "This is cheap."],
  ],
});
