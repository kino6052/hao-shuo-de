import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("you-xie-some", {
  meaning: {
    eng: "Yǒu-xiē before a noun means some: yǒu-xiē rén bù lái, some people aren't coming.",
    rus: "Yǒu-xiē перед существительным значит «некоторые»: yǒu-xiē rén bù lái — некоторые не придут.",
  },
  covers: [],
  template: { hsd: "{{word:you3}}-{{word:xie1}} + noun", eng: "Some of them" },
  rules: [
    { lhs: "NP", hsd: "=you3 =xie1 @noun", eng: "yǒu-xiē and a noun: some people" },
  ],
  examples: [
    ["Yǒu-xiē rén bù lái.", "Some people aren't coming."],
  ],
});
