import { word } from "../../lib/word.ts";

export default word("shu4", {
  term: "shù",
  hanzi: "数",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "number, amount, count: {{word:ren2}}-{{word:de}} {{word:shu4}}, the number of people; {{word:hao3}}-{{word:huai4}}-{{word:de}} {{word:shu4}}, a score",
    rus: "число, количество: {{word:ren2}}-{{word:de}} {{word:shu4}} — число людей; {{word:hao3}}-{{word:huai4}}-{{word:de}} {{word:shu4}} — оценка",
    zh: "数，数目",
  },
  necessity: {
    index: 4,
    eng: "How many there are: {{word:ren2}}-{{word:de}} {{word:shu4}}. {{word:hao4}} only names things; {{word:shu4}} counts them.",
    rus: "Сколько чего-то: {{word:ren2}}-{{word:de}} {{word:shu4}}. {{word:hao4}} только называет, {{word:shu4}} считает.",
  },
  paraphrase: { forms: ["{{word:duo1}}-{{word:shao3}}"], verdict: "clumsy" },
});
