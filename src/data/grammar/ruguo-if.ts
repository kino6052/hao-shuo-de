import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("ruguo-if", {
  meaning: {
    eng: "Rúguǒ starts the if-part, then a comma and the rest: rúguǒ you come, I'll wait for you.",
    rus: "Rúguǒ начинает часть «если», затем запятая и остальное: rúguǒ ты придёшь, я тебя подожду.",
  },
  covers: ["grammar:if"],
  tags: ["link", "cat:relation"],
  template: { hsd: "{{word:ru2guo3}} X, the rest", eng: "If X, then the rest" },
  rules: [
    { lhs: "Clause", hsd: "State", eng: "a state with no hěn: nǐ lěng, you are cold" },
    { lhs: "State", hsd: "NP @adjective", eng: "someone and a describing word: you are cold" },
    { lhs: "Cond", hsd: "=ru2guo3 Clause", eng: "rúguǒ and the if-part" },
    { lhs: "Cond", hsd: "=yao4 shi4 Clause", eng: "yào-shì and the if-part" },
    { lhs: "Clause", hsd: "@adjective", eng: "a describing word alone, with no one named: if cold" },
    { lhs: "Cond", hsd: "=zhi3 =yao4 Clause", eng: "zhǐ-yào and the if-part: as long as" },
    { lhs: "S", hsd: "Cond @comma Clause", eng: "the if-part, a comma, and the rest" },
  ],
  taught: "linking-sentences/if",
  examples: [
    ["Rúguǒ nǐ lái, wǒ děng nǐ.", "If you come, I'll wait for you."],
    ["Rúguǒ nǐ bù zhīdào zhè-ge cí, wèn wǒ.", "If you don't know this word, ask me."],
    ["Rúguǒ nǐ lěng, wǒ gěi nǐ yīfu.", "If you're cold, I'll give you clothes."],
  ],
});
