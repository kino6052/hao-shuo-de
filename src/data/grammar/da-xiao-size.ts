import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("da-xiao-size", {
  meaning: {
    eng: "Dà and xiǎo together name the size: nǐ shēntǐ de dà-xiǎo, the size of your body.",
    rus: "Dà и xiǎo вместе называют размер: nǐ shēntǐ de dà-xiǎo — размер твоего тела.",
  },
  covers: [],
  template: { hsd: "{{word:da4}}-{{word:xiao3}}", eng: "The size" },
  rules: [
    { lhs: "NP", hsd: "=da4 =xiao3", eng: "dà-xiǎo, the size" },
    { lhs: "ModNP", hsd: "Mod =da4 =xiao3", eng: "whose size: the size of your body" },
  ],
  taught: "comparing/size",
  examples: [
    ["Wǒ bù zhīdào wǒ shēntǐ de dà-xiǎo.", "I don't know the size of my body."],
  ],
});
