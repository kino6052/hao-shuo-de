import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("jiu-then", {
  meaning: {
    eng: "Jiù goes right before the verb. After rúguǒ it means then; on its own it means right away or just: wǒ jiù qù, I'm going right away.",
    rus: "Jiù стоит прямо перед глаголом. После rúguǒ оно значит «тогда»; само по себе — «сразу» или «только»: wǒ jiù qù — я иду сразу.",
  },
  covers: [],
  tags: ["link", "when", "cat:time", "cat:relation"],
  template: { hsd: "(ru2guo3 X,) who + {{word:jiu4}} + verb", eng: "(If X,) then who does the verb right away" },
  rules: [
    { lhs: "VP", hsd: "=jiu4 VP", eng: "jiù, then what is done: right away, then" },
    { lhs: "VP", hsd: "VP =jiu4 VP", eng: "one action, then jiù the next" },
  ],
  taught: "linking-sentences/then",
  examples: [
    ["Rúguǒ nǐ lái, wǒ jiù děng nǐ.", "If you come, I'll wait for you."],
    ["Wǒ xiàn-zài jiù qù.", "I'm going right now."],
    ["Wǒ chī-wán le jiù qù.", "I'll go as soon as I've eaten."],
  ],
});
