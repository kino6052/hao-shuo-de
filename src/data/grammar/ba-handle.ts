import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("ba-handle", {
  meaning: {
    eng: "Says what you do to a thing: bǎ and the thing come before the action, which ends in a result.",
    rus: "Говорит, что вы делаете с вещью: bǎ и вещь стоят перед действием, которое заканчивается результатом.",
  },
  covers: [],
  template: { hsd: "Who + {{word:ba3}} + thing + {{word:zuo4}} + result", eng: "Who does the verb to the thing" },
  rules: [{ lhs: "VP", hsd: "ba3 NP VP", eng: "bǎ, the thing, then what is done to it" }],
  taught: "becoming-and-making/ba",
  examples: [
    ["Wǒ bǎ gōng-jù zuò hǎo le.", "I fixed the tool."],
    ["Bǎ dēng guān le.", "Turn off the light."],
    ["Wǒ bǎ yīfu fàng zài dì-shàng le.", "I put the clothes on the floor."],
  ],
});
