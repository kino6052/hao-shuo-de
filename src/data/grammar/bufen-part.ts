import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("bufen-part", {
  meaning: {
    eng: "Says part of something: bùfen follows zhè, nà or dà. Dà bùfen before a noun means most of them.",
    rus: "Говорит о части чего-то: bùfen стоит после zhè, nà или dà. Dà bùfen перед существительным значит «большинство».",
  },
  covers: [],
  template: { hsd: "{{word:zhe4}} / {{word:na4}} / {{word:da4}} + {{word:bu4}}-{{word:fen1}}", eng: "This / that / the big part" },
  rules: [
    { lhs: "NP", hsd: "Pointer =bu4 =fen1", eng: "zhè or nà and bùfen: this part, that part" },
    { lhs: "NP", hsd: "=da4 NP @noun", eng: "dà, a part, and its noun: most of them" },
    { lhs: "VP", hsd: "=da4 =bu4 =fen1 VP", eng: "dà bùfen and what is said: mostly so" },
    { lhs: "VP", hsd: "=da4 =bu4 =fen1 @adjective", eng: "dà bùfen and a describing word: mostly the same" },
  ],
  taught: "also-and-all/part",
  examples: [
    ["Zhè bù-fēn hěn hǎo.", "This part is good."],
    ["Dà bù-fēn rén ài dòng-wù.", "Most people love animals."],
  ],
});
