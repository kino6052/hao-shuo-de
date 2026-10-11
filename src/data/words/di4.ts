import { word } from "../../lib/word.ts";

export default word("di4", {
  term: "dì",
  hanzi: "地",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "floor, horizontal surface, platform; before a number, the order: {{word:di4}}-{{word:yi1}}, first; {{word:di4}}-{{word:er4}}, second",
    rus: "пол, горизонтальная поверхность; перед числом — порядок: {{word:di4}}-{{word:yi1}} — первый; {{word:di4}}-{{word:er4}} — второй",
    zh: "地板，水平表面，平台；第",
  },
  necessity: {
    index: 3,
    eng: "The floor, the ground. Mountains, soil, and \"down there\" are described from it. Before a number it gives the order: {{word:di4}}-{{word:yi1}}, first.",
    rus: "Пол, земля. Через него описывают горы, почву и «внизу». Перед числом он задаёт порядок: {{word:di4}}-{{word:yi1}} — первый.",
  },
  maps: "supa",
  senses: {
    order: {
      hanzi: "第",
      eng: "order (first, second …)",
      rus: "порядок (первый, второй …)",
      why: {
        eng: "Written 第, {{word:di4}} puts a number in order in {{word:di4}}-{{word:yi1}} (first) and {{word:di4}}-{{word:er4}} (second); on its own it is the floor.",
        rus: "Записанное как 第, {{word:di4}} ставит число по порядку в {{word:di4}}-{{word:yi1}} («первый») и {{word:di4}}-{{word:er4}} («второй»); само по себе — «пол».",
      },
      compounds: [
        "di4 yi1",
        "di4 er4",
        "di4 san1",
        "di4 si4",
        "di4 wu3",
        "di4 liu4",
        "di4 qi1",
        "di4 ba1",
        "di4 jiu3",
        "di4 shi2",
      ],
    },
  },
});
