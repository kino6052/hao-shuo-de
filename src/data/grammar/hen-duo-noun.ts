import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("hen-duo-noun", {
  meaning: {
    eng: "Says there are many of something: hěn duō goes right before the noun.",
    rus: "Говорит, что чего-то много: hěn duō стоит прямо перед существительным.",
  },
  covers: [],
  tags: ["how-much", "cat:quantity"],
  template: { hsd: "{{word:hen3}} {{word:duo1}} + noun", eng: "Many of the noun" },
  rules: [
    { lhs: "NP", hsd: "hen3 =duo1 @noun", eng: "hěn duō and its noun: many of them" },
    { lhs: "NP", hsd: "hen3 =duo1 ModNP", eng: "hěn duō and a modified noun: many white-haired animals" },
    { lhs: "NP", hsd: "hen3 =duo1 @measure_word @noun", eng: "hěn duō, a counting word and a noun: many kinds of clothes" },
  ],
  taught: "moving/road",
  examples: [["Lù-shàng yǒu hěn duō rén.", "There are lots of people on the road."]],
});
