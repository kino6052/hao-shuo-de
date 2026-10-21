import { word } from "../../lib/word.ts";

export default word("jia4zhi2", {
  term: "jiàzhí",
  hanzi: "价值",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "value, worth; how much something is worth",
    rus: "ценность, стоимость; то, сколько что-то стоит",
    zh: "价值；某物值多少",
  },
  necessity: {
    index: 2,
    eng: "Value, worth: {{word:hen3}} {{word:you3}} {{word:jia4zhi2}}, valuable. Prices and judgments use it.",
    rus: "Ценность: {{word:hen3}} {{word:you3}} {{word:jia4zhi2}} — ценный. Им пользуются цены и оценки.",
  },
  topics: ["business-and-economy"],
  isA: ["idea"],
  paraphrase: {
    forms: [
      "{{word:mai3}} {{word:ta1}} {{word:yao4}} {{word:gei3}}-{{word:de}} {{word:jin1}}-{{word:de}} {{word:duo1}}-{{word:shao3}}",
    ],
    verdict: "fine",
    note: "The author's note, meaning to be confirmed: \"ta zhong bu zhong4-yao\".",
  },
});
