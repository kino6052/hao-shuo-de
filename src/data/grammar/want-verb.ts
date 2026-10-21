import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("want-verb", {
  meaning: {
    eng: "Says what someone wants to do: yào (want) or xiǎng (would like) goes before the verb.",
    rus: "Говорит, что кто-то хочет сделать: yào («хотеть») или xiǎng («хотелось бы») стоит перед глаголом.",
  },
  covers: ["grammar:want"],
  tags: ["want", "cat:action", "cat:state"],
  template: { hsd: "Who + {{word:yao4}} + verb", eng: "Who wants to do the verb" },
  rules: [
    { lhs: "Wish", hsd: "=yao4", eng: "yào, want" },
    { lhs: "Wish", hsd: "=xiang3", eng: "xiǎng, would like" },
    { lhs: "VP", hsd: "Wish VP", eng: "a want, then what is wanted" },
  ],
  taught: "pre-verbs/want",
  examples: [
    ["Wǒ yào hē shuǐ.", "I want to drink water."],
    ["Wǒ xiǎng chī fàn.", "I'd like to eat."],
    ["Nǐ yào děng ma?", "Do you want to wait?"],
  ],
});
