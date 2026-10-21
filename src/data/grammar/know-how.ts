import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("know-how", {
  meaning: {
    eng: "Says you know how to do something: zhīdào zěnme goes before the verb.",
    rus: "Говорит, что вы знаете, как что-то делать: zhīdào zěnme стоит перед глаголом.",
  },
  covers: [],
  tags: ["ability", "cat:action"],
  template: { hsd: "Who + {{word:zhi1dao4}} {{word:zen3me}} + verb", eng: "Who knows how to do the verb" },
  rules: [{ lhs: "VP", hsd: "=zhi1dao4 =zen3me VP", eng: "zhīdào zěnme, then the verb" }],
  taught: "pre-verbs/know-how",
  examples: [
    ["Wǒ zhīdào zěnme xiě.", "I know how to write."],
    ["Tā bù zhīdào zěnme xiě.", "He doesn't know how to write it."],
  ],
});
