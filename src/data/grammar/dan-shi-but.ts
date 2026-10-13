import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("dan-shi-but", {
  meaning: {
    eng: "Dàn-shì starts the second part and says but: it looks good, but it does not taste good.",
    rus: "Dàn-shì начинает вторую часть и значит «но»: выглядит хорошо, но на вкус нехорошо.",
  },
  covers: ["grammar:but"],
  template: { hsd: "sentence, {{word:dan4}}-{{word:shi4}} + sentence", eng: "This, but that" },
  rules: [{ lhs: "S", hsd: "S @comma =dan4 =shi4 Clause", eng: "a sentence, then dàn-shì and the other part: but" }],
  taught: "linking-sentences/but",
  examples: [
    ["Wǒ yào qù, dàn-shì wǒ méi yǒu jīn.", "I want to go, but I have no money."],
    ["Tā hěn xiǎo, dàn-shì hěn yǒu lì-qì.", "He's small, but very strong."],
  ],
});
