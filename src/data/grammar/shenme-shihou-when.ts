import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("shenme-shihou-when", {
  meaning: {
    eng: "Shénme shí-hòu asks when: nǐ shénme shí-hòu lái, when are you coming?",
    rus: "Shénme shí-hòu спрашивает «когда»: nǐ shénme shí-hòu lái — когда ты придёшь?",
  },
  covers: ["grammar:when"],
  template: { hsd: "{{word:shen2me}} {{word:shi2}}-{{word:hou4}}", eng: "When?" },
  rules: [
    { lhs: "Time", hsd: "=shen2me =shi2 =hou4", eng: "shénme shí-hòu, when" },
  ],
  taught: "around-an-action/when",
  examples: [
    ["Nǐ shénme shí-hòu lái?", "When are you coming?"],
  ],
});
