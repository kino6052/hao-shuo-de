import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("easy-hard-verb", {
  meaning: {
    eng: "Hǎo or nán before a verb says it is good or hard to do: hǎo wánr, fun to play; nán zuò, hard to do.",
    rus: "Hǎo или nán перед глаголом говорит, что это хорошо или трудно делать: hǎo wánr — интересно играть; nán zuò — трудно делать.",
  },
  covers: ["grammar:describe"],
  template: { hsd: "{{word:hao3}} / {{word:nan2}} + verb", eng: "Good or hard to do" },
  rules: [
    { lhs: "VP", hsd: "=hao3 @verb", eng: "hǎo and a verb: good to do" },
    { lhs: "VP", hsd: "=nan2 @verb", eng: "nán and a verb: hard to do" },
  ],
  taught: "modifying-nouns/before",
  examples: [
    ["Zhè-ge hǎo wánr.", "This is interesting."],
    ["Zhè-ge nán zuò.", "This is hard to do."],
  ],
});
