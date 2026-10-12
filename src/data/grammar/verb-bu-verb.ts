import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("verb-bu-verb", {
  meaning: {
    eng: "Asks a yes-or-no question another way: the verb, bù, and the verb again.",
    rus: "Ещё один способ спросить «да или нет»: глагол, bù и тот же глагол ещё раз.",
  },
  covers: ["grammar:yes-no"],
  template: { hsd: "Subject verb-{{word:bu4}}-verb?", eng: "Does the subject do the verb or not?" },
  rules: [
    { lhs: "Either", hsd: "@verb bu4 @verb", eng: "a verb, bù, the verb again" },
    { lhs: "Either", hsd: "=you3 mei2 =you3", eng: "yǒu, méi, yǒu again" },
    { lhs: "VerbP", hsd: "Either NP", eng: "the either-or verb and what it is done to" },
    { lhs: "VerbP", hsd: "Either", eng: "the either-or verb on its own" },
  ],
  taught: "questions/yes-no",
  examples: [
    ["Nǐ tīng-bù-tīng?", "Do you listen?"],
    ["Tā yǒu-méi-yǒu jīn?", "Does she have money?"],
    ["Nǐ tīng-bù-tīng bàba-māma?", "Do you listen to your parents?"],
  ],
});
