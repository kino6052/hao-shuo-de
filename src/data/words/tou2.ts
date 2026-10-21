import { word } from "../../lib/word.ts";

export default word("tou2", {
  term: "tóu",
  hanzi: "头",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "head, mind, internal regulatory director",
    rus: "голова, разум, внутренний управляющий орган",
    zh: "头，头脑，内部主管器官",
  },
  necessity: {
    index: 4,
    eng: "The head, and what's in it: a head that's {{word:luan4}} is a confused mind.",
    rus: "Голова и то, что в ней: {{word:luan4}} голова — спутанные мысли.",
  },
  topics: ["head-and-face"],
  isA: ["body-part"],
  maps: "lawa",
  atom: {
    eng: "The head is learned by pointing at it; \"the top of the body\" needs the body.",
    rus: "Голову усваивают, показывая на неё; «верх тела» требует тела.",
  },
});
