import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("li-qi-strength", {
  meaning: {
    eng: "Lì-qì, strength-air, is the strength of a body: tā hěn yǒu lì-qì, he is very strong.",
    rus: "Lì-qì («сила-воздух») — сила тела: tā hěn yǒu lì-qì — он очень сильный.",
  },
  covers: [],
  tags: ["describe", "cat:quality"],
  template: { hsd: "{{word:li4}}-{{word:qi4}}", eng: "Strength" },
  rules: [
    { lhs: "NP", hsd: "=li4 =qi4", eng: "lì-qì, the strength of a body" },
  ],
  taught: "becoming-and-making/strong",
  examples: [
    ["Tā hěn yǒu lì-qì.", "He is very strong."],
    ["Wǒ méi-yǒu lì-qì.", "I have no strength."],
  ],
});
