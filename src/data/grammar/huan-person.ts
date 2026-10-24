import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("huan-person", {
  meaning: {
    eng: "Huàn is to swap. Huàn, the person, then the verb: now that person does it, in someone else's place: wǒ bù qù, huàn tā qù, I won't go, he goes instead.",
    rus: "Huàn — «менять». Huàn, человек, затем глагол — теперь это делает он, вместо другого: wǒ bù qù, huàn tā qù — я не пойду, пойдёт он.",
  },
  covers: [],
  tags: ["with-for", "cat:relation"],
  template: { hsd: "{{word:huan4}} + person + verb", eng: "Now the person does it, in someone else's place" },
  rules: [{ lhs: "VP", hsd: "=huan4 NP VP", eng: "huàn, the person, then the verb: now they do it, in someone else's place" }],
  taught: "inside-a-sentence/give",
  examples: [
    ["Wǒ bù qù, huàn tā qù.", "I won't go; he goes instead."],
    ["Wǒ bù shuō, huàn nǐ shuō.", "I won't say it; you say it."],
  ],
});
