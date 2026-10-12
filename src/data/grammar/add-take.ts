import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("add-take", {
  meaning: {
    eng: "To add, put the numbers together (fàng zài yī-qǐ). To take away, use ná. The answer comes after a comma with shì: shì qī, it's seven.",
    rus: "Чтобы сложить, соедините числа (fàng zài yī-qǐ). Чтобы вычесть, используйте ná. Ответ идёт после запятой с shì: shì qī — «получается семь».",
  },
  covers: [],
  template: {
    hsd: "A, B {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} C",
    eng: "A and B put together is C",
  },
  rules: [
    { lhs: "Together", hsd: "=zai4 =yi1 =qi3", eng: "zài yī-qǐ, together" },
    { lhs: "VerbP", hsd: "@verb Together", eng: "a verb and together: put them together" },
    { lhs: "NP", hsd: "Num =li3 =mian4", eng: "a number and lǐ-miàn: inside it, from it" },
    { lhs: "Utt", hsd: "S @comma VP", eng: "a sentence, then what it comes to" },
    { lhs: "Utt", hsd: "VP @comma VP", eng: "an action, then what it comes to" },
  ],
  taught: "numbers/add-take",
  examples: [
    ["Sān, sì fàng zài yī-qǐ, shì qī.", "Three and four put together is seven."],
    ["Cóng qī lǐ-miàn ná sān, shì sì.", "Take three from seven, and it's four."],
    ["Wǒ suàn le, shì qī.", "I worked it out: it's seven."],
  ],
});
