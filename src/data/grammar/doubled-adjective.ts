import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("doubled-adjective", {
  meaning: {
    eng: "Say a describing word twice, then -de, to make it stronger and livelier: yuán-yuán-de. No hěn is needed. Before a verb, hǎo-hǎo means well, properly.",
    rus: "Скажите описывающее слово дважды и добавьте -de, чтобы усилить его и оживить: yuán-yuán-de. Hěn не нужно. Перед глаголом hǎo-hǎo значит «как следует».",
  },
  covers: [],
  template: { hsd: "adjective-adjective-{{word:de}}", eng: "Nice and … (stronger)" },
  rules: [
    { lhs: "AdjP", hsd: "@adjective @again", eng: "a describing word said twice" },
    { lhs: "VP", hsd: "@adjective @again de", eng: "a describing word said twice, with -de: nice and so" },
    { lhs: "Manner", hsd: "@adjective @again", eng: "a describing word said twice, before a verb: well, properly" },
    { lhs: "VP", hsd: "Manner VP", eng: "how it is done, then the verb" },
  ],
  taught: "doubling-words/describe",
  examples: [
    ["Yuè yuán-yuán-de.", "The moon is nice and round."],
    ["Hǎo-hǎo xué!", "Study hard!"],
    ["Xiǎo-xiǎo-de shuǐ-guǒ.", "A tiny fruit."],
  ],
});
