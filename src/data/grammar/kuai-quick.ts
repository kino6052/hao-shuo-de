import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("kuai-quick", {
  meaning: {
    eng: "Kuài before a verb says hurry or quickly: kuài lái, come quickly. Kuài yào before a verb and le says about to: tā kuài yào lái le, he is about to come.",
    rus: "Kuài перед глаголом значит «быстро»: kuài lái — иди скорее. Kuài yào перед глаголом и le значит «вот-вот»: tā kuài yào lái le — он вот-вот придёт.",
  },
  covers: ["grammar:future"],
  template: { hsd: "{{word:kuai4}} + verb / {{word:kuai4}} {{word:yao4}} + verb {{word:le}}", eng: "Do it quickly / is about to do it" },
  rules: [
    { lhs: "VP", hsd: "=kuai4 VP", eng: "kuài and a verb: quickly" },
    { lhs: "VP", hsd: "=kuai4 de VP", eng: "kuài-de and a verb: quickly" },
    { lhs: "VP", hsd: "=kuai4 =yao4 VP", eng: "kuài yào and a verb: about to" },
    { lhs: "VP", hsd: "=kuai4 Bit", eng: "kuài and a little: a bit faster" },
  ],
  taught: "when-it-happens/will",
  examples: [
    ["Kuài lái!", "Come quickly!"],
    ["Tā kuài yào lái le.", "He is about to come."],
  ],
});
