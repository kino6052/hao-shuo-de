import { word } from "../../lib/word.ts";

export default word("er4", {
  term: "èr",
  hanzi: "二",
  pos: { eng: "number", rus: "числительное", zh: "数词" },
  definition: {
    eng: "two, when counting aloud or naming a number (yī, èr, sān; èr-hào, \"number two\"; shí-èr, 12); before gè, two is liǎng",
    rus: "два при счёте вслух и в номерах (yī, èr, sān; èr-hào, «номер два»; shí-èr, 12); перед gè «два» — это liǎng",
    zh: "二，用于数数和编号（yī, èr, sān；èr-hào，“二号”；shí-èr，十二）；在 gè 前面用 liǎng",
  },
  necessity: {
    index: 4,
    eng: "Two when counting: 12, 20, number two. {{word:liang3}} only works before {{word:ge4}}.",
    rus: "Два при счёте: 12, 20, номер два. {{word:liang3}} работает только перед {{word:ge4}}.",
  },
});
