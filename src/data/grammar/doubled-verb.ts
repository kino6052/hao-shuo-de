import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("doubled-verb", {
  meaning: {
    eng: "Say a verb twice to do it a little or just try it. The second one is short and light: wǒ kàn-kan, let me have a look; xiè-xie, thanks.",
    rus: "Скажите глагол дважды, чтобы сделать это немного или попробовать. Второй слог короткий и лёгкий: wǒ kàn-kan — дай-ка посмотрю; xiè-xie — спасибо.",
  },
  covers: [],
  tags: ["doubling", "cat:action"],
  template: { hsd: "verb-verb", eng: "Do the verb a little" },
  rules: [
    { lhs: "VerbP", hsd: "@verb @again", eng: "a verb said twice: a little of it" },
    { lhs: "VerbP", hsd: "@verb @again NP", eng: "a verb said twice, and what it is done to" },
    { lhs: "VerbP", hsd: "@verb @again S", eng: "a verb said twice, and the whole thing it is about" },
    { lhs: "Utt", hsd: "VP @comma S", eng: "a short word like thanks, then what you say next" },
  ],
  taught: "doubling-words/verbs",
  examples: [
    ["Wǒ kàn-kan.", "Let me have a look."],
    ["Xiè-xie nǐ.", "Thank you."],
    ["Xiè-xie nǐ gěi wǒ shuǐ.", "Thank you for giving me water."],
    ["Xiè-xie, wǒ kàn-kan.", "Thanks, let me have a look."],
  ],
});
