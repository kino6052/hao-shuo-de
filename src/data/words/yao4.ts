import { word } from "../../lib/word.ts";

export default word("yao4", {
  term: "yào",
  hanzi: "要",
  pos: { eng: "auxiliary/verb", rus: "вспомогательный глагол/глагол", zh: "助动词/动词" },
  definition: {
    eng: "to want, need, require, must, should",
    rus: "хотеть, нуждаться, требовать, должен, следует",
    zh: "想要，需要，必须，应该",
  },
  necessity: {
    index: 5,
    eng: "Want, need. Without it, you can't ask for anything.",
    rus: "Хотеть, нужно. Без него ничего не попросить.",
  },
  topics: ["liking-and-wanting"],
  isA: ["feeling-and-wanting"],
  maps: "wile",
  atom: {
    eng: "Wanting is felt from inside; xiǎng and jué-de lean on it, not the other way round.",
    rus: "Желание чувствуют изнутри; xiǎng и jué-de опираются на него, а не наоборот.",
  },
});
