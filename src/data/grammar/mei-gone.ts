import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("mei-gone", {
  meaning: {
    eng: "Méi le says it is gone: wèn-tí jiù méi le, the problem is gone. Wán le says it is used up: shuǐ wán le.",
    rus: "Méi le говорит «нет больше»: wèn-tí jiù méi le — проблемы больше нет. Wán le говорит «кончилось»: shuǐ wán le — вода кончилась.",
  },
  covers: ["grammar:happened"],
  template: { hsd: "Thing {{word:mei2}} {{word:le}}", eng: "The thing is gone" },
  rules: [
    { lhs: "VP", hsd: "mei2 le", eng: "méi le, gone" },
    { lhs: "VerbP", hsd: "=wan2 le", eng: "wán le, used up" },
    { lhs: "VerbP", hsd: "@verb =wan2 le NP", eng: "a verb, wán le, and its thing: finished the school" },
  ],
  taught: "when-it-happens/done",
  examples: [
    ["Wǒ de shuǐ wán le.", "My water is used up."],
    ["Wèn-tí jiù méi le.", "The problem is gone."],
    ["Tā xué-wán le zhōng-xué.", "He has finished middle school."],
  ],
});
