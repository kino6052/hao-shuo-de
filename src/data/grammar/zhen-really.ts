import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("zhen-really", {
  meaning: {
    eng: "Says really: zhēn goes before the describing word. On its own it is a whole sentence.",
    rus: "Говорит «действительно»: zhēn стоит перед описывающим словом. Само по себе оно — целое предложение.",
  },
  covers: [],
  template: { hsd: "Thing + {{word:zhen1}} + adjective", eng: "The thing is really that" },
  rules: [{ lhs: "VP", hsd: "=zhen1 @adjective", eng: "zhēn and a describing word" }],
  taught: "how-much/really",
  examples: [
    ["Zhēn rè!", "It's really hot!"],
    ["Tā zhēn hǎo.", "She's really nice."],
  ],
});
