import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("ma-short", {
  meaning: {
    eng: "A short yes-or-no question: yǒu … ma, do you have …; yuǎn ma, is it far.",
    rus: "Короткий вопрос «да или нет»: yǒu … ma — есть ли …; yuǎn ma — далеко ли.",
  },
  covers: ["grammar:yes-no"],
  tags: ["question", "cat:substance"],
  template: { hsd: "verb phrase / describing word + {{word:ma}}?", eng: "Is it so?" },
  rules: [
    { lhs: "Q", hsd: "VP ma", eng: "what is said with no one named, and ma" },
    { lhs: "Q", hsd: "@adjective ma", eng: "a describing word and ma" },
  ],
  taught: "questions/yes-no",
  examples: [
    ["Yuǎn ma?", "Is it far?"],
    ["Yǒu bié de yánsè ma?", "Do you have another color?"],
  ],
});
