import { word } from "../../lib/word.ts";

export default word("xin1", {
  term: "xīn",
  hanzi: "心",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "heart, mind; {{word:kai1}}-{{word:xin1}}, \"happy\"; {{word:xiao3}}-{{word:xin1}}, \"careful\"; {{word:fang4}}-{{word:xin1}}, \"don't worry\"",
    rus: "сердце, душа; {{word:kai1}}-{{word:xin1}} — «радостный»; {{word:xiao3}}-{{word:xin1}} — «осторожно»; {{word:fang4}}-{{word:xin1}} — «не волнуйся»",
    zh: "心",
  },
  necessity: {
    index: 3,
    eng: "The heart: feelings live here ({{word:kai1}}-{{word:xin1}}, happy; {{word:xiao3}}-{{word:xin1}}, careful).",
    rus: "Сердце: в нём живут чувства ({{word:kai1}}-{{word:xin1}} — радостный, {{word:xiao3}}-{{word:xin1}} — осторожный).",
  },
  senses: {
    new: {
      hanzi: "新",
      eng: "new",
      rus: "новый",
      why: {
        eng: "Written 新, {{word:xin1}} means new in {{word:xin1}}-{{word:nian2}} (New Year); on its own it is heart.",
        rus: "Записанное как 新, {{word:xin1}} значит «новый» в {{word:xin1}}-{{word:nian2}} (Новый год); само по себе — «сердце».",
      },
      compounds: ["xin1 nian2"],
    },
  },
});
