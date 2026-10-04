import { word } from "../../lib/word.ts";

export default word("chi1", {
  term: "chī",
  hanzi: "吃",
  pos: { eng: "verb/noun", rus: "глагол/существительное", zh: "动词/名词" },
  definition: {
    eng: "to eat, consume, ingest; food, meal, edible substance",
    rus: "есть, потреблять, принимать пищу; еда, приём пищи, съедобное вещество",
    zh: "吃，消耗，摄入；食物，一餐，可食用之物",
  },
  necessity: {
    index: 4,
    eng: "Eat, and with -{{word:de}}, food ({{word:chi1}}-{{word:de}}). Every meal and food word comes from it.",
    rus: "Есть, а с -{{word:de}} — еда ({{word:chi1}}-{{word:de}}). Из него выходят все слова про еду.",
  },
  maps: "moku",
});
