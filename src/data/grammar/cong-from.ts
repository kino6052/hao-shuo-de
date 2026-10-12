import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("cong-from", {
  meaning: {
    eng: "Says where you come from: cóng goes before the place, then the verb, lái.",
    rus: "Говорит, откуда вы идёте: cóng стоит перед местом, потом глагол, lái.",
  },
  covers: ["grammar:from"],
  template: { hsd: "Who + {{word:cong2}} + place + {{word:lai2}}", eng: "Who comes from the place" },
  rules: [{ lhs: "VP", hsd: "=cong2 NP VP", eng: "cóng, a place, then the verb" }],
  taught: "moving/from",
  examples: [
    ["Tā cóng jiā lái.", "He comes from home."],
    ["Nǐ cóng nǎ-lǐ lái?", "Where do you come from?"],
  ],
});
