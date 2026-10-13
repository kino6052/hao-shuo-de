import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("hao-ma-suggest", {
  meaning: {
    eng: "Hǎo ma at the end, after a comma, makes a suggestion or asks nicely: wǒ-men chū-qù wánr, hǎo ma? Hǎo on its own says okay.",
    rus: "Hǎo ma в конце, после запятой, делает предложение или вежливую просьбу: wǒ-men chū-qù wánr, hǎo ma? Hǎo само по себе значит «хорошо».",
  },
  covers: ["grammar:suggest"],
  template: { hsd: "…, {{word:hao3}} {{word:ma}}?", eng: "…, okay?" },
  rules: [
    { lhs: "Q", hsd: "S @comma =hao3 ma", eng: "a sentence, a comma, and hǎo ma: okay?" },
    { lhs: "Utt", hsd: "=hao3", eng: "hǎo: okay" },
    { lhs: "Utt", hsd: "=hao3 @comma S", eng: "hǎo, then the sentence: okay, …" },
  ],
  taught: "everyday-patterns/may-i",
  examples: [
    ["Wǒ-men chū-qù wánr, hǎo ma?", "Let's go out and play, okay?"],
    ["Hǎo!", "Okay!"],
    ["Hǎo, wǒ xiàn-zài jiù lái.", "Okay, I'm coming right now."],
  ],
});
