import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("jiao-have-do", {
  meaning: {
    eng: "Jiào, someone, then a verb: tell or have them do it. It works like ràng; bù ràng says you won't let them.",
    rus: "Jiào, кто-то, затем глагол: велеть или попросить их сделать это. Работает как ràng; bù ràng — «не разрешать».",
  },
  covers: [],
  template: { hsd: "Who + {{word:jiao4}} + person + verb", eng: "Who has the person do it" },
  rules: [
    { lhs: "VP", hsd: "=jiao4 NP VP", eng: "jiào, someone, then the verb: have them do it" },
  ],
  taught: "everyday-patterns/have-someone",
  examples: [
    ["Wǒ jiào tā-men děng.", "I told them to wait."],
    ["Jiào tā shuō-xià-qù.", "Have him keep talking."],
  ],
});
