import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("feeling-then", {
  meaning: {
    eng: "A feeling can come first, with what it is about right after: hěn kāi-xīn nǐ lái le, I'm so glad you came.",
    rus: "Чувство может стоять первым, а то, о чём оно, — сразу после него: hěn kāi-xīn nǐ lái le — я так рад, что ты пришёл.",
  },
  covers: [],
  tags: ["feeling", "cat:state"],
  template: { hsd: "feeling + what it is about", eng: "Glad that it happened" },
  rules: [{ lhs: "S", hsd: "AdjP S", eng: "a feeling, then what it is about" }],
  taught: "feelings/heart",
  examples: [["Hěn kāi-xīn nǐ lái le!", "I'm so glad you came!"]],
});
