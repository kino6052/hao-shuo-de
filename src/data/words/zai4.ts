import { word } from "../../lib/word.ts";

export default word("zai4", {
  term: "zài",
  hanzi: "在",
  pos: { eng: "verb/coverb", rus: "глагол/коверб", zh: "动词/动介词" },
  definition: {
    eng: "to exist at, be located at, present in a room",
    rus: "находиться в, быть расположенным в, присутствовать в помещении",
    zh: "存在于，位于，在某处/房间里",
  },
  necessity: {
    index: 5,
    eng: "Be at a place, and \"in the middle of doing\". Saying where anything is starts here.",
    rus: "Находиться где-то, а также «как раз делать». С него начинается любое «где».",
  },
  maps: "lon",
  senses: {
    again: {
      hanzi: "再",
      eng: "again, once more",
      rus: "снова, ещё раз",
      why: {
        eng: "Written 再, {{word:zai4}} means once more in {{word:zai4}}-{{word:jian4}} (goodbye: see you again); on its own it is be at.",
        rus: "Записанное как 再, {{word:zai4}} значит «ещё раз» в {{word:zai4}}-{{word:jian4}} (до свидания: увидимся снова); само по себе — «находиться».",
      },
      compounds: ["zai4 jian4"],
    },
  },
});
