import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("ba-make-clean", {
  meaning: {
    eng: "Says what you make a thing be: bǎ, the thing, then a describing word for how it ends up (make the room clean).",
    rus: "Говорит, какой вы делаете вещь: bǎ, вещь, затем слово-описание того, какой она станет (сделать комнату чистой).",
  },
  covers: [],
  template: { hsd: "Who + {{word:ba3}} + thing + describing word", eng: "Who makes the thing so" },
  rules: [{ lhs: "VP", hsd: "ba3 NP @adjective", eng: "bǎ, the thing, then how it ends up" }],
  taught: "becoming-and-making/ba-clean",
  examples: [
    ["Wǒ bǎ fáng-jiān gānjìng.", "I make the room clean."],
    ["Tā bǎ yīfu gānjìng.", "She makes the clothes clean."],
  ],
});
