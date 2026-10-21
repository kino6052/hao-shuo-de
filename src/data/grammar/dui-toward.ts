import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("dui-toward", {
  meaning: {
    eng: "Duì and a person before a describing word says how someone or something is toward them: tā duì wǒ hěn hǎo. Duì X lái shuō means for X.",
    rus: "Duì и человек перед описывающим словом говорят, каков кто-то или что-то по отношению к нему: tā duì wǒ hěn hǎo. Duì X lái shuō значит «для X».",
  },
  covers: ["grammar:for"],
  tags: ["with-for", "describe", "cat:relation"],
  template: { hsd: "A + {{word:dui4}} + B + adjective", eng: "A is that way toward B" },
  rules: [
    { lhs: "VP", hsd: "=dui4 NP VP", eng: "duì, the person, then how it is: good to them" },
    { lhs: "Stance", hsd: "=dui4 NP =lai2 =shuo1", eng: "duì X lái shuō: for X" },
    { lhs: "S", hsd: "Stance @comma S", eng: "for X, then the sentence" },
  ],
  taught: "inside-a-sentence/toward",
  examples: [
    ["Tā duì wǒ hěn hǎo.", "He's good to me."],
    ["Shuǐ duì zhíwù hěn hǎo.", "Water is good for plants."],
    ["Duì wǒ lái shuō, zhè-ge hěn hǎo.", "For me, this is good."],
  ],
});
