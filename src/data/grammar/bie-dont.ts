import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("bie-dont", {
  meaning: {
    eng: "Bié before a verb says don't: bié pà, don't be afraid; bié zǒu, don't leave.",
    rus: "Bié перед глаголом значит «не надо»: bié pà — не бойся; bié zǒu — не уходи.",
  },
  covers: ["grammar:dont"],
  template: { hsd: "{{word:bie2}} + verb!", eng: "Don't do it!" },
  rules: [
    { lhs: "VP", hsd: "=bie2 VP", eng: "bié and a verb: don't" },
  ],
  taught: "greetings-and-feelings/order",
  examples: [
    ["Bié pà!", "Don't be afraid!"],
    ["Bié mō huǒ!", "Don't touch the fire!"],
    ["Bié duì tā shuō!", "Don't tell him!"],
  ],
});
