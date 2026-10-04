import { word } from "../../lib/word.ts";

export default word("ta1", {
  term: "tā",
  hanzi: "他",
  pos: { eng: "pronoun", rus: "местоимение", zh: "代词" },
  definition: {
    eng: "he, she, it, they, them; syntactically genderless and number-fluid",
    rus: "он, она, оно, они; синтаксически не различает род и число",
    zh: "他，她，它，他们；在语法上不分性别、不分单复数",
  },
  necessity: {
    index: 5,
    eng: "Without it, you'd have to repeat a name every time: no \"he\", \"she\", \"it\", or \"they\".",
    rus: "Без него пришлось бы каждый раз повторять имя: нет «он», «она», «оно», «они».",
  },
  maps: "ona",
});
