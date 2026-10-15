import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("speech-quote", {
  meaning: {
    eng: "After shuō, wèn, xiào and other verbs of saying, a colon brings in what was said: tā shuō: nǐ hǎo. What was said runs to the end of the sentence, so its ma or le stays inside it.",
    rus: "После shuō, wèn, xiào и других глаголов речи двоеточие вводит сказанное: tā shuō: nǐ hǎo. Сказанное идёт до конца предложения, поэтому его ma или le остаётся внутри.",
  },
  covers: [],
  preferred: true,
  template: { hsd: "Who + verb: what was said", eng: "Who said: the words" },
  rules: [
    { lhs: "Utt", hsd: "NP Say", eng: "someone, a verb of saying, and what was said, to the end" },
    { lhs: "Utt", hsd: "Say", eng: "a verb of saying and what was said, with no one named" },
    { lhs: "Say", hsd: "@verb @colon Utt", eng: "a verb, a colon, and what was said or asked, to the end" },
    { lhs: "Say", hsd: "@verb @colon Hail @comma S", eng: "a verb, a colon, a call, and what was said: really, he has no clothes" },
    { lhs: "Say", hsd: "VP @comma Say", eng: "an action, a comma, then the saying: lái le, shuō: …" },
    { lhs: "Say", hsd: "=you4 Say", eng: "yòu before the saying: said again" },
    { lhs: "Say", hsd: "=ye3 Say", eng: "yě before the saying: also said" },
    { lhs: "Say", hsd: "=hai2 Say", eng: "hái before the saying: still said" },
    { lhs: "Say", hsd: "=hui4 Say", eng: "huì before the saying: will say" },
    { lhs: "Say", hsd: "=jiu4 Say", eng: "jiù before the saying: then said" },
    { lhs: "Say", hsd: "=dou1 Say", eng: "dōu before the saying: all said" },
    { lhs: "Say", hsd: "=yong4 NP Say", eng: "yòng and a thing before the saying: said with a loud voice" },
    { lhs: "Say", hsd: "=dui4 NP Say", eng: "duì and a person before the saying: said to them" },
  ],
  taught: "questions/say-ask",
  examples: [
    ["Tā shuō: nǐ hǎo ma?", "He says: how are you?"],
    ["Xiǎo nǚ-rén lái le, shuō: wǒ ài nǐ.", "The girl came and said: I love you."],
  ],
});
