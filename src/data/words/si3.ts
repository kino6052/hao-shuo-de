import { word } from "../../lib/word.ts";

export default word("si3", {
  term: "sǐ",
  hanzi: "死",
  pos: { eng: "verb/adjective", rus: "глагол/прилагательное", zh: "动词/形容词" },
  definition: { eng: "to die; dead, dying", rus: "умирать; мёртвый, умирающий", zh: "死，去世；死的，垂死的" },
  necessity: {
    index: 5,
    eng: "Die, dead. Life and death are among the most basic ideas.",
    rus: "Умирать, мёртвый. Жизнь и смерть — одни из самых базовых понятий.",
  },
  topics: ["birth-and-death"],
  isA: ["life-change"],
  maps: "moli",
  paraphrase: { forms: ["{{word:bu4}} {{word:huo2}} {{word:le}}"], verdict: "clumsy" },
});
