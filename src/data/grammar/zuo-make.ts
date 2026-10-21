import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("zuo-make", {
  meaning: {
    eng: "Says you make something so: zuò goes before the result. Zuò hǎo is fix it, zuò huài is break it.",
    rus: "Говорит, что вы делаете что-то таким: zuò стоит перед результатом. Zuò hǎo — «починить», zuò huài — «сломать».",
  },
  covers: ["grammar:make"],
  tags: ["make", "cat:affection", "cat:quality"],
  template: { hsd: "Who + {{word:zuo4}} + result", eng: "Who makes it so" },
  rules: [{ lhs: "VerbP", hsd: "=zuo4 @adjective", eng: "zuò and the result" }],
  taught: "becoming-and-making/make",
  examples: [
    ["Wǒ zuò hǎo le.", "I fixed it."],
    ["Nǐ néng zuò hǎo ma?", "Can you fix it?"],
  ],
});
