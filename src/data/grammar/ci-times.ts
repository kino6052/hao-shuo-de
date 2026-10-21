import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("ci-times", {
  meaning: {
    eng: "Says how many times: cì goes after hěn duō or duōshǎo, after a number, or after zhè (this time).",
    rus: "Говорит, сколько раз: cì стоит после hěn duō или duōshǎo, после числа или после zhè («этот раз»).",
  },
  covers: [],
  tags: ["count", "cat:quantity", "cat:time"],
  template: { hsd: "Who + verb + {{word:hen3}} {{word:duo1}} {{word:ci4}}", eng: "Who does the verb many times" },
  rules: [
    { lhs: "Times", hsd: "hen3 =duo1 =ci4", eng: "hěn duō cì, many times" },
    { lhs: "Times", hsd: "=duo1 =shao3 =ci4", eng: "duōshǎo cì, how many times" },
    { lhs: "Times", hsd: "Count =ci4", eng: "a number or zhè and cì: three times, this time" },
    { lhs: "Times", hsd: "@slot =ci4", eng: "a letter that stands for a number, and cì: B times" },
    { lhs: "VerbP", hsd: "@verb Times", eng: "a verb and how many times" },
    { lhs: "VerbP", hsd: "@verb guo4 Times", eng: "a verb, guò, and how many times" },
    { lhs: "Time", hsd: "Times", eng: "this time, as a time said first" },
  ],
  taught: "around-an-action/times",
  examples: [
    ["Wǒ kàn-guò hěn-duō cì.", "I've seen it many times."],
    ["Nǐ chī-guò duō-shǎo cì?", "How many times have you eaten it?"],
    ["Zhè cì wǒ děng nǐ.", "This time I'll wait for you."],
  ],
});
