import { word } from "../../lib/word.ts";

export default word("che1", {
  term: "chē",
  hanzi: "车",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "car, vehicle; anything on wheels that carries people or things",
    rus: "машина, транспорт; всё на колёсах, что возит людей или вещи",
    zh: "车",
  },
  necessity: {
    index: 3,
    eng: "Cars and anything on wheels: buses, trains, taxis, and bikes are all described from it.",
    rus: "Машины и всё на колёсах: через него описывают автобусы, поезда, такси и велосипеды.",
  },
  paraphrase: {
    forms: [
      "{{word:ren2}} {{word:zai4}} {{word:li3}}-{{word:mian4}}, {{word:zai4}} {{word:lu4}}-{{word:shang4}} {{word:zou3}}-{{word:de}} {{word:ji1}}",
    ],
    verdict: "clumsy",
  },
});
