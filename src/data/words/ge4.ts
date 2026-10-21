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
  topics: ["counting-words"],
  isA: ["counting-word"],
  maps: "",
  atom: {
    eng: "A counting word with no meaning of its own: it only joins a number to a thing, so nothing else can say it.",
    rus: "Счётное слово без собственного значения: оно только соединяет число с предметом, поэтому другим словом его не сказать.",
  },
});
