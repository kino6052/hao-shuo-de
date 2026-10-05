import { word } from "../../lib/word.ts";

export default word("you4", {
  term: "yòu",
  hanzi: "又",
  pos: { eng: "adverb", rus: "наречие", zh: "副词" },
  definition: {
    eng: "again: it happens once more; goes before the verb (e.g. {{word:ta1}} {{word:you4}} {{word:chi1}} {{word:le}}, \"he ate again\")",
    rus: "снова, опять; ставится перед глаголом (напр. {{word:ta1}} {{word:you4}} {{word:chi1}} {{word:le}}, «он снова поел»)",
    zh: "又，再一次；放在动词前（如：他又吃了）",
  },
  necessity: {
    index: 3,
    eng: "Again: it happened once more. {{word:zai4}} is taken, so \"again\" needs its own word.",
    rus: "Опять: это случилось ещё раз. {{word:zai4}} уже занято, поэтому «снова» — отдельное слово.",
  },
});
