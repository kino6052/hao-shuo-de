import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("bang-help", {
  meaning: {
    eng: "Bāng, the person, then the verb: help someone do it. Bāng, the person, then xué and the verb is teach: you help them learn. Hěn huì says someone is good at it.",
    rus: "Bāng, человек, затем глагол — помочь кому-то это сделать. Bāng, человек, затем xué и глагол — учить: вы помогаете ему учиться. Hěn huì говорит, что кто-то хорошо это умеет.",
  },
  covers: [],
  tags: ["with-for", "command", "cat:action", "cat:relation"],
  template: { hsd: "Who + {{word:bang1}} + person + verb", eng: "Who helps the person do it" },
  rules: [
    { lhs: "VP", hsd: "=bang1 NP VP", eng: "bāng, the person, then the verb: helps them do it" },
    { lhs: "VP", hsd: "hen3 =hui4 VP", eng: "hěn huì and a verb: good at it" },
  ],
  taught: "everyday-patterns/help",
  examples: [
    ["Wǒ bāng nǐ ná.", "I help you carry it."],
    ["Nǐ bāng wǒ xué xiě.", "You help me learn to write."],
    ["Tā hěn huì bāng rén xué.", "He's a good teacher."],
  ],
});
