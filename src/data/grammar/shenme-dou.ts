import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("shenme-dou", {
  meaning: {
    eng: "Says everything: shénme-dōu goes before the verb. With bù or méi it means nothing.",
    rus: "Говорит «всё»: shénme-dōu стоит перед глаголом. С bù или méi оно значит «ничего».",
  },
  covers: [],
  template: { hsd: "Who + {{word:shen2me}}-{{word:dou1}} + verb", eng: "Who does the verb to everything" },
  rules: [
    { lhs: "VP", hsd: "=shen2me =dou1 VP", eng: "shénme-dōu, then what is said" },
    { lhs: "VP", hsd: "mei2 VP", eng: "méi, then what is said: did not, has not" },
  ],
  taught: "also-and-all/everything",
  examples: [
    ["Wǒ shénme dōu chī.", "I eat everything."],
    ["Wǒ shénme dōu bù yào.", "I don't want anything."],
    ["Tā shénme dōu méi kàn-dào.", "He didn't see anything."],
  ],
});
