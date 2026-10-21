import { word } from "../../lib/word.ts";

export default word("kong1", {
  term: "kōng",
  hanzi: "空",
  pos: { eng: "adjective", rus: "прилагательное", zh: "形容词" },
  definition: {
    eng: "empty (e.g. {{word:bao1}} {{word:shi4}} {{word:kong1}}-{{word:de}}, \"the box is empty\"; {{word:kong1}}-{{word:jian1}}, \"space, room\")",
    rus: "пустой (например, {{word:bao1}} {{word:shi4}} {{word:kong1}}-{{word:de}} — «коробка пустая»; {{word:kong1}}-{{word:jian1}} — «пространство, место»)",
    zh: "空",
  },
  necessity: {
    index: 3,
    eng: "Empty, and the first half of {{word:kong1}}-{{word:qi4}} (air) and {{word:kong1}}-{{word:jian1}} (space).",
    rus: "Пустой, а также первая половина слов {{word:kong1}}-{{word:qi4}} (воздух) и {{word:kong1}}-{{word:jian1}} (пространство).",
  },
  topics: ["empty-messy-clear"],
  isA: ["condition-quality"],
  paraphrase: {
    forms: ["{{word:li3}}-{{word:mian4}} {{word:mei2}}-{{word:you3}} {{word:dong1}}-{{light:xi1}}"],
    verdict: "clumsy",
    note: "Lets us express other words.",
  },
});
