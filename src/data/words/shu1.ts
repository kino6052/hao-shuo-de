import { word } from "../../lib/word.ts";

export default word("shu1", {
  term: "shū",
  hanzi: "书",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "book: {{word:kan4}} {{word:shu1}}, read; {{word:xie3}} {{word:shu1}}, write a book",
    rus: "книга: {{word:kan4}} {{word:shu1}} — читать; {{word:xie3}} {{word:shu1}} — писать книгу",
    zh: "书",
  },
  necessity: {
    index: 4,
    eng: "Books and reading ({{word:kan4}} {{word:shu1}}): before it, a book was \"the written thing\".",
    rus: "Книги и чтение ({{word:kan4}} {{word:shu1}}): раньше книга была «написанной вещью».",
  },
  paraphrase: {
    forms: [
      "{{word:xie3}} {{word:le}} {{word:hen3}} {{word:duo1}} {{word:zi4}}, {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    ],
    verdict: "clumsy",
  },
});
