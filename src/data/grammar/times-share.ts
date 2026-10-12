import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("times-share", {
  meaning: {
    eng: "To multiply, put a number together many times (fàng zài yī-qǐ sān cì). To divide, say how many times you can take it away (néng ná sān cì).",
    rus: "Чтобы умножить, соедините число много раз (fàng zài yī-qǐ sān cì). Чтобы разделить, скажите, сколько раз можно его взять (néng ná sān cì).",
  },
  covers: [],
  template: {
    hsd: "{{word:ba3}} A {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} B-{{word:ci4}}, {{word:shi4}} C",
    eng: "A put together B times is C",
  },
  rules: [{ lhs: "VerbP", hsd: "@verb Together Times", eng: "a verb, together, and how many times" }],
  taught: "numbers/times-share",
  examples: [
    ["Bǎ sì fàng zài yī-qǐ sān cì, shì shí-èr.", "Four put together three times is twelve."],
    ["Bǎ wǔ fàng zài yī-qǐ liǎng cì, shì shí.", "Five put together twice is ten."],
  ],
});
