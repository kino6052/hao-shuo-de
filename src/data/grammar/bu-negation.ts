import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("bu-negation", {
  meaning: {
    eng: "Says no: bù goes before the verb, shì or the describing word.",
    rus: "Говорит «нет»: bù стоит перед глаголом, shì или описывающим словом.",
  },
  covers: ["grammar:not"],
  tags: ["negation", "cat:action"],
  template: { hsd: "Subject {{word:bu4}} verb", eng: "Subject does not do the verb" },
  rules: [{ lhs: "VP", hsd: "bu4 VP", eng: "bù before what is said" }],
  taught: "who-does-what/not",
  examples: [
    ["Zhè bù shì rén.", "This is not a person."],
    ["Wǒ bù ài nǐ.", "I do not love you."],
    ["Shuǐ bù hěn hǎo.", "The water is not very good."],
  ],
});
