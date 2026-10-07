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
        eng: "Written 新, {{word:xin1}} means new. As a thing it is the heart ({{word:wo3}}-{{word:de}} {{word:xin1}}); describing a thing it is new: {{word:xin1#new}}-{{word:de}} {{word:shu1}}, a new book, and {{word:xin1}}-{{word:nian2}}, the New Year.",
        rus: "Записанное как 新, {{word:xin1}} значит «новый». Как вещь это сердце ({{word:wo3}}-{{word:de}} {{word:xin1}}); как описание вещи — «новый»: {{word:xin1#new}}-{{word:de}} {{word:shu1}} — новая книга, {{word:xin1}}-{{word:nian2}} — Новый год.",
      },
      compounds: ["xin1 nian2"],
      alone: true,
    },
  },
});
