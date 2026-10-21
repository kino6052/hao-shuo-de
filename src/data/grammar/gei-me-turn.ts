import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("gei-me-turn", {
  meaning: {
    eng: "Gěi wǒ and a verb asks for a turn: let me do it. Yī-xià after the verb makes it a quick try.",
    rus: "Gěi wǒ и глагол просят очередь: дай мне это сделать. Yī-xià после глагола делает это быстрой попыткой.",
  },
  covers: [],
  tags: ["command", "cat:action"],
  template: { hsd: "{{word:gei3}} {{word:wo3}} + verb + {{word:yi1}}-{{word:xia4}}", eng: "Let me do it for a moment" },
  rules: [
    { lhs: "VP", hsd: "=gei3 =wo3 VP", eng: "gěi wǒ, then the verb: let me do it" },
  ],
  taught: "everyday-patterns/my-turn",
  examples: [
    ["Gěi wǒ kàn yī-xià.", "Let me take a look."],
    ["Gěi wǒ tīng-ting.", "Let me hear it."],
  ],
});
