import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("yi-yang-same", {
  meaning: {
    eng: "Says things are the same: yī-yàng goes after the things. Bù yī-yàng says they differ.",
    rus: "Говорит, что вещи одинаковы: yī-yàng стоит после вещей. Bù yī-yàng говорит, что они разные.",
  },
  covers: ["grammar:same"],
  tags: ["compare", "cat:relation"],
  template: { hsd: "Things + {{word:yi1}}-{{word:yang4}}", eng: "The things are the same" },
  rules: [
    { lhs: "VP", hsd: "=yi1 =yang4", eng: "yī-yàng, the same" },
    { lhs: "VP", hsd: "=yi1 =yang4 @adjective", eng: "yī-yàng and a describing word: equally tall" },
    { lhs: "VP", hsd: "=he2 NP =yi1 =yang4 @adjective", eng: "hé the other, yī-yàng and a describing word: as hot as fire" },
    { lhs: "VP", hsd: "hen3 bu4 VP", eng: "hěn bù, very not: very different" },
  ],
  taught: "comparing/same",
  examples: [
    ["Tā-men yī-yàng.", "They're the same."],
    ["Zhè-ge dì-fang hěn bù yī-yàng.", "This place is very different."],
  ],
});
