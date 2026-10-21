import { word } from "../../lib/word.ts";

export default word("ci2", {
  term: "cí",
  hanzi: "词",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: { eng: "word", rus: "слово", zh: "词" },
  necessity: {
    index: 3,
    eng: "A word. Without it, you can't talk about language itself: \"what's the word for…?\"",
    rus: "Слово. Без него нельзя говорить о самом языке: «как называется…?»",
  },
  topics: ["words-and-characters"],
  isA: ["language-thing"],
  maps: "",
  paraphrase: {
    forms: [
      "{{word:hua4}}-{{word:li3}} {{word:zui4}} {{word:xiao3}}-{{word:de}} {{word:bu4}}-{{light:fen1}}",
    ],
    verdict: "clumsy",
  },
});
