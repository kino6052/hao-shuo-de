import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("bu-adjective", {
  meaning: {
    eng: "Says something is not so: bù goes before the describing word, with no hěn. Bù hěn means not very.",
    rus: "Говорит, что это не так: bù стоит перед описывающим словом, без hěn. Bù hěn значит «не очень».",
  },
  covers: [],
  tags: ["negation", "describe", "cat:quality"],
  template: { hsd: "Thing + {{word:bu4}} + adjective", eng: "The thing is not that" },
  rules: [
    { lhs: "VP", hsd: "bu4 @adjective", eng: "bù and a describing word" },
    { lhs: "VP", hsd: "hen3 bu4 @adjective", eng: "hěn bù and a describing word: very not good" },
  ],
  taught: "how-much/not",
  examples: [
    ["Shuǐ bù lěng.", "The water isn't cold."],
    ["Wǒ de shǒu bù gānjìng.", "My hands are dirty."],
  ],
});
