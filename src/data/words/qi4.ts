import { word } from "../../lib/word.ts";

export default word("qi4", {
  term: "qì",
  hanzi: "气",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "air, gas, breath (in everyday Mandarin, air is {{word:kong1}}-{{word:qi4}})",
    rus: "воздух, газ, дыхание (в обычном китайском воздух — {{word:kong1}}-{{word:qi4}})",
    zh: "气",
  },
  necessity: {
    index: 3,
    eng: "Air, which you can't see or touch. With {{word:kong1}} it's the everyday word, {{word:kong1}}-{{word:qi4}}.",
    rus: "Воздух, которого не видно и не потрогать. С {{word:kong1}} — обычное слово {{word:kong1}}-{{word:qi4}}.",
  },
  senses: {
    device: {
      hanzi: "器",
      eng: "device",
      rus: "прибор",
      compounds: ["ji1 qi4"],
      why: {
        eng: "Written 器, {{word:qi4}} means device in {{word:ji1}}-{{word:qi4}}; on its own it is air.",
        rus: "Записанное как 器, {{word:qi4}} значит «прибор» в {{word:ji1}}-{{word:qi4}}; само по себе — «воздух».",
      },
    },
    steam: {
      hanzi: "汽",
      eng: "steam",
      rus: "пар",
      compounds: ["qi4 che1"],
      why: {
        eng: "Written 汽, {{word:qi4}} means steam in {{word:qi4}}-{{word:che1}}; on its own it is air.",
        rus: "Записанное как 汽, {{word:qi4}} значит «пар» в {{word:qi4}}-{{word:che1}}; само по себе — «воздух».",
      },
    },
  },
});
