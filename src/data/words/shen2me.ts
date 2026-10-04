import { word } from "../../lib/word.ts";

export default word("shen2me", {
  term: "shénme",
  hanzi: "什么",
  pos: { eng: "pronoun/particle", rus: "местоимение/частица", zh: "代词/助词" },
  definition: {
    eng: "what? which?; retains position without altering Chinese SVO statement geometry",
    rus: "что? какой?; остаётся на своём месте, не нарушая порядок слов SVO",
    zh: "什么？哪个？；保留原位，不改变中文 SVO 语序结构",
  },
  necessity: {
    index: 5,
    eng: "Without it, you can't ask \"what?\", and with {{word:dou1}} it makes \"everything\".",
    rus: "Без него нельзя спросить «что?», а вместе с {{word:dou1}} оно даёт «всё».",
  },
  maps: "seme",
});
