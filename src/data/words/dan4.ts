import { word } from "../../lib/word.ts";

export default word("dan4", {
  term: "dàn",
  hanzi: "但",
  pos: { eng: "conjunction", rus: "союз", zh: "连词" },
  definition: {
    eng: "but; {{word:dan4}}-{{word:shi4}}, but",
    rus: "но; {{word:dan4}}-{{word:shi4}} — но",
    zh: "但",
  },
  necessity: {
    index: 4,
    eng: "But: {{word:dan4}} or {{word:dan4}}-{{word:shi4}} turns a sentence against the one before.",
    rus: "Но: {{word:dan4}} или {{word:dan4}}-{{word:shi4}} противопоставляет предложение предыдущему.",
  },
  senses: {
    egg: {
      hanzi: "蛋",
      eng: "egg",
      rus: "яйцо",
      compounds: ["ji1 dan4"],
      why: {
        eng: "Written 蛋, {{word:dan4}} means egg in {{word:ji1}}-{{word:dan4}}; on its own it is but.",
        rus: "Записанное как 蛋, {{word:dan4}} значит «яйцо» в {{word:ji1}}-{{word:dan4}}; само по себе — «но».",
      },
    },
  },
});
