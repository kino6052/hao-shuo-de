import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("clock-minutes", {
  meaning: {
    eng: "After the hour, a number and fēn says the minutes: sān diǎn wǔ fēn, five past three.",
    rus: "После часа число и fēn называют минуты: sān diǎn wǔ fēn — пять минут четвёртого.",
  },
  covers: ["grammar:when"],
  tags: ["when", "count", "cat:time"],
  template: { hsd: "number {{word:dian3}} number {{word:fen1}}", eng: "Hours and minutes" },
  rules: [
    { lhs: "Time", hsd: "Time Num =fen1", eng: "a time, then minutes" },
    { lhs: "NP", hsd: "Count @measure_word Num =fen1", eng: "a number, diǎn, and minutes: three o'clock and five minutes" },
  ],
  taught: "around-an-action/when",
  examples: [
    ["Xiàn-zài shì sān diǎn wǔ fēn.", "It's five past three."],
  ],
});
