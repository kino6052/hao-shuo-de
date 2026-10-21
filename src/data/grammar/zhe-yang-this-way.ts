import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("zhe-yang-this-way", {
  meaning: {
    eng: "Zhè-yàng before a verb says in this way: nǐ zhè-yàng zuò, do it like this.",
    rus: "Zhè-yàng перед глаголом значит «вот так»: nǐ zhè-yàng zuò — делай вот так.",
  },
  covers: [],
  tags: ["describe", "cat:quality"],
  template: { hsd: "{{word:zhe4}} {{word:yang4}} + verb", eng: "Do it this way" },
  rules: [
    { lhs: "Manner", hsd: "=zhe4 =yang4", eng: "zhè-yàng, in this way" },
  ],
  taught: "roles-of-a-word/this-way",
  examples: [
    ["Nǐ zhè yàng zuò.", "Do it like this."],
  ],
});
