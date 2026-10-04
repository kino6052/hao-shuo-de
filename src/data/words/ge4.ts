import { word } from "../../lib/word.ts";

export default word("ge4", {
  term: "gè",
  hanzi: "个",
  pos: { eng: "measure word", rus: "счётное слово", zh: "量词" },
  definition: {
    eng: "universal classifier; mandatory interface between numbers/demonstratives and nouns",
    rus: "универсальный классификатор; обязательное связующее звено между числительными/указательными местоимениями и существительными",
    zh: "通用量词；数词/指示词与名词之间的强制连接件",
  },
  necessity: {
    index: 5,
    eng: "Without it, a number or {{word:zhe4}} can't stand before a noun: \"this one\", \"two people\".",
    rus: "Без него число или {{word:zhe4}} не могут стоять перед существительным: «этот», «два человека».",
  },
  maps: "",
});
