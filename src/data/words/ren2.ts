import { word } from "../../lib/word.ts";

export default word("ren2", {
  term: "rén",
  hanzi: "人",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: { eng: "human being, person, somebody", rus: "человек, личность, кто-то", zh: "人，人类，某人" },
  necessity: {
    index: 5,
    eng: "People: \"someone\", \"a person\". One of the most basic ideas there is.",
    rus: "Люди: «кто-то», «человек». Одно из самых базовых понятий.",
  },
  topics: ["men-and-women"],
  isA: ["person"],
  maps: "jan",
  paraphrase: {
    forms: [
      "{{word:neng2}} {{word:shuo1}} {{word:hua4}}, {{word:neng2}} {{word:xie3}} {{word:zi4}}-{{word:de}} {{word:dong4}}-{{word:wu4}}",
    ],
    verdict: "clumsy",
    note: "Too important a word to drop.",
  },
});
