import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("speech-quote", {
  meaning: {
    eng: "After shuō, wèn, xiào and other verbs of saying, a comma or a colon brings in what was said: tā shuō: nǐ hǎo.",
    rus: "После shuō, wèn, xiào и других глаголов речи запятая или двоеточие вводит сказанное: tā shuō: nǐ hǎo.",
  },
  covers: [],
  template: { hsd: "Who + verb: what was said", eng: "Who said: the words" },
  rules: [
    { lhs: "VerbP", hsd: "@verb @comma S", eng: "a verb, a colon, and what was said" },
    { lhs: "VerbP", hsd: "@verb @comma Q", eng: "a verb, a colon, and what was asked" },
    { lhs: "VerbP", hsd: "@verb @comma Hail @comma S", eng: "a verb, a colon, a call, and what was said: really, he has no clothes" },
  ],
  examples: [
    ["Tā shuō: nǐ hǎo ma?", "He says: how are you?"],
    ["Xiǎo nǚ-rén lái le, shuō: wǒ ài nǐ.", "The girl came and said: I love you."],
  ],
});
