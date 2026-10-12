import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("yi-dian-little", {
  meaning: {
    eng: "Yī diǎn says a little. After a describing word it is a bit more (dà yī diǎn); after yǒu, before a describing word, it is a bit (yǒu yī diǎn lěng); after a verb it is a little of it (chī yī diǎn).",
    rus: "Yī diǎn значит «немного». После описывающего слова — чуть больше (dà yī diǎn); после yǒu и перед описывающим словом — «чуть-чуть» (yǒu yī diǎn lěng); после глагола — «немного» (chī yī diǎn).",
  },
  covers: [],
  template: {
    hsd: "adjective + {{word:yi1}}-{{word:dian3}} / {{word:you3}} {{word:yi1}}-{{word:dian3}} + adjective",
    eng: "A bit more / a bit",
  },
  rules: [
    { lhs: "Bit", hsd: "=yi1 =dian3", eng: "yī diǎn, a little" },
    { lhs: "VP", hsd: "@adjective Bit", eng: "a describing word and yī diǎn: a bit more so" },
    { lhs: "VP", hsd: "=you3 Bit @adjective", eng: "yǒu, yī diǎn, and a describing word: a bit so" },
    { lhs: "VerbP", hsd: "@verb Bit", eng: "a verb and yī diǎn: a little of it" },
    { lhs: "VP", hsd: "=duo1 VerbP", eng: "duō and a verb: do it more" },
    { lhs: "VP", hsd: "=shao3 VerbP", eng: "shǎo and a verb: do it less" },
  ],
  taught: "numbers/little",
  examples: [
    ["Zhè-ge dà yī diǎn.", "This one is a bit bigger."],
    ["Shuǐ yǒu yī diǎn lěng.", "The water is a bit cold."],
    ["Duō chī yī diǎn!", "Eat a bit more!"],
  ],
});
