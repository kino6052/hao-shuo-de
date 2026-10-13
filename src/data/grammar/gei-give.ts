import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("gei-give", {
  meaning: {
    eng: "Gěi is to give: the person first, then the thing. Before a verb, gěi means for or to: wǒ gěi nǐ xiě, I write to you.",
    rus: "Gěi — «давать»: сначала человек, потом вещь. Перед глаголом gěi значит «для» или «кому»: wǒ gěi nǐ xiě — я пишу тебе.",
  },
  covers: ["grammar:for"],
  template: { hsd: "Who + {{word:gei3}} + person + thing", eng: "Who gives the person the thing" },
  rules: [
    { lhs: "VerbP", hsd: "=gei3 NP NP", eng: "gěi, the person, and the thing" },
    { lhs: "VerbP", hsd: "=gei3 le NP NP", eng: "gěi le, the person, and the thing: gave them it" },
    { lhs: "VP", hsd: "=gei3 NP VP", eng: "gěi, the person, then the verb: does it for them" },
  ],
  taught: "inside-a-sentence/give",
  examples: [
    ["Wǒ gěi nǐ shuǐ.", "I give you water."],
    ["Tā gěi wǒ yī bù-fēn.", "He gives me part of it."],
    ["Wǒ gěi nǐ xiě.", "I write to you."],
  ],
});
