import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("doing-as-subject", {
  meaning: {
    eng: "What someone does can be the topic of a sentence: xué-xiě bù nán, learning to write isn't hard.",
    rus: "То, что кто-то делает, может быть темой предложения: xué-xiě bù nán — учиться писать нетрудно.",
  },
  covers: [],
  tags: ["basic", "cat:action"],
  template: { hsd: "verb (+ object) + {{word:hen3}} + adjective", eng: "Doing the verb is that" },
  rules: [{ lhs: "NP", hsd: "VP", eng: "an action as the thing talked about" }],
  taught: "how-much/hard-and-looks",
  examples: [["Xué xiě bù nán.", "Learning to write isn't difficult."]],
});
