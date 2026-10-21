import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("doubled-every", {
  meaning: {
    eng: "Say a counting word, or one of a few nouns, twice for every, and put dōu before the verb: rén-rén dōu, everyone; cì-cì dōu, every time.",
    rus: "Скажите счётное слово или одно из немногих существительных дважды — получится «каждый»; dōu ставится перед глаголом: rén-rén dōu — все; cì-cì dōu — каждый раз.",
  },
  covers: [],
  tags: ["doubling", "all-also", "cat:quantity"],
  template: { hsd: "{{word:ge4}}-{{word:ge4}} / {{word:ren2}}-{{word:ren2}} + {{word:dou1}} + verb", eng: "Every one does the verb" },
  rules: [
    { lhs: "NP", hsd: "@noun @again", eng: "a noun said twice: every one" },
    { lhs: "NP", hsd: "@measure_word @again", eng: "a counting word said twice: every one" },
    { lhs: "NP", hsd: "@measure_word @again @noun", eng: "a counting word twice and a noun: every person" },
    { lhs: "Time", hsd: "=tian1 @again", eng: "tiān-tiān: every day" },
    { lhs: "Time", hsd: "=nian2 @again", eng: "nián-nián: every year" },
  ],
  taught: "doubling-words/every",
  examples: [
    ["Rén-rén dōu ài tā.", "Everyone loves him."],
    ["Cì-cì dōu yī-yàng.", "It's the same every time."],
    ["Wǒ tiān-tiān dōu hē shuǐ.", "I drink water every day."],
  ],
});
