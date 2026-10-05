import { word } from "../../lib/word.ts";

export default word("you3", {
  term: "yǒu",
  hanzi: "有",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to have, contain, carry, hold, exist, there is; must be negated with mei, never bu",
    rus: "иметь, содержать, нести, удерживать, существовать, имеется; отрицается только через mei, никогда через bu",
    zh: "有，包含，携带，持有，存在；只能用 mei 否定，绝不用 bu",
  },
  necessity: {
    index: 5,
    eng: "Have, and \"there is\". Without it, nothing exists and nobody owns anything.",
    rus: "Иметь, а также «есть, имеется». Без него ничего не существует и ни у кого ничего нет.",
  },
  maps: "jo, lon",
});
