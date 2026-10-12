import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("adverb-before-verb", {
  meaning: {
    eng: "How or how much someone does it: hěn and a describing word go before the verb.",
    rus: "Как или насколько кто-то это делает: hěn и описывающее слово стоят перед глаголом.",
  },
  covers: [],
  template: { hsd: "Subject {{word:hen3}} adjective verb", eng: "Subject does the verb very adjectively" },
  rules: [
    { lhs: "AdvP", hsd: "hen3 @adjective", eng: "hěn and a describing word" },
    { lhs: "VP", hsd: "AdvP VerbP", eng: "how it is done, then the verb" },
  ],
  taught: "how-much/very",
  examples: [
    ["Wǒ hěn zǎo lái.", "I come very early."],
    ["Tā hěn kuài zǒu.", "He walks very fast."],
  ],
});
