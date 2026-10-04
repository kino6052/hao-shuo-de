import { word } from "../../lib/word.ts";

export default word("ma", {
  term: "ma",
  hanzi: "吗",
  pos: { eng: "particle", rus: "частица", zh: "助词" },
  definition: {
    eng: "final interrogative yes-or-no question marker",
    rus: "конечная вопросительная частица для вопросов да/нет",
    zh: "句末是非疑问助词",
  },
  necessity: {
    index: 5,
    eng: "Turns a sentence into a yes-or-no question. Without it, you can't ask most questions.",
    rus: "Превращает предложение в вопрос «да или нет». Без него не задать большинство вопросов.",
  },
  maps: "",
});
