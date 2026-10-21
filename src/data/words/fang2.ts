import { word } from "../../lib/word.ts";

export default word("fang2", {
  term: "fáng",
  hanzi: "房",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "house, room: {{word:fang2}}-{{word:jian1}}, a room; {{word:fang2}}-{{light:zi}}, a house",
    rus: "дом, комната: {{word:fang2}}-{{word:jian1}} — комната; {{word:fang2}}-{{light:zi}} — дом",
    zh: "房，房子，房间",
  },
  necessity: {
    index: 4,
    eng: "Rooms and houses ({{word:fang2}}-{{word:jian1}}, {{word:fang2}}-{{light:zi}}): where people live, room by room.",
    rus: "Комнаты и дома ({{word:fang2}}-{{word:jian1}}, {{word:fang2}}-{{light:zi}}): где живут люди, комната за комнатой.",
  },
  topics: ["house-and-doors"],
  isA: ["room"],
  paraphrase: {
    forms: [
      "{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:yi1}}-{{light:ge4}} {{word:di4}}-{{light:fang1}}",
      "{{word:you3}} {{word:men2}}-{{word:de}} {{word:da4}} {{word:dong1}}-{{light:xi1}}, {{word:ren2}} {{word:zai4}} {{word:li3}}-{{word:mian4}}",
    ],
    verdict: "fine",
  },
});
