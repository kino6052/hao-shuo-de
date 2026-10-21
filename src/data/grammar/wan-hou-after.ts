import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("wan-hou-after", {
  meaning: {
    eng: "Says \"after doing something\": hòu goes after the finished action, then a comma and the rest.",
    rus: "Говорит «после того, как что-то сделано»: hòu стоит после законченного действия, потом запятая и остальное.",
  },
  covers: [],
  tags: ["when", "cat:time"],
  template: { hsd: "verb-{{word:wan2}} {{word:hou4}}, the rest", eng: "After the verb, the rest" },
  rules: [
    { lhs: "Time", hsd: "@verb =wan2 =hou4", eng: "a verb, wán, and hòu: after it is done" },
    { lhs: "VP", hsd: "Time @comma VP", eng: "a time, a comma, then what is said, with no one named" },
  ],
  taught: "around-an-action/after",
  examples: [
    ["Chī-wán hòu, wǒ shuìjiào.", "After eating, I sleep."],
    ["Chī-wán hòu, fā-shēng le shénme?", "After eating, what happened?"],
  ],
});
