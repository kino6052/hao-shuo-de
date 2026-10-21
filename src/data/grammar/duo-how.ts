import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("duo-how", {
  meaning: {
    eng: "Duō before a describing word asks how much: nǐ duō dà, how old are you; duō rè, how hot. Duō-shǎo asks how many or how much.",
    rus: "Duō перед описанием спрашивает «насколько»: nǐ duō dà — сколько тебе лет; duō rè — насколько жарко. Duō-shǎo спрашивает «сколько».",
  },
  covers: ["grammar:question-word"],
  tags: ["question", "how-much", "cat:quantity"],
  template: { hsd: "{{word:duo1}} + describing word? / {{word:duo1}}-{{word:shao3}}?", eng: "How big / how many?" },
  rules: [
    { lhs: "VP", hsd: "=duo1 @adjective", eng: "duō and a describing word: how big" },
    { lhs: "AdjP", hsd: "=duo1 @adjective", eng: "duō and a describing word, before de" },
    { lhs: "HowMany", hsd: "=duo1 =shao3", eng: "duō-shǎo, how many" },
    { lhs: "Count", hsd: "HowMany", eng: "duō-shǎo says how many" },
    { lhs: "NP", hsd: "HowMany", eng: "duō-shǎo as an answer or a name" },
    { lhs: "HowMuch", hsd: "HowMany =jin1", eng: "duō-shǎo jīn, how much money" },
    { lhs: "HowMuch", hsd: "Num =jin1", eng: "a number and jīn: ten jīn" },
    { lhs: "NP", hsd: "HowMuch", eng: "an amount of money" },
    { lhs: "S", hsd: "NP HowMuch", eng: "a thing and its price" },
  ],
  taught: "questions/what",
  examples: [
    ["Nǐ duō dà?", "How old are you?"],
    ["Nǐ yǒu duō-shǎo gè?", "How many do you have?"],
    ["Qù nà-lǐ duō-shǎo jīn?", "How much is it to go there?"],
  ],
});
