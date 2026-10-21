import { word } from "../../lib/word.ts";

export default word("ti4", {
  term: "tì",
  hanzi: "替",
  pos: { eng: "preposition", rus: "предлог", zh: "介词" },
  definition: {
    eng: "instead of, for (in someone's place): {{word:ti4}} {{word:wo3}} {{word:qu4}}, goes in my place; {{word:ti4}} {{word:ni3}} {{word:shuo1}}, says it for you",
    rus: "вместо, за (кого-то): {{word:ti4}} {{word:wo3}} {{word:qu4}} — идёт вместо меня; {{word:ti4}} {{word:ni3}} {{word:shuo1}} — говорит за тебя",
    zh: "替，代替",
  },
  necessity: {
    index: 4,
    eng: "Instead of someone: {{word:ti4}} {{word:wo3}}. Without it, you can't act or speak in another's place.",
    rus: "Вместо кого-то: {{word:ti4}} {{word:wo3}}. Без него нельзя сделать или сказать что-то за другого.",
  },
  topics: ["words-before-nouns"],
  isA: ["preposition"],
  paraphrase: { forms: ["X {{word:bu4}} {{word:zuo4}}, {{word:wo3}} {{word:zuo4}}"], verdict: "clumsy" },
});
