import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("dui-correct", {
  meaning: {
    eng: "Duì on its own says right: nǐ shuō-de duì, what you say is right. Bù duì is wrong; duì-bù-duì asks if it is right.",
    rus: "Duì само по себе значит «верно»: nǐ shuō-de duì — то, что ты сказал, верно. Bù duì — неверно.",
  },
  covers: [],
  template: { hsd: "{{word:dui4}} / {{word:bu4}} {{word:dui4}}", eng: "Right / not right" },
  rules: [
    { lhs: "VP", hsd: "=dui4", eng: "duì, right" },
    { lhs: "VP", hsd: "hen3 =dui4", eng: "hěn duì, very right" },
    { lhs: "AdjP", hsd: "=dui4", eng: "duì before de: the right way" },
    { lhs: "AdjP", hsd: "bu4 =dui4", eng: "bù duì before de: the wrong thing" },
    { lhs: "VP", hsd: "=dui4 NP @adjective", eng: "duì someone good: good for him" },
    { lhs: "VP", hsd: "=dui4 NP", eng: "duì someone: point at him" },
  ],
  examples: [
    ["Nǐ shuō de duì.", "You're right."],
    ["Zhè shì bù duì de dōng-xi.", "This is a mistake."],
    ["Shuǐ duì shēntǐ hǎo.", "Water is good for the body."],
  ],
});
