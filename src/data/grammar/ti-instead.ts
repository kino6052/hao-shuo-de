import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("ti-instead", {
  meaning: {
    eng: "Tì before a verb means in someone's place: tā tì wǒ qù, he goes instead of me.",
    rus: "Tì перед глаголом значит «вместо кого-то»: tā tì wǒ qù — он идёт вместо меня.",
  },
  covers: [],
  tags: ["with-for", "cat:relation"],
  template: { hsd: "Who + {{word:ti4}} + person + verb", eng: "Who does it in the person's place" },
  rules: [{ lhs: "VP", hsd: "=ti4 NP VP", eng: "tì, the person, then the verb: does it in their place" }],
  taught: "inside-a-sentence/give",
  examples: [
    ["Tā tì wǒ qù.", "He goes instead of me."],
    ["Wǒ tì nǐ shuō.", "I'll say it for you."],
  ],
});
