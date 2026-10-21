import { word } from "../../lib/word.ts";

export default word("kou3", {
  term: "kǒu",
  hanzi: "口",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "hole, opening, door, window, orifice",
    rus: "отверстие, проём, дверь, окно, дыра",
    zh: "洞，开口，门，窗，孔",
  },
  necessity: {
    index: 4,
    eng: "The mouth, and any opening: a door, a hole. Speaking, eating, and going in all need it.",
    rus: "Рот и любое отверстие: дверь, дыра. Без него не сказать про речь, еду и вход.",
  },
  topics: ["head-and-face"],
  isA: ["body-part"],
  maps: "lupa",
  atom: {
    eng: "The mouth is learned by pointing at it; eating and speaking are what it is for, not what it is.",
    rus: "Рот усваивают, показывая на него; есть и говорить — для чего он нужен, а не что это.",
  },
});
