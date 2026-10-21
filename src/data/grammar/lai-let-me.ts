import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("lai-let-me", {
  meaning: {
    eng: "Wǒ lái and a verb offers to do it: let me. On its own, wǒ lái! means let me!",
    rus: "Wǒ lái и глагол — предложение сделать самому: давай я. Само по себе wǒ lái! значит «давай я!».",
  },
  covers: [],
  tags: ["command", "cat:action"],
  template: { hsd: "{{word:wo3}} {{word:lai2}} + verb", eng: "Let me do the verb" },
  rules: [
    { lhs: "VP", hsd: "=lai2 VP", eng: "lái and a verb: come and do it, let me" },
  ],
  taught: "everyday-patterns/let-me",
  examples: [
    ["Wǒ lái ná.", "Let me carry it."],
    ["Wǒ lái kàn.", "Let me look."],
  ],
});
