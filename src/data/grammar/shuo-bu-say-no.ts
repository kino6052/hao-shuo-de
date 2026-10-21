import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("shuo-bu-say-no", {
  meaning: {
    eng: "Shuō bù says no, as an answer or an objection: tā shuō bù, he says no.",
    rus: "Shuō bù значит «сказать нет»: tā shuō bù — он говорит «нет».",
  },
  covers: [],
  tags: ["speech", "negation", "cat:action"],
  template: { hsd: "{{word:shuo1}} {{word:bu4}}", eng: "Say no" },
  rules: [
    { lhs: "VerbP", hsd: "=shuo1 bu4", eng: "shuō bù, says no" },
  ],
  taught: "questions/say-no",
  examples: [
    ["Tā shuō bù.", "He says no."],
  ],
});
