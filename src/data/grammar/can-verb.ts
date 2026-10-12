import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("can-verb", {
  meaning: {
    eng: "Says what someone can do: néng goes before the verb, and bù goes before néng for \"can't\". Kěyǐ means may.",
    rus: "Говорит, что кто-то может сделать: néng стоит перед глаголом, а bù перед néng значит «не может». Kěyǐ значит «можно».",
  },
  covers: ["grammar:can"],
  template: { hsd: "Who + {{word:neng2}} + verb", eng: "Who can do the verb" },
  rules: [
    { lhs: "Can", hsd: "=neng2", eng: "néng, can" },
    { lhs: "Can", hsd: "=ke3 =yi3", eng: "kěyǐ, may" },
    { lhs: "VP", hsd: "Can VP", eng: "a can, then what can be done" },
  ],
  taught: "pre-verbs/can",
  examples: [
    ["Wǒ néng tīng.", "I can hear."],
    ["Tā bù néng chī.", "He can't eat."],
    ["Wǒ kě yǐ kàn ma?", "May I look?"],
  ],
});
