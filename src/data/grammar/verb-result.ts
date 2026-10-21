import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("verb-result", {
  meaning: {
    eng: "Says how an action ends: a result word joins the verb, like kàn-dào (see), zuò-hǎo (fix) or xué-huì (learn until you can).",
    rus: "Говорит, чем кончается действие: к глаголу присоединяется слово-результат, например kàn-dào («увидеть»), zuò-hǎo («починить») или xué-huì («выучиться»).",
  },
  covers: ["grammar:result"],
  tags: ["done", "cat:action", "cat:affection"],
  template: { hsd: "Who + verb-result", eng: "Who does the verb through to the result" },
  rules: [
    { lhs: "Res", hsd: "@adjective", eng: "a describing word as the result: hǎo, huài" },
    { lhs: "Res", hsd: "=dao4", eng: "dào: reached it" },
    { lhs: "Res", hsd: "=jian4", eng: "jiàn: caught it" },
    { lhs: "Res", hsd: "=hui4", eng: "huì: learned it" },
    { lhs: "Res", hsd: "=wan2", eng: "wán: finished it" },
    { lhs: "Res", hsd: "=dong4", eng: "dòng: moved it" },
    { lhs: "Res", hsd: "=lai2", eng: "lái: toward you" },
    { lhs: "Res", hsd: "=qu4", eng: "qù: away from you" },
    { lhs: "VerbP", hsd: "@verb Res", eng: "a verb and its result" },
    { lhs: "VerbP", hsd: "@verb Res NP", eng: "a verb, its result, and what it was done to" },
  ],
  taught: "direction-and-result/result",
  examples: [
    ["Nǐ xué-huì le ma?", "Have you learned how?"],
    ["Wǒ kàn-jiàn tā le.", "I saw him."],
    ["Wǒ méi zhǎo-dào.", "I didn't find it."],
  ],
});
