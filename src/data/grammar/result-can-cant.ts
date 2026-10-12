import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("result-can-cant", {
  meaning: {
    eng: "Says you can or can't get the result: dé (can) or bù (can't) goes between the verb and the result.",
    rus: "Говорит, можно ли достичь результата: de («можно») или bù («нельзя») стоит между глаголом и результатом.",
  },
  covers: ["grammar:can-cant"],
  template: { hsd: "verb-{{word:de}}-result / verb-{{word:bu4}}-result", eng: "Can / can't get the result" },
  rules: [
    { lhs: "VerbP", hsd: "@verb de Res", eng: "a verb, de, and the result: can" },
    { lhs: "VerbP", hsd: "@verb bu4 Res", eng: "a verb, bù, and the result: can't" },
    { lhs: "VerbP", hsd: "@verb de Res NP", eng: "a verb, de, the result, and what it was done to" },
  ],
  taught: "direction-and-result/can-cant",
  examples: [
    ["Nǐ tīng de dào ma?", "Can you hear it?"],
    ["Wǒ hē bù wán.", "I can't finish drinking it."],
  ],
});
