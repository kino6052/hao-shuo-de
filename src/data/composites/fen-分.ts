import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 615,
  phase: 2,
  zh: "分",
  py: "fēn",
  en: "minute; part; divide",
  ru: "минута; часть; делить",
  pos: "classifier",
  hsd: ["{{word:fen1}}", "{{word:bu4}}-{{light:fen1}}"],
  tts: ["分", "部分"],
  literal: "part",
  fit: "word",
  topics: ["counting-words"],
  isA: ["measure-unit"],
  note: "A minute is a small part of an hour, xiǎo-shí.",
  examples: [
    {
      pinyin: "{{Word:xian4}}-{{word:zai4}} {{word:shi4}} {{word:san1}}-{{word:dian3}} {{word:wu3}}-{{word:fen1}}.",
      hanzi: "现在是三点五分。",
      en: "It's five past three.",
      ru: "Сейчас пять минут четвёртого.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shi4}} {{word:shu1}}-{{word:de}} {{word:yi1}}-{{word:bu4}}-{{light:fen1}}.",
      hanzi: "这个是书的一部分。",
      en: "This is a part of the book.",
      ru: "Это часть книги.",
    },
  ],
});
