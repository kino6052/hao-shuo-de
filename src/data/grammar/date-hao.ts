import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("date-hao", {
  meaning: {
    eng: "A time word and a number with hào names the date: jīn-tiān shí hào, today is the tenth.",
    rus: "Слово времени и число с hào называют дату: jīn-tiān shí hào — сегодня десятое.",
  },
  covers: ["grammar:when"],
  template: { hsd: "time word + number {{word:hao4}}", eng: "The date is that" },
  rules: [
    { lhs: "S", hsd: "Time NP", eng: "a time word and what it is: today, the tenth" },
  ],
  taught: "around-an-action/when",
  examples: [
    ["Jīn-tiān shí hào.", "Today is the tenth."],
  ],
});
