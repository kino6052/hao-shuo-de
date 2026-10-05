import { word } from "../../lib/word.ts";

export default word("nan2", {
  term: "nán",
  hanzi: "难",
  pos: { eng: "adjective", rus: "прилагательное", zh: "形容词" },
  definition: {
    eng: "difficult, hard to do; before {{word:kan4}}, {{word:ting1}} or {{word:chi1}}, unpleasant to see, hear or eat (e.g. {{word:nan2}}-{{word:kan4}}, \"ugly\")",
    rus: "трудный, сложный; перед {{word:kan4}}, {{word:ting1}} или {{word:chi1}} — неприятный на вид, на слух или на вкус (например, {{word:nan2}}-{{word:kan4}} — «некрасивый»)",
    zh: "难",
  },
  necessity: {
    index: 3,
    eng: "Difficult, and before a verb, unpleasant: {{word:nan2}}-{{word:kan4}} is ugly. A description would need a long sentence.",
    rus: "Трудный, а перед глаголом — неприятный: {{word:nan2}}-{{word:kan4}} — некрасивый. Описание вышло бы длинным.",
  },
  senses: {
    male: {
      hanzi: "男",
      eng: "male",
      rus: "мужской",
      why: {
        eng: "Written 男, {{word:nan2}} means male in {{word:nan2}}-{{word:ren2}} (man) and {{word:nan2}}-{{word:sheng1}} (boy); on its own it is difficult.",
        rus: "Записанное как 男, {{word:nan2}} значит «мужской» в {{word:nan2}}-{{word:ren2}} (мужчина) и {{word:nan2}}-{{word:sheng1}} (мальчик); само по себе — «трудный».",
      },
      compounds: ["nan2 ren2", "nan2 sheng1"],
    },
  },
});
