import { word } from "../../lib/word.ts";

export default word("fei1", {
  term: "fēi",
  hanzi: "飞",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: { eng: "to fly", rus: "летать", zh: "飞" },
  necessity: {
    index: 3,
    eng: "Fly: birds are {{word:fei1}}-{{word:de}} {{word:dong4wu4}}, planes are flying tools.",
    rus: "Летать: птицы — {{word:fei1}}-{{word:de}} {{word:dong4wu4}}, самолёты — летающие инструменты.",
  },
});
