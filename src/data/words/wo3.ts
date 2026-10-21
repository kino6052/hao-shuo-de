import { word } from "../../lib/word.ts";

export default word("wo3", {
  term: "wǒ",
  hanzi: "我",
  pos: { eng: "pronoun", rus: "местоимение", zh: "代词" },
  definition: { eng: "I, me, we, us", rus: "я, меня, мы, нас", zh: "我，我们" },
  necessity: {
    index: 5,
    eng: "Without it, you can't talk about yourself: no \"I\", \"me\", or \"my\".",
    rus: "Без него нельзя говорить о себе: нет «я», «меня», «мой».",
  },
  topics: ["pointers"],
  isA: ["pronoun"],
  maps: "mi",
  atom: {
    eng: "You learn it by pointing at yourself; any other way of saying \"I\" already needs a pointer.",
    rus: "Его усваивают, показывая на себя: любой другой способ сказать «я» уже требует указателя.",
  },
});
