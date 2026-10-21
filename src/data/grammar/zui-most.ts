import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("zui-most", {
  meaning: {
    eng: "Says the most: zuì goes before the describing word or the verb. Zuì-hòu is last.",
    rus: "Говорит «самый»: zuì стоит перед описывающим словом или глаголом. Zuì-hòu значит «последний».",
  },
  covers: ["grammar:most"],
  tags: ["compare", "how-much", "cat:relation", "cat:quality"],
  template: { hsd: "Thing + {{word:zui4}} + adjective", eng: "The thing is the most that" },
  rules: [
    { lhs: "VP", hsd: "=zui4 @adjective", eng: "zuì and a describing word" },
    { lhs: "VP", hsd: "=zui4 VerbP", eng: "zuì and a verb: likes it the most" },
    { lhs: "VP", hsd: "=zui4 =shao3 VP", eng: "zuì shǎo and a verb: at least" },
    { lhs: "VP", hsd: "=zui4 =hao3 VP", eng: "zuì hǎo and a verb: had best" },
    { lhs: "NP", hsd: "=zui4 @noun", eng: "zuì and a place: the very bottom" },
    { lhs: "Time", hsd: "=zui4 =hou4", eng: "zuì-hòu, last" },
  ],
  taught: "comparing/most",
  examples: [
    ["Zhè-ge zuì dà.", "This one is the biggest."],
    ["Wǒ zuì ài zhíwù.", "I love plants the most."],
    ["Tā zuì-hòu lái.", "He came last."],
  ],
});
