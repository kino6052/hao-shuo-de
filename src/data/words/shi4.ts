import { word } from "../../lib/word.ts";

export default word("shi4", {
  term: "shì",
  hanzi: "是",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to be, copula link between subjects and identity predicates",
    rus: "быть, связка между подлежащим и именным сказуемым",
    zh: "是，连接主语与判断谓语的系动词",
  },
  necessity: {
    index: 5,
    eng: "Be: \"this is a person\". The simplest sentence can't be made without it.",
    rus: "Быть, являться: «это человек». Без него не построить самое простое предложение.",
  },
  maps: "",
  senses: {
    matter: {
      hanzi: "事",
      eng: "matter, thing to do",
      rus: "дело",
      compounds: ["mei2 shi4", "shi4 shi2"],
      why: {
        eng: "Written 事, {{word:shi4}} means matter, thing to do in {{word:mei2}}-{{word:shi4}}; on its own it is be.",
        rus: "Записанное как 事, {{word:shi4}} значит «дело» в {{word:mei2}}-{{word:shi4}}; само по себе — «быть».",
      },
    },
  },
});
