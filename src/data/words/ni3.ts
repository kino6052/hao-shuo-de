import { word } from "../../lib/word.ts";

export default word("ni3", {
  term: "nǐ",
  hanzi: "你",
  pos: { eng: "pronoun", rus: "местоимение", zh: "代词" },
  definition: { eng: "you", rus: "ты, вы", zh: "你，你们" },
  necessity: {
    index: 5,
    eng: "Without it, you can't talk to anyone: no \"you\" or \"your\".",
    rus: "Без него нельзя обратиться к собеседнику: нет «ты», «твой».",
  },
  topics: ["i-you-he-she"],
  isA: ["pronoun"],
  maps: "sina",
  atom: {
    eng: "There is no honest paraphrase: \"the person who listens to me\" could just as well be \"he\", so it needs a pointer to tell them apart.",
    rus: "Честного описания нет: «человек, который меня слушает» может быть и «он», поэтому нужно указание, чтобы их различить.",
  },
});
