import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("age-number", {
  meaning: {
    eng: "A number alone can say a number: jīn-nián wǒ èr-shí, this year I am twenty.",
    rus: "Число само по себе может быть сказуемым: jīn-nián wǒ èr-shí — в этом году мне двадцать.",
  },
  covers: [],
  template: { hsd: "Person + number", eng: "The person is that old" },
  rules: [
    { lhs: "S", hsd: "Person Num", eng: "a person and a number: I am twenty" },
  ],
  taught: "time-and-sums/age",
  examples: [
    ["Jīn-nián wǒ èr-shí.", "I'm twenty this year."],
  ],
});
