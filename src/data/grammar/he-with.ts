import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("he-with", {
  meaning: {
    eng: "Hé before a person and a verb says with whom it is done: hé wǒ yī-qǐ wánr, play together with me.",
    rus: "Hé перед человеком и глаголом говорит, с кем это делают: hé wǒ yī-qǐ wánr — играть вместе со мной.",
  },
  covers: ["grammar:with"],
  template: { hsd: "{{word:he2}} + who + verb", eng: "Do it with someone" },
  rules: [
    { lhs: "VP", hsd: "=he2 NP VP", eng: "hé, someone, and the verb: with him" },
  ],
  taught: "inside-a-sentence/with",
  examples: [
    ["Tā hé wǒ yī-qǐ wánr.", "He plays together with me."],
  ],
});
