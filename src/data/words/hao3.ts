import { word } from "../../lib/word.ts";

export default word("hao3", {
  term: "hǎo",
  hanzi: "好",
  pos: { eng: "adjective", rus: "прилагательное", zh: "形容词" },
  definition: {
    eng: "good, positive, useful, friendly, peaceful, simple",
    rus: "хороший, положительный, полезный, дружелюбный, мирный, простой",
    zh: "好的，积极的，有用的，友好的，平和的，简单的",
  },
  necessity: {
    index: 5,
    eng: "Good: the most basic way to judge anything. Many composites start with it.",
    rus: "Хороший — самая базовая оценка чего угодно. С него начинаются многие составные слова.",
  },
  topics: ["how-good"],
  isA: ["value-quality"],
  maps: "pona",
  atom: {
    eng: "Good is felt: what helps and what you like. Words like \"useful\" or \"nice\" are only neighbours.",
    rus: "Хорошее чувствуют: то, что помогает и нравится. «Полезный» и «приятный» лишь соседи по смыслу.",
  },
});
