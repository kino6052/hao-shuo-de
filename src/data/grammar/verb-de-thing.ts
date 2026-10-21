import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("verb-de-thing", {
  meaning: {
    eng: "A verb with -de names the thing the action is about: chī-de is food, wǒ xiě de is what I wrote.",
    rus: "Глагол с -de называет вещь, о которой идёт действие: chī-de — еда, wǒ xiě de — то, что я написал.",
  },
  covers: [],
  tags: ["describe", "cat:substance"],
  template: { hsd: "verb-{{word:de}}", eng: "The thing the verb is about" },
  rules: [
    { lhs: "NP", hsd: "VP de", eng: "an action and de: the thing it is about" },
    { lhs: "NP", hsd: "S de", eng: "who does what, and de: the thing they did" },
  ],
  taught: "roles-of-a-word/thing",
  examples: [
    ["Zhè shì wǒ xiě de.", "This is what I wrote."],
    ["Tā chī de shì shuǐ-guǒ.", "What he's eating is fruit."],
  ],
});
