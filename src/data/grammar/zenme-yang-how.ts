import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("zenme-yang-how", {
  meaning: {
    eng: "Zěnme-yàng asks how it is: jīn-tiān zěnme yàng, how is today.",
    rus: "Zěnme-yàng спрашивает «как»: jīn-tiān zěnme yàng — как сегодня.",
  },
  covers: ["grammar:question-word"],
  template: { hsd: "Thing + {{word:zen3me}} {{word:yang4}}?", eng: "How is it?" },
  rules: [
    { lhs: "VP", hsd: "=zen3me =yang4", eng: "zěnme yàng, how is it" },
    { lhs: "VP", hsd: "=zen3me =dou1 @adjective", eng: "zěnme dōu: however it is, fine" },
  ],
  taught: "questions/what",
  examples: [
    ["Jīn-tiān zěnme yàng?", "How is today?"],
  ],
});
