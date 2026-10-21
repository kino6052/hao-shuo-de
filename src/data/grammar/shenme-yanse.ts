import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("shenme-yanse", {
  meaning: {
    eng: "Shénme yánsè asks what color: nǐ-de yīfu shì shénme yánsè? The answer is the color, then de.",
    rus: "Shénme yánsè спрашивает о цвете: nǐ-de yīfu shì shénme yánsè? В ответе — цвет и de.",
  },
  covers: [],
  tags: ["question", "describe", "cat:quality"],
  template: { hsd: "Thing + {{word:shi4}} + {{word:shen2me}} {{word:yan2se4}}?", eng: "What color is the thing?" },
  rules: [
    { lhs: "NP", hsd: "=shen2me =yan2se4", eng: "shénme yánsè: what color" },
  ],
  taught: "colors/what-color",
  examples: [
    ["Nǐ-de yīfu shì shénme yánsè?", "What color are your clothes?"],
    ["Zhè-ge zhíwù shì shénme yánsè?", "What color is this plant?"],
  ],
});
