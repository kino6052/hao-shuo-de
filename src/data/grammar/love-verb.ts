import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("love-verb", {
  meaning: {
    eng: "Says someone loves doing something: ài goes before the verb.",
    rus: "Говорит, что кто-то любит что-то делать: ài стоит перед глаголом.",
  },
  covers: [],
  tags: ["want", "feeling", "cat:action", "cat:state"],
  template: { hsd: "Who + {{word:ai4}} + verb", eng: "Who loves doing the verb" },
  rules: [{ lhs: "VP", hsd: "=ai4 VP", eng: "ài, then the verb" }],
  taught: "pre-verbs/love",
  examples: [
    ["Tā ài kàn.", "She loves to read."],
    ["Wǒ ài tīng nǐ shuō.", "I love listening to you talk."],
  ],
});
