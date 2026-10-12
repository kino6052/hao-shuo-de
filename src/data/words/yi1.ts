import { word } from "../../lib/word.ts";

export default word("yi1", {
  term: "yī",
  hanzi: "一",
  pos: { eng: "number", rus: "числительное", zh: "数词" },
  definition: { eng: "one, unique, united", rus: "один, единственный, единый", zh: "一，唯一，统一" },
  necessity: {
    index: 5,
    eng: "One: the first number, and \"a\" as in {{word:yi1}}-ge {{word:ren2}}, a person.",
    rus: "Один: первое число, а также «какой-то», как в {{word:yi1}}-ge {{word:ren2}}.",
  },
  maps: "wan",
  atom: {
    eng: "You learn \"one\" by holding up a single thing; every other number is built from it.",
    rus: "«Один» усваивают на одном предмете; все остальные числа строятся из него.",
  },
});
