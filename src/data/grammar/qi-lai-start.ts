import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("qi-lai-start", {
  meaning: {
    eng: "Says something starts to get that way: qǐ-lái goes after the describing word. After a verb it says how a thing seems when you look, taste or hear it: kàn-qǐ-lái hěn hǎo, it looks good. Xià-qù after a verb says keep going.",
    rus: "Говорит, что что-то начинает становиться таким: qǐ-lái стоит после описывающего слова. После глагола оно говорит, каким предмет кажется на вид, вкус или слух: kàn-qǐ-lái hěn hǎo — выглядит хорошо. Xià-qù после глагола значит «продолжай».",
  },
  covers: [],
  template: { hsd: "Thing + adjective-{{word:qi3}}-{{word:lai2}}", eng: "The thing starts to get that way" },
  rules: [
    { lhs: "VP", hsd: "@adjective =qi3 =lai2", eng: "a describing word and qǐ-lái: starting to be so" },
    { lhs: "VerbP", hsd: "@verb =qi3 =lai2", eng: "a verb and qǐ-lái: how it seems when you do it" },
    { lhs: "VerbP", hsd: "@verb =xia4 =qu4", eng: "a verb and xià-qù: keep doing it" },
  ],
  taught: "direction-and-result/seems",
  examples: [
    ["Kōng-qì lěng-qǐ-lái le.", "It's getting cold."],
    ["Zhè-ge zhíwù kàn-qǐ-lái hěn hǎo.", "This plant looks good."],
    ["Nǐ shuō-xià-qù!", "Keep talking!"],
  ],
});
