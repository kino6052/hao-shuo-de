import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("adverb-before-verb", {
  meaning: {
    eng: "How or how much someone does it: hěn and a describing word go before the verb.",
    rus: "Как или насколько кто-то это делает: hěn и описывающее слово стоят перед глаголом.",
  },
  covers: [],
  tags: ["how-much", "describe", "cat:quality", "cat:action"],
  template: { hsd: "Subject {{word:hen3}} adjective verb", eng: "Subject does the verb very adjectively" },
  rules: [
    { lhs: "AdvP", hsd: "hen3 @adjective", eng: "hěn and a describing word" },
    { lhs: "VP", hsd: "AdvP VerbP", eng: "how it is done, then the verb" },
    { lhs: "VP", hsd: "hen3 VerbP", eng: "hěn before a verb: very much" },
  ],
  taught: "how-much/very",
  examples: [
    ["Wǒ hěn zǎo lái.", "I come very early."],
    ["Tā hěn kuài zǒu.", "He walks very fast."],
    ["Zhè-ge gōng-jù hěn yǒu jiàzhí.", "This tool is very valuable."],
  ],
});
