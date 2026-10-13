import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("meiyou-not-as", {
  meaning: {
    eng: "Méi yǒu before the other one and a describing word says not as good as: wǒ méi yǒu tā hǎo, I am not as good as him.",
    rus: "Méi yǒu перед другим и описанием значит «не так … как»: wǒ méi yǒu tā hǎo — я не так хорош, как он.",
  },
  covers: ["grammar:compare"],
  template: { hsd: "A {{word:mei2}} {{word:you3}} B + adjective", eng: "A is not as good as B" },
  rules: [
    { lhs: "VP", hsd: "mei2 =you3 NP @adjective", eng: "méi yǒu, the other, and a describing word" },
  ],
  taught: "comparing/than",
  examples: [
    ["Zhè-ge méi yǒu nà-gè hǎo.", "This one is not as good as that one."],
  ],
});
