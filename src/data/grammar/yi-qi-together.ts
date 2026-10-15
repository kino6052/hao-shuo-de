import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("yi-qi-together", {
  meaning: {
    eng: "Yī-qǐ before a verb says it is done together: wǒ-men yī-qǐ chī, we eat together.",
    rus: "Yī-qǐ перед глаголом говорит, что это делают вместе: wǒ-men yī-qǐ chī — мы едим вместе.",
  },
  covers: [],
  template: { hsd: "Who + {{word:yi1}}-{{word:qi3}} + verb", eng: "Who does the verb together" },
  rules: [{ lhs: "VP", hsd: "=yi1 =qi3 VP", eng: "yī-qǐ, then what is done: together" }],
  taught: "also-and-all/together",
  examples: [["Wǒ-men yī-qǐ chī.", "We eat together."]],
});
