import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("count-kinds", {
  meaning: {
    eng: "To count kinds, times or parts, put the number before zhǒng, cì or bù-fēn instead of gè: sān-zhǒng, three kinds; yī bù-fēn rén, some of the people.",
    rus: "Чтобы считать виды, разы или части, поставьте число перед zhǒng, cì или bù-fēn вместо gè: sān-zhǒng — три вида; yī bù-fēn rén — часть людей.",
  },
  covers: [],
  template: { hsd: "number + {{word:zhong3}} / {{word:ci4}} / {{word:bu4}}-{{word:fen1}}", eng: "A number of kinds, times or parts" },
  rules: [
    { lhs: "NP", hsd: "Num =bu4 =fen1", eng: "a number and bù-fēn: some parts" },
    { lhs: "NP", hsd: "Num =bu4 =fen1 @noun", eng: "a number, bù-fēn, and its noun: some of the people" },
    { lhs: "NP", hsd: "Mod Num =bu4 =fen1", eng: "a part with de, a number and bùfen: a part of the book" },
  ],
  taught: "numbers/count-kinds",
  examples: [
    ["Wǒ yào yī bù-fēn.", "I want one part."],
    ["Yī bù-fēn rén qù le.", "Some of the people went."],
  ],
});
