import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("dan-shi-but", {
  meaning: {
    eng: "Dàn-shì starts the second part and says but: it looks good, but it does not taste good.",
    rus: "Dàn-shì начинает вторую часть и значит «но»: выглядит хорошо, но на вкус нехорошо.",
  },
  covers: ["grammar:but"],
  template: { hsd: "sentence, {{word:dan4}}-{{word:shi4}} + sentence", eng: "This, but that" },
  rules: [
    { lhs: "But", hsd: "=dan4 =shi4", eng: "dàn-shì, but" },
    { lhs: "But", hsd: "=dan4", eng: "dàn, but" },
    { lhs: "But", hsd: "=ke3 =shi4", eng: "kě-shì, but" },
    { lhs: "But", hsd: "=bu4 =guo4", eng: "bù-guò, but" },
    { lhs: "S", hsd: "S @comma But Clause", eng: "a sentence, then but and the other part" },
    { lhs: "Utt", hsd: "But S", eng: "but and a sentence, said after something else" },
  ],
  taught: "linking-sentences/but",
  examples: [
    ["Wǒ yào qù, dàn-shì wǒ méi yǒu jīn.", "I want to go, but I have no money."],
    ["Tā hěn xiǎo, dàn-shì hěn yǒu lì-qì.", "He's small, but very strong."],
  ],
});
