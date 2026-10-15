import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("xia-fall", {
  meaning: {
    eng: "Xià before a thing can mean falls: xià shuǐ, it rains.",
    rus: "Xià перед вещью может значить «падает»: xià shuǐ — идёт дождь.",
  },
  covers: [],
  template: { hsd: "{{word:xia4}} + thing", eng: "The thing falls" },
  rules: [
    { lhs: "VerbP", hsd: "=xia4 NP", eng: "xià and what falls: it rains" },
  ],
  taught: "everyday-patterns/rain",
  examples: [
    ["Tiān-shàng xià shuǐ le.", "It's raining."],
  ],
});
