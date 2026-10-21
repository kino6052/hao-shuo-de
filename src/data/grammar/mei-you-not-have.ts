import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("mei-you-not-have", {
  meaning: {
    eng: "Méi-yǒu says someone doesn't have a thing: wǒ méi-yǒu jīn, I don't have money. Yǒu is have; méi-yǒu is don't have.",
    rus: "Méi-yǒu говорит, что у кого-то чего-то нет: wǒ méi-yǒu jīn — у меня нет денег. Yǒu — «иметь», méi-yǒu — «не иметь».",
  },
  covers: [],
  tags: ["negation", "owner", "cat:quantity", "cat:state"],
  template: { hsd: "Who + {{word:mei2}}-{{word:you3}} + thing", eng: "Who doesn't have the thing" },
  rules: [
    { lhs: "VP", hsd: "=mei2 =you3 NP", eng: "méi yǒu and a thing: doesn't have it" },
  ],
  taught: "who-does-what/have",
  examples: [
    ["Wǒ méi-yǒu jīn.", "I don't have money."],
    ["Tā méi-yǒu shuǐ.", "He doesn't have water."],
  ],
});
