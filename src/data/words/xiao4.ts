import { word } from "../../lib/word.ts";

export default word("xiao4", {
  term: "xiào",
  hanzi: "笑",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: { eng: "to laugh, to smile", rus: "смеяться, улыбаться", zh: "笑" },
  necessity: {
    index: 3,
    eng: "Laugh, smile. No description captures it.",
    rus: "Смеяться, улыбаться. Никакое описание этого не передаст.",
  },
  senses: {
    school: {
      hanzi: "校",
      eng: "school",
      rus: "школа",
      why: {
        eng: "Written 校, {{word:xiao4}} means school in {{word:xue2}}-{{word:xiao4}}; on its own it is laugh.",
        rus: "Записанное как 校, {{word:xiao4}} значит «школа» в {{word:xue2}}-{{word:xiao4}}; само по себе — «смеяться».",
      },
      compounds: ["xue2 xiao4"],
    },
  },
});
